import logo from './logo.svg';
import './App.css';
import Header from "./components/header/Header";
import MainContent from "./components/main/MainContent";
import Footer from "./components/footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <MainContent/>
            <Footer/>
        </div>
    );
}

export default App;
