import sys
from pathlib import Path

# Add parent directory to path
sys.path.insert(0, str(Path(__file__).parent.parent))
from model import LamaChat, QwenChat, QwenCoderChat
from langchain_core.prompts import PromptTemplate
from langchain_core.output_parsers import StrOutputParser
from langchain_core.output_parsers import PydanticOutputParser
from pydantic import BaseModel, Field
from typing import Literal
from langchain_core.runnables import RunnableBranch,RunnableLambda

class Feedback(BaseModel):
    sentiment: Literal['positive', 'negative'] = Field(description="The sentiment of the feedback")


string_parser = StrOutputParser()
pydantic_output_parser = PydanticOutputParser(pydantic_object=Feedback)

prompt1= PromptTemplate(
    template="Classify the sentiment of the following text as Positive, Negative: \n {feedback} \n {format_instructions}",
    input_variables=['feedback'],
    partial_variables={"format_instructions": pydantic_output_parser.get_format_instructions()}
)

prompt2=PromptTemplate(
    template="Write one best appropiate response to this positive feedback: {feedback}",
    input_variables=['feedback']
)

prompt3=PromptTemplate(
    template="Write one best appropiate response to this negetive feedback: {feedback}",
    input_variables=['feedback']
)


classifier_chain = prompt1 | QwenCoderChat | pydantic_output_parser
positive_branch = prompt2 | LamaChat | string_parser
negetive_branch = prompt3 | LamaChat | string_parser

branch_chain = RunnableBranch(
    (lambda x: x.sentiment == "positive", positive_branch),
    (lambda x: x.sentiment == "negative", negetive_branch),
    RunnableLambda(lambda x: "Sorry, I could not classify the sentiment of the feedback.")
)

chain=classifier_chain | branch_chain
chain.get_graph().print_ascii() # to visualize the chain graph
result=chain.invoke({"feedback": "I don't love the new design of your website!"})
print("Response: ", result)
