import MenuItem from './MenuItem';

const Menu = ({ menuItems }) => {
  return (
    <div className='menu-container'>
      {menuItems.map((menuItem) => {
        return <MenuItem key={menuItem.id} {...menuItem} />;
      })}
    </div>
  );
};
export default Menu;
