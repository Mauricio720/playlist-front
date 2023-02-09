import { ReactNode } from "react";
import Menu from "./Menu";

export namespace Main {
  export interface Props {
    children: ReactNode;
    title?: string;
  }
  export interface Item {
    icon: any;
    title: string;
    route: string;
    private?: boolean;
  }
}

export const Main = ({ children, title }: Main.Props) => {
  const menus = [
    { title: "Inicio", route: "", icon: "" },
    { title: "Minhas Músicas", route: "", icon: "" },
    { title: "Minhas Playlist", route: "", icon: "" },
    { title: "Perfil", route: "", icon: "" },
  ];
  return (
    <main className="w-screen h-screen flex">
      <Menu>
        {menus.map((menuItem, index) => (
          <Menu.Item key={index}>
            <Menu.Icon children="" />
            <Menu.Title children={menuItem.title} />
          </Menu.Item>
        ))}
      </Menu>
      <div className="flex-1">{children}</div>
    </main>
  );
};
