# Agentic AI

## Key characteristics

1. Autonomy
   - Autonomy is the AI system’s ability to make decisions and take actions on its own to achieve a given goal, without step-by-step human instructions.
   - Example: An autonomous recruiter can screen candidates and propose next steps.
   - Features of autonomy:
     - Execution
     - Decision making
     - Tool usage

2. Controlled autonomy
   - Permission scope: limit which tools or actions the agent can perform independently (e.g., can screen candidates, but requires approval before rejecting anyone).
   - Human-in-the-loop (HITL): insert checkpoints where human approval is required before continuing (e.g., "Can I post this JD?").
   - Override controls: allow users to stop, pause, or change the agent’s behavior at any time (e.g., "Pause screening command").
   - Guardrails and policies: define hard rules or ethical boundaries the agent must follow (e.g., never schedule interviews on weekends).

## Goal-oriented

- Goal-oriented means the AI operates with a persistent objective in mind and continuously drives actions toward that objective instead of only responding to isolated prompts.
- Goal properties:
  - Goals act as a compass for autonomy.
  - Goals can include constraints.
  - Goals can be stored in core memory.
  - Goals can be updated or altered.

## Planning

- Planning is the agent’s ability to break down a high-level goal into a structured sequence of actions or subgoals and choose the best path to achieve outcomes.
- Example process:
  1. Generate multiple candidate plans
     - Plan A: Post the job description on LinkedIn, GitHub Jobs, AngelList.
     - Plan B: Use internal referrals and hiring agencies.
  2. Evaluate each plan by:
     - Efficiency (which is faster?)
     - Tool availability
     - Cost (does it require premium tools?)
     - Risk (what if no applications come?)
     - Alignment with constraints (remote-only, budget, timeline)
  3. Select the best plan using:
     - Human-in-the-loop input (e.g., "Which option do you prefer?")
     - Pre-programmed policies (e.g., prioritizing low-cost channels)

## Reasoning

- Reasoning is the cognitive process where an agent interprets information, draws conclusions, and makes decisions in both planning and execution phases.

### Reasoning during planning:
1. Goal decomposition: break abstract goals into concrete steps.
2. Tool selection: decide which tool is needed for each step.
3. Resource estimation: estimate time, dependencies, and risks.

### Reasoning during execution:
1. Decision-making: choose among options (e.g., if three candidates match, schedule interviews with top two, reject one).
2. HITL handling: know when to pause and ask for help (e.g., uncertain about salary range).
3. Error handling: interpret tool/API failures and recover gracefully.

## Adaptability

- Adaptability is the agent’s ability to modify plans, strategies, or actions in response to unexpected conditions while remaining aligned with the objective.
- Examples of adaptation:
  1. Handling failures (e.g., calendar API unavailable).
  2. Responding to external feedback (e.g., low number of applications).
  3. Adjusting to changing goals (e.g., hiring a freelancer instead of a full-time role).

## Context awareness

- Context awareness means the agent understands, retains, and uses relevant information from ongoing tasks, past interactions, user preferences, and environmental cues.
- It supports better decisions across multi-step processes.
- Implementation through memory:
  - Short-term memory
  - Long-term memory

## Agent architecture components

### Brain
- Goal interpretation
- Planning
- Reasoning
- Tool selection
- Communication

### Orchestrator
- Task sequencing
- Conditional routing
- Retry logic
- Looping and iteration
- Delegation

### Tools
- External actions
- Knowledge base access

### Memory
- Short-term memory
- Long-term memory
- State tracking

### Supervisor
- Approval requests (HITL)
- Guardrail enforcement
- Edge-case escalation
