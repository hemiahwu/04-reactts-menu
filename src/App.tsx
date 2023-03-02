import { useState } from "react";
// 参考地址: https://www.thenewstep.cn/frontend/js/demo8/
import Categories from "./components/Categories";
import Menu from "./components/Menu";

import items from "./data/index";
import { MenuItems } from "./types";

const allCategories = ["所有", ...new Set(items.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState<MenuItems[]>(items);
  const [categories, setCategories] = useState<string[]>(allCategories);

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>菜谱</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
