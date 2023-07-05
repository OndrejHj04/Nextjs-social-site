import User from "@/models/user";
import { connectToDB } from "@/utils/database";

export const GET = async () => {
  try {
    await connectToDB();
    const users = await User.find({});

    return new Response(JSON.stringify(users), { status: 200 });
  } catch (e) {
    return new Response("Failed to list users", { status: 500 });
  }
};
