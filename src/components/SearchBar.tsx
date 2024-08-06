"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SearchBar = () => {
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;

    if (name.trim() === "") {
      // Set the error message if the search input is empty
      setError("");
    } else {
      // Clear the error message and navigate to the search results page
      setError(null);
      router.push(`/list?name=${name}`);
    }
  };

  return (
    <div>
    <form
      className="flex justify-between bg-gray-100 p-2 rounded-md"
      onSubmit={handleSearch}
    >
      <input
        type="text"
        name="name"
        placeholder="Search item"
        className="flex w-full bg-transparent outline-none"
      />
      <button className="cursor-pointer">
        <Image src="/search.png" alt="" width={16} height={16} />
      </button>
    </form>
    {error && <p className="text-red-500">{error}</p>} {/* Display the error message */}
    </div>
  );
};

export default SearchBar;
