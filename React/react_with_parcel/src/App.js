/***
 * Parcel do this : -
 * HMR-Hot Module Replacmenttele
 * FIle watcher algorihtm c++
 * BULDING
 * MINIFY
 * Cleaning out code
 * DEV abd Production Build
 * Super Fast build ALogirthm
 * Image Optimization
 * Caching while developemtn
 * Compression
 * Compatble wtih older version of browser
 * HTTPS on Dev
 * port Number
 * Consistent HAshing ALgorithm
 * Zero COnfig
 * Transitive Dependecies (Transitive dependencies occur in a dependency management system when a project depends on a library (A), and that library itself depends on another library (B). In this case, library B is a transitive dependency of your project.)
 *Like Parcel is a Bundler and its depends on teh ther library
 */

import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = React.createElement(
  "h1",
  {
    id: "title",
  },
  "Heading 1"
);

const container = React.createElement(
  "div",
  {
    id: "container",
  },
  [heading1]
);

console.log(heading1);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);
