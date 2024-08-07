import { useState } from "react";

const useFileHandler = (initialState = null) => {
  const [file, setFile] = useState(initialState);
  const [preview, setPreview] = useState(initialState);
  const [error, setError] = useState("");

  const changeHandler = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const validTypes = ["image/jpeg", "image/png", "image/jpg"];
      if (!validTypes.includes(selectedFile.type)) {
        setError("File type not supported");
        return;
      }

      setFile(selectedFile);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(selectedFile);
      setError("");
    }
  };

  return {
    file,
    preview,
    changeHandler,
    error,
  };
};

export default useFileHandler;
