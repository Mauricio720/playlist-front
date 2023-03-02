import axios, { AxiosInstance } from "axios";
import { HttpClient, Options } from "core/infra/http/HttpClient";

export class AxiosHttpClient implements HttpClient {
  static readonly client: AxiosInstance = axios.create({
    baseURL: process.env.API_URL,
  });

  static registerAuthorization(token: string | null): void {
    (
      AxiosHttpClient.client.defaults.headers as any
    ).authorization = `Bearer ${token}`;
  }

  static registerLogoutFunction(fn: Function) {
    AxiosHttpClient.client.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response.status === 401) {
          fn();
        }

        throw error;
      }
    );
  }

  async post<T = any>(route: string, body: any, options?: Options): Promise<T> {
    const response = await AxiosHttpClient.client.post(route, body, options);
    return response.data;
  }

  async get<T = any>(route: string): Promise<T> {
    const response = await AxiosHttpClient.client.get(route);
    return response.data;
  }

  async delete(route: string): Promise<void> {
    await AxiosHttpClient.client.delete(route);
  }

  async put(route: string, body: any): Promise<void> {
    await AxiosHttpClient.client.put(route, body);
  }
}
