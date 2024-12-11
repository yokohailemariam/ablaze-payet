import { IDateGroupProps } from "@/types";
import { TransactionItem } from "./transaction-item";

export const DateGroup = ({ date, transactions }: IDateGroupProps) => {
  return (
    <div className="mb-6">
      <h2 className="text-main-lightGray text-xs mb-3">{date}</h2>
      {transactions.map((transaction, index) => (
        <TransactionItem key={index} {...transaction} />
      ))}
    </div>
  );
};
