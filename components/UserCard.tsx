import Link from "next/link";
import { UserDB } from "../types/types";
import { deleteUser } from "../services/users";

const UserCard = ({ user }: { user: UserDB }) => {
  return (
    <div
      key={user._id.toString()}
      className="w-full max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-3"
    >
      <div className="flex flex-col items-center pb-10 mt-3">
        <img
          className="w-24 h-24 mb-3 rounded-full shadow-lg"
          src="placeholder.png"
          alt="Bonnie image"
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          {user.name}
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {user.job}
        </span>
        <div className="flex mt-4 space-x-3 md:mt-6">
          <Link
            href={`/edit-user/${user._id}`}
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Edit
          </Link>
          <button
            onClick={() => deleteUser(user._id.toString())}
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
