import { useState } from 'react';

import menu from './data';

import Title from './components/Title';
import Menu from './components/Menu';

const allCategories = ['all', ...new Set(menu.map((item) => item.category))];

const App = () => {
  const [menuItems, setMenuItmes] = useState(menu);
  const [categories, setCategories] = useState(allCategories);
  console.log(categories);

  return (
    <main>
      <Title titleText="Our Menu" />
      <Menu menuItems={menuItems} />
    </main>
  );
};
export default App; 