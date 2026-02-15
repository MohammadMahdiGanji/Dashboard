export const deleteUserFormSrever = async (url: string): Promise<Response> => {
  const response = await fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(message || "something went wrong");
  }

  return response;
};
