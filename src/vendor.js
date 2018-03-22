/*
* This file contains reference to the vendor libraries
* we're using in this project. This is used by webpack in
* the production build only. A separate bundle for vendor code is useful
* since it is unlikely to change as often as the application's code
* So all the libraries we reference here will be written to the vendor.js so they can be catched untill one of then change.
* So basically, this avoids of customers having to download a huge js file anymore a line of code changes.
* They don't have to download vendor.js when a vendor library changes
* which should be less frequent.
* Any files that aren't referenced here will be bundled into main.js for production build.
*
* */

/* eslint-disable no-unused-vars*/

import fetch from 'whatwg-fetch';
