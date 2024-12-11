import { NotificationIcon, QRIcon } from "@/lib/assets";
import { Button } from "../ui/button";
import { useNavigate } from "react-router";

export const TopNavBar = () => {
  const navigate = useNavigate();

  return (
    <nav className="flex justify-between items-center py-4">
      <Button
        variant="ghost"
        size="icon"
        className="rounded-[10px] border border-main-lightGreen bg-white "
        onClick={() => navigate("/qr")}
      >
        <img src={QRIcon} />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="rounded-[10px] border border-main-lightGreen bg-white"
        onClick={() => navigate("/notifications")}
      >
        <img src={NotificationIcon} />
      </Button>
    </nav>
  );
};
