export const getDataMenuFromServer = async () => {
  try {
    let response = await fetch("http://localhost:3000/menu");

    if (!response.ok) {
      throw new Error(`Error ${response.status}`);
    }

    let data = await response.json();

    return data;
  } catch (err) {
    throw new Error("Error get data from server");
  }
};
