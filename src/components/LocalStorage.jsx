export function setItem(key, value) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(error);
  }
}

export function getItem(key) {
  const item = window.localStorage.getItem(key);
  return item ? JSON.parse(item) : null;
}
