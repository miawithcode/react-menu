# Menu

通过按钮展示不同 Category 的菜单。

## Steps
1. 创建 `Title` 组件用来展示标题
2. 导入 menu 数据
3. 在 `App.jsx `中用 `useState` 将导入的 menu 数据存储为状态变量
4. 传递状态变量 prop 给 `Menu` 组件，给数组中的每一个 Object 加载组件 `MenuItem`
5. 在 `MenuItem` 组件中展示图片、标题、价格和描述属性
6. 定义一个函数从 menu 数据中获取所有元素的 `category` 属性，存储为一个新的数组。（此时的 category 有重复）
7. 用 `new Set()` 从有所有元素 `categort` 属性的数组获取 unique categories，并存储到一个 separate array，包括一个 `all` 的 categroy 来展示所有的 menu items
8. 在 `App.jsx` 中用 `useState` 将包含所有 Category 的数组存储为状态变量
9. 创建一个 `Categories` 组件，给每一个 categories 数组里的每一个 categoy 加载一个按钮
10. 定义一个函数把 `category` 作为参数，更新状态变量来仅仅展示属于某个 Category 的 Menu Item。
11. 在 `Categories` 组件中给 categroy 按钮添加 `filter` 函数。

## Unique Categories

### Step by step
```jsx
const tempCategories = menu.map((item) => item.category);
const tempSet = new Set(tempCategories);
const tempItems = ['all', ...tempSet];
```

### One liner
```jsx
const allCategories = ['all', ...new Set(menu.map((item) => item.category))];
```