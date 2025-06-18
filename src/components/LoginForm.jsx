import { useLogin } from "@/lib/useMutation";
import React from "react";

function LoginForm() {
  const { mutate: login } = useLogin();
  const handelSubmit = (event) => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    login({
      email: email.value.trim(),
      password: password.value.trim(),
    });
  };
  return (
    <div>
      <form onSubmit={handelSubmit}>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="email"
          required
        />
        <input
          type="text"
          id="password"
          name="password"
          placeholder="password"
          required
        />
        <button type="submit">Увійти</button>
      </form>
    </div>
  );
}

export default LoginForm;
