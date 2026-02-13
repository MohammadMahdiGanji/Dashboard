import type { InfoFormAddUserType } from "./type";

export async function PostData(url: string, data: InfoFormAddUserType) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const message = await response.text();

    throw new Error(message || "somthing went wrong");
  }

  return response;
}
