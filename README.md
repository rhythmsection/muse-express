## Table of Contents

- [What's Happening Here?](#whats-up)
- [About Me](#about-me)
- [Create React App](#create-react-app)


## What's Happening Here?

[MUSE](https://url-muse.firebaseapp.com/) is a small, phishing-aware, single-page url-shortening app.
It uses a React/redux/node.js stack built on the Firebase database and cloud function hosting.

If you click [here](https://url-muse.firebaseapp.com/), it will take you to a Firebase hosted deployment
of the app, where you can submit a url and receive a (...relatively) shortened link in return.

The app also uses Phishtank's API to check to see if the link you are trying to shorten is a common phishing
scam link, and won't let you use the service to do such terrible, terrible things (and won't forget that you tried).

After verification, you'll receive your new link as well as some handy formats to copy straight to your clipboard.

Enjoy!

---
**NOTE**

This is a duplicate of another [Github Repo: MUSE](https://github.com/rhythmsection/muse) which hosts the firebase deployed app. You can go there for a more detailed documentation of the app. This repo holds a variation on the same app, except built on a node.js/express/PostgreSQL backend for a little spice and variety.

---


## About Me

I'm K. McClure and you can find out more about me [here](http://www.kxmcclure.com).


## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

You can find the most recent development guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
