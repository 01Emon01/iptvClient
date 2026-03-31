import axios from "axios";

export const NodeApi = axios.create({
  baseURL: "https://data.uaeiptvbox.net/data/admin",
  withCredentials: true,
});
