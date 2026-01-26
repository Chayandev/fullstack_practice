# GraphQL – 

These notes are written as a **future reference guide** for understanding **why GraphQL exists**, **how it works**, and **how to use it effectively in real projects**.

---

## 1. Drawbacks of REST API

### 1.1 Over-Fetching

**Definition:**
Over-fetching happens when an API returns **more data than the client actually needs**.

**Example:**
You only need `username` and `phoneNumber`, but the REST API returns the **entire user profile**:

```json
{
  "id": 1,
  "username": "ramy",
  "phoneNumber": "9999999999",
  "email": "ramy@email.com",
  "address": "...",
  "profilePic": "...",
  "createdAt": "..."
}
```

You then manually filter the required fields on the client side.

**Problems:**

* Unnecessary data transfer
* Wasted network bandwidth
* Slower response time
* Poor performance on mobile/low-bandwidth networks

---

### 1.2 Under-Fetching

**Definition:**
Under-fetching happens when **one API call does not provide enough data**, forcing the client to make **multiple API calls**.

**Example:**
You need:

* `username`
* `books` associated with that user

With REST:

1. Call API to get user info
2. Call another API to get books using userId

**Problems:**

* Multiple round trips to the server
* Increased server load
* Slower UI rendering
* Complex frontend logic

---

## 2. What is GraphQL?

**GraphQL** is a **query language for APIs** and a **runtime** that allows clients to request **exactly the data they need — nothing more, nothing less**.

### Key Features

* Client controls the response structure
* Single endpoint (usually `/graphql`)
* Strongly typed schema
* Efficient data fetching
* Excellent for complex & relational data

---

## 3. GraphQL vs REST (Quick Comparison)

| Feature        | REST           | GraphQL        |
| -------------- | -------------- | -------------- |
| Endpoints      | Multiple       | Single         |
| Over-fetching  | Yes            | No             |
| Under-fetching | Yes            | No             |
| Data Shape     | Fixed          | Client-defined |
| Versioning     | Required       | Not required   |
| Related Data   | Multiple calls | Single query   |

---

## 4. GraphQL Core Concepts

### 4.1 Schema

The **schema** defines:

* What data is available
* How clients can query or modify data

It acts as a **contract** between client and server.

---

### 4.2 typeDefs (Type Definitions)

`typeDefs` describe the **shape of data** using GraphQL's type system.

**Example:**

```graphql
type User {
  id: ID!
  username: String!
  phoneNumber: String
  books: [Book]
}

type Book {
  id: ID!
  title: String!
}
```

**Important Points:**

* `!` means **non-nullable**
* Types define **what can be queried**, not how

---

### 4.3 Resolvers

**Resolvers** are functions that **fetch actual data** for each field in the schema.

**Rule to Remember:**

> Every field inside `Query`, `Mutation`, or `Subscription` must have a resolver.

**Example:**

```js
const resolvers = {
  Query: {
    users: () => usersData,
  },
  User: {
    books: (parent) => books.filter(b => b.userId === parent.id)
  }
}
```

**Flow:**

1. Client sends query
2. GraphQL matches query fields
3. Corresponding resolvers execute
4. Response is shaped exactly like the query

---

## 5. Query

Queries are used to **read/fetch data**.

**Example:**

```graphql
query {
  users {
    username
    phoneNumber
  }
}
```

Only requested fields are returned — **no over-fetching**.

---

## 6. Query Variables

Query variables allow **dynamic input** without changing the query structure.

**Example:**

```graphql
query GetUser($id: ID!) {
  user(id: $id) {
    username
  }
}
```

**Variables JSON:**

```json
{
  "id": "1"
}
```

**Benefits:**

* Cleaner queries
* Reusable queries
* Improved security

---

## 7. Related Data (Nested Queries)

GraphQL handles related data in **one request**.

**Example:**

```graphql
query {
  users {
    username
    books {
      title
    }
  }
}
```

**Why this is powerful:**

* No multiple API calls
* Backend resolves relationships
* Clean frontend logic

---

## 8. Mutation

Mutations are used to **modify data**.

### 8.1 Add Data

```graphql
mutation {
  addUser(username: "ramy") {
    id
    username
  }
}
```

### 8.2 Update Data

```graphql
mutation {
  updateUser(id: "1", username: "newName") {
    username
  }
}
```

### 8.3 Delete Data

```graphql
mutation {
  deleteUser(id: "1")
}
```

---

## 9. Important Things to Remember (Exam / Interview)

* GraphQL has **single endpoint**
* Schema is strongly typed
* Client defines response shape
* No over-fetching or under-fetching
* Resolvers connect schema to data
* Query = read, Mutation = write
* Variables make queries reusable

---

## 10. When NOT to Use GraphQL

* Simple CRUD apps with fixed data needs
* Very small projects
* When caching via HTTP is critical
* Teams unfamiliar with GraphQL tooling

---

## 11. Common GraphQL Tools

* Apollo Server / Client
* GraphiQL / Apollo Sandbox
* Prisma (ORM)
* DataLoader (performance optimization)

---
