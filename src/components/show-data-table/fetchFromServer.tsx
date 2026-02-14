export async function getDataUserFormServer<T>(url: string): Promise<T> {
  const response = await fetch(url);

  if (!response.ok) {
    const message: string = await response.text();
    throw new Error(message || "somthing went wrong");
  }

  return response.json();
}
