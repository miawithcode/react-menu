import { useState } from 'react';

import menu from './data';

import Title from './components/Title';
import Menu from './components/Menu';
import Categories from './components/Categories';

const allCategories = ['all', ...new Set(menu.map((item) => item.category))];

const App = () => {
  const [menuItems, setMenuItmes] = useState(menu);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItmes(menu);
      return;
    }
    const newItems = menu.filter((item) => item.category === category);
    setMenuItmes(newItems);
  }

  return (
    <main>
      <section>
        <Title titleText="Our Menu" />
        <Categories categories={categories} filterItems={filterItems} />
        <Menu menuItems={menuItems} />
      </section>
    </main>
  );
};
export default App;
