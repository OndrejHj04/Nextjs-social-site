import User from "@/models/user";
import { connectToDB } from "@/utils/database";

export const POST = async (req, { params }) => {
  const data = await req.json();
  const { id } = params;

  try {
    await connectToDB();
    const users = await User.findOneAndUpdate({ _id: id }, data);
    return new Response(JSON.stringify(users), { status: 200 });
  } catch (e) {
    return new Response("Failed to list users", { status: 500 });
  }
};
