"use server";

import { cookies } from "next/headers";
import { getCookie } from "cookies-next/server";
import { API_URL, AUTH_COOKIE_NAME } from "@/const";

async function fetchApi<T>(
  endpoint: string,
  options: RequestInit = {},
  token?: string
) {
  const headers = {
    "Content-Type": "application/json",
    ...(options.headers || {}),
  } as Record<string, string>;

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const config: RequestInit = {
    ...options,
    headers,
    // NOTE: react-query의 캐싱을 사용
    cache: "no-store",
  };

  if (options.body && typeof options.body !== "string") {
    config.body = JSON.stringify(options.body);
  }

  const response = await fetch(`${API_URL}${endpoint}`, config);

  if (!response.ok) {
    throw new Error(`API 요청 실패: ${response.status}`);
  }

  if (response.status === 204) {
    return {} as T;
  }

  const contentType = response.headers.get("Content-Type");
  if (contentType && contentType.includes("application/json")) {
    return response.json() as Promise<T>;
  } else {
    return response.text() as Promise<T>;
  }
}

export async function getUserTest(token?: string) {
  // 서버 컴포넌트에서 호출된 경우
  if (!token && typeof window === "undefined") {
    token = await getCookie(AUTH_COOKIE_NAME, { cookies });
  }

  return fetchApi<string>("/user-test", {}, token);
}
