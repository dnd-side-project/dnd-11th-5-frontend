import {
  DefaultError,
  QueryKey,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

interface UseOptimisticMutationProps<TData, TVariables> {
  mutationFn: (variables: TVariables) => Promise<TData>;
  queryKey: QueryKey;
  onMutate?: (variables: TVariables) => Promise<TData>;
  setQueryData?: (data: TData) => void;
  onError?: (error: DefaultError, variables: TVariables) => void;
  onSettled?: (
    data: TData | undefined,
    error: DefaultError | null,
    variables: TVariables,
    context: { context: unknown } | undefined,
  ) => void;
}

export const useOptimisticMutation = <TData, TVariables>({
  mutationFn,
  queryKey,
  onMutate,
  setQueryData,
  onError,
  onSettled,
}: UseOptimisticMutationProps<TData, TVariables>) => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn,
    onMutate: async (variables) => {
      await queryClient.cancelQueries({ queryKey });
      const context = queryClient.getQueryData(queryKey);

      if (onMutate) {
        const newData = await onMutate(variables);
        queryClient.setQueryData(queryKey, newData);
      } else {
        queryClient.setQueryData(queryKey, setQueryData);
      }

      return { context };
    },
    onError: (error, variables, context) => {
      if (onError) {
        onError(error, variables);
      }
      queryClient.setQueryData(queryKey, context?.context);
    },
    onSettled: (data, error, variables, context) => {
      if (onSettled) {
        onSettled(data, error, variables, context);
      }
      queryClient.invalidateQueries({ queryKey });
    },
  });

  return {
    mutate,
  };
};
