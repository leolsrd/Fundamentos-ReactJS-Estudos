import { useEffect, useState } from "react";

function useStateWithLocalStorage(localStorageKey, defaultValue) {
  const [value, setValue] = useState(
    JSON.parse(localStorage.getItem(localStorageKey)) || defaultValue
  );

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(value));
  }, [localStorageKey, value]);

  return [value, setValue];
}

export default useStateWithLocalStorage;
