import { EtPay } from "@/lib/assets";

export const BalanceCard = () => {
  return (
    <div
      className="flex flex-col gap-8 px-6 bg-main text-white rounded-[15px] h-[24vh]"
      style={{
        backgroundImage: `url("${EtPay}")`,
      }}
    >
      <div className="h-[24vh] flex flex-col justify-center mt-12">
        <h3 className="font-semibold text-base">Balance</h3>
        <p className="font-semibold text-2xl">12,000,34.00 ETB</p>
      </div>

      <p className="flex justify-end font-semibold text-base mb-6">20%</p>
    </div>
  );
};
