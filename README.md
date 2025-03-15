# Cypress POC for SW color tiles solution
- This is a very limited solution using a limited JSON data sample to show how it may work if needed.
- It may be possible to seed fixture data, i.e., color details paths, from an outside source.
- This test can be run headless or using the Cypress UI test runner
- If ran headless, it will generate a screenshot of failures or videos if enabled in config.
- DOES contain a test failure to show how that works with screenshot


## Setup
1. Install Node.js
2. Run `npm install` from project root
3. Must run `npm run cypress:open` for initial setup
4. If prefered later, run `npm run cypress:run` for headless
