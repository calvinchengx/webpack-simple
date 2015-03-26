Simple webpack-react 
========================

1. Clone
2. `npm install`
3. `npm start`
4. Visit http://localhost:8080 (or http://192.168.x.x:8080) on multiple devices
5. Edit components in the components directory 
6. Watch the page updates itself across multiple devices

---

This demo opens up a "backend" server that serves index.html, which can be any web application in the real-world scenario. We use `--content-base-target` option (which is never documented and [will be deprecated soon](https://github.com/webpack/webpack-dev-server/pull/127)) to proxy requests that it can't handle to our backend server.

It is worth noting that we use neither the `--inline` option nor the `<script src="http://localhost:8080/webpack-dev-server.js"` here, because in the both case the socket.io client in the webpack-dev-server runtime tries to connect to localhost, even on 'remote' devices that webpack-dev-server does not run on. Instead, we specify 'webpack-dev-server/client?/' to be the output entry in order to instruct the webpack-dev-server runtime to connect to "/", which is hostname-agnostic and works across multiple devices.

Implemented Features and TODOs
=================================

Here's a list of features I have implemented and I am intending to implement

- [x] webpack, web-dev-server and webpack hot module reload (HMR)
- [x] reactjs, client-side rendered (CSR)
- [x] nodejs express backend and node-jsx for isomorphic server-side rendered (SSR) reactjs
- [x] react-router for frontend and backend routing 
- [x] express static middleware for serving static files from our backend, so avoiding flash-of-unstyled-content (FOUC)
- [x] nodemon to reload nodejs express server on backend-related file changes
- [x] susy sass framework, using sassc (libsass) compiler, sass-loader, css-loader and style-loader
- [x] react-hot-loader 
- [ ] static site generation capability with markdown and markdown-to-html compiler
- [ ] example nginx config, nodejs systemd service files
- [ ] nodejs express logging SSR errors with morgan
- [ ] unit testing
- [ ] blackbox testing
- [ ] using web tokens for logging in
- [ ] flux code architecture for implementing new features
- [ ] superagent and CORS 
- [ ] forms, form validation with formsy
- [ ] relay and graphql
- [ ] project site design
- [ ] responsive layout with susy 
