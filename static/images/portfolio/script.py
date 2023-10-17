import os

from PIL import Image

# Input and output directories
input_dir = '.'

# Maximum JPEG size in bytes (200 KB)
max_size_bytes = 200 * 1024

default_quality = 70

# Function to convert PNG to JPEG and compress
def convert_to_jpeg_and_compress(input_path, output_path):
    img = Image.open(input_path)
    
    # Convert to RGB (some PNG images may have transparency)
    img = img.convert('RGB')

    # Save as JPEG with specific quality and optimize for size
    img.save(output_path, 'JPEG', quality=default_quality, optimize=True)

    # Check and reduce image size if necessary
    for quality in range(default_quality, 10, -10):
        img.save(output_path, 'JPEG', quality=quality, optimize=True)
        if os.path.getsize(output_path) < max_size_bytes:
            break
        os.remove(output_path)



# Function to crawl the directory structure and convert PNG files
def crawl_and_convert_directory(root_dir):
    for root, _, files in os.walk(root_dir):
        for file in files:
            if file.lower().endswith(".png"):
                input_path = os.path.join(root, file)
                output_path = os.path.splitext(input_path)[0] + ".jpg"
                convert_to_jpeg_and_compress(input_path, output_path)

if __name__ == "__main__":
    current_dir = os.getcwd()
    crawl_and_convert_directory(current_dir)
