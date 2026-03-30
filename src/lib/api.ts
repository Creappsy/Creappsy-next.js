const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

interface ApiResponse<T> {
  data: T | null;
  error: string | null;
}

async function apiRequest<T>(
  endpoint: string,
  options: RequestInit = {},
): Promise<ApiResponse<T>> {
  try {
    const response = await fetch(`${API_BASE}${endpoint}`, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      return { data: null, error: data.message || "Request failed" };
    }

    return { data, error: null };
  } catch (error) {
    return { data: null, error: "Network error" };
  }
}

export const api = {
  newsletter: {
    subscribe: (email: string) =>
      apiRequest<{ success: boolean }>("/api/newsletter/subscribe", {
        method: "POST",
        body: JSON.stringify({ email }),
      }),
  },
  contact: {
    submit: (data: Record<string, string>) =>
      apiRequest<{ success: boolean }>("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
      }),
  },
};

export default api;
