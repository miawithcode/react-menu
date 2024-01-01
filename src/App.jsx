import { useState } from 'react';

import menu from './data';

import Title from './components/Title';
import Menu from './components/Menu';

const App = () => {
  const [menuItems, setMenuItmes] = useState(menu);

  return (
    <main>
      <Title titleText="Our Menu" />
      <Menu menuItems={menuItems} />
    </main>
  );
};
export default App;
