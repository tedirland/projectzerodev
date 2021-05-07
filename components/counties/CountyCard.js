function CountyCard({ county }) {
  return (
    <div className="card subtle-shadow no-border">
      <div className="card-body">
        <h5 className="card-title">{county.name}</h5>
        <h5 className="font-weight-bold">{county.population}</h5>
        <p className="card-text fs-2 ">{county.description}</p>
      </div>
    </div>
  );
}

export default CountyCard;
