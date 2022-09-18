import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Mailer from "./components/Mailer";
import About from "./components/About";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Hero />
            <Form />
            <Mailer />
            <About />
        </div>
    );
}

export default App;
