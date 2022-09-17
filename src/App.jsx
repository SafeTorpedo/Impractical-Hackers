import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Form from "./components/Form"

function App() {
    return (
        <div className="App">
            <Navbar />
            <Hero />
            <Form />
        </div>
    );
}

export default App;
