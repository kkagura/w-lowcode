import type { PageQuery, PageResult } from "@/common/page";
import type { BaseEntity } from "./base";
import { request } from "@/request";

export interface Role extends BaseEntity {
  name: string;
  code: string;
}

export interface RolePageQuery extends PageQuery {
  name: string;
}

export const getRolePage = (query: RolePageQuery) => {
  return request<PageResult<Role>>({
    url: "/role/page",
    method: "GET",
    params: query,
  });
};
