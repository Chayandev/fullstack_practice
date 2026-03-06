'''
A vector store is a system desigened to store and retrive data represented as numerical vecotrs. 
In the context of langchain, a vector store is used to store and retrive document embeddings, 
which are numerical representations of documents that capture their semantic meaning. 
Vector stores are essential for tasks such as similarity search, 
where you want to find documents that are semantically similar to a given query.

Key features:
Storage: Ensures that vectors and their associated metadata are retained, whether in memoru for quick looksup or in a database for persistence.
Similarity Search: Provides efficient methods for finding vectors that are similar to a given query vector, often using distance metrics like cosine similarity or Euclidean distance.
Indexing: Provide a data strcuture or method that enables fast similarity searchs on high-dimensionla vectors,(e.g., using approximate nearest neighbor algorithms like HNSW or Faiss).

'''

''' 
vector store vs vector database:
- Vector Store: A vector store is a more general term that refers to any system that can store and retrieve vectors. It can be implemented in various ways, such as in-memory data structures, file-based storage, or even using a traditional database. A vector store may not necessarily have advanced features for similarity search or indexing.
- Vector Database: A vector database is a specific type of vector store that is optimized for storing with ACID properties and retrieving vectors, particularly for tasks like similarity search. Vector databases often include features such as efficient indexing, support for high-dimensional vectors, and optimized algorithms for similarity search. They are designed to handle large volumes of vector data and provide fast retrieval based on vector similarity.
In summary, while all vector databases are vector stores, not all vector stores are vector databases.
and retrieving vectors, particularly for tasks like similarity search. Vector databases often include features such as efficient indexing, support for high-dimensional vectors, and optimized algorithms for similarity search. They are designed to handle large volumes of vector data and provide fast retrieval based on vector similarity.
In summary, while all vector databases are vector stores, not all vector stores are vector databases.
- FAISS(Vector store): Facebook AI Similarity Search, an open-source library for efficient similarity search and clustering of dense vectors. It provides a collection of algorithms for indexing and searching large collections of vectors, making it suitable for applications like nearest neighbor search, clustering, and dimensionality reduction.
earch
- Chroma DB (Vector database): An open-source vector database designed for efficient storage and retrieval of high-dimensional vectors. It provides features such as fast similarity search, support for large datasets, and integration with machine learning workflows.
- Pinecone (Vector database): A managed vector database service that provides scalable and efficient storage and retrieval of vector data. It offers features such as real-time indexing, low-latency search, and integration with popular machine learning frameworks.
- pgvector (Vector database): An extension for PostgreSQL that adds support for vector data types and similarity search. It allows you to store and query high-dimensional vectors directly within a PostgreSQL database, making it suitable for applications that require both structured data and vector search capabilities.
'''