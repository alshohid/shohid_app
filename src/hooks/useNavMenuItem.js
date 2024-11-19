import { useEffect, useState } from "react";

export const useNavItems = () => {
  const [navItems, setNavItems] = useState([]);

  useEffect(() => {
    const fetchNavItems = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_HOST}/api/user/categories`
        );
        const data = await response.json();
        const formattedNavItems = data.data.map((category) => ({
          id: category.id,
          name: category.name,
          href:`/${category.name.toLowerCase()}`,
          subNavItems: category.subcategories.map((sub) => ({
            id: sub.id,
            name: sub.name,
            href: `/category/${sub.id}`,
          })),
        }));

        setNavItems(formattedNavItems);
      } catch (error) {
        console.error("Error fetching nav items:", error);
      }
    };

    fetchNavItems();
  }, []);

  return navItems;
};
