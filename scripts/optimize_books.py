from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
SOURCE_DIR = ROOT / "images" / "books-2026"
TARGET_DIR = ROOT / "images" / "books-2026-small"
TARGET_DIR.mkdir(parents=True, exist_ok=True)

for src_path in sorted(SOURCE_DIR.glob("*.jpg")):
    target_path = TARGET_DIR / src_path.name
    if target_path.exists():
        continue

    with Image.open(src_path) as img:
        img = img.convert("RGB")
        width, height = img.size
        max_dim = 1200
        if max(width, height) > max_dim:
            img.thumbnail((max_dim, max_dim), Image.Resampling.LANCZOS)
        img.save(target_path, "JPEG", quality=45, optimize=True, progressive=True)

print(f"Created optimized images in {TARGET_DIR}")
