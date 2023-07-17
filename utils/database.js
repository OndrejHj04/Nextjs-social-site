import mongooge from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  mongooge.set("strictQuery", true);

  if (isConnected) {
    console.log("connected");
    return;
  }

  try {
    await mongooge.connect(
      "mongodb+srv://kraljeliman:kraljeliman@cluster0.2srnz3k.mongodb.net/?retryWrites=true&w=majority",
      {
        dbName: "my_next_test_app",
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    isConnected = true;
  } catch (e) {
    console.log(e);
  }
};
