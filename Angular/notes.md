Below is the comprehensive Angular notes document, including answers to your additional questions, formatted as a Markdown (`.md`) file. You can copy this content into a file with a `.md` extension (e.g., `angular_notes.md`) to use it in Markdown-supported environments like GitHub, VS Code, or other Markdown editors.


# Comprehensive Angular Notes

This document provides an in-depth guide to Angular, covering setup, framework comparisons, TypeScript configurations, core features (e.g., loops, Signals, Effects, two-way data binding), and advanced concepts like Directives, Forms, Pipes, Component Lifecycle, Services, Network Calls, Observables, and Lazy Loading.

## Installing Angular CLI

The **Angular CLI** is a command-line tool for scaffolding, building, testing, and deploying Angular applications efficiently.

### Installation
Install the Angular CLI globally using npm:

```bash
npm install -g @angular/cli
```

### Creating a New Project
To create a new Angular project named `first-ng-app`:

```bash
ng new first-ng-app
```

This command generates a project structure with default configurations, including TypeScript, SCSS (optional), and testing setups.

### Using `--dry-run` (or `-d`)
The `--dry-run` flag simulates CLI commands without modifying the filesystem, previewing actions like file creation or updates.

**Example**:
```bash
ng new first-ng-app --dry-run
```

This displays the files and steps that would be executed, useful for debugging or planning.

## AngularJS vs. Angular

**AngularJS** (version 1.x) and **Angular** (version 2+) are distinct frameworks by Google for building web applications.

| Aspect                  | AngularJS                              | Angular (2+)                           |
|-------------------------|----------------------------------------|---------------------------------------|
| **Release Year**        | 2010                                   | 2016                                  |
| **Core Language**       | JavaScript                            | TypeScript                            |
| **Architecture**        | Model-View-Controller (MVC)           | Component-based                      |
| **Data Binding**        | Two-way data binding                  | One-way and two-way data binding     |
| **Rendering**           | Real DOM                              | Virtual DOM, server-side rendering   |
| **Performance**         | Slower (digest cycle)                 | Faster (AOT, tree-shaking)           |
| **Mobile Support**      | Limited                               | Mobile-first, supports PWAs          |
| **Dependency Injection**| Simpler, less flexible                | Advanced, hierarchical               |
| **CLI Support**         | Minimal                               | Robust Angular CLI                   |
| **Suitability**         | Legacy projects                       | Modern, scalable apps                |

### Key Differences
- **Language**: AngularJS uses JavaScript; Angular uses TypeScript for type safety and scalability.
- **Architecture**: AngularJS follows MVC; Angular uses a modular, component-based approach.
- **Performance**: Angular’s ahead-of-time (AOT) compilation and optimized change detection outperform AngularJS’s digest cycle.
- **Mobile Support**: Angular supports PWAs and native apps, unlike AngularJS.
- **Tooling**: Angular CLI provides powerful scaffolding, unlike AngularJS’s minimal tooling.

### Summary
AngularJS suits legacy, JavaScript-based projects, while Angular (2+) is ideal for modern, TypeScript-based, high-performance applications.

## TypeScript Configuration Files

Angular projects use multiple TypeScript configuration files to manage compilation settings.

### `tsconfig.json`
- **Role**: Base TypeScript configuration for the entire workspace.
- **Purpose**: Defines shared compiler options.
- **Key Settings**:
  - `target`: JavaScript version (e.g., `es2020`).
  - `module`: Module system (e.g., `esnext`).
  - `strict`: Enables strict type-checking.
  - `baseUrl`: Base path for module resolution.
- **Inheritance**: Extended by other config files.

> "The root `tsconfig.json` provides base settings inherited by all projects."

### `tsconfig.app.json`
- **Role**: Configures the main application code.
- **Purpose**: Customizes settings for `src/` files (excluding tests).
- **Key Settings**:
  - Includes: `src/**/*.ts`.
  - Excludes: Test files (e.g., `*.spec.ts`).
- **Usage**: Used by `ng build`.

> "`tsconfig.app.json` overrides base settings for application builds."

