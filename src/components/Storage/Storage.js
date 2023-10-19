const getStoredproduct = () => {
  const storedproduct = localStorage.getItem("product-list");
  if (storedproduct) {
    return JSON.parse(storedproduct);
  }
  return [];
};
const saveproduct = (id) => {
  const storedproduct = getStoredproduct();
  const exists = storedproduct.find((Id) => Id === id);
  if (!exists) {
    storedproduct.push(id);
    localStorage.setItem("product-list", JSON.stringify(storedproduct));
  }
};

export { getStoredproduct, saveproduct };
