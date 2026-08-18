import { useLoginMutation } from "../queries/auth.queries";

export const useLogin = () => {
  const mutation = useLoginMutation();

  return {
    login: mutation.mutate,
    isPending: mutation.isPending,
    data: mutation.data,
  };
};
