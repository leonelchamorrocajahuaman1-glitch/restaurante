"""Descarga las fotografías de Wikimedia Commons que falten en assets/img.

Uso (desde la carpeta del proyecto):  python herramientas/descargar_fotos.py
Solo usa la biblioteca estándar de Python 3. Lee la lista de fotos desde script.js.
"""
import os, re, time, urllib.parse, urllib.request, urllib.error

RAIZ = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DESTINO = os.path.join(RAIZ, "assets", "img")
UA = "SaboresDeHuanuco/1.0 (https://github.com/leonelchamorrocajahuaman1-glitch/restaurante)"
PEQUENAS = {"papas-nativas", "maiz", "aji-amarillo", "huacatay", "cuy-chavin", "yuca", "platano", "cocona"}

js = open(os.path.join(RAIZ, "script.js"), encoding="utf-8").read()
fotos = re.findall(r'"([a-z0-9-]+)": \{ file: "([^"]+)"', js)
os.makedirs(DESTINO, exist_ok=True)

for clave, archivo in fotos:
    salida = os.path.join(DESTINO, clave + ".jpg")
    if os.path.exists(salida):
        continue
    ancho = 900 if clave in PEQUENAS else (2000 if clave == "pachamanca-tierra" else 1600)
    url = ("https://commons.wikimedia.org/wiki/Special:FilePath/"
           + urllib.parse.quote(archivo.replace(" ", "_")) + f"?width={ancho}")
    for intento in range(5):
        try:
            req = urllib.request.Request(url, headers={"User-Agent": UA})
            with urllib.request.urlopen(req, timeout=60) as r, open(salida, "wb") as f:
                f.write(r.read())
            print("OK  ", clave)
            break
        except urllib.error.HTTPError as e:
            espera = int(e.headers.get("Retry-After", 30)) if e.code == 429 else 10
            print(f"Espera {espera}s ({e.code}) para {clave}")
            time.sleep(espera)
    time.sleep(3)
print("Listo.")
