import markdown
import os
import glob

INDEX_PATH = "src"
BLOGS_PATH = "src/blogs"
DIST_BLOGS_PATH = "dist/blogs"

markdown_files = glob.glob(os.path.join(BLOGS_PATH, "*.md"))

for file_path in markdown_files:
    markdown_text = open(file_path).read()
    metadata = "\n".join(markdown_text.split('\n')[1:4])
    markdown_text = "\n".join(markdown_text.split('\n')[6:])
    html_content = markdown.markdown(markdown_text, extensions=['sane_lists'])

    html_page = f"""
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Rakshit Kr. Singh</title>
</head>
<body>
{html_content}
</body>
</html>
"""

    with open(DIST_BLOGS_PATH + file_path[9:-3] + ".html", 'w') as f:
        f.write(html_page)
