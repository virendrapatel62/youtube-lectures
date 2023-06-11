"use client";

import { loginActions } from "@/actions/sampleAction";
import React from "react";

export default function LoginForm() {
  return (
    <div>
      <h1>LoginForm</h1>

      <hr />

      <form action={loginActions}>
        <input type="email" name="email" />

        <hr />
        <input type="password" name="password" />

        <hr />

        <input type="submit" />
      </form>
    </div>
  );
}
