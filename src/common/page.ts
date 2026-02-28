import { deepClone } from "@/utils";
import { ref } from "vue";

export interface PageQuery {
  page: number;
  pageSize: number;
}

export interface PageResult<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

type OmitPageQuery<T> = Omit<T, keyof PageQuery>;

export interface UsePageOptions<Record, Query extends PageQuery> {
  requestParams: OmitPageQuery<Query>;
  request: (query: Query) => Promise<PageResult<Record>>;
  immediate?: boolean;
}

export function usePage<Record, Query extends PageQuery>(
  options: UsePageOptions<Record, Query>
) {
  const { requestParams, request, immediate = true } = options;
  const defaultQuery: OmitPageQuery<Query> = deepClone(requestParams);

  const data = ref<Record[]>([]);
  const total = ref(0);
  const page = ref(1);
  const pageSize = ref(10);
  const totalPages = ref(0);
  const loading = ref(false);

  function fetch() {
    loading.value = true;
    const queryParams = {
      ...requestParams,
      page: page.value,
      pageSize: pageSize.value,
    } as Query;
    request(queryParams)
      .then((res) => {
        data.value = res.data;
        total.value = res.total;
        totalPages.value = res.totalPages;
      })
      .finally(() => {
        loading.value = false;
      });
  }

  function reset() {
    page.value = 1;
    Object.assign(requestParams, deepClone(defaultQuery));
    fetch();
  }

  if (immediate) {
    fetch();
  }

  return {
    fetch,
    reset,
    data,
    total,
    page,
    pageSize,
    totalPages,
    loading,
  };
}
