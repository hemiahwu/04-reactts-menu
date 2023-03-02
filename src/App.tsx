import { useState } from "react";
// 参考地址: https://www.thenewstep.cn/frontend/js/demo8/
import Categories from "./components/Categories";
import Menu from "./components/Menu";

import items from "./data/index";
import { MenuItems } from "./types";

function App() {
  const [menuItems, setMenuItems] = useState<MenuItems[]>(items);
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>菜谱</h2>
          <div className="underline"></div>
        </div>
        <Categories />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
