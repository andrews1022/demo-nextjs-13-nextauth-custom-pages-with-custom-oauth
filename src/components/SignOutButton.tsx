"use client";

const SignOutButton = () => {
  const handleOnClick = () => {
    console.log("clicked!");
  };

  return (
    <button
      className="border-2 border-blue-600 inline-block mt-4 py-2 px-4 rounded-md text-blue-600 font-bold hover:bg-blue-600 hover:text-white transition-colors"
      onClick={handleOnClick}
      type="button"
    >
      Sign Out
    </button>
  );
};

export default SignOutButton;
