import api from "../utils/axios";

interface SignUpParams {
  name: string;
  username: string;
  email: string;
  password: string;
}

interface SignUpResponse {
  message: string;
  user: {
    id: string;
    name: string;
    username: string;
    email: string;
  };
}

export interface LogInParams {
    email: string;
    password:string;
}
interface LogInResponse {
    message: string,
    accessToken: string
}


export const signUp = async ({
  name,
  username,
  email,
  password,
}: SignUpParams): Promise<SignUpResponse> => {
  const res = await api.post<SignUpResponse>("/users/sign-up", {
    name,
    username,
    email,
    password,
  });

  return res.data;
};

export const login = async ({email,password}: LogInParams): Promise<LogInResponse> => {
    const res = await api.post('/users/log-in', {
        email,
        password,
    })
    return res.data
}

export const validateUser = async () => {
  const res = await api.get('/users/validate-me')

  return res.data
}
