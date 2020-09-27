const TOKEN_KEY = localStorage.getItem("user");

export const isLogin = () => {
  if (TOKEN_KEY) {
    return true;
  }
  return false;
};
export const logout = () => {
  localStorage.removeItem("user");
};
