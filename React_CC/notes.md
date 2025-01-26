# Why Do We Need React?

When working with **vanilla JavaScript** to manipulate the DOM (Document Object Model), even small changes to the DOM, such as updating an `<h1>` tag's content on a button click, can cause the **entire DOM tree to re-render**. This process is inefficient and can make a website **slow** and **less robust**, especially as the application grows in complexity.

## React.js: The Solution

React.js is a **JavaScript library** for building user interfaces, particularly **single-page applications**. It optimizes DOM updates using a **Virtual DOM**.

---

## Benefits of Using React

### 1. Virtual DOM

- React uses a **Virtual DOM** to efficiently manage updates.
- Instead of re-rendering the entire DOM tree, React:
  1. Compares the Virtual DOM with its previous state using a **diffing algorithm**.
  2. Updates only the necessary parts of the real DOM.
- The virtual DOM is a programing concept where ans ideal, or virtual representation of a UI is kept in memory and synced with the real DOM by a librabry such as ReactDOM . This process is called **Reconcilation**.

### 2. Component-Based Architecture

- React encourages breaking the UI into **reusable**, **independent components**, making the code:
  - Modular
  - Easier to maintain

### 3. Improved Performance

- React minimizes direct DOM manipulation.
- It ensures **faster performance** by updating only the required elements.

### 4. Declarative Syntax

- React’s declarative syntax allows developers to describe **what** the UI should look like instead of focusing on **how** to update it.

### 5. Rich Ecosystem

- React has a rich ecosystem with tools and libraries such as:
  - **React Router**: For navigation.
  - **Redux** or **Context API**: For state management.

---

## Key Components of React

### 1. React.js

- The core library used to:
  - Build and manage components.
  - Handle the **Virtual DOM**.

### 2. ReactDOM

- Bridges **React** with the **browser DOM**.
- Provides methods like `ReactDOM.render()` to render React components into actual DOM elements.

---

By using React.js, you can build modern, **efficient**, and **maintainable** web applications with a better developer experience and optimized performance.

# JSX (JavaScript XML)

## What is JSX?

JSX stands for **JavaScript XML**. It is a **syntax extension** to JavaScript that allows developers to write HTML-like syntax directly within JavaScript code. JSX provides a cleaner and more intuitive way to describe the structure of the user interface.

**_in JSX using {} syntax we can add any varibale to ou compoents, even we can perfom any mathamatical operation inside this , even we can call fucntion inside this_**

##### React dose not render 'false' 'null', 'undefined' or 'NaN' in the dom , These values , when used in JSX , will result in nothing being displayed.How ever '0' ans empty string(`""`) are exception:

- **`0`** is rendered in the DOM becuase it is considered a valid React node.also the empth string is also considerd as valid node.

---

## Why Use JSX?

1. **HTML-Like Syntax**:

   - JSX allows you to write HTML-like code within JavaScript, making it easier to create and visualize UI components.

2. **Syntactic Sugar**:

   - It simplifies the process of combining JavaScript logic and HTML structure by providing a more readable and concise syntax.

3. **Integration with JavaScript**:

   - You can embed JavaScript expressions inside JSX using curly braces `{}`.

4. **React Compatibility**:
   - JSX is not mandatory in React, but it is widely used because it makes the code more readable and easier to maintain.

---

## Example: JSX in Action

### Without JSX:

```javascript
const element = React.createElement(
  "h1",
  { className: "greeting" },
  "Hello, world!"
);
```

# Why Use ESLint?

## What is ESLint?

**ESLint** is a static code analysis tool for JavaScript and its extensions (e.g., TypeScript, React). It helps identify and fix errors, maintain coding standards, and ensure consistent style.

## Key Benefits

1. **Error Prevention**:

   - Detects syntax errors, bugs, and anti-patterns before code execution.

2. **Code Consistency**:

   - Enforces a uniform coding style across the project or team.

3. **Improved Code Quality**:

   - Promotes best practices and clean code.

4. **Real-Time Feedback**:

   - Integrates with editors (e.g., VS Code) to show issues as you type.

5. **Automation**:
   - Automatically fixes many issues using the `--fix` option.

# State and Props in React

## **State** in React

### What is State?

