import { useState } from "react";

const useStrongPassword = (
  initialValue,
  validator = (password) => {
    if (password.length < 8) {
      return {
        isValid: false,
        errorMessage: "Password must be at least 8 characters long",
      };
    }
    if (!/[A-Z]/.test(password)) {
      return {
        isValid: false,
        errorMessage: "Password must contain at least one uppercase letter",
      };
    }
    if (!/[a-z]/.test(password)) {
      return {
        isValid: false,
        errorMessage: "Password must contain at least one lowercase letter",
      };
    }
    if (!/[0-9]/.test(password)) {
      return {
        isValid: false,
        errorMessage: "Password must contain at least one number",
      };
    }
    if (!/[@$!%*?&#]/.test(password)) {
      return {
        isValid: false,
        errorMessage: "Password must contain at least one special character",
      };
    }
    return { isValid: true, errorMessage: "" };
  }
) => {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState("");

  const changeHandler = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    const validation = validator(newValue);
    if (!validation.isValid) {
      setError(validation.errorMessage);
    } else {
      setError("");
    }
  };

  return {
    value,
    changeHandler,
    error,
  };
};

export default useStrongPassword;
