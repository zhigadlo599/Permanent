from PIL import Image, ImageFilter, ImageEnhance, ImageOps
import os

pairs = [
    (os.path.join('public','hero-creative.jpg'), os.path.join('public','hero-creative-max.jpg'), os.path.join('public','hero-creative-max.webp')),
    (os.path.join('public','anna-permanent-makeup-artist-instagram-photo.jpg'), os.path.join('public','anna-permanent-makeup-artist-instagram-photo-max.jpg'), os.path.join('public','anna-permanent-makeup-artist-instagram-photo-max.webp')),
]

def enhance_image(src, out_jpg, out_webp):
    print('Processing', src)
    img = Image.open(src).convert('RGB')
    w,h = img.size
    # upscale moderately if image is small
    scale = 2 if max(w,h) < 3000 else 1
    new = img.resize((int(w*scale), int(h*scale)), Image.LANCZOS)
    # gentle auto-contrast and levels
    new = ImageOps.autocontrast(new, cutoff=0)
    # reduce noise/denoise via slight blur then unsharp mask
    new = new.filter(ImageFilter.GaussianBlur(radius=0.5))
    new = new.filter(ImageFilter.UnsharpMask(radius=1.5, percent=180, threshold=2))
    # enhancements
    new = ImageEnhance.Color(new).enhance(1.15)
    new = ImageEnhance.Contrast(new).enhance(1.08)
    new = ImageEnhance.Sharpness(new).enhance(1.35)
    # ensure size integer
    new = new.resize(new.size, Image.LANCZOS)
    new.save(out_jpg, format='JPEG', quality=95, optimize=True)
    new.save(out_webp, format='WEBP', quality=90, method=6)
    print('Saved', out_jpg, out_webp)

for src, out_jpg, out_webp in pairs:
    if os.path.exists(src):
        try:
            enhance_image(src, out_jpg, out_webp)
        except Exception as e:
            print('Error processing', src, e)
    else:
        print('Missing source', src)

print('Done')
