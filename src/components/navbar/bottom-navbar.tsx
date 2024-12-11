import { Home, MapPin, User, List } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation, useNavigate } from "react-router";
import { cn } from "@/lib/utils";

const bottomNavItems = [
  {
    icon: Home,
    label: "HOME",
    href: "/",
  },
  {
    icon: List,
    label: "RECENT",
    href: "/recent",
  },
  {
    icon: MapPin,
    label: "NEARBY",
    href: "/nearby",
  },
  {
    icon: User,
    label: "PROFILE",
    href: "/profile",
  },
];

export const BottomNavBar = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const navigate = useNavigate();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border px-4 py-2 max-w-sm">
      <div className="flex justify-between items-center">
        {bottomNavItems.map((item) => {
          const currentPath = pathname === item.href;
          return (
            <Button
              key={item.label}
              variant="ghost"
              className={cn("flex items-center", currentPath && "bg-main")}
              onClick={() => navigate(item.href)}
              style={{
                backgroundColor: currentPath ? "#1FAE63" : "",
              }}
            >
              <item.icon
                className={cn("h-6 w-6", currentPath && "text-white")}
              />
              {currentPath && (
                <span className="text-xs font-semibold text-white">
                  {item.label}
                </span>
              )}
            </Button>
          );
        })}
      </div>
    </nav>
  );
};