- **State** is a built-in React object used to store data that can change over time within a component.
- It represents the **current condition or data** of a component and can change based on user actions or events.
- State is managed within the components (just like varibels declared in a function). However unlike regualr varibaels , when state chanegs , React Re-renders the componets to reflect these chanegs , keeping the user interface in sync with the data.

### Characteristics of State:

- **Mutable**: State can be updated using `setState()` in class components or `useState` in functional components.
- **Triggers Re-renders**: When the state changes, React automatically re-renders the component to reflect the updated UI.

### In state how re-rendering works:

```jsx
<div>
  <ParentComponent>
    <Child1 />
    <Child2 />
  </ParentComponent>
  <SiblingComponent />
</div>
```

### React Rendering Behavior

- **Initial Render:** When the `App` component first renders, React renders `ParentComponent`, `Child1`, `Child2`, and also `SiblingComponent`.

- **State Change in ParentComponent:** Suppose there is a state change in `ParentComponent`. React will re-render `ParentComponent` and its children (`Child1`, `Child2`).

- **Components Outside:** `SiblingComponent` is not affected by the state change in `ParentComponent`, so it will not be re-rendered.

### React Strict Mode and Double Rendering

#### React Strict Mode

React Strict Mode is a development-only feature designed to identify potential issues in a React application. It doesn't affect the production build but helps developers write more robust and future-proof code.

Key features of React Strict Mode:

- Identifies unsafe lifecycle methods.
- Warns about legacy string ref API usage.
- Detects unexpected side effects in components.
- Ensures strict adherence to best practices for concurrent rendering.

To enable it, wrap your application (or part of it) with the `<React.StrictMode>` component:

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

---

# **Props** in React

## What are Props?

- **Props** (short for **properties**) are inputs to a React component. They allow data to be passed from a **parent component** to a **child component**.
- Props are **immutable** (cannot be changed by the child component), meaning the child component can only read and use them.

## Characteristics of Props:

- **Read-only**: The child component receives props from its parent but cannot modify them. Props are passed down from parent to child in a unidirectional flow.
- **Used for Communication**: Props allow data and methods to be shared between components, enabling interaction between parent and child components.

## How to Pass Props:

Props are passed from a parent component to a child component like attributes in HTML. In the child component, you can access these props via the `props` object.

### Example:

```javascript
// Parent Component
function Parent() {
  return <Child name="Alice" age={25} />;
}
```

```javascript
// Child Component
function Child(props) {
  return (
    <h1>
      Hello, my name is {props.name} and I am {props.age} years old.
    </h1>
  );
}

export default Parent;
```

## Passing JSX in Props

In React, we can pass **JSX** as a prop to child components, just like any other prop. This allows us to send reusable UI elements to be rendered dynamically in the child component.

### Example

```jsx
// Parent Component
import React from "react";
import Child from "./Child";

function Parent() {
  return (
    <div>
      <Child content={<p style={{ color: "blue" }}>This is JSX passed as a prop!</p>} />
    </div>
  );
}

export default Parent;

// Child Component
import React from "react";

function Child({ content }) {
  return <div>{content}</div>;
}

export default Child;
```

##### There is another thing in props , props.children by this we can access the derived jsx in the openign and closing bracked of child compoent, nested element.

## Loops in JSX

we can't use for loops in JSX , we have to use .map function insted.And we have key , else react will complain against it , because when react will render it can easyily understand usign the key which one element is chanegd.

```javascript
example;
{
  students.map((student) => {
    return <li key={student}>student</li>;
  });
}
```

### class vs className in React Styling

React has the `class` keyword reserved, so use `className` instead. Otherwise, React will give a warning.

---

# Event Handling in React.js

Event handling in React follows a similar pattern to standard JavaScript event handling but with some key differences, such as using synthetic events for cross-browser compatibility and providing consistent event handling across different elements and browsers.

### What is SyntheticEvent in React

When you handle an event in React, like clicking a button or typing in an input box, React wraps native browser events in something called `SyntheticEvent`. The `SyntheticEvent` is a wrapper around the browser's native event, ensuring the events behave consistently across browsers.

# Event Propagation (In React)

Event propagation refers to the process of how events propagate or travel through the DOM hierarchy.

