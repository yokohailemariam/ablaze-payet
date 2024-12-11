import { ITransactionIconProps } from "@/types";
import { ArrowUpRight, Plus, ArrowUpLeft } from "lucide-react";

export function TransactionIcon({
  type,
  className = "",
}: ITransactionIconProps) {
  const iconProps = {
    className: `size-5 ${className}`,
  };

  switch (type) {
    case "withdraw":
      return (
        <ArrowUpLeft
          {...iconProps}
          className={`${iconProps.className} text-red-500 border-2 rounded-full border-red-500`}
        />
      );
    case "send":
      return (
        <ArrowUpRight
          {...iconProps}
          className={`${iconProps.className} text-main-darkGreen border-2 border-main-darkGreen rounded-full`}
        />
      );
    case "deposit":
      return (
        <Plus
          {...iconProps}
          className={`${iconProps.className} text-main border-2 border-main rounded-full`}
        />
      );
    default:
      return null;
  }
}
