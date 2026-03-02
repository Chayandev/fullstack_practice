"""
RAG (Retrieval-Augmented Generation) Notes
=========================================

Why NOT to Use Fine-Tuning:
---------------------------
- Expensive: Requires massive compute resources and labeled data
- Time-consuming: Days/weeks of training vs. instant RAG setup
- Catastrophic forgetting: Model loses general knowledge when fine-tuned
- Data staleness: Fine-tuned model can't easily incorporate new info
- Overfitting: Poor generalization to unseen data/distributions
- Maintenance nightmare: Retrain every time knowledge updates

How RAG Helps:
--------------
RAG = Retrieval + Generation
- Retrieves relevant external knowledge from a vector database
- Injects it into the LLM prompt at inference time
- No model weight updates needed - purely prompt engineering

Context Learning (In-Context Learning):
---------------------------------------
Core capability of modern LLMs (GPT, Claude, etc.)
- Model learns tasks purely from examples in the prompt
- No weight updates - zero/few-shot learning
- Emergent property: Appeared suddenly at scale (~175B+ params)
  - GPT-3 (175B): First model showing reliable few-shot learning
  - Individual components don't have this ability
  - System-level behavior emerges from scale + complexity

RAG makes LLMs "smarter" by:
- Providing external knowledge at query time
- Grounding responses in real/recent/enterprise data
- Overcoming context window limitations
- Reducing hallucinations with source documents

Latest Model Context Windows (March 2026):
------------------------------------------
| Model              | Context Window    | Notes                     |
|--------------------|-------------------|---------------------------|
| GPT-5.2            | 2M tokens         | OpenAI flagship           |
| GPT-5              | 1M tokens         | Previous gen              |
| Claude 4.6         | 4M tokens         | Anthropic latest          |
| Claude 4.5         | 2M tokens         | High capability           |
| Claude 4           | 1M tokens         | Major release             |
| Claude 3.5 Sonnet  | 200K tokens       | Previous gen              |
| Claude 3 Opus      | 200K tokens       | High intelligence         |
| Gemini 2.0 Ultra   | 2M+ tokens        | Google multimodal         |
| Llama 3.1 405B     | 128K tokens       | Meta open weights         |
| Mixtral 8x22B      | 64K tokens        | Mistral efficient         |
| Command R+         | 128K tokens       | Cohere enterprise         |

RAG Architecture:
-----------------
1. Query → Embedding → Vector Search
2. Retrieve top-K relevant chunks
3. Augment prompt: "Use this context: {retrieved_docs}"
4. Generate response grounded in retrieved knowledge

Key Benefits:
- Fresh knowledge without retraining
- Enterprise data integration
- Citation tracking (traceability)
- Cost-effective vs. fine-tuning
- Handles proprietary/confidential data

Use Cases:
- Customer support (company docs)
- Legal research (case law)
- Medical diagnosis (research papers)
- Code assistance (private repos)
- Any domain with external knowledge needs
"""
