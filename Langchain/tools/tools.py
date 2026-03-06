"""
TOOLS IN LANGCHAIN (Gen-AI)

1) What is a Tool
A Tool in LangChain is a function or capability that an LLM (agent) can call to perform actions outside the model’s knowledge. 
LLMs by themselves can only generate text based on training data, but tools allow them to:
- Access external data
- Perform calculations
- Call APIs
- Interact with databases
- Execute code or workflows

In simple terms:
Tool = A callable function that the LLM can use to get real-world or updated information.

Main components of a tool:
- Name → Identifier used by the agent
- Description → Helps the LLM decide when to use the tool
- Function → The actual logic that runs
- Input Schema → Defines expected parameters

Flow:
User Query → Agent → Chooses Tool → Tool Executes → Result Returned → LLM Generates Final Answer


2) Built-in Tools
LangChain provides several prebuilt tools so developers do not need to create everything from scratch.

Examples of built-in tools include:
- Web search tools
- Python execution tools
- Database query tools
- File system tools
- API calling tools

Purpose of built-in tools:
- Quickly integrate common capabilities
- Reduce development time
- Provide tested and reliable functionality
- Enable agents to interact with real-world systems easily

Example use cases:
- Searching latest information from the internet
- Running Python code for calculations
- Retrieving documents from a database
- Reading or writing files


3) Why Create Custom Tools
Built-in tools are general-purpose, but real-world applications often require domain-specific functionality.

Custom tools are created when:
- You need to call internal APIs
- You want to query your company database
- You need business-specific logic
- You want to integrate proprietary systems
- You want to control how the LLM interacts with external services

Benefits of custom tools:
- Tailored to application needs
- Better control over data flow
- More accurate responses
- Enables automation of real workflows

Example:
A custom tool for a blood donation app might:
- Find nearby donors
- Check request status
- Fetch user profile data


4) Toolkit
A Toolkit is a collection of related tools grouped together for a specific purpose.

Instead of giving many individual tools to an agent, a toolkit organizes them logically.

Toolkit = Group of tools designed for a specific domain or system.

Examples:
Database Toolkit
- Query database
- List tables
- Get schema
- Run SQL safely

API Toolkit
- Fetch data
- Send updates
- Authenticate users

Advantages of using toolkits:
- Better organization
- Easier maintenance
- Scalable architecture
- Reusable tool collections

Flow with Toolkit:
Agent → Toolkit → Selects Appropriate Tool → Executes → Returns Output


write notes on tools (gen-ai lagchain) with given points below (notes will be in doc string)

: what is tools 
: built in tools
: why to create custom tools
: Toolkit

TOOLS IN LANGCHAIN (Gen-AI)

1) What is a Tool
A Tool in LangChain is a function or capability that an LLM (agent) can call to perform actions outside the model’s knowledge. 
LLMs by themselves can only generate text based on training data, but tools allow them to:
- Access external data
- Perform calculations
- Call APIs
- Interact with databases
- Execute code or workflows

In simple terms:
Tool = A callable function that the LLM can use to get real-world or updated information.

Main components of a tool:
- Name → Identifier used by the agent
- Description → Helps the LLM decide when to use the tool
- Function → The actual logic that runs
- Input Schema → Defines expected parameters

Flow:
User Query → Agent → Chooses Tool → Tool Executes → Result Returned → LLM Generates Final Answer


2) Built-in Tools
LangChain provides several prebuilt tools so developers do not need to create everything from scratch.

Examples of built-in tools include:
- Web search tools
- Python execution tools
- Database query tools
- File system tools
- API calling tools

Purpose of built-in tools:
- Quickly integrate common capabilities
- Reduce development time
- Provide tested and reliable functionality
- Enable agents to interact with real-world systems easily

Example use cases:
- Searching latest information from the internet
- Running Python code for calculations
- Retrieving documents from a database
- Reading or writing files


3) Why Create Custom Tools
Built-in tools are general-purpose, but real-world applications often require domain-specific functionality.

Custom tools are created when:
- You need to call internal APIs
- You want to query your company database
- You need business-specific logic
- You want to integrate proprietary systems
- You want to control how the LLM interacts with external services

Benefits of custom tools:
- Tailored to application needs
- Better control over data flow
- More accurate responses
- Enables automation of real workflows

Example:
A custom tool for a blood donation app might:
- Find nearby donors
- Check request status
- Fetch user profile data


4) Toolkit
A Toolkit is a collection of related tools grouped together for a specific purpose.

Instead of giving many individual tools to an agent, a toolkit organizes them logically.

Toolkit = Group of tools designed for a specific domain or system.

Examples:
Database Toolkit
- Query database
- List tables
- Get schema
- Run SQL safely

API Toolkit
- Fetch data
- Send updates
- Authenticate users

Advantages of using toolkits:
- Better organization
- Easier maintenance
- Scalable architecture
- Reusable tool collections

Flow with Toolkit:
Agent → Toolkit → Selects Appropriate Tool → Executes → Returns Output

Not make notes on tool calling 
:-
tool binding
Tool calling 
### also write who call and execute the tool 

TOOLS IN LANGCHAIN (GEN-AI)

1) What is a Tool
A Tool in LangChain is a function that an LLM can use to perform tasks outside its normal text generation ability. 
Large Language Models cannot directly access databases, APIs, or real-time data. Tools allow the model to interact with external systems.

In simple terms:
Tool = A function that the model can request to run when it needs extra information or actions.

A tool usually contains:
- Name of the tool
- Description of when to use it
- Input parameters
- Function logic that executes the task

Basic Flow:
User Query → LLM/Agent decides a tool is needed → Tool runs → Result returned → Final response generated.


2) Built-in Tools
Built-in tools are tools already provided by LangChain. These tools are commonly used functionalities that many AI applications require.

Examples:
- Web search tools
- Python REPL tool (to run Python code)
- File system tools
- Database tools
- API request tools

Why built-in tools are useful:
- Saves development time
- Pre-tested and optimized
- Easy integration
- Common capabilities already implemented

Example use cases:
- Searching current information
- Running calculations
- Fetching documents
- Querying a database


3) Why Create Custom Tools
Sometimes built-in tools are not enough for a specific application. In such cases, developers create custom tools.

Custom tools are needed when:
- You need to call internal company APIs
- You want to interact with your own database
- You need application-specific logic
- You want controlled and secure operations
- You want the AI system to automate real workflows

Advantages of custom tools:
- Domain-specific functionality
- More control over execution
- Better integration with existing systems
- Scalable architecture


4) Toolkit
A Toolkit is a collection of related tools grouped together.

Instead of giving many separate tools to an agent, they can be organized into a toolkit.

Toolkit = A structured group of tools for a particular domain.

Examples:
Database Toolkit
- Query database
- List tables
- Retrieve schema
- Validate SQL

API Toolkit
- Fetch data from API
- Send data to service
- Update records

Benefits of toolkits:
- Organized tool management
- Easier maintenance
- Reusability
- Better system design


5) Tool Binding
Tool binding is the process of attaching tools to a model so that the model knows which tools it is allowed to use.

In LangChain, tools are bound to the LLM before execution.

Meaning:
The model gets awareness of available tools and their descriptions so it can decide when to call them.

Example concept:
LLM + Tools → Bound Model

Why tool binding is important:
- The model understands available capabilities
- Enables automatic tool selection
- Helps the agent decide which tool to use
- Improves structured reasoning

Without tool binding:
The model cannot call tools.


6) Tool Calling
Tool calling happens when the model decides that a tool is required to answer a user query.

Instead of generating a direct answer, the model generates a tool call request with parameters.

Example scenario:
User: "What is the weather in Delhi?"
Model decides:
→ Needs a weather API tool
→ Calls the weather tool
→ Tool returns result
→ Model generates final answer


7) Who Calls and Executes the Tool
This is an important concept.

Who calls the tool:
The LLM (or Agent) decides which tool should be used based on the user query and tool descriptions.

Who executes the tool:
The application runtime / LangChain system executes the tool function in the backend.

Detailed flow:
User Input
   ↓
LLM / Agent analyzes the query
   ↓
LLM decides to call a tool
   ↓
LangChain runtime executes the tool function
   ↓
Tool returns output
   ↓
LLM uses the result to generate the final response

So in summary:
Model / Agent → Decides which tool to call  
LangChain Runtime / Application Code → Executes the tool
"""
