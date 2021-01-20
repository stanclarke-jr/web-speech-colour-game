import { isValidColor } from './colors';

export function handleResult({ results }) {
  const word = results[results.length - 1][0].transcript;
  // 1. Lowercase results
  let color = word.toLowerCase();
  // Strip out spaces
  color = color.replaceAll(' ', '');
  // Valid color?
  if (!isValidColor(color)) return; // All that's needed
  // Yes? Display UI
  const colorSpan = document.querySelector(`.${color}`);
  colorSpan.classList.add('got');
  // Change background color
  document.body.style.backgroundColor = color;
}
