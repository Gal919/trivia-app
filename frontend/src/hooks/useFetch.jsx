import { useState } from "react";

const useFetch = () => {
  const [errorMessage, setErrorMessage] = useState(null);

  const sendHttpRequest = async (url, method, body, action) => {
    try {
      const res = await fetch(url, {
        method,
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: body ? JSON.stringify(body) : null,
      });

      if (!res.ok) {
        throw new Error("Somthing went wrong. Please try again later");
      }

      const data = await res.json();
      action(data);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return [errorMessage, sendHttpRequest];
};

export default useFetch;
