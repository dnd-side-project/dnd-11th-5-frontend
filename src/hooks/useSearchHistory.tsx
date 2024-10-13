import { useLocalStorage } from "usehooks-ts";

export const useSearchHistory = () => {
  const [get, set] = useLocalStorage<string[]>("query", []);

  const updateHistories = (query: string) => {
    set((prev) => {
      const updatedHistories = prev.filter(
        (history) => history !== query && history !== "",
      );
      return [...updatedHistories, query];
    });
  };

  const deleteHistories = (query: string) => {
    set((prev) => {
      const updatedHistories = prev.filter((history) => history !== query);
      return [...updatedHistories];
    });
  };

  const deleteAll = () => {
    set([]);
  };

  return {
    get,
    set: updateHistories,
    del: deleteHistories,
    reset: deleteAll,
  };
};
