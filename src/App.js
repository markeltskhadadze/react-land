import './App.css'
import { Header } from './home-page/Header'
import { Banner } from './home-page/Banner'
import { AboutUs } from './home-page/AboutUs'
import { OurPartners } from './home-page/OurPartners'
import { Catalog } from './home-page/Catalog'

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <AboutUs />
      <OurPartners />
        <Catalog />
    </div>
  );
}

export default App;
