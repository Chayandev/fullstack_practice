Runnable is basicaly a concept to define any component that can be be executed in chain/pipeline.
Like in langchain there are some component like modle, prompt , parser which all have same job input,process and output. so we can combine them in to pipepline for unit of work so all have the same fucntion like invoke,batch, stream. This is exactly the runnable.

one runnable can be merged to other to run.

# Runnables 
  - Task specific runnables
    - These are he core Langchain components that hvae been converted into Runnables so the can be used in piplelines.
    - Perform task-specifif operations like LLM calls, prompting retrieval etc
    - example: ChatOpenAi, PromptTemplate, Retriever 
  - Runnable Primitives
    - These are the fundamental building blocks for structuing execution logic in AI workflows.
    - They help orchestrae execution by defining how Runnables interact
    example: RunnableSequence (runs steps in order (| operator)), RunnablesParallel (Runs multiple steps simultaneously), RunnableMap(Maps he smae input across multiple functions), RunnablesBranch(Implements conditional execution (if-else logic)), RunnableLamda (Wraps custom Python fuctions into Runnables), RunnablPassthrough ( Just forwards input as ouput (acts as a placeholder)).



