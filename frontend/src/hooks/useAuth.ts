import { useState } from "react";
import {
  login,
  signUp as signUpService,
  type LogInParams,
} from "../services/authService";
import { useAuthStore } from "../stores/authStore";

interface SignUpParams {
  name: string;
  username: string;
  email: string;
  password: string;
}

const useAuth = () => {
  const setUser = useAuthStore((state) => state.setUser);
  const setAccessToken = useAuthStore((state) => state.setAccessToken);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const signUpUser = async (params: SignUpParams): Promise<void> => {
    try {
      setLoading(true);
      setError(null);

      const data = await signUpService(params);
      setUser(data.user);
    } catch (err) {
      // Handle error properly - convert unknown error to string
      const errorMessage =
        err instanceof Error ? err.message : "An unexpected error occurred";
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const loginUser = async (params: LogInParams): Promise<void> => {
    try {
      setLoading(true);
      setError(null);

      const data = await login(params);
      setAccessToken(data.accessToken);
      localStorage.setItem("accessToken", data.accessToken);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "An unexpected error occurred";
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, signUpUser, loginUser };
};

export default useAuth;
