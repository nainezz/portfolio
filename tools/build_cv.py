"""Rebuild assets/Mohamed-Yussuf-CV.pdf from tools/cv.html.

Edit tools/cv.html, then run:  python3 tools/build_cv.py
Needs: pip install playwright pypdf  and  python3 -m playwright install chromium
"""
from pathlib import Path

from playwright.sync_api import sync_playwright
from pypdf import PdfReader, PdfWriter

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "tools" / "cv.html"
OUT = ROOT / "assets" / "Mohamed-Yussuf-CV.pdf"

with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page()
    page.goto(SRC.as_uri())
    page.pdf(path=str(OUT), format="A4", print_background=True, prefer_css_page_size=True)
    browser.close()

reader = PdfReader(OUT)
writer = PdfWriter(clone_from=reader)
writer.add_metadata({"/Title": "Mohamed Yussuf, Software Engineer: CV", "/Author": "Mohamed Yussuf"})
writer.write(OUT)
print(f"Wrote {OUT} ({len(reader.pages)} page(s))")
