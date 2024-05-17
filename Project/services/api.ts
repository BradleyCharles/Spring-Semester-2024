import axios from "axios";
import { Data } from "@/types/todo";

const BASE_URL = "https://dogapi.dog/api/v2/breeds";
const axiosInstance = axios.create({ baseURL: BASE_URL });

export const getTodoIds = async () => {
  return (await axiosInstance.get<Data[]>("")).data.map((data) => data.id);
};
