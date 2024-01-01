const Title = ({title}) => {
  return (
    <div>
      <h2>{title || 'Default Title'}</h2>
      <div className="title-underline"></div>
    </div>
  )
}
export default Title