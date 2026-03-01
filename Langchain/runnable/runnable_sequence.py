import sys
from pathlib import Path

# Add parent directory to path
sys.path.insert(0, str(Path(__file__).parent.parent))

from model import LamaChat, QwenChat
from langchain_core.prompts import PromptTemplate
from langchain_core.output_parsers import StrOutputParser
from langchain_core.runnables import RunnableSequence

prompt1= PromptTemplate(
    template="What is the capital of {country}?",
    input_variables=['country']
)

chain = RunnableSequence(prompt1 | QwenChat | StrOutputParser())
print(chain.invoke({"country": "Iran"}))