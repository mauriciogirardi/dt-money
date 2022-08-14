import axios, { AxiosResponse } from "axios";

const Http = axios.create();

function getData<T>(response: AxiosResponse<T>) {
  return response.data;
}

Http.defaults.baseURL = "http://localhost:3333";

export class ServiceTransactions {
  protected static Http = Http;
  protected static getData = getData;

  static getAllTransactions<T>() {
    return this.Http.get<T>("/transactions", {
      params: { _sort: "createdAt", _order: "desc" },
    }).then(this.getData);
  }

  static queryTransactions<T>(query: string) {
    return this.Http.get<T>("/transactions", {
      params: {
        q: query,
        _sort: "createdAt",
        _order: "desc",
      },
    }).then(this.getData);
  }

  static createTransactions<T>(data: T) {
    return this.Http.post("/transactions", {
      ...data,
      createdAt: new Date(),
    }).then(this.getData);
  }
}
