import React from "react";
import useAuth from "../Hooks/useAuth";

export default function AdminHome() {
  const { user } = useAuth();
  return (
    <div>
      <h1>HI! welcome Bach {user.displayName}</h1>
    </div>
  );
}
