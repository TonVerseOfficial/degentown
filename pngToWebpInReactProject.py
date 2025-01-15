import os
from PIL import Image

# Define the directories you want to search for .png files
# Usually, 'src' is the main folder in React projects
IMAGE_EXTENSIONS = ('.png',)
CODE_EXTENSIONS = ('.js', '.jsx', '.ts', '.tsx')

def convert_png_to_webp(root_dir):
    for subdir, _, files in os.walk(root_dir):
        for file in files:
            file_path = os.path.join(subdir, file)
            
            # Convert PNG to WebP
            if file.lower().endswith('.png'):
                webp_path = file_path.rsplit('.', 1)[0] + ".webp"
                
                try:
                    with Image.open(file_path) as img:
                        img.save(webp_path, "webp")
                    print(f"Converted {file_path} to {webp_path}")
                    
                    # Remove original PNG if desired
                    os.remove(file_path)  # Uncomment to delete the PNGs after conversion
                    
                except Exception as e:
                    print(f"Failed to convert {file_path}: {e}")

            # Update references in code files
            elif file.endswith(CODE_EXTENSIONS):
                print(f"Checking {file_path}")
                if 'node_modules' in file_path:
                    continue    
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                updated_content = content.replace('.png', '.webp')
                
                if updated_content != content:
                    with open(file_path, 'w', encoding='utf-8') as f:
                        f.write(updated_content)
                    print(f"Updated references in {file_path}")

if __name__ == "__main__":
    root_directory = "./"  # Adjust this to your project's main directory
    convert_png_to_webp(root_directory)
