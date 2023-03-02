



# React-Hooks 实战菜单Menu

## 第一章 最终效果演示

### 

<div style="page-break-after: always;"></div>

## 第二章 项目实战

## 1. 创建React项目

`````bash	
npm create vite@latest react-menu
`````

* cd react-menu
* code .
* npm install
* npm run dev



### 2. 清空样式



## 2. 搭建基本布局

* main.tsx搭建基本结构

``````tsx
import { useState } from "react";

// 参考地址: https://www.thenewstep.cn/frontend/js/demo8/
import Categories from './components/Categories'
import Menu from './components/Menu'

function App() {
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>菜谱</h2>
          <div className="underline"></div>
        </div>
      </section>
    </main>
  );
}

export default App;
``````

* 按钮组件

``````tsx
<Categories />
<Menu />
``````

* 目录下创建组件

`````bash
mkdir src/components

touch src/components/Categories.tsx

touch src/components/Menu.tsx   
`````

* Categories.tsx

`````tsx
export default () => {
  return <h2>按钮分类</h2>;
};
`````

* Menu.tsx

`````tsx
export default () => {
  return <h2>菜谱内容</h2>;
};
`````

* 引入组件

``````tsx
import Categories from './components/Categories'
import Menu from './components/Menu'
``````

* index.css

``````css
:root {
  --clr-primary-1: hsl(205, 86%, 17%);
  --clr-primary-2: hsl(205, 77%, 27%);
  --clr-primary-3: hsl(205, 72%, 37%);
  --clr-primary-4: hsl(205, 63%, 48%);
  --clr-primary-5: hsl(205, 78%, 60%);
  --clr-primary-6: hsl(205, 89%, 70%);
  --clr-primary-7: hsl(205, 90%, 76%);
  --clr-primary-8: hsl(205, 86%, 81%);
  --clr-primary-9: hsl(205, 90%, 88%);
  --clr-primary-10: hsl(205, 100%, 96%);
  --clr-grey-1: hsl(209, 61%, 16%);
  --clr-grey-2: hsl(211, 39%, 23%);
  --clr-grey-3: hsl(209, 34%, 30%);
  --clr-grey-4: hsl(209, 28%, 39%);
  --clr-grey-5: hsl(210, 22%, 49%);
  --clr-grey-6: hsl(209, 23%, 60%);
  --clr-grey-7: hsl(211, 27%, 70%);
  --clr-grey-8: hsl(210, 31%, 80%);
  --clr-grey-9: hsl(212, 33%, 89%);
  --clr-grey-10: hsl(210, 36%, 96%);
  --clr-white: #fff;
  --clr-gold: #c59d5f;

  --clr-red-dark: hsl(360, 67%, 44%);
  --clr-red-light: hsl(360, 71%, 66%);
  --clr-green-dark: hsl(125, 67%, 44%);
  --clr-green-light: hsl(125, 71%, 66%);
  --clr-black: #222;
  --transition: all 0.3s linear;
  --spacing: 0.1rem;
  --radius: 0.25rem;
  --light-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  --dark-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  --max-width: 1170px;
  --fixed-width: 620px;
}


*,
::after,
::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background: var(--clr-grey-10);
  color: var(--clr-grey-1);
  line-height: 1.5;
  font-size: 0.875rem;
}

ul {
  list-style-type: none;
}

a {
  text-decoration: none;
}

h1,
h2,
h3,
h4 {
  letter-spacing: var(--spacing);
  text-transform: capitalize;
  line-height: 1.25;
  margin-bottom: 0.75rem;
}

h1 {
  font-size: 3rem;
}

h2 {
  font-size: 2rem;
}

h3 {
  font-size: 1.25rem;
}

h4 {
  font-size: 0.875rem;
}

p {
  margin-bottom: 1.25rem;
  color: var(--clr-grey-5);
}

