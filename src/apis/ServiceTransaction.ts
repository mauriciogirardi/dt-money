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
    return this.Http.get<T>("/transactions").then(this.getData);
  }
}