### `tsconfig.spec.json`
- **Role**: Configures unit test files.
- **Purpose**: Tailors settings for `*.spec.ts` files.
- **Key Settings**:
  - Includes: `src/**/*.spec.ts`.
  - Types: Testing frameworks (e.g., Jasmine).
- **Usage**: Used by `ng test`.

> "`tsconfig.spec.json` configures TypeScript for testing."

### Inheritance
- `tsconfig.app.json` and `tsconfig.spec.json` extend `tsconfig.json`, overriding or adding specific settings for modularity.

## Interpolation
Interpolation is a one-way data binding technique using `{{ }}` to display component properties in templates.

**Example**:
```typescript
export class AppComponent {
  title = 'Welcome to Angular!';
}
```
```html
<h1>{{ title }}</h1>
```

**Output**: `<h1>Welcome to Angular!</h1>`

## Components and Selectors
**Components** are Angular’s core UI building blocks, encapsulating:
- **Template**: HTML for the view.
- **Styles**: CSS/SCSS.
- **Logic**: TypeScript.

**Selectors** define how components are used in the DOM (e.g., as custom tags).

**Example**:
```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<h1>Hello, Angular!</h1>'
})
export class AppComponent {}
```

**Usage**:
```html
<app-root></app-root>
```

## For Loop in Angular (*ngFor)
The `*ngFor` directive iterates over collections (e.g., arrays) to render elements dynamically.

### Syntax
```html
<ng-container *ngFor="let item of items; let i = index; trackBy: trackByFn">
  {{ i + 1 }}. {{ item.name }}
</ng-container>
```

- `let item of items`: Declares a local variable for each element.
- `let i = index`: Optional index variable.
- `trackBy: trackByFn`: Optimizes rendering.

### Example
**Component**:
```typescript
export class AppComponent {
  items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' }
  ];
}
```

**Template**:
```html
<ul>
  <li *ngFor="let item of items">{{ item.name }}</li>
</ul>
```

**Output**:
- Item 1
- Item 2
- Item 3

### Requirement of trackBy
`trackBy` optimizes `*ngFor` by tracking items via unique identifiers, reducing DOM updates.

#### Why Use trackBy?
- **Performance**: Prevents re-rendering unchanged items.
- **State Preservation**: Maintains DOM element states (e.g., input fields).

#### Syntax
**Component**:
```typescript
export class AppComponent {
  items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' }
  ];

  trackByFn(index: number, item: any) {
    return item.id;
  }
}
```

**Template**:
```html
<ul>
  <li *ngFor="let item of items; trackBy: trackByFn">{{ item.name }}</li>
</ul>
```

#### Benefits
- Reduces DOM manipulations for large lists.
- Preserves state for unchanged items.

## Signals in Angular
**Signals** (introduced in Angular 16) are reactive primitives for state management, enabling fine-grained reactivity and zone-less change detection.

### What is a Signal?
A reactive value that notifies subscribers of changes, simplifying state management.

### Why Are Signals Required?
- **Fine-Grained Reactivity**: Updates only dependent components.
- **Performance**: Reduces unnecessary re-renders.
- **Zone-Less**: Prepares for zone-less applications.
- **Simpler Alternative**: Replaces observables for simple state management.

### Types of Signals
1. **Writable Signal** (`signal`):
   - Mutable, updated via `set`, `update`, or `mutate`.
   - **Example**:
     ```typescript
     import { signal } from '@angular/core';

     const count = signal(0);
     count.set(1);
     count.update(value => value + 1);
     ```

2. **Computed Signal** (`computed`):
   - Read-only, derived from other signals.
   - **Example**:
     ```typescript
     const count = signal(5);
     const doubleCount = computed(() => count() * 2);
     console.log(doubleCount()); // 10
     count.set(10);
     console.log(doubleCount()); // 20
     ```

3. **Effect** (`effect`):
   - Runs side effects when signals change (see below).

### Example
**Component**:
```typescript
import { Component, signal, computed } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <p>Count: {{ count() }}</p>
    <p>Double: {{ doubleCount() }}</p>
    <button (click)="increment()">Increment</button>
  `
})
export class CounterComponent {
  count = signal(0);
  doubleCount = computed(() => this.count() * 2);

