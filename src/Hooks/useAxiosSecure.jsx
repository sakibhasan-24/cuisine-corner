import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

export const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
});
export default function useAxiosSecure() {
  const { userLogOut } = useAuth();
  const navigate = useNavigate();
  axiosSecure.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("token");
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );
  // 4**** cases
  axiosSecure.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      // console.log("error", error.response.status);
      if (error.response.status === 401 || error.response.status === 403) {
        userLogOut().then(() => {
          navigate("/login");
        });
      }
      return Promise.reject(error);
    }
  );

  return axiosSecure;
}
