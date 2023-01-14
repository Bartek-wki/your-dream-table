import http from "../http-common";

class ordersDataServiceClass {
  create(data) {
    return http.post('/orders', data)
  }
}

const ordersDataService = new ordersDataServiceClass();

export default ordersDataService;