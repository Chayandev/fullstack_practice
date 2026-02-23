
import sys
from pathlib import Path

# Add parent directory to path
sys.path.insert(0, str(Path(__file__).parent.parent))
from model import chat
from langchain_core.prompts import PromptTemplate
from langchain_core.output_parsers import StrOutputParser

parser=StrOutputParser()
prompt=PromptTemplate(
    template="Write a 5 line Poem on the topic {topic}",
    input_variables=['topic']

)

chain=prompt | chat | parser
result=chain.invoke({'topic': "Nature"})
chain.get_graph().print_ascii() # to visualize the chain graph
print("Poem: ", result)