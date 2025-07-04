import express from "express";
import CORS from "cors";

const app = express();
const PORT = process.env.PORT || 5000;
app.use(CORS());

app.get("/", (req, res) => {
  res.send("Server is live (-.-)");
});

app.use(express.json());

const start = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`Server is listening at ${PORT}`);
    });
  } catch (error) {}
};

start();
