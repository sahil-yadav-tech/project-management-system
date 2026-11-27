console.log("JAI SHREE RAM JI / JAI BAJARANG BALI JI 👏❤️");
import dotenv from "dotenv";
dotenv.config({});
import App from "./app.js";

const PORT = process.env.PORT || 5000;

const StartServer = () => {
  try {
    App.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.log(error, "Error while running server");
  }
};

StartServer();
