const Title = ({ titleText }) => {
  return (
    <section>
      <h2>{titleText || 'Default Title'}</h2>
    </section>
  );
};
export default Title;
