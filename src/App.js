import logo from './logo.svg';
import './App.css';
import Section_1 from './Components/Section_1/Section_1'
import Section_2 from './Components/Section_2/Section_2'
import Header from './Components/Header/Header'

function App() {
  return (
    <div className="App">
      <Header />
      <Section_1 />
      <Section_2 /> 
    </div>
  );
}

export default App;
