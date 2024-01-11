import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";
export default function useCart() {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { data, refetch } = useQuery({
    queryKey: ["item", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/items?email=${user?.email}`);
      return res.data;
    },
  });
  // console.log(data);

  return [data, refetch];
}
