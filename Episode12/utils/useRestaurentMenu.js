import { useEffect, useState } from "react";

const useRestaurentMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    if (!resId) return;
    fetchMenu();
  }, [resId]);

  async function fetchMenu() {
    const apiUrl = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.057437&lng=78.9381729&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`;

    const data = await fetch(apiUrl);
    const json = await data.json();
    setResInfo(json);
  }

  return resInfo;
};

export default useRestaurentMenu;