In JavaScript, there are two phases of event propagation: **Capturing phase** and **Bubbling phase**.

### Capturing Phase

The event starts from the root of the DOM and goes down to the target element.

### Target Phase

The event reaches the target element.

### Bubbling Phase

The event starts from the target element and bubbles up to the root of the DOM.

### Event Propagation in React

- In React.js, event propagation refers to the process by which events propagate or "bubble" up from the target element through its parent elements in the DOM hierarchy. React follows the same event propagation model as regular JavaScript DOM events.

- When an event occurs on an element in a React component, such as a button click, the event is first captured at the target element and then bubbles up through the parent elements, triggering any event handlers that have been defined along the way. This allows you to handle events at different levels of the component hierarchy.

- React provides a way to stop event propagation using the `stopPropagation` function, which can be called on the event object within an event handler. This ensures that the event doesn't bubble up further in the DOM, allowing only the target element to handle the event.

### Example

Here is an example to illustrate event propagation in React:

```jsx
import React from "react";

function ParentComponent() {
  const handleParentClick = () => {
    console.log("Parent clicked");
  };

  const handleChildClick = (event) => {
    event.stopPropagation(); // Stops event from bubbling to the parent
    console.log("Child clicked");
  };

  return (
    <div
      onClick={handleParentClick}
      style={{ padding: "20px", border: "1px solid black" }}
    >
      Parent Component
      <button onClick={handleChildClick} style={{ margin: "10px" }}>
        Child Button
      </button>
    </div>
  );
}

export default ParentComponent;
```

#### Explanation

- When the **Parent Component** is clicked, the `handleParentClick` function will log "Parent clicked".
- When the **Child Button** is clicked, the `handleChildClick` function will log "Child clicked" and stop the event from propagating to the parent. As a result, "Parent clicked" will not be logged in this case.
- If we wan the capturing phase behaviour here we have to mention the event as **onClickCapture** then give the fucntion reference.

---

# **Hooks** in React

## What are Hooks?

- **Hooks** are functions in React that allow you to use **state** and **other React features** in functional components.
- Hooks were introduced in React 16.8 to allow functional components to manage state and side effects, which were previously only possible in class components.
- Hooks enable writing more **concise** and **clean** code by allowing functional components to do everything that class components can.

## Commonly Used Hooks

### 1. **useState()**

- `useState` is used to add **state** to a functional component. It returns a state variable and a function to update that state.
- state valeus dose not reset to its initital value on re-rener

```javascript
const [count, setCount] = useState(0);
//count is initialized to 0
//button click increment fucntion is called
//setCount(count+1) updates to count 1.
// React re-renders the componets.(when user click button for the 2nd tiems)
```

#### React.js State Comparison and Batching

- State Comparison with `Object.is()`
  React.js compares the previous state with the new state using the `Object.is()` method. If it finds that both states are the same, it skips re-rendering the component. This optimization ensures efficient rendering by avoiding unnecessary updates.

- State Batching in Event Handlers
  React.js batches all `setState()` calls made inside event handlers and processes them at the same time. The state is not updated immediately; instead, these updates are scheduled and processed at a specific time to optimize performance and avoid multiple re-renders.And if we tyr to access the value immmediatly after setting a state , then you will get old values as its asynchronous.

**Derived State** is any state that can be computed based on other state or props. It is not stored directly in the componets's state but is calculated when needed. THis approch helps avoid duplication and keeps the state simpler and more manageable.

**Lifting the State up in React**
In react the data flows in top to bottom , we can only pass data form parent to child.

- data passing from child to parent is not possible
- data passing form child to child is not possible

##### To resolve this issue we haev to lift the state varible up to the common parent, so that , that can be shared to other childs.

### Controlled and Uncontrolled Components in React

##### Controlled Components

A **controlled component** is a component where React manages the form element's state. The form element's value is controlled by the `state`, and any changes to the value are handled via event handlers.

###### Key Features:

- The `value` of the input is determined by React's `state`.
- Changes to the input trigger an `onChange` event handler, which updates the state.
- Ensures a single source of truth for form data.

###### Example:

```jsx
function ControlledComponent() {
  const [value, setValue] = React.useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return <input type="text" value={value} onChange={handleChange} />;
}
```

##### Uncontrolled Components

