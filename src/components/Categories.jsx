const Categories = ({ categories }) => {
  return (
  <div>
    {categories.map((category) => {
      return (
        <button type="button" key={category}>
          {category}
        </button>
      );
    })}
  </div>)
};
export default Categories;
