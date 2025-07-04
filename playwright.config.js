// @ts-check
const { devices } = require('@playwright/test');

const config = {
  testDir: './tests',
  /* Maximum time one test can run for. */
  timeout: 60 * 1000,
  expect: {
  
    timeout: 5000
  },
  
  reporter: 'html',

  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',
    viewport: null,
    launchOptions: {
      args: ['--start-maximized'], // Maximize browser window on launch
    },
    headless: true,
    screenshot: 'on',
    browserName: 'chromium',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'retain-on-failure'
  },

  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */

//   projects: [
//     {
//       name:'chrome',
//   use: {

//     browserName : 'chromium',
//     headless : false,
//     viewport : {width: 720, height: 720},
//     screenshot : 'on',
//     trace : 'on',//off,on
//     },
//   },
//   {
//     name:'webkitprofile',
// use: {

//   browserName : 'webkit',
//   headless : false,
//   screenshot : 'on',
//   trace : 'on',//off,on
//   ...devices['iPhone 11']
//   },
// }
// ]


};

module.exports = config;
