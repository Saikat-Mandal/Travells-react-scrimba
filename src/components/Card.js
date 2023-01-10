export default function Card(props) {
  return (
    <main>
      <div className="card">
        <img
          className="main-img"
          src={`/images/${props.item.imageUrl}`}
          alt=""
        />

        <div className="card-in">
          <div className="location">
            <div className="location-in">
              <img
                className="main-img2"
                src="/images/locationLogo.png"
                alt=""
              />
              <p className="country">{props.item.location}</p>
            </div>
            <a
              className="location-link"
              target="_blank"
              href={props.item.googleMapsUrl}
            >
              view on google maps
            </a>
          </div>

          <h2>{props.title}</h2>
          <p className="date">
            <span>{props.item.startDate}</span> -
            <span> {props.item.endDate}</span>
          </p>
          <p>{props.item.description}</p>
        </div>
      </div>
    </main>
  );
}
