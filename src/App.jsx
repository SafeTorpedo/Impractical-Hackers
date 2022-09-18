import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Mailer from "./components/Mailer";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Hero />
            <Form />
            <Mailer />
        </div>
    );
}

export default App;
