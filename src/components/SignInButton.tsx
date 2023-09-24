"use client";

import { signIn } from "next-auth/react";

const SignInButton = () => {
  return (
    <button
      className="border-2 border-blue-600 inline-block mt-4 py-2 px-4 rounded-md text-blue-600 font-bold hover:bg-blue-600 hover:text-white transition-colors"
      onClick={() => signIn("trackmania")}
      type="button"
    >
      Sign In With OAuth
    </button>
  );
};

export default SignInButton;
