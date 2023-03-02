import { useRouter } from "next/router";
import { ReactNode, useState } from "react";

export interface ParentElement {
  children: ReactNode;
}

export default function Menu({ children }: ParentElement) {
  const [isOpenMenu, setIsOpen] = useState(false);
  const { replace } = useRouter();

  return (
    <header
      className={`h-full flex flex-col bg-black  ${
        isOpenMenu
          ? "animate-[menuOpenAnimation_1s_ease-in-out_forwards]"
          : "animate-[menuCloseAnimation_1s_ease-in-out_forwards]"
      }  max-w-[250px] overflow-hidden`}
    >
      <div
        className="p-2 w-full flex justify-center"
        onClick={() => setIsOpen(!isOpenMenu)}
      >
        <div
          className="p-2 flex flex-col bg-white rounded-md justify-around w-10 h-10 border"
          role="button"
        >
          <div className="h-[2px] bg-black"></div>
          <div className="h-[2px] bg-black"></div>
          <div className="h-[2px] bg-black"></div>
        </div>
      </div>
      <nav className="mt-4">
        <ul className="list-none flex flex-col w-full">
          {children}
          <Menu.Item>
            <Menu.Icon children="" />
            <Menu.Title children="Sair" />
          </Menu.Item>
        </ul>
      </nav>
    </header>
  );
}

interface Item extends ParentElement {
  route?: string;
}

Menu.Item = ({ children, route = "/" }: Item) => {
  const { replace } = useRouter();

  return (
    <li
      className="hover:bg-white flex items-center m-2 w-[250px]"
      role="button"
      onClick={async () => await replace(route)}
    >
      {children}
    </li>
  );
};

Menu.Title = ({ children }: ParentElement) => {
  return <span className="text-white hover:text-black ml-4">{children}</span>;
};

Menu.Icon = ({ children }: ParentElement) => {
  return <div className="w-10 h-10 bg-red-700">{children}</div>;
};
