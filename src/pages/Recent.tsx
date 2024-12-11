import { DateGroup } from "@/components/recent";

const transactionData = {
  today: [
    {
      type: "withdraw" as const,
      amount: "12000",
      description: "YOU WITHDRAWD 12000 ETB",
      time: "11:22 AM",
      hasCornerDecoration: true,
    },
    {
      type: "send" as const,
      amount: "2500.00",
      description: "YOU SENT 2500.00 ETB TO GOITOM",
      time: "11:22 AM",
    },
  ],
  yesterday: [
    {
      type: "deposit" as const,
      amount: "100",
      description: "YOU DEPOSITED 100 ETB THROUGH AN AGENT",
      time: "11:22 AM",
    },
    {
      type: "deposit" as const,
      amount: "100",
      description: "YOU DEPOSITED 100 ETB THROUGH AN AGENT",
      time: "11:22 AM",
    },
    {
      type: "withdraw" as const,
      amount: "100",
      description: "YOU WITHDRAWD 100 ETB",
      time: "11:22 AM",
      hasCornerDecoration: true,
    },
  ],
  wednesday: [
    {
      type: "send" as const,
      amount: "2500.00",
      description: "YOU SENT 2500.00 ETB TO GOITOM",
      time: "11:22 AM",
    },
    {
      type: "send" as const,
      amount: "2500.00",
      description: "YOU SENT 2500.00 ETB TO GOITOM",
      time: "11:22 AM",
    },
    {
      type: "withdraw" as const,
      amount: "100",
      description: "YOU WITHDRAWD 100 ETB",
      time: "11:22 AM",
      hasCornerDecoration: true,
    },
  ],
};

const RecentPage = () => {
  return (
    <div>
      <div className="space-y-6 mb-20">
        <p className="text-main-darkGreen font-bold text-xl ">
          Recent Transactions
        </p>
        <DateGroup date="TODAY" transactions={transactionData.today} />
        <DateGroup date="YESTERDAY" transactions={transactionData.yesterday} />
        <DateGroup date="WEDNESDAY" transactions={transactionData.wednesday} />
      </div>
    </div>
  );
};

export default RecentPage;
