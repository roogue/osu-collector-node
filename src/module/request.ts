import axios, { Method } from "axios";
import { Routes } from "./Routes";

export const request = async (
  method: Method,
  path: Routes,
  options: {
    data?: any;
    cookie?: string;
  } = {}
): Promise<any> => {
  let body, query;
  const { data, cookie = "" } = options;
  method.toLocaleLowerCase() === "get" ? (query = data) : (body = data);

  const res = await axios({
    method,
    url: `${Routes.apiEndPoint}${path}`,
    data: body,
    params: query,
    headers: {
      Cookie: cookie,
    },
  });

  return res.data as any;
};
