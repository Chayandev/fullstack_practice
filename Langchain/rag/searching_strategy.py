'''
BM25 (Best Matching 25) is a ranking algorithm used in search engines to find how relevant a document is to a query. It is part of traditional information retrieval (before embeddings/vector search became popular).

In simple terms:

BM25 scores documents based on how many times the query words appear in a document and how important those words are across all documents.
'''
'''
Core ideas behind BM25
1. Term Frequency (TF)

How often the word appears in the document.

Example:

query word: database
Doc A: appears 5 times
Doc B: appears 1 time

Doc A gets a higher score.

But BM25 limits the effect so repeating a word 100 times doesn't dominate.

2. Inverse Document Frequency (IDF)

How rare a word is across all documents.

Example:

word: the → appears everywhere → low importance
word: embeddings → rare → high importance

Rare words help ranking more.
'''



'''
In RAG systems the flow looks like this : Hbrid Serach Strategy (BM25 + Vector Search)
User query
   ↓
BM25 search
   +
Vector similarity search
   ↓
Combine results
   ↓
Rerank
   ↓
Send to LLM

This improves accuracy a lot.
'''