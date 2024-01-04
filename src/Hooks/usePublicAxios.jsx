import axios from "axios";

const useAxious = axios.create({
  baseURL: "http://localhost:5000",
});

export default function usePublicAxios() {
  return useAxious;
}
