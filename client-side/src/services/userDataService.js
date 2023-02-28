import http from "./http-common";
class userDataService {
  getAll() {
    return http.get("/users");
  }
  get(id) {
    return http.get(`/users/${id}`);
  }
  signUp(data) {
    return http.post("/users/signUp", data);
  }
  login(data) {
    return http.post("/users/login", data);
  }
  update(id, data) {
    return http.patch(`/users/${id}`, data);
  }
  delete(id) {
    return http.delete(`/users/${id}`);
  }
  deleteAll() {
    return http.delete(`/users`);
  }
}
export default new userDataService();