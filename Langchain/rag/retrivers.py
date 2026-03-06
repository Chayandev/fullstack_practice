'''
A retriver s a componenent in Langchain that fetches relevant documents from a data source based on a query. 
It is a crucial part of the Retrieval-Augmented Generation (RAG) framework, which combines retrieval and generation to produce more accurate and contextually relevant responses.
The retriever is responsible for searching through a collection of documents and returning those that are most relevant to the user's query,
which can then be used by the generation component to produce a response.

Threre are multipel types of retrivers( based on retrivers based on data soruce and another is based on search strategy) in Langchain, each designed to work with different types of data sources and retrieval methods. Some common types of retrievers include:
1. WikipediaRetriever: This retriever is designed to fetch relevant articles from Wikipedia based on a query. It uses the Wikipedia API to search for articles and retrieve their content.
2. Vector Store Retriever: This retriever is designed to work with vector stores, which are databases that store document embeddings. It retrieves relevant documents based on the similarity of their embeddings to the query embedding. top k similar documents are retrieved based on cosine similarity or other distance metrics.
'''

"""
Maximal Marginal Relevance (MMR)

Definition
----------
Maximal Marginal Relevance is a retrieval strategy used in search systems
and RAG pipelines to select results that are both:
1. Relevant to the user query
2. Diverse from each other

It helps reduce redundancy in retrieved documents or text chunks.

Why MMR is Needed
-----------------
Standard vector similarity search often returns many chunks that are very
similar to each other. This wastes context window space and reduces the
quality of information sent to the LLM.

MMR solves this by balancing:
- Query relevance
- Result diversity

Core Idea
---------
Select the next document that maximizes:
    relevance_to_query - similarity_with_selected_documents

This ensures each selected chunk adds new information.

MMR Workflow
------------
1. Embed the user query.
2. Retrieve top-K candidate documents using vector similarity search.
3. Iteratively select documents using MMR scoring.
4. Return the final diverse set of documents.

Step-by-Step Process
--------------------
1. Perform vector search to get top N results.
2. Select the most relevant document first.
3. For remaining documents:
   - Compute similarity with the query.
   - Compute similarity with already selected documents.
4. Choose the document with the best MMR score.
5. Repeat until desired number of documents is selected.

MMR Formula (Conceptual)
------------------------
MMR(Di) =
    lambda * similarity(query, Di)
    - (1 - lambda) * max(similarity(Di, Dj))

Where:
- Di = candidate document
- Dj = already selected document
- lambda = trade-off parameter (0 to 1)

Lambda Parameter
----------------
lambda ≈ 1.0 → prioritize relevance
lambda ≈ 0.5 → balance relevance and diversity
lambda ≈ 0.0 → prioritize diversity

Typical Values in RAG
---------------------
Initial retrieval: 15–30 documents
Final selected: 4–6 documents
Lambda: 0.5 to 0.7

Advantages
----------
- Reduces duplicate or similar chunks
- Improves information coverage
- Uses context window more efficiently
- Improves RAG answer quality

Where MMR is Commonly Used
--------------------------
- Retrieval-Augmented Generation (RAG)
- Vector database retrieval
- Document search engines
- Chatbot knowledge retrieval
- Question answering systems

Example Scenario
----------------
Query: "How async works in FastAPI"

Vector search returns:
1. Async overview
2. Async event loop explanation
3. Async example
4. Async overview (similar content)

MMR selects:
1. Async overview
2. Event loop explanation
3. Practical example
4. Performance benefits

Result:
More diverse and useful context for the LLM.
"""

