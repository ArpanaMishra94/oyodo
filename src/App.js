import './App.css';
import Nav from './JS/Nav';
import Header from './JS/Header';
import SectionOne from './JS/SectionOne';
import SectionTwo from './JS/SectionTwo';
import Footer from './JS/Footer';

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
