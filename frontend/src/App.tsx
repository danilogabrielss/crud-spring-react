import Content from "components/Content";
import Footer from "components/Footer";
import NavBar from "components/NavBar/Index";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary">Ola mundo</h1>
        <Content />
      </div>
      <Footer />
    </>
  );
}

export default App;
