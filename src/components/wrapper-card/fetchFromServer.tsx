export async function getDataCardFromServer<T>(url: string): Promise<T> {
  const res = await fetch(url);

  if (!res.ok) {
    const message = await res.text();
    throw new Error(message || "Something went wrong");
  }

  return res.json();
}