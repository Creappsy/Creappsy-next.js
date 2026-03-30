const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

export interface ContactFormData {
  fullName: string;
  email: string;
  phone?: string;
  company?: string;
  service?: string;
  message: string;
}

export interface QuoteFormData {
  name: string;
  email: string;
  services: string;
  budget: string;
  message: string;
}

export interface NewsletterData {
  email: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
}

async function apiRequest<T>(
  endpoint: string,
  options: RequestInit = {},
): Promise<ApiResponse<T>> {
  try {
    const response = await fetch(`${API_URL}${endpoint}`, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      return { success: false, message: data.message || "Request failed" };
    }

    return { success: true, data };
  } catch (error) {
    console.error("API Error:", error);
    return { success: false, message: "Network error" };
  }
}

export const contactService = {
  submit: async (
    data: ContactFormData,
  ): Promise<ApiResponse<{ id: string }>> => {
    return apiRequest("/api/contact", {
      method: "POST",
      body: JSON.stringify(data),
    });
  },
};

export const newsletterService = {
  subscribe: async (
    data: NewsletterData,
  ): Promise<ApiResponse<{ id: string }>> => {
    return apiRequest("/api/newsletter/subscribe", {
      method: "POST",
      body: JSON.stringify(data),
    });
  },
};

export const quoteService = {
  submit: async (data: QuoteFormData): Promise<ApiResponse<{ id: string }>> => {
    return apiRequest("/api/quotes", {
      method: "POST",
      body: JSON.stringify(data),
    });
  },
};

export const pricingService = {
  get: async (lang?: string) => {
    const locale = lang || "es-MX";
    return apiRequest<{ tiers: Array<{ id: string; name: string }> }>(
      `/api/pricing?lang=${encodeURIComponent(locale)}`,
    );
  },
};
