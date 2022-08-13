import "./styles.css";

export default function App() {
  return (
    // <div className="App">
    <center>
      <div className="title-container">
        <h1 className="title">Filtros digitales</h1>
      </div>
      <select className="select" aria-label="Default select example">
        <option selected>None</option>
        <option value="1">Blanco y negro</option>
        <option value="2">Gaussiano</option>
        <option value="3">Pixelator</option>
      </select>
    </center>
  );
}
