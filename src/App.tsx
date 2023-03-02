import { useState } from "react";
// 参考地址: https://www.thenewstep.cn/frontend/js/demo8/
import Categories from "./components/Categories";
import Menu from "./components/Menu";

import items from "./data/index";
import { MenuItems } from "./types";

const allCategories = ["所有", ...new Set(items.map((item) => item.category))];

/**
 * 数据 谁定义 谁修改
 *
 * menuItems的变化处理方法要在App.tsx中
 * 触发按钮的时机是在Categories.tsx中
 *
 * 通过属性传值(函数也是值)
 */

function App() {
  const [menuItems, setMenuItems] = useState<MenuItems[]>(items);
  const [categories, setCategories] = useState<string[]>(allCategories);

  const filterItems = (category: string) => {
    if (category === "所有") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter(
      (item: MenuItems) => item.category === category
    );
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>菜谱</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
