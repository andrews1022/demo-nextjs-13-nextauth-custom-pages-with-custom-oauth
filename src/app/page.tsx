import { getServerSession } from "next-auth/next";
import { options } from "./api/auth/[...nextauth]/options";

const HomePage = async () => {
  const session = await getServerSession(options);

  console.log("session: ", session);

  return (
    <div className="pl-4">
      <h1 className="text-2xl">HomePage</h1>
    </div>
  );
};

export default HomePage;
