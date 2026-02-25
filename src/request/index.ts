import { toast } from "@/utils";
import service, { type RequestConfig } from "./instance";

export function request<ResponseData = any, RequestData = any>(
  config: Partial<RequestConfig<RequestData>>
) {
  return service.request<RequestData, ResponseData>(config).catch((err) => {
    if (config && config.needMessage !== false) {
      const message = err.response?.data?.message || err.message || '系统错误';
      toast({
        severity: "error",
        summary: "错误",
        detail: message,
        life: 3000,
      });
    }
    return Promise.reject(err);
  });
}