@media screen and (min-width: 800px) {
  h1 {
    font-size: 4rem;
  }

  h2 {
    font-size: 2.5rem;
  }

  h3 {
    font-size: 1.75rem;
  }

  h4 {
    font-size: 1rem;
  }

  body {
    font-size: 1rem;
  }

  h1,
  h2,
  h3,
  h4 {
    line-height: 1;
  }
}


.section {
  width: 90vw;
  margin: 0 auto;
  max-width: var(--max-width);
}

@media screen and (min-width: 992px) {
  .section {
    width: 95vw;
  }
}



.menu {
  padding: 5rem 0;
}

.title {
  text-align: center;
  margin-bottom: 2rem;
}

.underline {
  width: 5rem;
  height: 0.25rem;
  background: var(--clr-gold);
  margin-left: auto;
  margin-right: auto;
}

.btn-container {
  margin-bottom: 4rem;
  display: flex;
  justify-content: center;
}

.filter-btn {
  background: transparent;
  border-color: transparent;
  font-size: 1rem;
  text-transform: capitalize;
  margin: 0 0.5rem;
  letter-spacing: 1px;
  padding: 0.375rem 0.75rem;
  color: var(--clr-gold);
  cursor: pointer;
  transition: var(--transition);
  border-radius: var(--radius);
}

.filter-btn:hover {
  background: var(--clr-gold);
  color: var(--clr-white);
}

.section-center {
  width: 90vw;
  margin: 0 auto;
  max-width: 1170px;
  display: grid;
  gap: 3rem 2rem;
  justify-items: center;
}

.menu-item {
  display: grid;
  gap: 1rem 2rem;
  max-width: 25rem;
}

.photo {
  object-fit: cover;
  height: 200px;
  width: 100%;
  border: 0.25rem solid var(--clr-gold);
  border-radius: var(--radius);
  display: block;
}

.item-info header {
  display: flex;
  justify-content: space-between;
  border-bottom: 0.5px dotted var(--clr-grey-5);
}

.item-info h4 {
  margin-bottom: 0.5rem;
}

.price {
  color: var(--clr-gold);
}

.item-text {
  margin-bottom: 0;
  padding-top: 1rem;
}

@media screen and (min-width: 768px) {
  .menu-item {
    grid-template-columns: 225px 1fr;
    gap: 0 1.25rem;
    max-width: 40rem;
  }

  .photo {
    height: 175px;
  }
}

@media screen and (min-width: 1200px) {
  .section-center {
    width: 95vw;
    grid-template-columns: 1fr 1fr;
  }

  .photo {
    height: 150px;
  }
}
``````





### 2. 配置代码

* Main.tsx

`````js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <App />
);
`````

* App.js

`````js
function App() {
  return <div className="App">React Menu</div>
}

export default App
`````



## 3. 模拟数据

* 创建src/data/data.ts
* 参照设计图, 模拟数据

``````ts
export default [];
``````

