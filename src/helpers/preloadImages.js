export default (items) =>
  items.forEach((src) => {
    const img = document.createElement("IMG");
    img.src = src;
  });
