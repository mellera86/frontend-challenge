import { HTTP_METHODS, useHttp } from "./useHttp";

const SIGN_UP_URL = "http://localhost:3001/api/submit";

const useSignUpMutation = () => useHttp(SIGN_UP_URL, HTTP_METHODS.POST);

export { useSignUpMutation }