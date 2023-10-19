const getStoredproduct = () => {
  const storedproduct = localStorage.getItem("product-list");
  if (storedEvent) {
    return JSON.parse(storedproduct);
  }
  return [];
};
const saveproduct = (id) => {
  const storedEvent = getStoredproduct();
  const exists = storedproduct.find((Id) => Id === id);
  if (!exists) {
    storedproduct.push(id);
    localStorage.setItem("product-list", JSON.stringify(storedproduct));
  }
};

export { getStoredproduct, saveproduct };
