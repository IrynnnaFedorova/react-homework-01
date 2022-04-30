function getRandomArbitrary(max) {
  return Math.floor(Math.random() * max);
}

export function getBgColor() {
  const r = getRandomArbitrary(255);
  const g = getRandomArbitrary(255);
  const b = getRandomArbitrary(255);

  return `rgb(${r},${g},${b})`;
}