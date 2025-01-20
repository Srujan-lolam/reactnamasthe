import { useEffect } from "react";
import { Menu_API } from "./constants";
import { useState } from "react";
const useRestaurentMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);
  async function fetchMenu() {
    const data = await fetch(Menu_API);
    const json = await data.json();
    setResInfo(json);
    console.log(json);
  }
  return resInfo;
};
export default useRestaurentMenu;
