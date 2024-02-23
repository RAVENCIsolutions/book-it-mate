﻿const LogoSymbol = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 1"
    viewBox="0 0 40 40"
    {...props}
  >
    <path
      d="M35.14 35.41c-1.24-.84-2.31-1.87-3.17-3.08 2.26-2.35 3.79-5.42 3.25-8.65-.34-2-2.26-4.79-4.17-2.37-1.48 1.89-1.82 4.7-1.36 6.99.21 1.08.58 2.06 1.09 2.97-1.4 1.32-3.15 2.66-4.84 2.56-1.65-.1-2.7-2.18-3.7-3.24-.81-.86-1.79-1.6-2.97-1.83-2.17-.43-4.25.97-6.05 1.98-1.39.78-3.31 2-4.98 1.39-1.53-.55-2.43-2.33-3.06-3.71-.78-1.74-1.89-3.63-2.16-5.54-.24-1.63 1.19-3.1 2.06-4.32 1.67-2.34 3.22-5.6 5.75-7.14 1.69-1.03 3.32.42 4.84 1.12 1.01.49 2.05.72 3.15.89 2.68.43 3.38-4.23 3.8-5.97.19-.82.61-4.08 1.79-4.05 1.24.28 2.18 2.31 2.76 3.3.37.64 3.93 7.99 4 7.96.35-.15-3.09-7.63-3.43-8.28-.65-1.26-1.62-3.43-3.14-3.83-1.28-.26-1.92 1.18-2.28 2.15-.48 1.3-1.43 7.7-3.39 7.4-1.63-.08-3.35-1.31-4.86-2.08-1.96-.98-3.76-.45-5.33.96-1.72 1.53-2.95 3.53-4.31 5.35-1.39 1.89-3.58 3.97-3.41 6.5.17 2.53 1.61 5.43 2.77 7.64 1.05 2 2.66 3.86 5.07 4.04 2.8.2 5.17-1.75 7.55-2.92.74-.39 1.66-.78 2.52-.59 1.93.56 2.89 2.89 4.46 4.02 1.67 1.22 3.62.97 5.3-.04 1.05-.64 2.09-1.43 3.01-2.35 1.79 2.31 4.47 3.92 7.29 4.86 0-.03.02-.06.03-.09-.02.02-3.52-1.75-3.86-1.98Zm-4.99-9.36c.12-1.48.64-3.56 1.88-4.55 1.74-1.38 2.24 2.74 2.19 3.62-.09 1.74-.78 3.44-2 4.69-.32.34-.69.72-1.1 1.12-.73-1.52-1.09-3.2-.97-4.88Z"
      style={{
        fill: props.color || "#39e991",
        strokeWidth: props.thickness || 0,
      }}
    />
  </svg>
);
export default LogoSymbol;
