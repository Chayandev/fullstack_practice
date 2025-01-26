### What is NodeJs
- **Node Js** is  a Open-Source , cross platform(Multiple os)/server-side `Javascript runtime`.
- Allows to run Javascript on machine or server
- Built on the V8 Javascript engine for speed
- Robust on the ecosystem with npm.

#### What is Javascript Runtime Environment?
JavaScript runtime environment refers to the environment where your javaScript code runs.

**In browser:** JavaScript typically runs in the browser.

- With Node.Js allows JavaScript to run outside the brwser, on the server.
- It provides tools to interact with syste,, like:
- File System (read/write files)
- Network (Hnadle HTTP requests).
- Database (Connext to database like MongoDb or MYSQL).

#### Why is NOde.js sepcial as Runtime?
**V8 engine:** Node.js uses Google Chrome's V8 engine to compile JavaScript into machine code , making it lightning-fast.
**Built-in APIs:** Node.js comes with built-in APIs (Like fs for file system or http for servers) so you can build powerful applications without extra libraries.

#### Node.js is Lnaguage or a Framework?
Node.js is not a programming language or a framework but rather a JavaScript runtime environment that allows developers to run JavaScript outside of a browser.

### REPAl(Read-Eval-Print-Loop)
- It stands for Read-Eval-Print-Loop  or Read, Evalute,Print, and Loop. it's an interactive programming environment that allows you to execute JavaScript code one statement at a time.

- **Read:** The REPL reads the user's input (a single line or multiple lines of code) ans parses it into a data structure that the JavaScript engine can understand.
- **Eval(Evaluate):** The parsed input is evaluated(executed) by the JavaScript engine. IF the input is a valid expression, the REPL computed the result.
- **Print:** The result of the evaluated expression is printed back to the console so the user can see the output
- **Loop:** The process then loop back, waiting , for the next input and continues the process.
---
`Javascirpt behave diffrently in Node.js and Browser`

- In browser we can access the Window object but not in Node.js

> window
Uncaught ReferenceError: window is not defined
> document
Uncaught ReferenceError: document is not defined
- In Node.js, there's no window or document, Beacuse Node.js runs outside the browser-it dose'nt deal with the DOM or browser-specific APIs.
- Instead, Node.js has a global object.It's the equivalent of window in the browser but designed for a server-side environment.

`globalThis is new feature introduced in ECMAScript 2020(ES11) that provides a standard way to access the global object in any JavaScript environment`

`we can use this in browser/nodejs env`

`just as React is all about component similarly node is all about moduel`

### Node.js Module
**self-contained code unit:**
- Each file in Node.js is treated as a separate module.
- Variables, fucntion , or objects defined in one file are not accessible in another file by default unless you explicitly export them.
**Encapsulation:**
- Ndoe.js uses the commonJs module system(module.export and require) to ensure the code in one file dose not polute or interfere with the global scope.
- This makes your code moduler, maintainable,and easier to debug.

#### CommonJs (bydefault)
- `module.exports=name_of_fucntion ( we can use this for single export , and in a file the last export using this will be eligible to export, it will override any previous exports.property assignments)`
- `module.exports={} (for multiple export)`
- `const name=require("relative_path")`
- `const {a,b}=require("relative_path)`

### Path Modules- NodeJS
In Node.js the path module provide utilities for working with file and directory paths.It's a built in  module, so no need to install anu external packages to use it.

- **__filename:** Provides the absolute path of the currently executing file.
- **__dirname:** Provides the absolute directory path pf the currently executing file.

` **Note, these are only avialabe in commmonjs** `

# What is package.json
- package.json is a configuration file used in Node.js projects.
- It contains metadata about the project and information on project dependencies.
- Go to your project folder and use npm init to initialize the project or to create package.json
- Name, Version, Dscirption ("name","version","description"):
-- Specific the name and version of the project.
-- Helps uniquely identify and version the project.
- Entry Point ("main"):
-- Specific the main entry point file for the application.
-- The file executed when the application starts.


### Nodemon
Nodemon is npm package which helps to restart server automatically when there is nay change in the code.

`Alternative is --watch by node.js`

# NPM
- npm is a popular package manager which comes bundle with Node.js
- It is a CLI toools used to install, update and remove external packages.
- You can also create your own package and publish it on npmjs.com registry
- There are alternative Node.js package managers registry like JSR , whcih we will discuss in future.

