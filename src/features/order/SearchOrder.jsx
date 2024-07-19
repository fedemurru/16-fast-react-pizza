import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="transition:all rounded-full bg-yellow-200 px-4 py-2 text-sm duration-300 placeholder:text-stone-500 sm:w-64 sm:focus:w-72"
      />
    </form>
  );
}

export default SearchOrder;