  increment() {
    this.count.set(this.count() + 1);
  }
}
```

### Key Features
- **Reactive**: Notifies dependent components.
- **Zone-Less**: Reduces overhead.
- **Immutable Updates**: Predictable state changes.

### When to Use
- Reactive state in components.
- Performance-critical scenarios.
- Zone-less Angular preparation.

## Effects in Angular
An **Effect** runs side effects when dependent signals change, used for logging, syncing, or imperative updates.

### What is an Effect?
A function that executes when its dependent signals change, defined via `effect`.

### Syntax
```typescript
import { effect } from '@angular/core';

effect(() => {
  console.log(`Signal changed: ${signalName()}`);
});
```

### Example
**Component**:
```typescript
import { Component, signal, effect } from '@angular/core';

@Component({
  selector: 'app-effect-demo',
  template: `
    <p>Count: {{ count() }}</p>
    <button (click)="increment()">Increment</button>
  `
})
export class EffectDemoComponent {
  count = signal(0);

  constructor() {
    effect(() => {
      console.log(`Count changed to: ${this.count()}`);
      localStorage.setItem('count', this.count().toString());
    });
  }

  increment() {
    this.count.set(this.count() + 1);
  }
}
```

### Key Points
- **Automatic Dependency Tracking**: Tracks accessed signals.
- **Non-Reactive Updates**: Avoid updating signals in effects to prevent loops.
- **Execution**: Runs after view updates.
- **Cleanup**: Automatically cleaned up on component destruction.

### When to Use
- Logging signal changes.
- Syncing with external systems (e.g., localStorage, APIs).
- Triggering imperative updates.

## ngModel in Angular
**ngModel** enables **two-way data binding** in template-driven forms, part of `FormsModule`.

### How It Works
- Binds a component property to a form control’s value.
- Requires `FormsModule`:
  ```typescript
  import { FormsModule } from '@angular/forms';

  @NgModule({
    imports: [FormsModule, ...],
    // ...
  })
  export class AppModule {}
  ```

### Syntax
**Component**:
```typescript
export class FormComponent {
  userName: string = 'John Doe';
}
```

**Template**:
```html
<input type="text" [(ngModel)]="userName">
<p>You entered: {{ userName }}</p>
```

- `[(ngModel)]`: Combines `[ngModel]` (sets value) and `(ngModelChange)` (updates property).

### Example with Validation
**Component**:
```typescript
export class FormComponent {
  userName: string = '';
}
```

**Template**:
```html
<input [(ngModel)]="userName" required #nameInput="ngModel">
<p *ngIf="nameInput.invalid && nameInput.touched">Name is required</p>
<p>You entered: {{ userName }}</p>
```

### Key Features
- **Two-Way Binding**: Synchronizes view and model.
- **Validation**: Supports validators (e.g., `required`, `minlength`).
- **Events**: Emits `ngModelChange` on input changes.
- **Template-Driven**: Ideal for simple forms.

### Limitations
- Less suitable for complex forms (use reactive forms).
- Can lead to unpredictable state in large apps.

### When to Use
- Simple template-driven forms.
- Quick prototyping.

## Directives in Angular

### What is a Directive?
A **Directive** is a class that adds custom behavior to elements in the DOM. Directives extend HTML functionality, allowing developers to create reusable, dynamic behaviors.

### Types of Directives
1. **Component Directives**:
   - Components are directives with templates, used to define UI sections.
   - **Example**:
     ```typescript
     @Component({
       selector: 'app-example',
       template: '<p>This is a component</p>'
     })
     export class ExampleComponent {}
     ```
   - **Usage**: `<app-example></app-example>`

2. **Attribute Directives**:
   - Modify the behavior or appearance of an element without changing its structure.
   - **Example**: Built-in `ngClass`, `ngStyle`, or custom directives.
   - **Custom Example**:
     ```typescript
     import { Directive, ElementRef, HostListener } from '@angular/core';

     @Directive({
       selector: '[appHighlight]'
     })
     export class HighlightDirective {
       constructor(private el: ElementRef) {}

       @HostListener('mouseenter') onMouseEnter() {
         this.el.nativeElement.style.backgroundColor = 'yellow';
       }

       @HostListener('mouseleave') onMouseLeave() {
         this.el.nativeElement.style.backgroundColor = null;
       }
     }
     ```
     **Usage**:
     ```html
     <p appHighlight>Hover to highlight</p>
     ```

3. **Structural Directives**:
   - Alter the DOM structure by adding/removing elements (e.g., `*ngIf`, `*ngFor`).
   - **Example**: Custom structural directive.
     ```typescript
     import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

     @Directive({
       selector: '[appUnless]'
     })
     export class UnlessDirective {
       @Input('appUnless') set condition(value: boolean) {
         if (!value) {
           this.viewContainer.createEmbeddedView(this.templateRef);
         } else {
           this.viewContainer.clear();
         }
       }

       constructor(
         private templateRef: TemplateRef<any>,
         private viewContainer: ViewContainerRef
       ) {}
     }
     ```
     **Usage**:
     ```html
     <p *appUnless="false">Show if condition is false</p>
     ```

### Summary
- **Component Directives**: Define UI with templates.
- **Attribute Directives**: Modify element behavior/appearance.
- **Structural Directives**: Manipulate DOM structure.

## Reactive Forms

### What is a Reactive Form?
**Reactive Forms** provide a programmatic, model-driven approach to handling forms in Angular. They are defined in the component class using reactive form controls (`FormControl`, `FormGroup`, `FormArray`) and are part of `ReactiveFormsModule`.

### Key Features
- **Programmatic**: Form logic is defined in TypeScript, offering fine-grained control.
- **Reactive**: Integrates with RxJS for reactive updates.
- **Validation**: Built-in and custom validators.
- **Scalability**: Ideal for complex, dynamic forms.

### Example
**Module**:
```typescript
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [ReactiveFormsModule, ...],
  // ...
})
export class AppModule {}
```

**Component**:
```typescript
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  template: `
    <form [formGroup]="userForm" (ngSubmit)="onSubmit()">
      <input formControlName="name">
      <p *ngIf="userForm.get('name')?.invalid && userForm.get('name')?.touched">
        Name is required
      </p>
      <button type="submit" [disabled]="userForm.invalid">Submit</button>
    </form>
  `
})
export class ReactiveFormComponent {
  userForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)])
  });

  onSubmit() {
    console.log(this.userForm.value);
  }
}
```

### Why Use Reactive Forms?
- **Control**: Programmatic setup for dynamic forms.
- **Validation**: Robust synchronous and asynchronous validators.
- **Testing**: Easier to unit test due to model-driven nature.
- **Complex Forms**: Handles nested forms, dynamic fields, and cross-field validation.

## Form Grouping

### Why Use Form Grouping?
`FormGroup` is used to group multiple `FormControl` instances, representing a form or a section of a form. It’s essential for organizing complex forms.

### Benefits
- **Structure**: Groups related controls (e.g., address fields: street, city, zip).
- **Nested Forms**: Supports hierarchical forms with nested `FormGroup` instances.
- **Validation**: Apply validators to the entire group or individual controls.
- **Data Management**: Simplifies accessing and manipulating form data.

### Example
**Component**:
```typescript
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-group',
  template: `
    <form [formGroup]="profileForm" (ngSubmit)="onSubmit()">
      <div formGroupName="address">
        <input formControlName="street" placeholder="Street">
        <input formControlName="city" placeholder="City">
      </div>
      <button type="submit" [disabled]="profileForm.invalid">Submit</button>
    </form>
  `
})
export class FormGroupComponent {
  profileForm = new FormGroup({
    address: new FormGroup({
      street: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required)
    })
  });

  onSubmit() {
    console.log(this.profileForm.value);
  }
}
```

### When to Use
- Complex forms with multiple fields.
- Nested data structures (e.g., user profile with address).
- Group-level validation or data management.

## Template-Driven Forms

### What is a Template-Driven Form?
**Template-Driven Forms** rely on directives (e.g., `ngModel`) in the template to manage form state, part of `FormsModule`. They are simpler but less flexible than reactive forms.

### Key Features
- **Template-Based**: Form logic is defined in HTML.
- **Simplicity**: Quick to set up for basic forms.
- **Two-Way Binding**: Uses `ngModel` for data synchronization.

### Example
**Module**:
```typescript
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [FormsModule, ...],
  // ...
})
export class AppModule {}
```

**Component**:
```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-template-form',
  template: `
    <form #userForm="ngForm" (ngSubmit)="onSubmit()">
      <input name="name" [(ngModel)]="user.name" required #nameInput="ngModel">
      <p *ngIf="nameInput.invalid && nameInput.touched">Name is required</p>
      <button type="submit" [disabled]="userForm.invalid">Submit</button>
    </form>
  `
})
export class TemplateFormComponent {
  user = { name: '' };

