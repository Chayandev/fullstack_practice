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
"""
