import os

def create_directory_structure(base_path, structure):
    for folder, subfolders in structure.items():
        folder_path = os.path.join(base_path, folder)
        os.makedirs(folder_path, exist_ok=True)
        if isinstance(subfolders, dict):
            create_directory_structure(folder_path, subfolders)

# Define the directory structure
directory_structure = {
    "dist": {
        "blogs": {},
        "projects": {},
    }
}

# Set the base path
base_directory = "."

# Create the directory structure
create_directory_structure(base_directory, directory_structure)

print("Directory structure created successfully!")
