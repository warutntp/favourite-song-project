import express from "express";
import userRoutes from "../apps/user-service/entry-points/user.routes";
import songRoutes from "../apps/song-service/entry-points/song.routes";
import userSongRoutes from "../apps/user-song-service/entry-points/user-song.routes";
import errorHandler from "./middleware/errorHandler";

const app = express();
app.use(express.json());

app.use("/api", userRoutes);
app.use("/api", songRoutes);
app.use("/api", userSongRoutes);

app.use(errorHandler);

const PORT = process.env.PORT ?? 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
