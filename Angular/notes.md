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