`````ts
export default [
  {
    id: 1,
    img: "https://www.thenewstep.cn/frontend/js/demo8/images/item-1.jpeg",
    title: "煎饼",
    price: 15.99,
    desc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur, facere asperiores. Maiores quidem neque id nam libero eligendi necessitatibus ea?`,
    category: "早餐",
  },
];
`````

`````js
export default [
  {
    id: 1,
    title: "煎饼",
    category: "早餐",
    price: 15.99,
    img: "https://www.thenewstep.cn/frontend/js/demo8/images/item-1.jpeg",
    desc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur, facere asperiores. Maiores quidem neque id nam libero eligendi necessitatibus ea?`,
  },
  {
    id: 2,
    title: "汉堡包套餐",
    category: "午餐",
    price: 13.99,
    img: "https://www.thenewstep.cn/frontend/js/demo8/images/item-2.jpeg",
    desc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur, facere asperiores. Maiores quidem neque id nam libero eligendi necessitatibus ea?`,
  },
  {
    id: 3,
    title: "牛奶冰激凌",
    category: "甜点",
    price: 6.99,
    img: "https://www.thenewstep.cn/frontend/js/demo8/images/item-3.jpeg",
    desc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur, facere asperiores. Maiores quidem neque id nam libero eligendi necessitatibus ea?`,
  },
  {
    id: 4,
    title: "面包",
    category: "早餐",
    price: 20.99,
    img: "https://www.thenewstep.cn/frontend/js/demo8/images/item-4.jpeg",
    desc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur, facere asperiores. Maiores quidem neque id nam libero eligendi necessitatibus ea?`,
  },
  {
    id: 5,
    title: "鸡蛋堡",
    category: "午餐",
    price: 22.99,
    img: "https://www.thenewstep.cn/frontend/js/demo8/images/item-5.jpeg",
    desc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur, facere asperiores. Maiores quidem neque id nam libero eligendi necessitatibus ea?`,
  },
  {
    id: 6,
    title: "咖啡",
    category: "甜点",
    price: 18.99,
    img: "https://www.thenewstep.cn/frontend/js/demo8/images/item-6.jpeg",
    desc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur, facere asperiores. Maiores quidem neque id nam libero eligendi necessitatibus ea?`,
  },
  {
    id: 7,
    title: "培根饼",
    category: "早餐",
    price: 8.99,
    img: "https://www.thenewstep.cn/frontend/js/demo8/images/item-7.jpeg",
    desc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur, facere asperiores. Maiores quidem neque id nam libero eligendi necessitatibus ea? `,
  },
];
export default menu;
`````



* App.tsx 导入数据

`````tsx
import items from "./data/index";
`````

* 定义状态

``````tsx
const [menuItems, setMenuItems] = useState(items);
``````

### 3. types/index.ts

``````ts
export interface MenuItems {
  id: number;
  img: string;
  title: string;
  price: number;
  desc: string;
  category: string;
}
``````

### 4. App.tsx 导入类型

``````tsx
import { MenuItems } from "./types";
const [menuItems, setMenuItems] = useState<MenuItems[]>(items);
console.log(menuItems);
``````

### 5. App.js 将数组传值给Menu.tsx

`````js
function App() {
  // 定义状态
  const [menuItems, setMenuItems] = useState<MenuItems[]>(items);

  return (
    <main>
      <section className="menu section">
        ...
        <Menu items={menuItems} />
      </section>
    </main>
  );
}
`````

### 6. Menu.tsx 接收值和匹配类型

`````tsx
import { MenuItems } from "../types";

interface Props {
  items: MenuItems[];
}

export default ({ items }: Props) => {
  console.log(items)
  return <h2>菜谱内容</h2>;
};
`````



### 8. Menu.js 接收参数并实现渲染

* 遍历数据

`````tsx
<div className="section-center">
  
</div>

{items.map((menuItem) => {
		const { id, title, img, desc, price } = menuItem
})}

return (
	<article class="menu-item">
    <img src="./images/item-9.jpeg" alt="双饮" class="photo">
    <div class="item-info">
      <header>
        <h4>双饮</h4>
        <h4 class="price">¥16.99</h4>
      </header>
      <p class="item-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
Repudiandae, sint quam. Et reprehenderit fugiat nesciunt inventore
laboriosam excepturi! Quo, officia.
      </p>
    </div>
  </article>
)

return (
  <article key={id} className="menu-item">
    <img src={img} alt={title} className="photo" />
    <div className="item-info">
      <header>
        <h4>{title}</h4>
        <h4 className="price">¥{price}</h4>
      </header>
      <p className="item-text">{desc}</p>
    </div>
  </article>
)
`````

* 整体代码

`````js
import React from 'react'
// 1. 接收参数
const Menu = ({ items }) => {
  return (
    // 2.渲染菜单
    <div className="section-center">
      {items.map((menuItem) => {
        const { id, title, img, desc, price } = menuItem
        return (
          <article key={id} className="menu-item">
            <img src={img} alt={title} className="photo" />
            <div className="item-info">
              <header>
                <h4>{title}</h4>
                <h4 className="price">¥{price}</h4>
              </header>
              <p className="item-text">{desc}</p>
            </div>
          </article>
        )
      })}
    </div>
  )
}

export default Menu
`````



## 4. App.tsx 处理分类数据中的按钮

* App.tsx

``````tsx
console.log(new Set(items.map((item) => item.category)));
console.log(["所有",...new Set(items.map((item) => item.category))]);

const allCategories = ['所有', ...new Set(items.map((item) => item.category))]

const [categories, setCategories] = useState(allCategories)

const [categories, setCategories] = useState<string[]>(allCategories);

<Categories categories={categories} />
``````

* Categories.tsx

`````tsx
{categories}:{categories: string[]}
return (
  <div className="btn-container">
    {categories.map((category, index) => {
      return (
        <button type="button" className="filter-btn" key={index}>
          {category}
        </button>
      );
    })}
  </div>
);
`````

* App.tsx

`````js
import React, { useState } from 'react'
import items from './data'
import Menu from './Menu'
import Categories from './Categories'

// 1. 去重分类数据
const allCategories = ['所有', ...new Set(items.map((item) => item.category))]

function App() {
  const [menuItems, setMenuItems] = useState<MenuItems[]>(items);
  // 2. 定义状态
  const [categories, setCategories] = useState<string[]>(allCategories);

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>菜单</h2>
          <div className="underline"></div>
        </div>
        {/* 3. 传递数据 */}
        <Categories categories={categories} />
        <Menu items={menuItems} />
      </section>
    </main>
  )
}

export default App
`````

* Categories.tsx 中渲染去重的button数据

`````js
import React from 'react'

// 1. 接收参数
const Categories = ({ categories }) => {
  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        return (
          <button type="button" className="filter-btn" key={index}>
            {category}
          </button>
        )
      })}
    </div>
  )
}

export default Categories
`````

## 5. Categories.js 为button添加点击事件

* 谁定义 谁修改原则 所以修改数据的方法应该在App.tsx中

`````tsx
/**
 * 数据 谁定义 谁修改
 */

/**
 * 数据 谁定义 谁修改
 *
 * menuItems的变化处理方法要在App.tsx中
 */

/**
 * 数据 谁定义 谁修改
 *
 * menuItems的变化处理方法要在App.tsx中
 * 触发按钮的时机是在Categories.tsx中
 */

/**
 * 数据 谁定义 谁修改
 *
 * menuItems的变化处理方法要在App.tsx中
 * 触发按钮的时机是在Categories.tsx中
 *
 * 通过属性传值(函数也是值)
 */

const filterItems = (category:string) => {
  const newItems = items.filter((item:MenuItems) => item.category === category);
  setMenuItems(newItems);
};

<Categories categories={categories} filterItems={filterItems} />

if (category === '所有') {
    setMenuItems(items)
    return
  }
`````

* 触发时机 Categories.tsx

`````tsx
{categories,filterItems}

interface Props {
  categories: string[];
  filterItems: (c: string) => void;
}

{ categories, filterItems }: Props

onClick={() => filterItems(category)}
`````





`````html
<button
  ...
  onClick={() => filterItems(category)}
>
  {category}
</button>
`````

### 12. App.js实现filterItems方法

`````js
const filterItems = (category) => {
  const newItems = items.filter((item) => item.category === category);
  setMenuItems(newItems);
};
`````

### 13. App.js通过属性将事件传递给Categories.js

`````html
<Categories categories={categories} filterItems={filterItems} />
`````

### 14. Categories.js 接收参数

`````js
const Categories = ({ categories, filterItems }) => { }
`````

### 15. App.js处理点击所有按钮

`````js
const filterItems = (category) => {
  // 判断分类是否等于所有
  if (category === '所有') {
    setMenuItems(items)
    return
  }
  const newItems = items.filter((item) => item.category === category)
  setMenuItems(newItems)
}
`````

