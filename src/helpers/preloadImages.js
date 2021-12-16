export default (items) =>
  new Promise((resolve) => {
    const loadedItems = [...Array(items.length)].map(() => false);

    items.forEach((src, index) => {
      const img = document.createElement("IMG");
      img.onload = () => {
        loadedItems[index] = true;

        const isAllItemsLoaded = loadedItems.every((b) => b === true);
        if (isAllItemsLoaded) resolve();
      };
      img.src = src;
    });
  });
