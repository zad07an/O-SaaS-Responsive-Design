import { useEffect, useState } from "react";

const useDynamicNavbar = (): boolean => {
  const [dynamicNav, setDynamicNav] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setDynamicNav(window.scrollY >= 120 ? true : false);
    });

    return () =>
      window.removeEventListener("scroll", () => {
        setDynamicNav(window.scrollY >= 120 ? true : false);
      });
  }, []);

  return dynamicNav;
};

export default useDynamicNavbar;
