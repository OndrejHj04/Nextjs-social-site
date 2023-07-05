import User from "@/models/user";
import { connectToDB } from "@/utils/database";

export const POST = async (req, res) => {
  const data = await req.json();

  try {
    await connectToDB();
    const newUser = new User(data);

    await newUser.save();

    return new Response(JSON.stringify(newUser), { status: 201 });
  } catch (e) {
    return new Response("Failed to create user", { status: 500 });
  }
};
