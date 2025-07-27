"use client";

import { getCookie } from "cookies-next/client";
import * as api from "@/lib/api";
import { AUTH_COOKIE_NAME } from "@/const";

export function useApi() {
  // 클라이언트에서 쿠키 가져오기
  const token = getCookie(AUTH_COOKIE_NAME) as string;

  return {
    getUserTest: () => api.getUserTest(token),
  };
}
