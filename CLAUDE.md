# Invitación de Boda — Marizol & German

## Descripción del proyecto
Página web de invitación de boda para **Marizol & German**.
Basada en un template exportado de specially.love (Next.js SSG), convertido a HTML estático puro.

**Fecha de boda:** 18 de diciembre de 2026 · 18:00 h

---

## Cómo probar localmente

```powershell
cd F:\GERMANPRO\Descargas\boda
npx serve .
```

Abrir: `http://localhost:3000`

**Nunca abrir `index.html` directamente** — los CSS necesitan servidor HTTP.

---

## Archivos clave

| Archivo | Propósito |
|---|---|
| `index.html` | La invitación — **todos los cambios de contenido van aquí** |
| `invitation.js` | Interactividad: carrusel, música, copiar IBAN, cuenta regresiva dinámica |
| `css/*.css` | Estilos compilados de Next.js — **NO modificar** |
| `main/*.js` | Bundles Next.js originales — **NO tocar, no están en uso** |

---

## Estructura de imágenes

```
templates/classic/pastel/              ← Tema azul pastel (decoraciones, divisores)
invitations/nuria-y-juan-classic/      ← cover.jpg, 1.jpg, 2.jpg, 3.jpg — REEMPLAZAR con fotos reales
invitations/place1.jpg                 ← Foto lugar ceremonia — REEMPLAZAR si aplica
invitations/place2.jpg                 ← Foto lugar celebración — REEMPLAZAR si aplica
invitations/test/qr.png               ← QR del álbum de fotos
```

---

## Pendientes de personalizar

- [ ] Reemplazar fotos en `invitations/nuria-y-juan-classic/` con fotos de Marizol & German
- [ ] Actualizar IBAN en sección "Regalo" (actualmente `ESXX XXXX XXXX XXXX XXXX`)
- [ ] Actualizar link de Google Photos para el álbum (actualmente link de ejemplo)
- [ ] Actualizar QR si cambia el link del álbum
- [ ] Confirmar nombre y dirección del lugar de Ceremonia (actualmente: Catedral de Palma)
- [ ] Confirmar nombre y dirección del lugar de Celebración (actualmente: Restaurante S'Olivaret)
- [ ] Añadir links de Google Maps a los botones de ubicación
- [ ] Añadir link/formulario de confirmación de asistencia (botón del sobre)
- [ ] Añadir links de Maps a las paradas del Autobús
- [ ] Revisar alojamientos sugeridos (actualmente: Finca Can Estades y Son Malero)

---

## Notas técnicas

- **Los bundles de Next.js fueron eliminados del `index.html`** — causaban que React sobreescribiera el HTML estático con el estado inicial del componente (pantalla de sobre animada), dejando la página en blanco.
- La interactividad se maneja con `invitation.js` (vanilla JS): carrusel, música, copiar al portapapeles, cuenta regresiva dinámica.
- **Cuenta regresiva**: configurada para `2026-12-18T18:00:00`. Si la fecha cambia, actualizar esa línea en `invitation.js`.
- Las animaciones CSS (`animate-pulse`, `animate-wind`, `animate-lightbounce`, etc.) vienen de los archivos CSS compilados — funcionan sin JS.
- El audio de fondo viene de `https://static.hyperions.work/song1.mp3` — si ese link cae, habrá que alojar el mp3 localmente.