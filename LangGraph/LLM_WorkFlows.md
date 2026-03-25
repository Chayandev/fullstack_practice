## Workflow
**Concept:** A series of tasks are executed to achieve a Goal.

## LLM Workflows:
1. LLM workflows are a step-by-step process using which we can build complex LLM applications.
2. Each step in a workflow performs a distinct task — such as prompting, reasoning, tool calling, memory access, or decision-making.
3. Workflows can be linear, parallel, branched, or looped, allowing for complex behaviors like retries, multi-agent communication, or tool-augmented reasoning.
4. Common workflows include:

### Prompt Chaining
Prompt chaining is a technique where multiple LLM calls are connected sequentially, with the output of one prompt serving as the input to the next.

**Use cases:**
- Breaking down complex problems into simpler steps
- Refining outputs through multiple iterations
- Building context progressively for better answers

**Example:** 
User question → Extract key info → Generate analysis → Format results

### Routing
Routing involves directing input to different processing paths based on content analysis or classification.

**Use cases:**
- Directing queries to specialized models or handlers
- Categorizing user requests
- Implementing conditional logic based on input type

**Example:** 
Input → Classify → Route to general assistant OR specialized expert → Respond

### Parallelization
Parallelization executes multiple LLM calls simultaneously rather than sequentially, improving efficiency and performance.

**Use cases:**
- Processing multiple independent tasks at once
- Gathering different perspectives on the same topic
- Reducing overall execution time

**Example:** 
Input → Spawn parallel tasks (research, summarize, analyze) → Combine results

### Orchestrator Worker
This pattern uses a central orchestrator to coordinate multiple specialized worker agents or models.

**Use cases:**
- Complex multi-step projects requiring different expertise
- Delegating tasks to specialized sub-agents
- Coordinating multiple LLMs with different capabilities

**Example:** 
Orchestrator breaks task down → Assigns to workers (Writer, Editor, Reviewer) → Aggregate outputs

### Evaluator Optimizer
The evaluator-optimizer pattern uses one model to evaluate outputs and another to iteratively improve them.

**Use cases:**
- Quality assurance and validation
- Iterative improvement of responses
- Ensuring outputs meet specific criteria

**Example:** 
Initial output → Evaluator assesses quality → Optimizer revises → Evaluator checks → Final result

## LangGraph Core Concepts

### Node
In LangGraph, a node is essentially a function in Python that performs a specific task or operation within the workflow graph. Each node represents a distinct step in the computation process.

**Characteristics:**
- Encapsulates a specific operation or task
- Returns an output that can be passed to other nodes
- Can access and modify the state of the workflow

### Edge
An edge defines the connection and flow between nodes. It determines when and how to execute the next node based on the current state or conditions.

**Types of Edges:**

**i. Sequential Edges**
- Connect nodes in a linear, ordered sequence
- One node executes after another completes
- Output of one node automatically feeds to the next
- Best for: Step-by-step workflows with a clear progression

**ii. Parallel Edges**
- Execute multiple nodes simultaneously
- Nodes run concurrently without waiting for each other
- Results are collected and combined
- Best for: Independent tasks that can run at the same time
- Improves performance by reducing total execution time

**iii. Conditional Edges**
- Route execution to different nodes based on conditions
- Decision logic determines which path to follow
- Can check state, outputs, or external conditions
- Best for: Branching workflows with multiple possible paths
- Example: If user input is question, route to Q&A node; if command, route to action node
      

## State
In LangGraph, state is the shared memory that flows through your workflow — it holds all the data being passed between nodes as your graph runs.

**Key Characteristics:**
- State is a special type of dictionary where you add fields to hold the state at a particular time
- This state is passed to each node before execution, and the node reads from it
- States are mutable, meaning nodes can modify the state as they execute
- State persists across the entire workflow execution

**Purpose:**
- Maintains context and data throughout the workflow
- Allows nodes to communicate and share information
- Enables complex workflows with dependencies between steps

## Reducers
Reducers in LangGraph define how updates from nodes are applied to the shared state.

