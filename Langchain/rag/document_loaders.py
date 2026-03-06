'''Docuement laders if a component in langchain that is responsible for 
loading documents from various sources. It provides a standardized interface for 
loading documents, regardless of the source or format. This allows users to easily 
integrate different document sources into their langchain applications without having 
to worry about the underlying implementation details.
'''

'''
 Some doc loaders:
 1. TxtLoader: Loads documents from plain text files.from langchain community we need to import this loader, this also make a seperate section for metadata.
 2. PDFLoader: Loads documents from PDF files. and this loader, This load each page of the PDF as a separate document. It also extracts metadata such as the title, author, and creation date.
 for simple pdf we can use PyPDFLoader, for more complex pdf(scanned/image pdfs) we can use UnstructuredPDFLoader, need laypout and image data use PyMuPdfLoader, pdf with tables/columns PDPlumberLoader.
 3. DirectoryLoader: Loads documents from a directory. This loader can be used to load multiple documents from a directory, and it can also be configured to include subdirectories.
'''

'''
load() vs lazy_load():
- load(): This method loads all documents into memory at once. It is suitable for small to medium-sized document collections. However, it may not be efficient for large document collections, as it can consume a lot of memory.
- lazy_load(): This method loads documents on demand, meaning that it only loads a document when it is accessed. This can be more efficient for large document collections, as it reduces memory usage. However, it may introduce some latency when accessing documents for the first time.
'''

'''
WebBasedLoader: This loader i LangChain used to load and extract text content from web pages (URLs). It used BeautifulSoup under the hood to parse HTML and extract visible text.
When to use: For blogs, news artiacles, or public websites where the content is primarily test ased and static

limitations: Dose not handle Js heavy pages well (use SeleniumURLLoader for that),
'''

'''
CSV Loader: This loader is used to load data from CSV files. It can be configured to specify the delimiter, quote character, and other parameters for parsing the CSV file. each row in the CSV file is typically treated as a separate document, and the loader can also extract metadata such as column names.
When to use: For structured data in tabular format, such as datasets, spreadsheets, or
'''