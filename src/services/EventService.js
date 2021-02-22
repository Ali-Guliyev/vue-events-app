import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://my-json-server.typicode.com/Ali-Guliyev/mock-database-for-vue-app",
  //
  withCredentials: false,
  header: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
})

export default {
  getEvents(perPage, page) {
    return apiClient.get("/events?_limit=" + perPage + "&_page=" + page)
  },
  getEventById(id) {
    return apiClient.get(`/events/${id}`)
  }
};