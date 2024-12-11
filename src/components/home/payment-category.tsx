import { PaymentItem } from "./payment-item";

interface PaymentCategoryProps {
  title: string;
  items: Array<{
    name: string;
    logo: string;
  }>;
}

export function PaymentCategory({ title, items }: PaymentCategoryProps) {
  return (
    <div className="mb-6">
      <h3 className="text-sm text-main-lightGray mb-3 ">{title}</h3>
      <div className="grid grid-cols-2 gap-4 ">
        {items.map((item, index) => (
          <PaymentItem key={index} name={item.name} logo={item.logo} />
        ))}
      </div>
    </div>
  );
}
