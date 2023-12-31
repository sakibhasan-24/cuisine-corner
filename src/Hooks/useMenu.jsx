import React, { useEffect, useState } from "react";

export default function useMenu() {
  const [loading, setLoading] = useState(true);
  const [menus, setMenus] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/menu")
      .then((res) => res.json())
      .then((data) => {
        setMenus(data);
        setLoading(false);
      });
  }, []);
  return [menus, loading];
}