**How They Work:**
- Each key in the state can have its own reducer
- Reducers determine whether new data replaces, merges, or adds to the existing value
- They handle concurrent updates when multiple nodes modify the same state key

**Common Reducer Types:**
- **Replace Reducer**: Completely replaces the existing value with the new one
- **Append Reducer**: Adds new data to a list or collection
- **Merge Reducer**: Combines dictionaries or objects
- **Custom Reducers**: User-defined logic for complex state updates

## LangGraph Execution Model
LangGraph's execution model is inspired by Google's Pregel, a framework for large-scale graph processing.

### 1. Graph Definition
You define the core components:
- **i. State Schema**: The structure and types of data that will flow through the graph
- **ii. Nodes**: Functions that perform specific tasks and can modify state
- **iii. Edges**: Connections that determine which node executes next

### 2. Compilation
You call `.compile()` on the StateGraph object:
- Validates the graph structure for correctness
- Optimizes the execution plan
- Prepares the graph for runtime execution

### 3. Invocation
You run the graph with `.invoke(initial_state)`:
- LangGraph sends the initial state as input to the entry node(s)
- Execution begins from the starting nodes defined in the graph

### 4. Step-by-Step Execution
Execution proceeds in rounds, similar to Pregel's superstep model:
- **Round 1**: Entry nodes execute, process initial state, and send messages/updates
- **Subsequent Rounds**: Nodes receive messages from previous round, execute their logic, and send new messages
- **Termination**: Execution continues until no more messages are sent or a termination condition is met
- **Final State**: The accumulated state after all rounds completes represents the workflow result

**Execution Flow:**
- Nodes can run in parallel within each round
- Messages between nodes coordinate the flow
- State updates are applied using reducers
- The process continues until convergence or explicit termination

## Message Passing and SuperSteps

LangGraph's execution is built around **message passing** and **supersteps**, concepts borrowed from Google's Pregel framework for large-scale graph processing.

### Message Passing
Message passing is the mechanism by which nodes communicate and coordinate their execution in LangGraph:

**How It Works:**
- Nodes send messages to other nodes through edges
- Messages contain data, state updates, or control signals
- Messages are queued and delivered to target nodes in subsequent supersteps
- Enables asynchronous communication between nodes

**Key Benefits:**
- Allows nodes to run independently and concurrently
- Supports complex coordination patterns
- Enables fault tolerance and scalability
- Facilitates dynamic workflow routing

### SuperSteps
A superstep is a discrete phase of execution where all active nodes process their messages and compute simultaneously. The term "superstep" originates from Google's Pregel framework, where it represents a single iteration of parallel computation across all vertices (nodes) in the graph.

**Why "SuperStep"?**
The name reflects that each superstep is a "super" or encompassing step that:
- Contains multiple parallel computations happening simultaneously
- Represents a global synchronization point across all nodes
- Advances the entire graph computation by one logical step
- Combines the work of many individual node computations into one coordinated phase

**Execution Cycle:**
1. **Message Reception**: Each node receives all messages sent to it in the previous superstep
2. **Computation**: Nodes process their messages and current state to perform their tasks
3. **Message Sending**: Nodes send new messages to other nodes for the next superstep
4. **State Update**: Nodes can modify the shared state using reducers
5. **Synchronization**: All nodes complete their computation before the next superstep begins

**Characteristics:**
- **Bulk Synchronous Parallel (BSP)**: All nodes compute in parallel, then synchronize
- **Deterministic Execution**: Same input always produces same output
- **Fault Tolerance**: Failed nodes can be restarted without affecting correctness
- **Scalability**: Can handle large graphs with many nodes

**Termination Conditions:**
- No more messages are sent (computation converges)
- Explicit termination signal from a node
- Maximum number of supersteps reached
- Error condition encountered

**Example Flow:**
```
SuperStep 0: Initial input → Entry nodes process → Send messages
SuperStep 1: Nodes receive messages → Compute → Send new messages
SuperStep 2: Continue processing...
...
Termination: Final state collected
```

This model enables LangGraph to build complex, reliable workflows that can scale to handle sophisticated LLM applications with multiple interacting components.