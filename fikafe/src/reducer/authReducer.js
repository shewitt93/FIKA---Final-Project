const TOKEN_KEY = localStorage.getItem("token");

export const isLogin = () => {
  if (TOKEN_KEY !== "undefined") {
    return true;
  }
  return false;
};
export const logout = () => {
  localStorage.removeItem("token");
};
