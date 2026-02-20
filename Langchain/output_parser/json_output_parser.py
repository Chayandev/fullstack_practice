from model import chat
from langchain_core.prompts import PromptTemplate
from langchain_core.output_parsers import JsonOutputParser

parser=JsonOutputParser()
template =PromptTemplate(
    template="Give me top 5 facts on {topic} \n {fromat_instructions}",
    input_variables=['topic'], # No input variables as we are asking for a fictional person
    partial_variables={"fromat_instructions": {parser.get_format_instructions()}}, # this fucntion is called not in runtime but at the time of template creation, so we can directly call it here
)

# prompt=template.invoke({})
# print("Prompt: ", prompt)

# result=chat.invoke(prompt)
# print("Raw output: ", result.content)
# parsed_output=parser.parse(result.content)
# print("Parsed output: ", parsed_output)

chain=template | chat | parser
result=chain.invoke({'topic': "India"})
print("Parsed output: ", result)