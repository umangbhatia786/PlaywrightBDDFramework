# Playwright Cucumber.js Automation Framework

## Overview
This project is an end-to-end automation framework for an ecommerce web application, built using [Playwright](https://playwright.dev/) and [Cucumber.js](https://cucumber.io/docs/installation/javascript/). It follows the Page Object Model (POM) design pattern for maintainability and scalability, and supports BDD-style feature files for clear, business-readable test cases.

---

## Architecture

```
┌─────────────────┐    Gherkin Steps    ┌─────────────────┐
│ Feature Files   │ ──────────────────► │ Step Definitions│
│   (.feature)    │                     │                 │
└─────────────────┘                     └─────────────────┘
                                                 │
                                                 │ Calls
                                                 ▼
                                        ┌─────────────────┐
                                        │  Page Objects   │
                                        │                 │
                                        └─────────────────┘
                                                 │
                                                 │ Uses
                                                 ▼
                                        ┌─────────────────┐
                                        │  Playwright API │
                                        │                 │
                                        └─────────────────┘

┌─────────────────┐                     ┌─────────────────┐
│     Utils       │ ──────────────────► │  Page Objects   │
│                 │                     │                 │
└─────────────────┘                     └─────────────────┘

┌─────────────────┐    Hooks/Context    ┌─────────────────┐
│ Support Files   │ ◄─────────────────► │ Step Definitions│
│                 │                     │                 │
└─────────────────┘                     └─────────────────┘
                                                 │
                                                 │ Generates
                                                 ▼
                                        ┌─────────────────┐
                                        │Reports &        │
                                        │Screenshots      │
                                        └─────────────────┘
```

- **Feature Files**: Written in Gherkin syntax, describe user scenarios and acceptance criteria.
- **Step Definitions**: Map Gherkin steps to JavaScript code, interact with page objects.
- **Page Objects**: Encapsulate UI interactions for each page/component.
- **Support Files**: Hooks for setup/teardown, context management, and reporting.
- **Utils**: Utility functions for API calls, data setup, etc.
- **Reports & Screenshots**: HTML reports and screenshots for failed steps.

---

## Project Structure

```
PlayWrightAutomation/
├── features/
│   ├── EcomTest.feature
│   ├── ErrorValidations.feature
│   ├── step_definitions/
│   │   └── EcomSteps.js
│   └── support/
│       └── hooks.js
├── pageobjects/
│   ├── POManager.js
│   ├── LoginPage.js
│   ├── DashboardPage.js
│   ├── CartPage.js
│   ├── OrdersReviewPage.js
│   └── OrdersHistoryPage.js
├── utils/
│   ├── APiUtils.js
│   └── cucumber-to-allure.js
├── screenshot/
├── test_reports/
│   ├── cucumber_report.html
│   └── cucumber_report.json
├── allure-results/
├── allure-report/
├── cucumber.js
├── package.json
├── playwright.config.js
└── ...
```

---

## Getting Started

### 1. Clone the Repository
```sh
git clone <REPO_URL>
cd PlayWrightAutomation
```

### 2. Install Dependencies
```sh
npm install
```

### 3. Install Cucumber.js
```sh
npm install --save-dev @cucumber/cucumber
```

### 4. Install Playwright Browsers
```sh
npx playwright install --with-deps
```

---

## Running Tests

### Run All Tests
```sh
npm run test:cucumber
```

### Run Tests by Tag (Default: @Regression)
```sh
npx cucumber-js --tags "@Regression"
```

### Run Tests in Parallel
```sh
npx cucumber-js --parallel 4 --tags "@Regression"
```
_Change `4` to the desired number of parallel workers._

### Generate Reports

#### HTML Report
After running tests, open the report at `test_reports/cucumber_report.html`.

#### Allure Report (Recommended)
```sh
# Run tests and generate Allure report in one command
npm run test:allure

# Or step by step:
npm run test:cucumber        # Run tests
npm run allure:generate      # Convert JSON to Allure format & generate report
npm run allure:open          # Open Allure report in browser
```

The Allure report provides:
- ✅ **Rich Visual Interface**: Beautiful charts, graphs, and detailed test results
- ✅ **Test History**: Track test trends over time
- ✅ **Step-by-Step Details**: See each test step with timing information
- ✅ **Screenshots**: Automatic screenshot capture on failures
- ✅ **Tags & Categories**: Filter tests by tags and features

---

## Key Features
- **BDD with Cucumber.js**: Write tests in plain English using Gherkin syntax.
- **Playwright Integration**: Fast, reliable browser automation across Chrome, Firefox, and Safari.
- **Page Object Model**: Clean separation of test logic and UI interactions.
- **Hooks & Context**: Powerful setup/teardown and context sharing between steps.
- **Automatic Screenshots**: Captures screenshots on step failure for debugging.
- **Dual Reporting**: Both HTML and Allure reports for comprehensive test analysis.
- **Allure Integration**: Rich, interactive reports with charts, trends, and detailed test insights.
- **Parallel Execution**: Speed up test runs with parallel workers.
- **Tag-based Filtering**: Run specific test suites using tags like @Regression.

---

## Customization & Extensibility
- Add new feature files in `features/`.
- Add new page objects in `pageobjects/`.
- Add utility functions in `utils/`.
- Update hooks in `features/support/hooks.js` for custom setup/teardown.

---

## Troubleshooting
- **Dependencies**: Ensure all dependencies are installed (`npm install`).
- **Browsers**: If browsers are missing, run `npx playwright install --with-deps`.
- **Flaky Tests**: Use the `--retry` option (configured in `cucumber.js`).
- **Failed Tests**: Check `screenshot/` and `test_reports/` for debugging information.
- **Allure Issues**: If Allure reports are empty, ensure tests ran successfully and JSON was generated.
- **NPM Registry**: If getting authentication errors, ensure using public registry for package installation.

---

## Useful Commands
| Command | Description |
|---------|-------------|
| `npm run test:cucumber` | Run tests with @Regression tag |
| `npm run test:allure` | Run tests + generate & open Allure report |
| `npm run allure:generate` | Convert Cucumber JSON to Allure format and generate report |
| `npm run allure:open` | Open existing Allure report in browser |
| `npx cucumber-js --tags "@tag"` | Run tests with a specific tag |
| `npx cucumber-js --parallel N` | Run tests in parallel (N workers) |
| `npx playwright install --with-deps` | Install Playwright browsers |
| `npm run convert:allure` | Convert Cucumber JSON to Allure format only |

---

## License
MIT

---

## Authors
- [Umang Bhatia](https://www.linkedin.com/in/umang-bhatia-qa/)
