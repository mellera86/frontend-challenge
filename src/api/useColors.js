import { HTTP_METHODS, useHttp } from "./useHttp";

const COLORS_API_URL = "http://localhost:3001/api/colors";

const useColorsQuery = () => useHttp(COLORS_API_URL, HTTP_METHODS.GET);

export { useColorsQuery }