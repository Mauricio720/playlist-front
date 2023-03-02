import { ReactNode } from "react";
import Player from "../Player";
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
    { title: "Inicio", route: "/", icon: "" },
    { title: "Minhas Músicas", route: "", icon: "" },
    { title: "Minhas Playlists", route: "", icon: "" },
    { title: "Artistas", route: "/artists", icon: "" },
    { title: "Músicas", route: "/songs", icon: "" },
    { title: "Perfil", route: "/profile", icon: "" },
  ];
  return (
    <main className="w-screen h-screen overflow-hidden flex">
      <Menu>
        {menus.map((menuItem, index) => (
          <Menu.Item key={index} route={menuItem.route}>
            <Menu.Icon children="" />
            <Menu.Title children={menuItem.title} />
          </Menu.Item>
        ))}
      </Menu>
      <Player />
      <div className="flex-1 p-6 overflow-auto">{children}</div>
    </main>
  );
};
