const baseUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5000"
    : "http://3.90.50.197";

export const getUrl = route => `${baseUrl}${route}`;
