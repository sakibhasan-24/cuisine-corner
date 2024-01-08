import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import usePublicAxios from "./usePublicAxios";

export default function useMenu() {
  // const [loading, setLoading] = useState(true);
  const axiosPublic = usePublicAxios();
  // const [menus, setMenus] = useState([]);
  // useEffect(() => {
  //   fetch("http://localhost:5000/menu")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setMenus(data);
  //       setLoading(false);
  //     });
  // }, []);
  const {
    data: menus = [],
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ["menu"],
    queryFn: async () => {
      const res = await axiosPublic.get("/menu");
      return res.data;
    },
  });
  return [menus, loading, refetch];
}