An uncontrolled component is a component where the form element manages its own state internally. React does not interfere with the value of the form element; instead, a ref is used to access the DOM value.

-- means form data is handles by the DOM itself.

###### Key Features:

- The value is managed by the DOM, not React's state.
- React provides access to the value through a ref.

### 2. useRef()

- useRef is a React Hook that lets you reference a value that's not needed for rendering.
- Unlike states, it's directly mutable.
- You can access value f it's using yourRef.current
- The useRef() hook prvide a objet which haev the proprty current, by which we can access the current value of reference
- Uncontrolled componets manage their own state internally , and for this uncontroller compone this hook is used instest of Valinal js dom manipulation techniqe to get reference.

### 3. **useEffect()**

## **What is a Side Effect in React?**

- A **side effect** is any action performed after a component renders, not directly related to updating the UI.
- Common side effects include:

  - Fetching data from an API.
  - Updating the DOM (e.g., document title).
  - Setting up subscriptions (e.g., event listeners, intervals).

- A **side effect** in programming refers to any operation that affects something outside the scope of the function(`pure function`-the fucntion which return the same output as input is given) being executed. In React, side effects are operations that **interact with the outside world** or **modify things outside the component** that don't directly affect the output (UI) of the component.

---

## **How to Handle Side Effects in React**

1. **Use `useEffect`:**

   - Manage side effects in functional components using the `useEffect` hook.
   - Example:
     ```javascript
     useEffect(() => {
       console.log("Side effect executed!");
     }, []); // Runs only once when the component mounts
     ```

2. **Dependency Array:**

   - Specify dependencies to control when the side effect runs.
   - Example:
     ```javascript
     useEffect(() => {
       fetchData();
     }, [dependency]); // Runs when 'dependency' changes
     ```

3. **Clean Up Side Effects:**
   - Return a cleanup function to avoid memory leaks for intervals, event listeners, or subscriptions.
   - Example:
     ```javascript
     useEffect(() => {
       const interval = setInterval(() => console.log("Running"), 1000);
       return () => clearInterval(interval); // Cleanup
     }, []);
     ```

---

### Fetch Data as a Sie Effect

When you fetch data in a React Coomponent, you are performing a side effect because.

- Extrnal Interaction: You are interacting with an external data surce, such as an API or a server.
- State Updates: The fetched data will usually updae the component's state, causing a re-render.

## **Issues When Side Effects Are Not Handled Properly**

1. **Performance Issues:**

   - Unnecessary re-renders if side effects run without proper dependency control.
   - Resource leaks (e.g., intervals or listeners not cleaned up).

2. **Incorrect Behavior:**

   - Infinite loops caused by effects that repeatedly trigger state updates.
   - Stale data when dependencies are not specified correctly.

3. **Memory Leaks:**

   - Forgetting cleanup can lead to accumulated resources and degrade performance.

4. **Hard-to-Debug Bugs:**

   - Unexpected triggers and inconsistent UI updates make debugging difficult.

5. **Poor User Experience:**
   - Laggy or delayed interactions due to unoptimized effects.

---

### **Key Takeaways**

- Always use `useEffect` to manage side effects.
- Include a proper dependency array to control when the effect runs.
- Return a cleanup function for cleanup of intervals, subscriptions, and listeners.
- Monitor and debug side effects with React Developer Tools.

## How `useEffect` Handles Side Effects?

### 1. **Runs After Render**

`useEffect` is called **after the render phase**, ensuring that side effects don’t block the UI from rendering. React uses the `useEffect` hook to separate **render logic** (what the UI looks like) from **side effect logic** (what it does).

### 2. **Dependency Array for Control**

The second argument of `useEffect` is a **dependency array** that determines when the effect should run. Based on this, React optimizes the execution of side effects.

- **No Dependencies (`useEffect(() => {...})`)**: Runs after every render.
- **Empty Dependencies (`useEffect(() => {...}, [])`)**: Runs only once when the component mounts.
- **Specific Dependencies (`useEffect(() => {...}, [dependency])`)**: Runs when the specified dependency changes.

# React Hook: `useId()`

The `useId` hook in React is a utility that generates unique IDs for component instances. These IDs are particularly useful in scenarios where you need to associate elements, such as linking a `<label>` with an `<input>` field, ensuring proper accessibility.

