const API_URL_RAW = process.env.NEXT_PUBLIC_API_URL;
const API_TOKEN_RAW = process.env.NEXT_PUBLIC_API_ACCESS_TOKEN;

if (!API_URL_RAW) {
  throw new Error("NEXT_PUBLIC_API_URL não definido no .env");
}

if (!API_TOKEN_RAW) {
  throw new Error("NEXT_PUBLIC_API_ACCESS_TOKEN não definido no .env");
}


const API_URL: string = API_URL_RAW;
const API_TOKEN: string = API_TOKEN_RAW;

export async function apiFetch<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const response = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      Authorization: API_TOKEN,
      ...(options.headers || {}),
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data?.message || "Erro na requisição");
  }

  return data;
}