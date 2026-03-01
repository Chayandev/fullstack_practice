from langchain_huggingface import ChatHuggingFace, HuggingFaceEndpoint

llm1 = HuggingFaceEndpoint(
    repo_id="meta-llama/Llama-3.1-8B-Instruct",  # provider-backed
    task="text-generation",
    temperature=0.1,
)

llm2=HuggingFaceEndpoint(
    repo_id="Qwen/Qwen2.5-7B-Instruct",
    task="text-generation",
    temperature=0.2,
)

llm3=HuggingFaceEndpoint(
    repo_id="Qwen/Qwen3-Coder-Next",
    task="text-generation",
    temperature=0.2,
)


LamaChat = ChatHuggingFace(llm=llm1)
QwenChat=ChatHuggingFace(llm=llm2)
QwenCoderChat=ChatHuggingFace(llm=llm3)