import sys
from pathlib import Path

# Add parent directory to path
sys.path.insert(0, str(Path(__file__).parent.parent))
from model import LamaChat, QwenChat
from langchain_core.prompts import PromptTemplate
from langchain_core.output_parsers import StrOutputParser
from langchain_core.runnables import RunnableParallel

prompt1= PromptTemplate(
    template="Generate tweet about the topic {topic}",
    input_variables=['topic']
)
prompt2= PromptTemplate(
    template="Generate a LinkedIn post about the topic {topic}",
    input_variables=['topic']
)

chain1 = prompt1 | LamaChat | StrOutputParser() # this is runnale sequence of prompt, model and parser. You can also create it separately and then use it in parallel chain.
chain2 = prompt2 | QwenChat | StrOutputParser()
parallel_chain = RunnableParallel({
    "tweet": chain1,
    "linkedin_post": chain2
})
result = parallel_chain.invoke({"topic": "Artificial Intelligence"})
print("Tweet: ", result['tweet'])
print("LinkedIn Post: ", result['linkedin_post'])