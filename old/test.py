import markdown

# Markdown content with a numbered list
markdown_text = """
1. Bananas
2. Apples
3. Oranges
4. Apples
5. Oranges
6. Pears
"""

# Convert Markdown to HTML using the 'sane_lists' extension
html = markdown.markdown(markdown_text, extensions=['sane_lists'])
print(html)
