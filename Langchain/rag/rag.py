"""
RAG (Retrieval-Augmented Generation) COMPLETE Notes
===================================================

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

RAG System Creation Steps (Complete Pipeline)
=============================================

1. INDEXING (Prepare Knowledge Base for Efficient Search)
---------------------------------------------------------
Prepares documents for fast retrieval at query time (4 sub-steps):

   a) Document Ingestion
   - Load raw data: PDFs, docs, web pages, CSVs, code repos, etc.
   - Handle multiple formats (parsers for each type)
   - Clean/extract text content
   
   b) Text Chunking
   - Split large docs into smaller, semantically coherent chunks
   - Methods: Fixed-size, sentence-based, recursive, semantic
   - Typical size: 200-1000 tokens per chunk
   - Add overlap (50-100 tokens) for context preservation
   
   c) Embedding Generation
   - Convert text chunks → dense numerical vectors (embeddings)
   - Embedding models: OpenAI text-embedding-3-large, 
                     sentence-transformers, Cohere embed-english-v3.0
   - Vector dim: 768-4096 (model dependent)
   - Captures semantic meaning: "king - man + woman ≈ queen"
   
   d) Store in Vector Database
   - Persist (chunk_text, embedding_vector, metadata) tuples
   - Vector DBs: Pinecone, Weaviate, Qdrant, Chroma, FAISS
   - Enables fast approximate nearest neighbor (ANN) search

2. RETRIEVAL (Find Relevant Context)
------------------------------------
- Generate embedding for user query (same model as indexing)
- Vector similarity search: cosine similarity, Euclidean distance
- Retrieve top-K results (K=3-10 typically)
- Optional: Hybrid search (vector + keyword/BM25)
- Reranking: Cross-encoder to refine top results

3. AUGMENTATION (Enrich the Prompt)
-----------------------------------
- Combine retrieved chunks + original query
- Prompt template:
- Add instructions: "Be specific, cite sources, don't hallucinate"
- Handle token limits: truncate/summarize if needed

4. GENERATION (Produce Final Answer)
------------------------------------
- Feed augmented prompt to LLM (GPT-4, Claude, Llama, etc.)
- Generate grounded response using retrieved context
- Optional: Chain multiple retrieval-generation cycles
- Post-process: Extract citations, format response
"""
