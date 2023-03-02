import { Options } from "core/infra/http/HttpClient";

export interface HttpPostClient {
  post: <T = any>(route: string, payload: any, option?: Options) => Promise<T>;
}
