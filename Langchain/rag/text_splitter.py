'''
Text Splitter for RAG (Retrieval-Augmented Generation)
Text splitter is a crucial component in RAG systems, responsible for breaking down large documents into smaller, manageable chunks that can be efficiently processed by the retrieval and generation components. The text splitter ensures that the context provided to the model is relevant and concise, improving the quality of the generated responses.
Many embedding models and lagnauges models have a maximum token limit, so text splitter helps to ensure that the input to the model does not exceed this limit. It also helps to maintain the coherence of the context by splitting the text at logical boundaries, such as sentences or paragraphs.
'''

'''
Optimixing computational resources: Workign with smaller chunks of text can be more efficient in terms of memory and processing power, especially when dealing with large documents. Text splitter allows you to break down the text into smaller pieces, which can be processed more efficiently by the model.
Improving retrieval accuracy: By splitting the text into smaller chunks, you can improve the accuracy of the retrieval component. This is because the retrieval model can focus on smaller, more relevant pieces of text when searching for information, rather than trying to match against a large document.
'''

'''
 Text spilitters: (not used in all cases, depends on the use case and the nature of the documents)
 - Lenght Based (character splitter)
    - Predefined length: This method splits the text into chunks of a predefined length, such as 512 tokens. It is a simple and efficient method, but it may not always produce coherent chunks, as it does not consider the structure of the text.
    - Overlapping chunks: This method creates overlapping chunks of text, where each chunk overlaps with the previous chunk by a certain number of tokens. This can help to maintain coherence between chunks, but it may also increase the total number of tokens processed.
 - Text strcutrue Based :  (RecuriveCharacterTextSplitter, RecursiveTextSplitter)-> better than length based as it considers the structure of the text, but it may be more complex to implement and may require more computational resources.
    - When text has a clear structure, such as paragraphs, sections, or sentences, you can use this structure to split the text. For example, you can split the text at paragraph boundaries or sentence boundaries. This can help to maintain the coherence of the context and improve the quality of the generated responses.
    - Predfined seperators.
    - It tries to break the text at the largest possible separator (e.g., paragraph) and if the resulting chunk is too large, it will try to break it at the next largest separator (e.g., sentence) until it finds a suitable chunk size.
 - Document Based: ( for those which can' be used as palin text, such as pdfs, word documents, etc. these splitters are designed to handle the specific structure and formatting of these document types.)
   - Extenstion of text structure based splitter, but with additional logic to handle the specific formatting and structure of the document type. For example, a PDF splitter may need to handle page breaks, headers, footers, and other elements that are specific to PDF documents.
 - Semantic meanding based:
   - This method uses semantic understanding of the text to split it into meaningful chunks. It may involve using natural language processing techniques to identify topics, themes, or entities in the text and splitting it based on these semantic features. This can help to ensure that the chunks are coherent and relevant to the context of the query.
   - 
'''