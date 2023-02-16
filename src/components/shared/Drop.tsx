import Link from "next/link";
import { ButtonTrans } from "../atoms/Button";

type TYPEDROPMOBILE = {
  links: any;
  active: boolean;
  setActive: any;
};

export const DropMobile = ({ links, active, setActive }: TYPEDROPMOBILE) => {
  return (
    <div
      className={` ${
        active ? "right-0" : "right-[-300px]"
      } fixed top-[70px] z-20 duration-200 bg-red shadow-xl p-[24px] rounded-bl-md`}
    >
      {links.map((elm: any, i: number) => {
        return (
          <div
            key={i}
            className="mb-[12px]"
            onClick={() => {
              setActive(!active);
            }}
          >
            <Link href={elm.link}>
              <ButtonTrans label={elm.title} icon={elm?.icon} />
            </Link>
          </div>
        );
      })}
    </div>
  );
};
