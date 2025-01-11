import re
import os

# Markdown to HTML regex rules with class support
markdown_to_html = {
    r"^# (.*) \{\.(.*?)\}" : r'<h1 class="\2">\1</h1>',  # # Header 1 with class
    r"^## (.*) \{\.(.*?)\}" : r'<h2 class="\2">\1</h2>',  # ## Header 2 with class
    r"^### (.*) \{\.(.*?)\}" : r'<h3 class="\2">\1</h3>',  # ### Header 3 with class
    r"^#### (.*) \{\.(.*?)\}" : r'<h4 class="\2">\1</h4>',  # #### Header 4 with class
    r"^\*\*(.*?)\*\* \{\.(.*?)\}" : r'<strong class="\2">\1</strong>',  # Bold with class
    r"_([^_]*)_ \{\.(.*?)\}" : r'<em class="\2">\1</em>',  # Italic with class
    r"\[(.*?)\]\((.*?)\) \{\.(.*?)\}" : r'<a href="\2" class="\3">\1</a>',  # Link with class
    r"^- (.*) \{\.(.*?)\}" : r'<li class="\2">\1</li>',  # List item with class
}

def markdown_to_html_converter(markdown_text):
    """Convert Markdown text to HTML."""
    html_output = markdown_text
    for markdown_pattern, html_replacement in markdown_to_html.items():
        html_output = re.sub(markdown_pattern, html_replacement, html_output, flags=re.MULTILINE)

    # Wrap list items with <ul> tags
    html_output = re.sub(r"(<li.*?>.*?</li>)", r"<ul>\1</ul>", html_output, flags=re.DOTALL)

    return html_output

def load_html_wrapper(wrapper_file):
    """Load the HTML wrapper template from a file."""
    with open(wrapper_file, "r", encoding="utf-8") as file:
        return file.read()

def convert_markdown_file(input_file, wrapper_file, output_folder, title="Document"):
    """Convert a Markdown file to an HTML file with full structure."""
    # Read Markdown content
    with open(input_file, "r", encoding="utf-8") as md_file:
        markdown_content = md_file.read()

    # Convert Markdown to HTML
    body_content = markdown_to_html_converter(markdown_content)

    # Load the wrapper template
    html_wrapper = load_html_wrapper(wrapper_file)

    # Insert the body content and title into the wrapper
    full_html = html_wrapper.replace("{{body}}", body_content).replace("{{title}}", title)

    # Ensure the output directory exists
    os.makedirs(output_folder, exist_ok=True)

    # Write to the output file
    output_file = os.path.join(output_folder, os.path.basename(input_file).replace(".md", ".html"))
    with open(output_file, "w", encoding="utf-8") as html_file:
        html_file.write(full_html)

    print(f"Converted {input_file} to {output_file}.")

# Example usage
input_file = "index.md"  # Replace with your Markdown file path
wrapper_file = "template.html"  # Replace with your HTML wrapper file path
output_folder = "dist"  # Folder to store compiled HTML files
convert_markdown_file(input_file, wrapper_file, output_folder, title="My Research Home")
