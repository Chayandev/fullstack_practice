from dotenv import load_dotenv; load_dotenv()
from langchain_huggingface import ChatHuggingFace, HuggingFaceEndpoint

llm = HuggingFaceEndpoint(
    repo_id="meta-llama/Llama-3.1-8B-Instruct",  # provider-backed
    task="text-generation",
    max_new_tokens=200,
    temperature=0.2,
)
chat = ChatHuggingFace(llm=llm)