# Cypress Abort Controller

Cypress doesn't notify the tests that the request has been aborted. and when logging the status of the request, it's just "received" with no response.

How to check if a request has been aborted ?

## Setup

Clone: `git clone git@github.com:Alvai/cypress-abort-controller.git`

Install deps: `yarn install`

Start app: `yarn dev`

Start server: `cd server && node index.js`

Start cypress: `yarn cy:open`



