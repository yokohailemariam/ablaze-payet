import { actions } from "@/lib/datas";

export const QuickActions = () => {
  return (
    <div className="py-6 ">
      <h2 className="text-[14px] mb-4 text-main-darkGreen font-semibold ">
        QUICK ACTIONS
      </h2>
      <div className="grid grid-cols-4 gap-2 place-items-center place-content-center">
        {actions.map((action, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center border border-main-lightGreen rounded-[10px] p-4 w-full bg-white"
          >
            <img
              src={action.icon}
              className="text-main-darkGray size-[25px] mb-2"
            />
            <span className="text-xs text-main-darkGreen font-semibold ">
              {action.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
