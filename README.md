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
│   └── APiUtils.js
├── screenshot/
├── test_reports/
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
npx cucumber-js
```

### Run Tests by Tag
```sh
npx cucumber-js --tags "@Regression"
```

### Run Tests in Parallel
```sh
npx cucumber-js --parallel 4
```
_Change `4` to the desired number of parallel workers._

### Generate HTML Report
After running tests, open the report at `test_reports/report.html`.

---

## Key Features
- **BDD with Cucumber.js**: Write tests in plain English.
- **Playwright Integration**: Fast, reliable browser automation.
- **Page Object Model**: Clean separation of test logic and UI interactions.
- **Hooks & Context**: Powerful setup/teardown and context sharing.
- **Automatic Screenshots**: Captures screenshots on step failure.
- **HTML Reporting**: Visual test results for easy analysis.
- **Parallel Execution**: Speed up test runs with parallel workers.

---

## Customization & Extensibility
- Add new feature files in `features/`.
- Add new page objects in `pageobjects/`.
- Add utility functions in `utils/`.
- Update hooks in `features/support/hooks.js` for custom setup/teardown.

---

## Troubleshooting
- Ensure all dependencies are installed (`npm install`).
- If browsers are missing, run `npx playwright install --with-deps`.
- For flaky tests, use the `--retry` option (see `cucumber.js`).
- Check `screenshot/` and `test_reports/` for debugging failed tests.

---

## Useful Commands
| Command | Description |
|---------|-------------|
| `npx cucumber-js` | Run all tests |
| `npx cucumber-js --tags "@tag"` | Run tests with a specific tag |
| `npx cucumber-js --parallel N` | Run tests in parallel (N workers) |
| `npx playwright install --with-deps` | Install Playwright browsers |

---

## License
MIT

---

## Authors
- [Umang Bhatia](https://www.linkedin.com/in/umang-bhatia-qa/)
