import axios from "axios";

export const logout = async () => {
  try {
    await axios.get("/logout");
    return "Success";
  } catch (err) {
    console.log(err);
  }
};
