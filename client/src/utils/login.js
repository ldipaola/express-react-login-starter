import axios from "axios";

export const login = async (email, password) => {
  let authUser = "";
  await axios
    .post("/api/login", {
      email: email,
      password: password,
    })
    .then((response) => authUser = response.data)
    .catch((error) => {
      console.log("Error:", error);
    });
    return authUser;
};