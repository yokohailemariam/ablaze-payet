import { ITransactionItemProps } from "@/types";
import { TransactionIcon } from "./transaction-icon";

export const TransactionItem = ({
  type,
  amount,
  description,
  time,
  hasCornerDecoration,
}: ITransactionItemProps) => {
  return (
    <div className="bg-white rounded-xl p-4 relative mb-3">
      {hasCornerDecoration && (
        <div className="absolute top-0 right-0 size-8">
          <div className="absolute top-0 right-0 w-0 h-0 border-t-[20px] rounded-tr-md border-t-red-500 border-l-[20px] border-l-transparent"></div>
        </div>
      )}

      <div className="flex items-center">
        <div className="size-6 mr-3">
          <TransactionIcon type={type} />
        </div>
        <div className="flex-1">
          <h3 className="text-base font-semibold text-main-darkGreen">
            {amount} ETB
          </h3>
          <p className="text-main-lightGray font-medium text-[10px] truncate pr-3">
            {description}
          </p>
        </div>
        <span className="text-main-lightGray text-[8px] font-medium">
          {time}
        </span>
      </div>
    </div>
  );
};
