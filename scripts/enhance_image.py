from PIL import Image, ImageFilter, ImageEnhance, ImageOps
import os

src = os.path.join('public','anna-permanent-makeup-artist-instagram-photo.jpg')
dest_jpg = os.path.join('public','anna-permanent-makeup-artist-instagram-photo-enhanced.jpg')
dest_webp = os.path.join('public','anna-permanent-makeup-artist-instagram-photo-enhanced.webp')

print('Opening', src)
img = Image.open(src).convert('RGB')
# upscale by 2x using Lanczos
w,h = img.size
new = img.resize((w*2, h*2), Image.LANCZOS)
# auto-contrast
new = ImageOps.autocontrast(new, cutoff=0)
# slight unsharp mask
new = new.filter(ImageFilter.UnsharpMask(radius=2, percent=150, threshold=3))
# enhance color / contrast / sharpness
new = ImageEnhance.Color(new).enhance(1.12)
new = ImageEnhance.Contrast(new).enhance(1.06)
new = ImageEnhance.Sharpness(new).enhance(1.25)
# final resize back to original*2 (ensure integer)
new = new.resize((w*2, h*2), Image.LANCZOS)

print('Saving', dest_jpg)
new.save(dest_jpg, format='JPEG', quality=95, optimize=True)
print('Saving', dest_webp)
new.save(dest_webp, format='WEBP', quality=90, method=6)
print('Done')
