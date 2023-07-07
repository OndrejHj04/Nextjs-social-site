import User from "../../../../../models/user";

import { connectToDB } from "../../../../../utils/database";

export const GET = async (req, { params }) => {
  const { id } = params;
  try {
    await connectToDB();
    const users = await User.findOne({ _id: id });

    return new Response(JSON.stringify(users), { status: 200 });
  } catch (e) {
    return new Response("Failed to list users", { status: 500 });
  }
};
