import MenuItem from './MenuItem';

const Menu = ({ menuItems }) => {
  return (
    <div>
      {menuItems.map((menuItem) => {
        return <MenuItem key={menuItem.id} {...menuItem} />;
      })}
    </div>
  );
};
export default Menu;
