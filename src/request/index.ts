import service, { type RequestConfig } from "./instance";

export function request<ResponseData = any, RequestData = any>(
  config: RequestConfig<RequestData>
) {
  return service.request<ResponseData, RequestData>(config);
}
