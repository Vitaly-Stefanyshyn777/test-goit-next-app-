import { useMutation } from "@tanstack/react-query";
// import { refresh } from "@/api/auth";
// import { useAuthStore } from "@/store/auth";
import { refresh } from "./api/api";
import { useAuthStore } from "@/store/auth/auth";

export const useRefresh = () => {
  const { setUser, setRefreshing, token } = useAuthStore();

  return useMutation(refresh, {
    onMutate: () => setRefreshing(true), // ← start spinner
    onSuccess: (data) => setUser({ user: data }), // оновлюємо user
    onSettled: () => setRefreshing(false), // ← stop spinner
  });
};

// useRefresh.ts  (версія на useQuery)
// export const useRefresh = () => {
//   const { setUser, setRefreshing } = useAuthStore();
//   const token = useAuthStore((s) => s.token);
//   return useQuery({
//     queryKey: ["currentUser"],
//     queryFn: refresh,
//     enabled: !!token, // ← запуститься лише якщо token є
//     retry: false,
//     onSuccess: (data) => setUser(data),
//     onMutate: () => setRefreshing(true), // ← start spinner
//     onSettled: () => setRefreshing(false), // ← stop spinner
//   });
// };
