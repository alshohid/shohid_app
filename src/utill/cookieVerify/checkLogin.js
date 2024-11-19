

import { cookies } from "next/headers";

export const checkLogin = async() => {
  const cookieStore = cookies();
  const token = cookieStore.get("token");
  return typeof token !== "undefined";
};

