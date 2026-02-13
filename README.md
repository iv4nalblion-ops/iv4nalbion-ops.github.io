# iv4nalbion-ops.github.io
Personal Portfolio — Ivan Bonilla, UX Engineer.

---

## Changelog (resumen de cambios recientes)

### Diseño y estructura
- **Paleta de color unificada**: Se definió una paleta en torno al navy (`#243669`) del bloque About Me. Variables CSS (`--navy`, `--navy-light`, `--navy-soft`, `--accent-on-navy`) aplicadas en header, botones, enlaces, skills, footer y project cards para mantener consistencia visual.
- **Header separado**: El header tiene fondo blanco y el bloque About Me queda como sección distinta con fondo navy. Nombre y rol (Ivan Bonilla / UX Engineer) visibles en el header; About Me debajo con foto, título y texto.
- **Fondos de guía eliminados**: Se quitaron los fondos grises de las secciones (`.section` y `.section2`) que se usaban solo como guía de espacio.

### Iconos e imágenes
- **Bootstrap Icons (sin Bootstrap)**: Se sustituyeron los iconos de Font Awesome por Bootstrap Icons cargados por CDN. No se instala Bootstrap; solo el CSS de iconos para mantener la página estática y compatible con GitHub Pages.
- **Habilidades en fila**: La sección Abilities pasó de grid a `flex` en fila con `flex-wrap`, de modo que las habilidades se muestran en fila y se adaptan al ancho.
- **Corrección de texto**: "UX/UI Desig" corregido a "UX/UI Design".

### UX y accesibilidad
- **Skip link**: Enlace "Saltar al contenido" visible solo al recibir foco (Tab), para usuarios que navegan con teclado.
- **Focus visible**: Enlaces y botones con `outline` visible al recibir foco por teclado (`:focus-visible`).
- **Estructura semántica**: Uso de `<main>`, secciones con `aria-labelledby`, iconos decorativos con `aria-hidden="true"` y clase `.visually-hidden` para títulos solo para lectores de pantalla.
- **Jerarquía de encabezados**: Un único `h1` (nombre); About Me, Projects, Abilities y Contact como `h2`.

### Scroll y revelado de proyectos
- **Botón de scroll en el header**: Pequeño botón circular con chevron que hace scroll suave hasta la sección About Me.
- **CTA "Scroll down" bajo Projects**: Debajo del título "Projects" y del texto de apoyo se añadió un CTA claro con el texto "Scroll down" e icono, que hace scroll suave hasta la lista de proyectos.
- **Revelado al hacer scroll**: La sección de proyectos (`#projects-list`) empieza oculta (opacidad 0). Un `IntersectionObserver` en JavaScript añade la clase `is-visible` cuando la sección entra en vista, y los proyectos aparecen con una transición suave (opacidad y ligero desplazamiento).
- **Scroll suave**: `scroll-behavior: smooth` en `html` y ajustes en el script para que los enlaces con ancla (`#about-me`, `#projects-list`) hagan scroll suave.

### Técnico
- **Página estática**: Sin dependencias locales; solo HTML, CSS y un script mínimo. Bootstrap Icons vía CDN. Listo para publicar en GitHub Pages.