---

## Key Features:

- **Unique ID Generation**: Ensures a unique and consistent ID for each component instance.
- **Accessibility**: Helps in associating elements like `<label>` and `<input>` using the `htmlFor` and `id` attributes.
- **Avoid for List Keys**: It is not suitable for generating keys in lists, as keys require predictable and stable values across renders.

---

## Syntax:

```jsx
const id = useId();
//return a unique iD string associated with their particular useId call in this particular component
**Example**

function AccessibleForm() {
  const inputId = useId(); // Generate a unique ID

  return (
    <div>
      <label htmlFor={inputId} style={{ display: 'block', marginBottom: '8px' }}>
        Enter your name:
      </label>
      <input
        id={inputId}
        type="text"
        placeholder="Your name"

      />
    </div>
  );
}
```

**Note:** useId should not be used to generate keys in list.

## **Mounting**

### What is Mounting?

Mounting is the phase where a React component is created and added to the DOM for the first time.

## **Unmounting**

### What is Unmounting?

Unmounting is the phase where a React component is removed from the DOM, usually when it is no longer needed or replaced.

## What is Two-Way Data Binding in React?

**Two-way data binding** in React is a technique where data flows in both directions: from the component's state to the UI (view), and from the UI to the component's state. This allows for synchronization between the state and the UI, ensuring that when one changes, the other is updated automatically.

### How Two-Way Data Binding Works in React:

1. **State**: The data that controls the UI.
2. **Event Handlers**: Functions that handle user interactions (e.g., input changes) and update the state.
3. **Controlled Components**: In React, when an input element's value is controlled by the state, it is known as a controlled component. This enables two-way data binding.

### Example of Two-Way Data Binding

```javascript
import React, { useState } from "react";

function TwoWayBinding() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value); // Update state on user input
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue} // State controls the input value
        onChange={handleChange} // Updates state on user input
      />
      <p>You typed: {inputValue}</p> {/* Display state */}
    </div>
  );
}

export default TwoWayBinding;
```

##### e.preventDefault() is used int the submit of form while click on button to prevent the default behaviour of the form submit , which is the reloading of page that means loss of ui what ever i have typed in the input field.

## What is a Fragment in React?

A **Fragment** in React is a lightweight wrapper that allows you to group multiple elements without adding extra nodes to the DOM. It is often used when you need to return multiple elements from a component without introducing an additional wrapper element, such as a `<div>`, which could affect the layout or styling.

#### why in react fucntional component multiple eelement cannot be returned?

Because in jsx he fucntion basically return in object form ,and a fucntion cannot return multiple object so that is why we need ot wrap them in fragment.

using <> </> or <React.Fragment> </React.Fragment> this basically remove the unwanted nodeed like if e wrap using div this will create a extra node , so using fragment we can remove this unwanted node.

## What is Prop Drilling in React JS

- Props frilling is a pattern in React where you pass data form a parent component to deeply nested child components through multiple layers of components, even if some of the intermediate components don't need the data.
- As your component tree deepens, prop drilling can make the code more complex and harder to maintain.
- Main problem in the prop drilling is basically unneessary passing of data in multiple elements.

# ContestAPI In React

**Context API:** A way to pass data through the component tree without having to pass props down manually at every lvel.

- **createContest:** Creates a
  Context Object. ( The created context will be treated as Componet)
- **Provider:** A component that provides the context value to its children. This is a property of Context component.We pass the value to Provider, which makes it accessible to child componets.The values should be passed inside `double curly braces {{}}` if it's more than on.
- **useContext(Consumer):** A hook that allows you to consume a context.

## React Router DOM

In case of normal routing like html ancer tag the routing is possible but each time the navigation is done and moving to one page to other the broswer is reloading the page , that is not somthing we want in a single page application , this viloate the single page application ui.

so using **react-router-dom(one external libary)** we can achive the routing in react app.

this allow the navigation/routing form one page to other page it don't refreash or relaod the page.

### Link vs NavLink Tag

NavLink tag will give one property called active tag, but Link tag don't give this , this active property can be used for tracking the path , so that we can use it in ui manipulation.

### useNavigateHook

This hook provide the naviation feature while clicking on button.