  onSubmit() {
    console.log(this.user);
  }
}
```

### When to Use
- Simple forms with minimal logic.
- Rapid prototyping.
- Small-scale applications.

### Reactive vs. Template-Driven
- **Reactive**: Programmatic, scalable, testable, suited for complex forms.
- **Template-Driven**: Template-based, simpler, suited for basic forms.

## Angular Pipes

### What Are Pipes?
**Pipes** transform data in templates for display purposes without altering the original data. Angular provides built-in pipes and supports custom pipes.

### Built-In Pipes
- `DatePipe`: Formats dates (e.g., `{{ myDate | date:'short' }}`).
- `UpperCasePipe`: Converts to uppercase (e.g., `{{ text | uppercase }}`).
- `LowerCasePipe`: Converts to lowercase.
- `CurrencyPipe`: Formats numbers as currency (e.g., `{{ 123 | currency:'USD' }}`).
- `PercentPipe`: Formats numbers as percentages.
- `JsonPipe`: Displays objects as JSON (e.g., `{{ obj | json }}`).
- `AsyncPipe`: Unwraps observables or promises (e.g., `{{ data$ | async }}`).

### Custom Pipe Example
**Pipe**:
```typescript
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {
  transform(value: string): string {
    return value.split('').reverse().join('');
  }
}
```

**Module**:
```typescript
import { NgModule } from '@angular/core';
import { ReversePipe } from './reverse.pipe';

