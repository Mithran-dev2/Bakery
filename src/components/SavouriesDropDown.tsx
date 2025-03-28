import { Link } from "react-router-dom";

const SavouriesDropdown: React.FC = () => {
  const savouriesCategories = [
    "Mixtures & Sev",
    "Chips & Snacks",
    "Roasted/Baked Savouries",
    "Dry Fruit Tray",
  ];

  return (
    <div className="w-56 bg-white shadow-md rounded-md">
      <ul>
        {savouriesCategories.map((category, index) => {
          // Create a URL-friendly string
          const path = category.toLowerCase().replace(/ /g, "-").replace(/&/g, "and");
          return (
            <li key={index} className="border-b last:border-none">
              <Link
                to={`/savouries/${path}`}
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

export default SavouriesDropdown;
