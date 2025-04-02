import { Link } from "react-router-dom";

const BakeryDropdown: React.FC = () => {
  const bakeryCategories = [
    "Cakes",
    "Cookies",
    "Gift Box",
  ];

  return (
    <div className="w-56 bg-white shadow-md rounded-md">
      <ul>
        {bakeryCategories.map((category, index) => {
          // Create a URL-friendly string
          const path = category.toLowerCase().replace(/ /g, "-");
          return (
            <li key={index} className="border-b last:border-none">
              <Link
                to={`/bakery/${path}`}
                className="block px-4 py-2 hover:bg-gray-100"
              >
                {category}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BakeryDropdown;
