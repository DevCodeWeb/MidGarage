import { Icon } from "@iconify/react";

type ButtonType = {
  label?: string;
  onClick?: any;
  key?: any;
  icon?: any;
  disabled?: boolean;
  className?: string;
  title?: string;
  subtitle?: string;
};

export const Button = ({ label, icon }: ButtonType) => {
  return (
    <button className="px-[18px] flex items-center justify-center gap-[12px] w-full sm:w-full md:w-full py-[8px] hover:bg-white hover:text-red font-semibold duration-150 bg-red rounded-[4px]">
      {icon && <Icon icon={icon} />}
      <h1 className="sm:text-[24px] md:text-[24px]">{label}</h1>
    </button>
  );
};

export const ButtonTrans = ({ label, icon, className }: ButtonType) => {
  return (
    <button
      className={` ${className} px-[18px] flex items-center justify-center gap-[12px] sm:w-full md:w-full py-[8px] text-[18px] hover:bg-white hover:bg-opacity-30 font-semibold duration-150  rounded-[4px]`}
    >
      {icon && <Icon icon={icon} className="h-[32px] w-[32px]" />}
      <h1>{label}</h1>
    </button>
  );
};

export const LargeButton = ({ title, subtitle, icon }: ButtonType) => {
  return (
    <button className="p-[32px] flex flex-col items-center justify-center gap-[12px] w-full sm:w-full md:w-full hover:bg-white hover:text-red font-semibold duration-150 bg-red rounded-[4px]">
      {icon && <Icon icon={icon} className="h-[32px] w-[32px]" />}
      <h3 className="sm:text-[24px] md:text-[24px] text-[28px]">{title}</h3>
      <p className="sm:text-[24px] md:text-[24px] text-[18px] font-normal">
        {subtitle}
      </p>
    </button>
  );
};
