
import sys
from pathlib import Path

# Add parent directory to path
sys.path.insert(0, str(Path(__file__).parent.parent))
from model import LamaChat as chat
from langchain_core.prompts import PromptTemplate
from langchain_core.output_parsers import StrOutputParser

parser = StrOutputParser()
# 1s prompt -> Detailed respot
template1=PromptTemplate(
    template="Write a detailed report on {topic}",
    input_variables=['topic']
)

# 2nd prompt - >Summary
template2=PromptTemplate(
template="Write a 5 line summary on the follwing text report. /n {text}",
input_variables=['text']
)

# Using StrOutputParser to get the summary as a string
chain=template1 | chat| parser | template2 | chat | parser
chain.get_graph().print_ascii() # to visualize the chain graph
result = chain.invoke({'topic': "Ai in Job market"})
print("Summary: ", result)