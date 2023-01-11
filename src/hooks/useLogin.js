import { useState } from "react";
import useAuthContext from './useAuthContext';


export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { dispatch } = useAuthContext();

  const login = async (email, password) => {
    setIsLoading(true);
    const response = await fetch("/api/user/login", {
      method: "POST",
      body: JSON.stringify({email, password}),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    }

    if (response.ok) {
      setIsLoading(false);
      //* setting the local storage
      localStorage.setItem("user", JSON.stringify(json));
      //* setting the global state
      dispatch({ type: "LOGIN", payload: json });
    }
  };
  return { login, isLoading, error };
};
