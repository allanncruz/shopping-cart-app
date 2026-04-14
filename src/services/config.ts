const BASE_URL = "https://fakestoreapi.com/";

export const api = async <T>(
  endpoint: string,
  options?: RequestInit,
): Promise<T> => {
  const response: Response = await fetch(`${BASE_URL}${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "User-Agent": "Mozilla/5.0",
      ...(options?.headers || {}),
    },
    ...options,
  });

  return response.json();
};
