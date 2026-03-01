import sys
from pathlib import Path

# Add parent directory to path
sys.path.insert(0, str(Path(__file__).parent.parent))
from model import LamaChat, QwenChat
from langchain_core.prompts import PromptTemplate
from langchain_core.output_parsers import StrOutputParser
from langchain_core.runnables import RunnableParallel, RunnablePassthrough

prompt1= PromptTemplate(
    template="Write a joke about the topic {topic}",
    input_variables=['topic']
)

prompt2= PromptTemplate(
    template="Write a funny response to this joke: {joke}",
    input_variables=['joke']
)

chain1 = prompt1 | LamaChat | StrOutputParser() # this is runnale sequence of prompt, model and parser. You can also create it separately and then use it in parallel chain.
chain2 = prompt2 | QwenChat | StrOutputParser()

parallel_chain = RunnableParallel({
    "joke": RunnablePassthrough(), # RunnablePassthrough is used to pass the output of chain1 to chain2 without any modification. You can also use RunnableLambda if you want to modify the output before passing it to chain2.
    "funny_response": chain2
})

final_chain = chain1 | parallel_chain
result = final_chain.invoke({"topic": "Programming"})
print("Joke: ", result['joke'])
print("Funny Response: ", result['funny_response'])