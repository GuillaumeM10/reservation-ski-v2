const config = () => {
  const token = localStorage.getItem("accessToken");
  return {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  };
};

export default config;
