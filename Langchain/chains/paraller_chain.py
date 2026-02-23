
import sys
from pathlib import Path

# Add parent directory to path
sys.path.insert(0, str(Path(__file__).parent.parent))
from model import LamaChat, QwenChat, QwenCoderChat
from langchain_core.prompts import PromptTemplate
from langchain_core.output_parsers import StrOutputParser,JsonOutputParser
from langchain_core.runnables import RunnableParallel

string_parser = StrOutputParser()
json_parser = JsonOutputParser()

# 1s prompt -> Notes
notes_prompt_template=PromptTemplate(
    template="Generate structured in details study notes on {topic}",
    input_variables=['topic'],
)

# 2nd prompt - > quizes
qna_prompt_template=PromptTemplate(
template="Generate top 10 interview questions with answers on {topic} \n {format_instructions}",
input_variables=['topic'],
partial_variables={
        "format_instructions": json_parser.get_format_instructions()
    },
)

# 3rd prompt -> quizes and notes into a summary
summary_prompt_template=PromptTemplate(
template="Merge the provided notes {notes} and qna {qna} and convert into interview preparation guide",
input_variables=['notes', 'quiz']
)

notes_chain = notes_prompt_template | QwenChat |  string_parser
# notes_chain.get_graph().print_ascii() # to visualize the chain graph

qna_chain = qna_prompt_template | LamaChat | json_parser
# quize_chain.get_graph().print_ascii() # to visualize the chain graph

parrallel_chain = RunnableParallel({
    "notes": notes_chain,
    "qna": qna_chain
})
# parrallel_chain.get_graph().print_ascii() # to visualize the chain graph


merge_chain = summary_prompt_template | QwenCoderChat | string_parser
merge_chain.get_graph().print_ascii() # to visualize the chain graph

chain=parrallel_chain | merge_chain
chain.get_graph().print_ascii() # to visualize the chain graph
result=chain.invoke({"topic": "Kafka"})
print("Final Result: ", result)