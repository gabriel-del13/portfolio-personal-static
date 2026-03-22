# Gabriel Del Cid — Portfolio

Portafolio personal desarrollado en HTML, CSS y JavaScript puro. Sin frameworks, sin compilación, sin dependencias.

🌐 **[gabrieldelcid.click](https://gabrieldelcid.click)**

---

## Infraestructura

```
GitHub (código fuente)
      │
      │  git push → trigger automático
      ▼
Cloudflare Pages (hosting + CDN)
      │
      │  dominio custom
      ▼
gabrieldelcid.click
```

**GitHub** actúa como repositorio fuente.

**Cloudflare Pages** sirve los archivos estáticos desde su CDN global, maneja el SSL automáticamente y aplica cache en los edge nodes más cercanos al visitante.


---

## Archivos

| Archivo | Descripción |
|---|---|
| `index.html` | Hero + proyectos destacados |
| `sobre-mi.html` | Bio + grid de habilidades |
| `proyectos.html` | Todos los proyectos + modal con galería |
| `styles.css` | Estilos compartidos |
| `data.js` | Todo el contenido (editar aquí para actualizar) |
| `favicon.ico` | Ícono de pestaña |
| `images/` | Fotos de perfil, logos de skills y capturas de proyectos |

---

## Actualizar contenido

Editar `data.js` y hacer `git push`.

