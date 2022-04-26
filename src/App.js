import './App.css';
import Nav from './Components/Nav';
import Header from './Components/Header';
import SectionOne from './Components/SectionOne';
import SectionTwo from './Components/SectionTwo';
import Footer from './Components/Footer';

function App() {
    return (
        <div className="App">
            <Nav/>
            <Header/>
            <SectionOne/>
            <SectionTwo/>
            <Footer/>
        </div>
    );
}

export default App;
