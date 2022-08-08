import { useSession, signIn, signOut } from "next-auth/react";

const User = () => {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <img
          src={session.user.image}
          alt={session.user.name}
          onClick={signOut}
          className="h-10 w-10 rounded-full cursor-pointer hover:bg-gray-200 p-1"
        />
      </>
    );
  }
  return (
    <>
      <button
        onClick={signIn}
        className="bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md"
      >
        Sign In
      </button>
    </>
  );
};

export default User;
