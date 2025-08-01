"use client";

import Link from "next/link";
import { useState } from "react";
import { signUp } from "@/app/actions/auth-actions";
import { redirect } from "next/navigation";

export default function SigninPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== passwordConfirm) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    const result = await signUp({
      email,
      password,
    });

    if (result?.message) {
      alert(result.message);
    }

    if (result?.status === "ok") {
      redirect("/signin");
    }
  };

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const handleChangePasswordConfirm = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPasswordConfirm(e.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-3xl font-bold">회원가입</h1>
      <p className="text-gray-700">회원가입 페이지 입니다</p>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 min-w-[300px]"
      >
        <label htmlFor="email">이메일</label>
        <input
          value={email}
          onChange={handleChangeEmail}
          id="credentials-email"
          type="email"
          name="email"
          placeholder="이메일을 입력해 주세요"
          className="border-2 border-gray-300 rounded-sm p-2"
        />

        <label htmlFor="password">비밀번호</label>
        <input
          value={password}
          onChange={handleChangePassword}
          id="credentials-password"
          type="password"
          name="password"
          placeholder="비밀번호를 입력해 주세요"
          className="border-2 border-gray-300 rounded-sm p-2"
        />

        <label htmlFor="passwordConfirm">비밀번호 확인</label>
        <input
          value={passwordConfirm}
          onChange={handleChangePasswordConfirm}
          id="credentials-password"
          type="password"
          name="passwordConfirm"
          placeholder="비밀번호를 한번 더 입력해 주세요"
          className="border-2 border-gray-300 rounded-sm p-2"
        />

        <button
          type="submit"
          className="bg-primary text-white font-bold cursor-pointer rounded-sm p-2"
        >
          회원가입
        </button>
        <Link href="/signin" className="text-center">
          로그인
        </Link>
      </form>
    </div>
  );
}