@NgModule({
  declarations: [ReversePipe],
  exports: [ReversePipe]
})
export class AppModule {}
```

**Usage**:
```html
<p>{{ 'Angular' | reverse }}</p> <!-- Output: ralugna -->
```

### When to Use
- Format data for display (e.g., dates, numbers).
- Simplify template logic.
- Handle asynchronous data with `async`.

## Component Lifecycle

### What is Component Lifecycle?
Angular components have a lifecycle managed by Angular, with hooks that allow developers to tap into key moments (e.g., creation, update, destruction).

### Lifecycle Hooks
1. **ngOnChanges**:
   - Called when `@Input` properties change.
   - Receives `SimpleChanges` object.
   - **Example**:
     ```typescript
     ngOnChanges(changes: SimpleChanges) {
       console.log('Input changed:', changes);
     }
     ```

2. **ngOnInit**:
   - Called once after the component is initialized.
   - Ideal for setup (e.g., fetching data).
   - **Example**:
     ```typescript
     ngOnInit() {
       console.log('Component initialized');
     }
     ```

3. **ngDoCheck**:
   - Called during every change detection cycle.
   - Use for custom change detection.
   - **Example**:
     ```typescript
     ngDoCheck() {
       console.log('Change detection ran');
     }
     ```

4. **ngAfterContentInit**:
   - Called after Angular projects external content (`ng-content`).
   - **Example**:
     ```typescript
     ngAfterContentInit() {
       console.log('Content projected');
     }
     ```

5. **ngAfterContentChecked**:
   - Called after checking projected content.
   - **Example**:
     ```typescript
     ngAfterContentChecked() {
       console.log('Content checked');
     }
     ```

6. **ngAfterViewInit**:
   - Called after the component’s view (and child views) are initialized.
   - **Example**:
     ```typescript
     ngAfterViewInit() {
       console.log('View initialized');
     }
     ```

7. **ngAfterViewChecked**:
   - Called after checking the view and child views.
   - **Example**:
     ```typescript
     ngAfterViewChecked() {
       console.log('View checked');
     }
     ```

8. **ngOnDestroy**:
   - Called before the component is destroyed.
   - Use for cleanup (e.g., unsubscribing observables).
   - **Example**:
     ```typescript
     ngOnDestroy() {
       console.log('Component destroyed');
     }
     ```

### Example
```typescript
import { Component, OnInit, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  template: '<p>Lifecycle Demo</p>'
})
export class LifecycleComponent implements OnInit, OnChanges, OnDestroy {
  @Input() data: string;

