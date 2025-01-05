import re

markdown_to_html = {
    r"^# (.*)" : r"<h1>\1</h1>", # # Header 1
    r"^## (.*)" : r"<h2>\1</h2>", # ## Header 2
    r"^### (.*)" : r"<h3>\1</h3>", # ### Header 3
    r"^#### (.*)" : r"<h4>\1</h4>", # ### Header 3
    r"^##### (.*)" : r"<h5>\1</h5>", # ### Header 3
    r"^###### (.*)" : r"<h6>\1</h6>", # ### Header 3
    r"\*\*(.*?)\*\*" : r"<strong>\1</strong>", # **bold**
    r"\*(.*?)\*" : r"<em>\1</em>", # *italic*
    r"`(.*?)`" : r"<code>\1</code>", # `inline code`
    r"!\[(.*?)\]\((.*?)\)" : r'<img alt="\1" src="\2">', # ![alt](src)
    r"\[(.*?)\]\((.*?)\)" : r'<a href="\2">\1</a>', # [text](link)
    r"^- (.*)" : r"<li>\1</li>", # - List item
}

def markdown_to_html_converter(markdown_text):
    """Convert Markdown text to HTML."""
    html_output = markdown_text
    for markdown_pattern, html_replacement in markdown_to_html.items():
        html_output = re.sub(markdown_pattern, html_replacement, html_output, flags=re.MULTILINE)

    # Wrap list items with <ul> tags
    html_output = re.sub(r"(<li>.*?</li>)", r"<ul>\1</ul>", html_output, flags=re.DOTALL)

    return html_output

def wrap_with_html_structure(body_content, title="Document"):
    """Wrap the content with HTML structure including <head> and <body>."""
    return f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{title}</title>
    <style>
        body {{ font-family: Arial, sans-serif; line-height: 1.6; margin: 20px; }}
        h1, h2, h3 {{ color: #333; }}
        ul {{ list-style-type: disc; margin-left: 20px; }}
    </style>
</head>
<body>
{body_content}
</body>
</html>
"""

# Read Markdown from a file and write HTML to another file
def convert_markdown_file(input_file, output_file, title="Document"):
    """Convert a Markdown file to an HTML file with full structure."""
    with open(input_file, "r", encoding="utf-8") as md_file:
        markdown_content = md_file.read()

    body_content = markdown_to_html_converter(markdown_content)
    full_html = wrap_with_html_structure(body_content, title)

    with open(output_file, "w", encoding="utf-8") as html_file:
        html_file.write(full_html)

# Example usage
input_file = "example.md"  # Replace with your Markdown file path
output_file = "example.html"  # Replace with your desired HTML file path
convert_markdown_file(input_file, output_file, title="My Blog Post")
print(f"Converted {input_file} to {output_file}.")