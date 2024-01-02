const Title = ({ titleText }) => {
  return (
    <div>
      <h2>{titleText || 'Default Title'}</h2>
    </div>
  );
};
export default Title;
