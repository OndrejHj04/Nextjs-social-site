import User from "@/models/user";
import { connectToDB } from "@/utils/database";

export const POST = async (req, { params }) => {
  const { id } = params;

  try {
    await connectToDB();
    const user = await User.findOneAndDelete({ _id: id });
    return new Response(JSON.stringify(user), { status: 200 });
  } catch (e) {
    return new Response("Failed to list users", { status: 500 });
  }
};