  ngOnChanges(changes: SimpleChanges) {
    console.log('Changes:', changes);
  }

  ngOnInit() {
    console.log('Initialized');
  }

  ngOnDestroy() {
    console.log('Destroyed');
  }
}
```

### When to Use
- **Setup**: `ngOnInit` for initialization.
- **Input Changes**: `ngOnChanges` for reacting to input updates.
- **Cleanup**: `ngOnDestroy` for resource cleanup.
- **Custom Detection**: `ngDoCheck` for manual change detection.

## Services in Angular

### What is a Service?
A **Service** is a class that encapsulates business logic, data access, or reusable functionality. Services are injected into components or other services using Angular’s dependency injection.

### Why Use Services?
- **Separation of Concerns**: Keeps components focused on UI logic.
- **Reusability**: Shares logic across components.
- **Maintainability**: Centralizes business logic and data access.

### Example
**Service**:
```typescript
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  getData() {
    return ['Item 1', 'Item 2', 'Item 3'];
  }
}
```

**Component**:
```typescript
import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-data',
  template: `
    <ul>
      <li *ngFor="let item of items">{{ item }}</li>
    </ul>
  `
})
export class DataComponent {
  items: string[];

  constructor(private dataService: DataService) {
    this.items = dataService.getData();
  }
}
```

### Key Points
- **@Injectable**: Marks a class as injectable.
- **providedIn: 'root'**: Registers the service at the root level (singleton).
- **Custom Providers**: Can be provided at module or component level for scoped instances.

## Network Calls in Angular

### How to Make Network Calls
Angular uses the `HttpClient` module to make HTTP requests, leveraging RxJS Observables for asynchronous communication.

### Setup
1. Import `HttpClientModule`:
   ```typescript
   import { HttpClientModule } from '@angular/common/http';

   @NgModule({
     imports: [HttpClientModule, ...],
     // ...
   })
   export class AppModule {}
   ```

2. Inject `HttpClient` into a service.

### HTTP Methods
- **GET**: Fetch data.
- **POST**: Create data.
- **PUT**: Update data.
- **DELETE**: Remove data.

### Example
**Service**:
```typescript
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  // GET: Fetch users
  getUsers(): Observable<any> {
    return this.http.get(`${this.apiUrl}/users`);
  }

  // POST: Create a user
  createUser(user: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(`${this.apiUrl}/users`, user, { headers });
  }

  // PUT: Update a user
  updateUser(id: number, user: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/users/${id}`, user);
  }

  // DELETE: Delete a user
  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/users/${id}`);
  }

  // GET with Query Params
  getUsersByParam(param: string): Observable<any> {
    const params = new HttpParams().set('key', param);
    return this.http.get(`${this.apiUrl}/users`, { params });
  }
}
```

**Component**:
```typescript
import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-api',
  template: `
    <ul>
      <li *ngFor="let user of users">{{ user.name }}</li>
    </ul>
    <button (click)="addUser()">Add User</button>
  `
})
export class ApiComponent implements OnInit {
  users: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getUsers().subscribe({
      next: (data) => this.users = data,
      error: (err) => console.error('Error:', err),
      complete: () => console.log('Request complete')
    });
  }

  addUser() {
    const newUser = { name: 'New User', email: 'new@example.com' };
    this.apiService.createUser(newUser).subscribe({
      next: (data) => this.users.push(data),
      error: (err) => console.error('Error:', err)
    });
  }
}
```

### Key Points
- **Observables**: Handle asynchronous responses.
- **Error Handling**: Use `subscribe` with `error` callback or RxJS operators like `catchError`.
- **Headers/Params**: Customize requests with `HttpHeaders` and `HttpParams`.
- **Interceptors**: Use `HttpInterceptor` for global request/response handling (e.g., adding auth tokens).

## Observables

### What is an Observable?
An **Observable** is a reactive programming construct from RxJS, used to handle asynchronous data streams (e.g., HTTP responses, events). Observables emit values over time and are subscribed to by components.

### Key Features
- **Asynchronous**: Handles events, HTTP calls, or timers.
- **Lazy**: Executes only when subscribed.
- **Operators**: Supports RxJS operators (e.g., `map`, `filter`, `catchError`).
- **Unsubscribe**: Prevents memory leaks using `unsubscribe` or `takeUntil`.

### Example
```typescript
import { Observable, interval } from 'rxjs';

