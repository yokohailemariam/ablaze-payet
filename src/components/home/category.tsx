import { PaymentCategory } from "./payment-category";
import { transportationItems, utilityItems } from "@/lib/datas";

export const Category = () => {
  return (
    <div className="mt-6 mb-20 overflow-y-auto max-h-[36vh]">
      <h2 className="font-semibold mb-4  text-main-darkGreen">
        PAY WITH <span className="text-main">PAYET</span>
      </h2>
      <PaymentCategory title="TRANSPORTATION" items={transportationItems} />
      <PaymentCategory title="UTILITY" items={utilityItems} />
      <PaymentCategory title="ELECTRICITY" items={utilityItems} />
      <PaymentCategory title="TELECOMUNICATION" items={utilityItems} />
    </div>
  );
};
