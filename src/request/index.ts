import service, { type RequestConfig } from "./instance";
import { ElNotification } from "element-plus";

export function request<ResponseData = any, RequestData = any>(
  config: Partial<RequestConfig<RequestData>>
) {
  return service.request<RequestData, ResponseData>(config).catch((err) => {
    if (config && config.needMessage !== false) {
      const message = err.response?.data?.message || err.message || "系统错误";
      ElNotification({
        type: "error",
        title: "错误",
        message,
      });
    }
    return Promise.reject(err);
  });
}
