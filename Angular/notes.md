# Angular 

## Installing Angular CLI

To install the Angular CLI globally, use the following command:

```bash
npm install -g @angular/cli
```

To create a new Angular project, use:

```bash
ng new first-ng-app
```

### Using `--dry-run` (or `-d`)

The `--dry-run` flag simulates an Angular CLI command without modifying the filesystem. It previews the actions (e.g., files to be created or modified) and potential errors without executing the command.

**Example:**
```bash
ng new first-ng-app --dry-run
```

This command displays the list of files and steps that would be performed without creating the project.

## AngularJS vs. Angular

**AngularJS** and **Angular** are two distinct frameworks developed by Google for building web applications. They differ significantly in architecture, language, performance, and features.

| Aspect                  | AngularJS                              | Angular (2+)                           |
|-------------------------|----------------------------------------|---------------------------------------|
| **Release Year**        | 2010                                   | 2016                                  |
| **Core Language**       | JavaScript                            | TypeScript (superset of JavaScript)   |
| **Architecture**        | Model-View-Controller (MVC)           | Component-based                      |
| **Data Binding**        | Two-way data binding                  | One-way and two-way data binding     |
| **Rendering**           | Real DOM                              | Virtual DOM, server-side rendering   |
| **Performance**         | Slower (uses digest cycle)            | Faster (optimized change detection, AOT compilation) |
| **Mobile Support**      | Limited, not mobile-friendly          | Mobile-first, supports PWAs and native apps |
| **Dependency Injection**| Simpler, less flexible                | Advanced, hierarchical system        |
| **CLI Support**         | Minimal                               | Powerful Angular CLI for scaffolding |
| **Suitability**         | Smaller, legacy projects              | Modern, large-scale, mobile-friendly apps |

### Key Differences Explained

- **Language & Syntax**: AngularJS uses plain JavaScript, while Angular leverages TypeScript for better tooling, type safety, and scalability.
- **Architecture**: AngularJS follows the MVC pattern, which is less modular. Angular’s component-based architecture promotes reusable, maintainable code.
- **Performance**: Angular offers superior performance with optimized change detection, ahead-of-time (AOT) compilation, and tree-shaking for smaller bundle sizes.
- **Mobile & Modern Features**: Angular supports progressive web apps (PWAs) and native apps, making it suitable for modern platforms, while AngularJS is primarily web-focused.
- **Learning Curve**: AngularJS is simpler for JavaScript developers, but Angular’s use of TypeScript and RxJS introduces a steeper learning curve with more powerful features.
- **Legacy vs. Modern**: AngularJS is suited for maintaining legacy applications, while Angular is the go-to choice for new, scalable, and future-proof projects.

### Summary

AngularJS is a JavaScript-based framework with an MVC architecture, ideal for simpler or legacy web applications. Angular (2+), built with TypeScript, is a modern, high-performance framework designed for large-scale, mobile-friendly, and complex applications with robust tooling and features.


# Please Explain the tsconfig.json vs tsconfig.app.json vs tsconfig.spec.json in agular

In Angular, the three configuration files — **tsconfig.json**, **tsconfig.app.json**, and **tsconfig.spec.json** — each serve distinct purposes in managing TypeScript settings for different parts of your project.

## **tsconfig.json**

- **Role:** The **base configuration** file for TypeScript in your Angular workspace.
- **Purpose:** Contains general TypeScript settings (compiler options) that are shared across the entire project.
- **Usage:** Acts as the foundational config for all other, more specific TypeScript configuration files in your workspace.
- **Behavior:** Extended by other config files using the `"extends": "./tsconfig.json"` property.

> "The root tsconfig.json file specifies the base TypeScript and Angular compiler options that all projects in the workspace inherit."[^4][^7]

## **tsconfig.app.json**

- **Role:** The **application-specific TypeScript configuration**.
- **Purpose:** Customizes TypeScript settings for compiling your main Angular application code (everything inside `src/`, excluding tests).
- **Usage:** Extends the base `tsconfig.json`, allowing you to override or add options just for the app.
- **Behavior:** Used by Angular CLI when you run build commands for your app (e.g., `ng build`). It inherits settings from the root tsconfig but can have its own includes, excludes, output directories, etc.

> "`tsconfig.app.json` is specific to application builds and will override the settings in `tsconfig.json`. For instance, it sets up what files are part of the Angular app and what extra types to include."[^1][^7]

## **tsconfig.spec.json**

- **Role:** The **unit test configuration file**.
- **Purpose:** Configures TypeScript settings for your test files (typically `*.spec.ts`).
- **Usage:** Extends the base `tsconfig.json`, just like `tsconfig.app.json`, but tuned for the needs of your testing environment and includes relevant test files and helper types (e.g., Jasmine).
- **Behavior:** Used by the Angular CLI when running testing commands (e.g., `ng test`).

> "`tsconfig.spec.json` configures TypeScript for unit tests, usually specifying different inclusions/exclusions (like *.spec.ts files) and type declarations for test frameworks."[^7]

### **How the Inheritance Works**

- The **base** `tsconfig.json` defines **settings common to the whole project**.
- **Specific configs** (`tsconfig.app.json`, `tsconfig.spec.json`) use `extends` to **inherit** everything from `tsconfig.json` and **override or add their own settings** as needed.
- This structure is particularly useful in large or multi-app workspaces, allowing you to fine-tune settings for the main app, test runners, e2e tests, or additional libraries without duplicating configuration[^1][^6].

### Interpolation
Interpolation in Angular is a one-way data binding technique used to display dynamic values from a component class into the HTML template of your application. It uses double curly braces {{ }} to embed template expressions within your markup.

How it Works
Place the component property or an expression inside {{ }} in your HTML template.

Angular evaluates the expression and replaces the curly braces with the calculated value in the rendered DOM.

Whenever the property in the component changes, Angular automatically updates the view to reflect the new value.


In Angular, a component is a fundamental building block of the application, responsible for controlling a portion of the user interface (UI). It encapsulates the template (HTML), styles (CSS), and logic (TypeScript) for a specific part of the application. Each component is a reusable piece that manages its own view and behavior.

A selector is a property in the component's metadata that defines the custom HTML tag or attribute used to represent the component in the DOM. It allows Angular to identify where to render the component in the application's HTML.