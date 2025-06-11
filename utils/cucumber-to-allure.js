const fs = require('fs');
const path = require('path');

function convertCucumberToAllure() {
  const cucumberJsonPath = 'test_reports/cucumber_report.json';
  const allureResultsDir = 'allure-results';

  // Create allure-results directory if it doesn't exist
  if (!fs.existsSync(allureResultsDir)) {
    fs.mkdirSync(allureResultsDir, { recursive: true });
  }

  // Read Cucumber JSON
  if (!fs.existsSync(cucumberJsonPath)) {
    console.error('Cucumber JSON file not found:', cucumberJsonPath);
    return;
  }

  const cucumberData = JSON.parse(fs.readFileSync(cucumberJsonPath, 'utf8'));

  // Convert each feature to Allure format
  cucumberData.forEach((feature, featureIndex) => {
    feature.elements.forEach((scenario, scenarioIndex) => {
      const allureResult = {
        uuid: generateUUID(),
        historyId: `${feature.name || 'feature'}-${scenario.name}`,
        fullName: `${feature.name}: ${scenario.name}`,
        name: scenario.name,
        status: getScenarioStatus(scenario),
        stage: 'finished',
        start: Date.now() - 10000, // Mock start time
        stop: Date.now(),
        labels: [
          {
            name: 'feature',
            value: feature.name || 'Unknown Feature'
          },
          {
            name: 'story',
            value: scenario.name
          },
          {
            name: 'framework',
            value: 'cucumber'
          }
        ],
        steps: convertSteps(scenario.steps)
      };

      // Add tags as labels
      if (scenario.tags) {
        scenario.tags.forEach(tag => {
          allureResult.labels.push({
            name: 'tag',
            value: tag.name.replace('@', '')
          });
        });
      }

      // Write individual test result file
      const fileName = `${allureResult.uuid}-result.json`;
      fs.writeFileSync(
        path.join(allureResultsDir, fileName),
        JSON.stringify(allureResult, null, 2)
      );
    });
  });

  console.log('✅ Cucumber JSON converted to Allure format');
}

function getScenarioStatus(scenario) {
  const stepStatuses = scenario.steps
    .filter(step => !step.hidden)
    .map(step => step.result.status);
  
  if (stepStatuses.includes('failed')) return 'failed';
  if (stepStatuses.includes('pending')) return 'broken';
  if (stepStatuses.includes('skipped')) return 'skipped';
  return 'passed';
}

function convertSteps(steps) {
  return steps
    .filter(step => !step.hidden)
    .map(step => ({
      name: step.name,
      status: step.result.status === 'passed' ? 'passed' : 'failed',
      stage: 'finished',
      start: Date.now() - 5000,
      stop: Date.now()
    }));
}

function generateUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0;
    const v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

// Run the conversion
convertCucumberToAllure(); 