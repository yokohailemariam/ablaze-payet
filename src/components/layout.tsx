import { Outlet } from "react-router";
import { TopNavBar, BottomNavBar } from "@/components";

export const Layout = () => {
  return (
    <div className="px-3 max-w-sm">
      <TopNavBar />
      <Outlet />
      <BottomNavBar />
    </div>
  );
};
