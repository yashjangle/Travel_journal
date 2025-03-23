import Globe from "../../public/images/Globe.jpg";

export default function Header() {
  return (
    <header>
      <img src={Globe} alt="globeimg" />
      <h1>my travel journal.</h1>
    </header>
  );
}
