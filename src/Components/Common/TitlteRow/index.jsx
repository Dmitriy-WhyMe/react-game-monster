const index = (props) => {
  return (
    <div className="title-row">
        <h3 className="title-block">{props.mainTitle}</h3>
        <button href={props.buttonUrl}>{props.buttonTitle}</button>
    </div>
  )
}

export default index
