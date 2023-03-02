import { Options } from "core/infra/http/HttpClient";

export interface HttpDeleteClient {
  post: <T = any>(route: string, payload: any, option?: Options) => Promise<T>;
}
