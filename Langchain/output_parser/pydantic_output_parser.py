import sys
from pathlib import Path

# Add parent directory to path
sys.path.insert(0, str(Path(__file__).parent.parent))


from model import chat
from langchain_core.prompts import PromptTemplate
from langchain_core.output_parsers import PydanticOutputParser
from pydantic import BaseModel, Field


class Person(BaseModel):
    name: str = Field(description="The name of the person")
    age: int = Field(gt=18,description="The age of the person")
    city: str = Field(description="The city where the person lives")


parser = PydanticOutputParser(pydantic_object=Person)
template = PromptTemplate(
    template="Give me a fictional person with name, age and city. {format_instructions}",
    input_variables=[],  # No input variables as we are asking for a fictional person
    partial_variables={"format_instructions": parser.get_format_instructions()},  # this fucntion is called not in runtime but at the time of template creation, so we can directly call it here
)
## Please use good model to get the correct output, otherwise you might get validation error while parsing the output as the output might not be in the correct format or might not follow the constraints defined in the pydantic model
print("Prompt: ", template.invoke({}))

chain = template | chat | parser
result = chain.invoke({})
print("Parsed output: ", result)