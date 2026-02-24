import { toast } from "@/utils";
import service, { type RequestConfig } from "./instance";

export function request<ResponseData = any, RequestData = any>(
  config: RequestConfig<RequestData>
) {
  return service.request<ResponseData, RequestData>(config).catch((err) => {
    if (config && config.needMessage !== false) {
      toast({
        severity: "error",
        summary: "Error",
        detail: err.message,
        life: 3000,
      });
    }
    return Promise.reject(err);
  });
}
