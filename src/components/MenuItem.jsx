const MenuItem = ({ img, title, price, desc }) => {
  return (
    <article className="menu-item">
      <img src={img} alt={title} />
      <div>
        <header>
          <h5>{title}</h5>
          <span>${price}</span>
        </header>
        <p>{desc}</p>
      </div>
    </article>
  );
};
export default MenuItem;
