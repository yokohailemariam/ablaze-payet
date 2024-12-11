export interface IAction {
  icon: string;
  label: string;
}
export interface ICategoryItem {
  name: string;
  logo: string;
}

export interface ITransaction {
  type: "withdraw" | "send" | "deposit";
  amount: string;
  description: string;
  time: string;
  hasCornerDecoration?: boolean;
}

export interface IDateGroupProps {
  date: string;
  transactions: ITransaction[];
}

export interface ITransactionItemProps {
  type: "withdraw" | "send" | "deposit";
  amount: string;
  description: string;
  time: string;
  hasCornerDecoration?: boolean;
}

export interface ITransactionIconProps {
  type: "withdraw" | "send" | "deposit";
  className?: string;
}
