const TOKEN_KEY = localStorage.getItem("token");

export const isLogin = () => {
  if (TOKEN_KEY !== "undefined" && TOKEN_KEY !== null) {
    return true;
  }
  return false;
};
export const logout = () => {
  localStorage.removeItem("token");
};
