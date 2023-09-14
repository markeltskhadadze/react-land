import './App.css'
import { Header } from './home-page/Header'
import { Banner } from './home-page/Banner'
import {AboutUs} from './home-page/AboutUs'

function App() {
  return (
    <div className="App">
      <Header />
        <Banner />
        <AboutUs />
    </div>
  );
}

export default App;
