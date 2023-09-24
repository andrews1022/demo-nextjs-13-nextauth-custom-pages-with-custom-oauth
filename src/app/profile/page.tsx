import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";

const ProfilePage = async () => {
  const session = await getServerSession(options);

  console.log("session: ", session);

  return (
    <div className="pl-4">
      <h1 className="text-2xl">ProfilePage</h1>
    </div>
  );
};

export default ProfilePage;
