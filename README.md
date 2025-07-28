# 📐 Proporción Áurea

Este proyecto es una aplicación web educativa construida con **React** y **Tailwind CSS** que explica el concepto matemático de la **Proporción Áurea (φ)** y sus aplicaciones a lo largo de la historia y en el diseño moderno, incluyendo arquitectura, tipografía, diseño gráfico y más.

---
## Ver pagina web desplegada
[👉 Pagina wed del numero aureo](https://calculo-2-numero-aureo.vercel.app/)

## 🧠 Objetivo del Proyecto

- Mostrar de forma visual, didáctica e interactiva el concepto de **φ = (1 + √5) / 2**.
- Relacionar la proporción áurea con culturas ancestrales como **Tiwanaku**.
- Demostrar cómo se aplica hoy en día en el **diseño gráfico, productos, fotografía, arquitectura y marketing**.
- Utilizar componentes modernos de React y estilos con Tailwind para una experiencia atractiva y adaptable.

---

## ⚙️ Tecnologías Utilizadas

| Herramienta        | Uso principal                                    |
|--------------------|--------------------------------------------------|
| [React](https://reactjs.org/)           | Librería para construir la interfaz de usuario.         |
| [Tailwind CSS](https://tailwindcss.com/) | Framework de utilidades para diseño rápido y adaptable.|
| [KaTeX](https://katex.org/)             | Renderizado de fórmulas matemáticas (como φ).          |
| [Vite](https://vitejs.dev/)             | Empaquetador de proyecto rápido para React.            |
| JSX + CSS + HTML                         | Estructura y estilo personalizado.                      |

---

## 📁 Estructura del Proyecto
```
proporcion-aurea/
├── public/
│ └── index.html
├── src/
│ ├── assets/ # Imágenes históricas y modernas
│ ├── components/ # Componentes reutilizables de la UI
│ │ ├── SeccionIntro.jsx # Introducción a la proporción áurea
│ │ ├── SeccionTiwanaku.jsx # Aplicación histórica en Tiwanaku
│ │ ├── SeccionModerna.jsx # Aplicaciones modernas
│ │ └── Footer.jsx
│ ├── App.jsx
│ └── main.jsx
├── tailwind.config.js
├── postcss.config.js
├── package.json

```

---

## 🧮 Contenido del Sitio

### 🟡 Introducción Matemática

- Definición de φ:
  - $\phi = \frac{1 + \sqrt{5}}{2}$
  - $\lim_{n \to \infty} \frac{F(n+1)}{F(n)} = \phi$
  - $\phi = 1 + \cfrac{1}{1 + \cfrac{1}{1 + \cfrac{1}{1 + \cdots}}}$
  - $\phi^2 = \phi + 1$, $\frac{1}{\phi} = \phi - 1$

- Fórmula de Binet para Fibonacci:
  - $F(n) = \frac{\phi^n - (-\phi)^{-n}}{\sqrt{5}}$

---

### 🏛️ Aplicación en Tiwanaku

- Exploración visual y textual sobre cómo la proporción áurea puede estar presente en:
  - Puerta del Sol
  - Templos y monolitos
  - Diagramas áureos superpuestos

---

### 🖌️ Aplicaciones en el Diseño Moderno

- **Diseño gráfico y publicidad**: logotipos como Apple, Twitter, Pepsi.
- **Tipografía**: uso en márgenes, tamaños y fuentes.
- **Fotografía y cinematografía**: relación con la regla de los tercios.
- **Diseño de productos**: iPhone, automóviles y más.
- **Arquitectura moderna**: ejemplos como Guggenheim (Gehry) y Ópera de Sídney.

---

## 📸 Imágenes

Todas las imágenes están almacenadas en la carpeta `src/assets/` y se usan para ilustrar:

- Ejemplos históricos (Tiwanaku)
- Casos modernos (diseño gráfico, edificios, productos)

Puedes controlar su tamaño con clases como:

```jsx
<img src={tuImagen} alt="..." className="w-full max-w-md mx-auto rounded-lg" />
```
🧪 Cómo Ejecutar el Proyecto
1. Clona el repositorio
```bash
git clone https://github.com/JHAMILCALI/calculo_2_numero_aureo.git
```
```bash
cd proporcion-aurea
```
1. Instala las dependencias
```bash
npm install
```
1. Inicia el servidor de desarrollo
```bash
npm run dev
```
Abre http://localhost:5173 en tu navegador.

🔨 Build para producción
```bash
npm run build
```
Y para previsualizar:

```bash
npm run preview
```
## ✨ Créditos y Autoría
Proyecto realizado por Jhamil Mamani como parte de una exploración interactiva sobre matemáticas, diseño y cultura andina.

## 📄 Licencia
MIT © 2025 — Eres libre de usar, modificar y compartir este proyecto con los debidos créditos.