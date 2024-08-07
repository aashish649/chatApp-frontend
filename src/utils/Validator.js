export const isValidUsername = (username) => {
  const regex = /^[a-zA-Z0-9_]+$/;
  return regex.test(username) && username.length >= 3;
};

export const usernameValidator = (username) => {
  if (!isValidUsername(username)) {
    return { isValid: false, errorMessage: "Username is invalid" };
  }
  return { isValid: true, errorMessage: "" };
};
