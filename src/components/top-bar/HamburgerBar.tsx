// import type
import type { JSX } from "react";

// import icon
import { MdOutlineMenu } from "react-icons/md";
import { IoClose } from "react-icons/io5";

// import react
import { useEffect } from "react";

// Import custome hook
import { useToggleMenu } from "../../context/toggle-mnue/useToggleMenu";

export default function HamburgerBar(): JSX.Element {
  const { isOpen, toggle } = useToggleMenu();

  useEffect(() => {
    console.log(isOpen);
  }, [isOpen]);

  const clickHandlerToggle = () => {
    toggle();
  };

  return (
    <span className="cursor-pointer" onClick={clickHandlerToggle}>
      {isOpen ? (
        <IoClose className="text-xl @lg:text-2xl @4xl:text-3xl @5xl:text-4xl" />
      ) : (
        <MdOutlineMenu className="text-xl @lg:text-2xl @4xl:text-3xl @5xl:text-4xl" />
      )}
    </span>
  );
}
