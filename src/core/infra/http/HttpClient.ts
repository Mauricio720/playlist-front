import { HttpPutClient } from "core/application/http/HttpPutClient";
import { HttpPostClient } from "core/application/http/HttpPostClient";
import { HttpGetClient } from "core/application/http/HttpGetClient";
import { HttpDeleteClient } from "core/application/http/HttpDeleteClient";

export interface HttpClient
  extends HttpPostClient,
    HttpGetClient,
    HttpDeleteClient,
    HttpPutClient {}

export type Options = {
  onUploadProgress?: (progressEvent: any) => void;
  onDownloadProgress?: (progressEvent: any) => void;
};