const observable = interval(1000); // Emits 0, 1, 2... every second

const subscription = observable.subscribe({
  next: (value) => console.log(value),
  error: (err) => console.error(err),
  complete: () => console.log('Complete')
});

// Unsubscribe after 5 seconds
setTimeout(() => subscription.unsubscribe(), 5000);
```

### Use Cases
- HTTP requests.
- Event handling (e.g., clicks, inputs).
- Real-time data updates (e.g., WebSockets).

## Angular Lazy Loading

### What is Lazy Loading?
**Lazy Loading** is a technique to load Angular modules only when needed, reducing initial bundle size and improving application performance.

### Why Use Lazy Loading?
- **Performance**: Faster initial load times.
- **Scalability**: Efficient for large applications with multiple modules.
- **User Experience**: Loads features on-demand (e.g., when navigating to a route).

### Implementation
1. **Create a Feature Module**:
   ```bash
   ng generate module admin --route admin --module app.module
   ```

2. **Configure Routes**:
   **App Routing Module** (`app-routing.module.ts`):
   ```typescript
   import { NgModule } from '@angular/core';
   import { RouterModule, Routes } from '@angular/router';

   const routes: Routes = [
     { path: '', component: HomeComponent },
     { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) }
   ];

   @NgModule({
     imports: [RouterModule.forRoot(routes)],
     exports: [RouterModule]
   })
   export class AppRoutingModule {}
   ```

3. **Feature Module** (`admin.module.ts`):
   ```typescript
   import { NgModule } from '@angular/core';
   import { CommonModule } from '@angular/common';
   import { AdminComponent } from './admin.component';
   import { RouterModule, Routes } from '@angular/router';

   const routes: Routes = [
     { path: '', component: AdminComponent }
   ];

   @NgModule({
     declarations: [AdminComponent],
     imports: [CommonModule, RouterModule.forChild(routes)]
   })
   export class AdminModule {}
   ```

4. **Component** (`admin.component.ts`):
   ```typescript
   import { Component } from '@angular/core';

   @Component({
     selector: 'app-admin',
     template: '<p>Admin Module</p>'
   })
   export class AdminComponent {}
   ```

### Key Points
- **loadChildren**: Dynamically imports the module.
- **forRoot vs. forChild**: Use `forRoot` in the root module, `forChild` in feature modules.
- **Preloading**: Optionally preload lazy-loaded modules in the background using `PreloadAllModules`.

## Summary
- **Angular CLI**: Simplifies project setup and management.
- **AngularJS vs. Angular**: Angular is modern, TypeScript-based, and scalable.
- **TypeScript Configs**: `tsconfig.json`, `tsconfig.app.json`, `tsconfig.spec.json` manage compilation.
- **Interpolation**: One-way binding with `{{ }}`.
- **Components & Selectors**: Core UI blocks with custom tags.
- **For Loop (*ngFor)**: Iterates collections, optimized with `trackBy`.
- **Signals**: Reactive state management for performance.
- **Effects**: Handle side effects for signals.
- **ngModel**: Two-way binding for template-driven forms.
- **Directives**: Extend HTML (component, attribute, structural).
- **Reactive Forms**: Programmatic, scalable form handling.
- **Form Grouping**: Organizes complex forms with nested controls.
- **Template-Driven Forms**: Simple, template-based forms.
- **Pipes**: Transform data for display.
- **Component Lifecycle**: Hooks for managing component stages.
- **Services**: Encapsulate reusable logic.
- **Network Calls**: Use `HttpClient` for HTTP requests.
- **Observables**: Handle asynchronous data streams.
- **Lazy Loading**: Improves performance by loading modules on-demand.