# Removing Navigation Stack in React Router DOM

In **React Router DOM**, to prevent stacking navigation history when navigating with `NavLink` or programmatically, you can use the `replace` property. This improves user experience by replacing the current entry in the navigation stack instead of creating a new one.

## Using `replace` with `NavLink`

```jsx
<NavLink to="/about" replace className="nav-link">
  About
</NavLink>
```

# Redux (Why)

In small apps, you can manage data using React's state, But as the app grows it's become tricky to pass data between components.

Redux solves this problem by creaeting a **centralized store\*** that holds all he data. This store can be accessed and updated by any part of the app.

Redux is a library that helps manage data (also knwn as 'state') in large React apps.It allows us to keep all out app's data in a single place, known as **_Redux Store_**, making it easy to share and update data across diffrent parts of the app.

- Proive Golbal access and predictable updates
- Provie powerfull tools for debugging,insepecting state,a nd replaying actions
  -Middlwware like Thunk or saga handles async task, keeping the code clean.

### How Redux works

**Store**: This is here Redux keeps all your data, keep it safe.Everything you do with Redux-whether adding,removing,updating.
**Action**: This is an object, which tell the redux what to do (like adding a task).

```javascript
{
  type: "counter/add",
  payload:{
    incrementBy:10,
  }
}

```

**Reducers**: How to do, it actuallu chnage the data in the store based on the actions.

```javascript
export const counterReducer=(state=initialState,action)=>{
  switch(action.type){
    case "counter/add":
      return {..state,value: state.value + action.payload.incrementBy};
      default:
        return state;
  }
}
```

### Redux: Reducer Function

A reducer is a fucntion that decides how the state should change based on the action. The reducer takes the current state and an action, and return a new state.

A thing to remember:

1. Reducer must always return a new state.
2. They should never modify the old sate directly.

### Reduc Store

The store is where Redux keeps all your app's data.

it's like a database for your app, but it's only for managing data in memory(not saving it parmanently).

```javascript
import { createStore } from "redux";
const store = createStore(reducer);
// The ceate store method creaes te redux store using a reducer fucntion that handles how the state chanegs teh response to actions.
```

### Dispath an Action

dispatch() is used to send actions to the Redux Store. An action describes what chanegs you want to make the state (such as adding a task).

```javascript
store.dispatch({ type: "ACTION_TYPE", paylaod: data });
```

##### getState() retrives the current state of teh Redux store.

This is useful for accessing the state after it has been updated or monitor chanegs.

---

# Redux Toolkit

Redux Toolkit is an official toolset from the Redux team that makes working with Redux easier and less time-consuming.

Instead of doing everything manually—like creating actions, reducers, and managing state immutability—RTK provides built-in functions that handle most of that work for you.

In simpler terms, it's a shortcut that helps you manage your app's state with less code and fewer mistakes. The goal is to make Redux more beginner-friendly and reduce the amount of code you write.

- **Less boilerplate code**: Normally, with Redux, you need to write action types, action creators, and reducers separately. With RTK's `createSlice`, you can handle all of this in one place with fewer lines of code.

- **Better async logic**: Handling async tasks like fetching data is much simpler with RTK's `createAsyncThunk`. It automatically handles loading, success, and error states, so you don't have to write them manually.

- **Easier to work with state**: RTK uses a tool called `immer` under the hood, which allows you to write state changes as if you're mutating the state directly. However, it still adheres to Redux's rule of immutability (not changing the original state).

### RTK `createSlice`

In Redux Toolkit, `createSlice` is a utility function that simplifies the process of creating a Redux slice of state. It combines actions and reducers into a single object, making the setup of Redux state management more streamlined and organized.

A slice is essentially a section of the Redux state, along with the actions and reducers that operate on it. Using `createSlice`, you can define:

- The initial state of the slice.
- Reducers that define how the state changes in response to actions.
- Action creators automatically generated based on reducer names.

##### to connect react app redux toolkit need to install `react-redux` from npm

### Access Redux State in React using `useSelector`

Use the `useSelector` hook to read data from the Redux store.

```javascript
const count = useSelector((state) => state.property);
```

**Selector function:** We define a selector function that takes the entire Redux store as an argument and returns a specific piece of data we need.
