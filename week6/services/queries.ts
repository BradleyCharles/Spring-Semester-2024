import { useQuery } from "@tanstack/react-query";
import { getTodoIds } from "./api";

export function useTodosIds() {
  return useQuery({
    queryKey: ["data"],
    queryFn: getTodoIds,
  });
}
