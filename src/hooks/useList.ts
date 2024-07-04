import { useState } from "react";

interface UseListProps<T> {
  initialList?: T[];
}

export const useList = <T>(props?: UseListProps<T>) => {
  const { initialList } = props || {};

  const [list, setList] = useState<T[] | undefined>(initialList);

  const append = (item: T) => {
    setList((prev) => (prev ? [...prev, item] : [item]));
  };

  const remove = (index: number) => {
    setList((prev) => {
      if (!prev) return prev;

      const next = [...prev];
      next.splice(index, 1);
      return next;
    });
  };

  const replace = (index: number, item: T) => {
    setList((prev) => {
      if (!prev) return prev;

      const next = [...prev];
      next[index] = item;
      return next;
    });
  };

  return { list, setList, append, remove, replace };
};
