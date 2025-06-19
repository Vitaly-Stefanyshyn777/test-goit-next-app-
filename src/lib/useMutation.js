"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  addContact,
  deleteContact,
  fetchContact,
  login,
  refresh,
  register,
  setAuthHedar,
} from "./api/api";
import { useAuthStore } from "@/store/auth/auth";

export const useDeleteContact = () => {
  const queryCliqnt = useQueryClient();
  return useMutation({
    mutationFn: deleteContact,
    onSuccess: () => {
      queryCliqnt.invalidateQueries({ queryKey: ["contacts"] });
    },
  });
};

export const useLogin = () => {
  const { setAuth } = useAuthStore();
  return useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      setAuth(data);
    },
  });
};

export const useRegister = () => {
  const { setAuth } = useAuthStore();
  return useMutation({
    mutationFn: register,
    onSuccess: (data) => {
      setAuth(data);
    },
  });
};

export const useRefresh = () => {
  const { token, setUser, setRefreshing } = useAuthStore();

  setAuthHedar(token);
  return useMutation({
    mutationFn: token ? refresh : () => {},
    onMutate: () => {
      if (token) {
        setRefreshing();
      }
    },
    onSuccess: (data) => {
      if (data) {
        setUser(data);
        setRefreshing();
      }
    },
  });
};

export const useAddContact = () => {
  const queryCliqnt = useQueryClient();
  return useMutation({
    mutationFn: addContact,
    onSuccess: () => {
      queryCliqnt.invalidateQueries({ queryKey: ["contacts"] });
    },
  });
};

export const useFetchContacts = () => {
  return useQuery({ queryKey: ["contacts"], queryFn: fetchContact });
};
