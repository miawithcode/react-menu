import MenuItem from './MenuItem';

const Menu = ({ menuItems }) => {
  return (
    <section>
      {menuItems.map((menuItem) => {
        return <MenuItem key={menuItem.id} {...menuItem} />;
      })}
    </section>
  );
};
export default Menu;
