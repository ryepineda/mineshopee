"use client";

import { useState } from "react";
import { useFormStatus } from "react-dom";

const UpdateButton = () => {
  const { pending } = useFormStatus();
  const [updated, setUpdated] = useState(false);

  const handleClick = () => {
    // Simulate an update operation
    setUpdated(false); // Reset the updated status
    // Perform the update operation here
    setTimeout(() => {
      // Simulate the update being completed
      setUpdated(true);
    }, 2000); // Simulate a delay for the update operation
  };

  return (  
    <div>
      <button
        disabled={pending}
        onClick={handleClick}
        className="bg-lama text-white p-2 rounded-md cursor-pointer disabled:bg-pink-200 disabled:cursor-not-allowed w-full max-w-96"
      >
        {pending ? "Updating..." : "Update"}
      </button>
      {updated && <p className="text-green-500 mt-2 w-full max-w-96 text-center">Profile has been updated!</p>}
    </div>
  );
};

export default UpdateButton;
