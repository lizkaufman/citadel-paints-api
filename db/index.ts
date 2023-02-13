import mongoose from "mongoose";

export function connectToDatabase(): void {
  mongoose.set("strictQuery", false);
  mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string);
  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error: "));
  db.once("open", function () {
    console.log("Connected to database successfully");
  });
}
