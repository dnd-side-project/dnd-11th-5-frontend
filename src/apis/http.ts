class Http {
  private baseUrl: string;

  constructor() {
    this.baseUrl = process.env.NEXT_PUBLIC_BASE_URL as string;
  }

  async request<T>(url: string, options = {}): Promise<T> {
    const defaultOptions = {
      headers: {
        "Content-Type": "application/json",
      },
      ...options,
    };

    try {
      const response = await fetch(`${this.baseUrl}${url}`, defaultOptions);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error("Fetch error: ", error);
      throw error;
    }
  }

  async get<T>(url: string, options = {}): Promise<T> {
    return this.request<T>(url, {
      method: "GET",
      cache: "force-cache",
      ...options,
    });
  }

  async post<T>(url: string, body = {}, options = {}): Promise<T> {
    return this.request<T>(url, {
      method: "POST",
      body: JSON.stringify(body),
      ...options,
    });
  }

  async put<T>(url: string, body = {}, options = {}): Promise<T> {
    return this.request<T>(url, {
      method: "PUT",
      body: JSON.stringify(body),
      ...options,
    });
  }

  async delete<T>(url: string, options = {}): Promise<T> {
    return this.request<T>(url, { method: "DELETE", ...options });
  }
}

export default Http;
