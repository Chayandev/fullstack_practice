"""
LANGCHAIN (PRE v1.0) AGENT ARCHITECTURE
=======================================

Topic: ReAct Agent + AgentExecutor
Purpose: End-to-End execution of a reasoning agent that can use external tools.


--------------------------------------------------
1. REACT (Reasoning + Acting)
--------------------------------------------------

ReAct is a design pattern used in AI Agents where the LLM performs:

    Reasoning  →  Acting  →  Observation  →  Reasoning  →  Final Answer

Instead of generating an answer in a single step, the LLM:
1. Thinks about the problem
2. Decides which tool to use
3. Executes the tool
4. Observes the result
5. Continues reasoning until the final answer is produced

This allows the agent to solve complex problems that require:
- external data
- calculations
- multi-step reasoning


--------------------------------------------------
2. REACT PROMPT TEMPLATE
--------------------------------------------------

The ReAct prompt template instructs the LLM to follow a strict format:

Question: the user input

Thought: reasoning about the next step
Action: tool to call
Action Input: parameters for the tool
Observation: result returned from the tool

... (loop continues)

Thought: final reasoning
Final Answer: response for the user


Example format:

Question: What is the population of France?

Thought: I need to find the population first.
Action: Search
Action Input: France population

Observation: 67 million

Thought: I now know the population.
Final Answer: The population of France is about 67 million.



--------------------------------------------------
3. AGENT
--------------------------------------------------

The Agent is the reasoning component.

Responsibilities:
- Reads the prompt
- Decides what to do next
- Produces actions in structured format

The agent DOES NOT execute tools.

It only outputs instructions like:

Action: Search
Action Input: "population of France"


Think of the Agent as the **"Brain / Planner"**.


Agent creation (legacy):

    agent = create_react_agent(llm, tools, prompt)



--------------------------------------------------
4. AGENT EXECUTOR
--------------------------------------------------

The AgentExecutor is the runtime engine that actually runs the agent.

Responsibilities:

1. Sends input to the agent
2. Parses agent output
3. Detects tool calls
4. Executes the tool
5. Returns observation to the agent
6. Repeats loop until final answer


Think of AgentExecutor as the **Controller / Engine**.

Without the executor:
    The agent can think but cannot act.


--------------------------------------------------
5. EXECUTION LOOP
--------------------------------------------------

Execution happens in a loop.

                +-------------------+
                |    User Query     |
                +---------+---------+
                          |
                          v
                 +------------------+
                 |   AgentExecutor  |
                 +---------+--------+
                           |
                           v
                    +-------------+
                    |     LLM     |
                    |  (Agent)    |
                    +------+------+ 
                           |
                 Thought / Action
                           |
                           v
                    +-------------+
                    |  Tool Call  |
                    +------+------+ 
                           |
                           v
                    Observation
                           |
                           v
                    Back to Agent
                           |
                           v
                     Final Answer


This loop continues until the agent produces:

    Final Answer:



--------------------------------------------------
6. WHY MAX_ITERATIONS IS IMPORTANT
--------------------------------------------------

The executor runs the loop multiple times.

Without a limit the agent may enter an infinite loop.

Example:

Thought → Search
Observation → Error
Thought → Search again
Observation → Error
... repeating forever

To prevent this:

    max_iterations = 3–5


Default in older LangChain:
    max_iterations = 15



--------------------------------------------------
7. COMPONENT ARCHITECTURE
--------------------------------------------------

System components:

        User
         |
         v
    AgentExecutor
         |
         v
        Agent
         |
         v
         LLM
         |
         v
       Tools


Role Summary:

LLM
    performs reasoning

Prompt
    instructs reasoning format

Agent
    generates tool actions

Tools
    external capabilities

AgentExecutor
    runs the loop and executes tools



--------------------------------------------------
8. SIMPLE WORKING EXAMPLE
--------------------------------------------------

Question:
"What is the square root of the population of France?"

Execution Flow:


Step 1
------

Thought:
I need the population of France.

Action:
Search

Action Input:
"France population"


Step 2
------

Observation:
67,000,000


Step 3
------

Thought:
Now I should calculate the square root.

Action:
Calculator

Action Input:
sqrt(67000000)


Step 4
------

Observation:
8185.35


Step 5
------

Thought:
I now have the result.

Final Answer:
The square root of France's population is about 8185.



--------------------------------------------------
9. BASIC CODE STRUCTURE
--------------------------------------------------

from langchain import hub
from langchain.agents import create_react_agent, AgentExecutor
from langchain_openai import ChatOpenAI

llm = ChatOpenAI()

tools = [search_tool, calculator_tool]

prompt = hub.pull("hwchase17/react")

agent = create_react_agent(llm, tools, prompt)

agent_executor = AgentExecutor(
    agent=agent,
    tools=tools,
    verbose=True,
    handle_parsing_errors=True,
    max_iterations=5
)

agent_executor.invoke(
    {"input": "What is the population of France?"}
)



--------------------------------------------------
10. QUICK MEMORY SUMMARY
--------------------------------------------------

ReAct
    reasoning + tool use pattern

Prompt
    enforces Thought / Action / Observation format

Agent
    decides what to do

Tools
    perform external tasks

AgentExecutor
    runs the loop and executes tools

Final Answer
    returned to user
"""

"""
are partially autonomous.

They can:

✔ Reason
✔ Decide which tool to use
✔ Execute tools
✔ Iterate until answer

But they still have limitations.
Your ReAct agent does not control the full workflow.

Limitations:

1. No Long-Term Planning

The agent only decides next action, not a long strategy.

Example:

Goal:

Build a report about Tesla revenue.

A real autonomous agent would plan:

Step 1 → Search Tesla revenue
Step 2 → Extract yearly data
Step 3 → Analyze trend
Step 4 → Generate report

ReAct agent only thinks one step at a time.

2. Hard Constraints by Developer

You define:

tools

max_iterations

prompt structure

So the agent operates inside developer-controlled boundaries.

3. No Persistent Memory

By default it doesn't remember previous tasks or experiences.

True autonomous agents usually have:

long-term memory

vector stores

learning loops

4. No Self Goal Generation

ReAct agents solve given tasks only.

Autonomous systems can:

create subtasks

schedule work

run continuously

Example: AutoGPT style systems
"""