## NPM commands
- Before following these commands , make sure you initialized your project.
- npm install <package-name>
-- Alternative, you can use npm i
- After installion, you will notice a node_modules folder and package-lock.json sure to include is what stores all the installed packages. It's usually heavy, so mae sure to include it in .gitignore so that it won't get pushed on version controll and avoid it while sharing with others.
- You will notice that there are some packages which you didn't install, it's becuase the package that you installed depend on those third-party packages.
- package-lock.json includes exact version of all packages that you install. IT makes sure to preven tbreaking chanegs in newer version of package.
- While importing, first Node.js checks for cure modules, then files or folders , and at last looks inside node_modules.
- `npm list` is used to see the list of all the version of installed package.
- `npm list -a` to view in detail of the dependencies.

### Semantic Versioning System
- `1.0.0` where 1 is the **Major Verision** ( Breaking change,e.g. a rebrand, feature set added)
- next 0 is the **Minor Version** (Non-breaking noteworthy change, e.g new component, updated styles).
- Last 0 is **Patch Version** (Small request or bug fix, e.g. update or edit existing elements)

- `npm outdated` to see the outdated packages in the project
- `npm update` to update the packages ( or specify hte name of package to only update that only). (this will update the package in package-lock.json not in package.json)
- To do this after update we haev a command `npx npm-check-updates -u`.
- `npm remove` to remove the package from project

##### The behavior you're describing happens because npm update <package-name> updates the installed version of the package in node_modules and updates the package-lock.json file to reflect the new version, but it does not update the version number in package.json unless specific conditions are met.

- Running npm update express will update express to the latest compatible version within the ^4.x.x range (e.g., 4.20.0), but the version in package.json stays as ^4.18.2 because the version range hasn't changed.
- To Always Update Both Files: Use this pattern:

```bash
npm install <package-name>@latest
```

## Global packages
- npm is itself a global package.
- The package which is installed globally not in locally to the current project 

### How we do this
```bash
npm i -g package-name
```

### Dev Dependency
- Development dependencies are the packages that aren't needed for fucntioning of your project in production.
- This canbe for formatting,linting,testing and so on.
- If you use `npm instal --production`, those epackages won't be installed, but they will be installed if uou don't use production falg.
- `npm install -D eslint `
 -- This will install eslint as a dev dependency
 -- You will see it in separate property inside package.json named "devDependencies"

# Node.js Elements
**V8:** 
-Google's high-performance javaScript engine that compile JavaScript into machien code.
**Libuv:** 
- A C library that provides Node.js with cross-platform support for asynchronous I/O operations,file system,networking and more.
- Includes the event loop and thread pool , enabling non-bloackign task like file reading, reading netorkign and timers.

# Node.js: Behind the Scenes

## Main Thread

- **Initialize Program**: Starts the Node.js runtime.
- **Top-level Code**: Executes all synchronous code sequentially.
- **Import Modules**: Loads and processes required modules.
- **Register Event Callbacks**: Prepares callback functions for asynchronous operations.
- **Start Event Loop**: Begins the event loop to handle asynchronous operations.

---

## Thread Pool

- **Default Size**: The thread pool has 4 threads by default (can be configured).
- **Purpose**: Offloads heavy tasks from the main thread to avoid blocking.
- **Tasks Offloaded**:
  - File system operations (e.g., reading/writing files).
  - Cryptographic functions (e.g., hashing, encryption).
  - Compression (e.g., zlib operations).

---

## Key Concepts

### Event Loop and Thread Pool (Powered by Libuv)

- The **event loop** coordinates asynchronous operations and manages tasks.
- Heavy or resource-intensive tasks are handed over to the **thread pool**.
- Once a heavy task is completed in the thread pool, the result is returned to the event loop, which schedules the callback for execution on the **main thread**.

### Flow Overview

1. The **main thread** handles small, synchronous tasks.
2. Heavy tasks are **offloaded** to the thread pool by the event loop.
3. Once completed, results are queued back into the event loop.
4. The **event loop** schedules the corresponding callback to run on the main thread.

---

This architecture allows Node.js to efficiently handle both synchronous and asynchronous operations without blocking the main thread.

mark dowm format to paste in readme file


# Express.js
- Express.js is a minimal and felxible web appplication framework for Node.js based on http module.
- It simplifies routing,middleware ahnd handling HTTP requests in NOde.js applications.
- It is an extremly popular with wide community support
- Alternaties: Fastify,Koa,Nest.js,Elysia.js

### Environment Variable
- `.env` is created to store the environment variables, which are basically to keep the secrates in separate file from codebase.
- To access the environment varible in the codebase from the `.env` file we need use `process.env.NAME_OF_VARIBEL`.
- The process is a global object available in Node.js

### ZOD
- You might have many environment variables in you rproject, and it's important to validate each one to ensure thay are all present and correct.
- You can either handle this manually or , preferably, use a validation librabry liek ZOD.
- ZOD is a TypeScript-first schema decalration and validation library that allows you to define and validate the structure of your data easily.
- We will  be using ZOD for various validation in the future , so we'll alos use it here to validate envirotnment variables.
