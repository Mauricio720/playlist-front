import { Options } from "core/infra/http/HttpClient";

export interface HttpPutClient {
  post: <T = any>(route: string, payload: any, option?: Options) => Promise<T>;
}
