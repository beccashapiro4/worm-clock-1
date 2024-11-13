# worm-clock-1
 This is a clock made out of worms.

# To Deploy

 1. Run `npm run build` --> updates the `/dist` folder with a new production build
 2. Run `npm run preview` --> test new production build on local server
 3. Commit new `/dist` folder to Github repo
 4. In cPanel: pull changes from Github & Depoy

# Notes
 - Do **not** add comments to the `vite.config.js` file -- comments in here do not break local production build but do *break the build hosted by the remote server*! (aka, the page will show up BLANK online)
