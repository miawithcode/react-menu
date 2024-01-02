import { useState } from 'react';

import menu from './data';

import Title from './components/Title';
import Menu from './components/Menu';
import Categories from './components/Categories';

const allCategories = ['all', ...new Set(menu.map((item) => item.category))];

const App = () => {
  const [menuItems, setMenuItmes] = useState(menu);
  const [categories, setCategories] = useState(allCategories);
  console.log(categories);

  return (
    <main>
      <section>
        <Title titleText="Our Menu" />
        <Categories categories={categories} />
        <Menu menuItems={menuItems} />
      </section>
    </main>
  );
};
export default App;
