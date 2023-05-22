function Card(props) {
  return (
    <div className="card">
      <br />
      
      <div className="text-center">
        <img alt="card-img" src={props.img} className="text-center img-fluid" />
      </div>
      <div className="text-center">
        <h3 className="card-title">{props.title}</h3>
      </div>
      <div className="p-3">
        <p className="card-text">
           {props.text}
        </p>
        
        {props.link === undefined ? null : 
        <div className="text-center">
          <a href={props.link} className="btn btn-primary center">
            Youtube
          </a>
          </div>
        }
      </div>
    </div>
  );
}
export default Card;
