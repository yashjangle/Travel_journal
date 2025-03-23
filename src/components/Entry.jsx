import marker from "../../public/images/marker.jpg";

export default function Entry(props) {
  return (
    <main className="container">
      <div className="imgContainer">
        <img src={props.img.src} alt={props.img.alt} />
      </div>
      <div className="midContainer">
        <img className="marker" src={marker} alt="map marker icon" />
        <span className="country">{props.country}</span>
        <a className="link" href={props.googleMapsLink}>
          View on Google Maps
        </a>
        <h1 className="title">{props.title}</h1>
        <p className="date">{props.dates}</p>
        <p className="text">{props.text}</p>
      </div>
    </main>
  );
}
