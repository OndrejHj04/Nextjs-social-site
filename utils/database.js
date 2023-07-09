import mongooge from "mongoose";

export const connectToDB = async () => {
  mongooge.set("strictQuery", true);

  try {
    await mongooge.connect(
      "mongodb+srv://9inch:kraljeliman@test-app.8mgcprs.mongodb.net/?retryWrites=true&w=majority",
      {
        dbName: "my_next_test_app",
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
  } catch (e) {}
};