"""
Multi Query Retriever

Definition
----------
Multi Query Retrieval is a technique used in Retrieval-Augmented Generation (RAG)
systems where multiple variations of a user query are generated to improve
document retrieval.

Instead of relying on a single query embedding, the system creates multiple
semantically different queries and retrieves documents for each one.

This increases the chance of finding relevant information that might be missed
by a single query.

Problem It Solves
-----------------
Vector search sometimes fails because:
- The user's query wording may not match the document wording.
- Important documents use different terminology.
- Embedding similarity might miss certain semantic angles.

Multi Query Retrieval improves recall by exploring multiple perspectives of
the same query.

Core Idea
---------
1. Generate multiple alternative queries from the original query using an LLM.
2. Run retrieval for each generated query.
3. Combine and deduplicate results.
4. Send the final set of documents to the LLM.

Basic Workflow
--------------
User Query
   ↓
LLM generates multiple query variations
   ↓
Run vector search for each query
   ↓
Merge retrieved documents
   ↓
Remove duplicates
   ↓
Return final document set

Example
-------
Original Query:
"How does async work in FastAPI?"

Generated Queries:
1. "Explain asynchronous programming in FastAPI"
2. "FastAPI event loop and async functions"
3. "Why FastAPI supports async operations"
4. "Async vs sync in FastAPI"

Each query may retrieve different but relevant documents.

Advantages
----------
- Improves retrieval recall
- Handles vocabulary mismatch
- Finds hidden relevant documents
- Works well with semantic search systems

Typical Use in RAG
------------------
Step 1: User asks a question
Step 2: LLM generates 3–5 alternate queries
Step 3: Retrieve top results for each query
Step 4: Combine results
Step 5: Optional reranking (MMR or reranker model)
Step 6: Send best documents to LLM

Common Parameters
-----------------
Number of generated queries: 3–5
Documents per query retrieval: 5–10
Final selected documents: 4–8

When to Use Multi Query Retrieval
---------------------------------
- Knowledge bases
- Documentation search
- Technical Q&A systems
- Complex or ambiguous queries
- Large document collections

Limitations
-----------
- Slightly higher latency
- More embedding/search operations
- Requires a good query generation prompt

Key Insight
-----------
Single-query retrieval optimizes precision.
Multi-query retrieval improves recall.

Best practice in modern RAG systems:
Combine Multi Query Retrieval + MMR + Reranking.
"""

"""
Contextual Compression Retriever

Definition
----------
Contextual Compression Retrieval is a technique used in RAG systems where
retrieved documents are compressed to keep only the parts that are relevant
to the user’s query before sending them to the LLM.

Instead of passing full chunks, the system filters or summarizes the content
based on the query context.

Problem It Solves
-----------------
Normal retrieval returns chunks that may contain:
- Irrelevant sentences
- Extra information
- Noise that wastes token space

This reduces the effectiveness of the LLM context window.

Contextual Compression ensures:
Only the most relevant content is passed to the model.

Core Idea
---------
Retrieve documents → filter/compress them using the query → send only
relevant parts to the LLM.

Basic Workflow
--------------
User Query
   ↓
Vector / Hybrid Retrieval
   ↓
Get top documents
   ↓
Compression step (filter relevant content)
   ↓
Send compressed context to LLM

How Compression Happens
-----------------------
Compression can be done using:
1. LLM-based filtering
2. Extractive summarization
3. Keyword-based filtering
4. Relevance scoring models

Types of Contextual Compression
-------------------------------
1. LLM Compression
   The LLM reads a document and extracts only relevant sentences.

2. Extractive Compression
   Keeps only sentences that match the query.

3. Embedding-based Filtering
   Removes low-similarity parts of the document.

4. Chain Filtering
   Multiple filtering steps applied sequentially.

Example
-------
Query:
"How does async database connection work in FastAPI?"

Retrieved chunk:
--------------------------------
FastAPI is a modern Python framework.
It supports async programming.
It is used for APIs and microservices.
Async database connections improve performance
by allowing non-blocking operations.
--------------------------------

Compressed result:
--------------------------------
Async database connections improve performance
by allowing non-blocking operations.
--------------------------------

Advantages
----------
- Reduces token usage
- Improves LLM response quality
- Removes irrelevant context
- Better use of context window

Where It Is Used
----------------
- Large RAG pipelines
- Document question answering
- Enterprise knowledge search
- Chatbots with long documents

Typical Pipeline in Modern RAG
------------------------------
User Query
   ↓
Multi Query Retrieval
   ↓
Vector / Hybrid Search
   ↓
MMR (diversity selection)
   ↓
Contextual Compression
   ↓
LLM

Key Insight
-----------
Retrieval finds relevant documents.
Contextual compression extracts relevant information
from those documents.
"""