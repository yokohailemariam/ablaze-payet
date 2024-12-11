interface PaymentItemProps {
  name: string;
  logo: string;
}

export const PaymentItem = ({ name, logo }: PaymentItemProps) => {
  return (
    <div className="flex items-center space-x-3 p-3 bg-white rounded-xl">
      <img
        src={logo}
        alt={name}
        width={34}
        height={27}
        className="rounded-full object-contain"
      />
      <span className="font-semibold text-[10px] text-main-darkGreen truncate">
        {name}
      </span>
    </div>
  );
};
