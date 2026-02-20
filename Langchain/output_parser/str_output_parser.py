from dotenv import load_dotenv; load_dotenv()
from langchain_huggingface import ChatHuggingFace, HuggingFaceEndpoint
from langchain_core.prompts import PromptTemplate
from langchain_core.output_parsers import StrOutputParser

llm = HuggingFaceEndpoint(
    repo_id="meta-llama/Llama-3.1-8B-Instruct",  # provider-backed
    task="text-generation",
    max_new_tokens=200,
    temperature=0.2,
)
chat = ChatHuggingFace(llm=llm)


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

# prompt1=template1.invoke({'topic':"Water loggin in India"})
# result=chat.invoke(prompt1)

# prompt2=template2.invoke({'text':result.content})
# summary=chat.invoke(prompt2)
# print("Report: ", result.content)
# print("Summary: ", summary.content)

# Using StrOutputParser to get the summary as a string
output_parser = StrOutputParser()
chain=template1 | chat | output_parser | template2 | chat | output_parser
result = chain.invoke({'topic': "Water loggin in India"})
print("Summary: ", result)