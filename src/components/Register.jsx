"use client";

import { useRegister } from "@/lib/useMutation";
import React from "react";

function RegisterForm() {
  const { mutate: register } = useRegister();
  const handelSubmit = (event) => {
    event.preventDefault();
    const { name, email, password } = event.target.elements;
    register({
      name: name.value.trim(),
      email: email.value.trim(),
      password: password.value.trim(),
    });
  };
  return (
    <div>
      <form onSubmit={handelSubmit}>
        <input type="text" name="name" placeholder="name" id="name" required />
        <input
          type="text"
          name="email"
          placeholder="email"
          id="email"
          required
        />
        <input
          type="text"
          name="password"
          placeholder="password"
          id="password"
          required
        />
        <button type="submit">Зареєструватися</button>
      </form>
    </div>
  );
}

export default RegisterForm;
