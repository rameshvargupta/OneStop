import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './Component/MediaQuery.css'
import Home from './Component/Home/Home';
import Gaming from './Component/Gaming/Gaming';
import Shopping from './Component/Shopping/Shopping';
import Restaurant from './Component/Restaurant/Restaurant';
import Travel from './Component/Travel/Travel';
import VideoMusic from './Component/VideoMusic/VideoMusic';
import Contact from './Component/Contact/Contact';
import Menu from './Component/Restaurant/RComponent/Menu'
import Reciepes from './Component/Restaurant/RComponent/Reciepes'
import RContact from './Component/Restaurant/RComponent/RContact'
import Finance from './Component/Finance/Finance';
import Blogs from './Component/Blogs/Blogs';

import BestSellers from './Component/Shopping/SpComponent/BestSeller/BestSellers';
import Clothing from './Component/Shopping/SpComponent/Clothing/Clothing';
import Electronics from './Component/Shopping/SpComponent/Electronics/Electronics';
import HomeGarden from './Component/Shopping/SpComponent/HomeGarden/HomeGarden';
import Offers from './Component/Shopping/SpComponent/Offers/Offers';
import OutDoors from './Component/Shopping/SpComponent/OutDoors/OutDoors';
// import HomeGarden from './Component/Shopping/SpComponent/HomeGarden/HomeGarden';
// import Offers from './Component/Shopping/SpComponent/Offers/Offers';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />

          <Route path='/Shopping' element={<Shopping />} />
          {/* Start Shopping component */}
          <Route path='/Electronics' element={<Electronics />} />
          <Route path='/BestSellers' element={<BestSellers />} />
          <Route path='/HomeGarden' element={<HomeGarden />} />
          <Route path='/Clothing' element={<Clothing />} />
          <Route path='/Offers' element={<Offers />} />
          <Route path='/OutDoors' element={<OutDoors />} />

          {/* End Shopping component */}

          <Route path='/Restaurant' element={<Restaurant />} />
          <Route path='/Travel' element={<Travel />} />
          <Route path='/VideoMusic' element={<VideoMusic />} />
          <Route path='/Gaming' element={<Gaming />} />
          <Route path='/Blogs' element={<Blogs />} />
          <Route path='/Finance' element={<Finance />} />
          <Route path='/Contact' element={<Contact />} />


          <Route path='/Menu' element={< Menu />} />
          <Route path='/Reciepes' element={< Reciepes />} />
          <Route path='/RContact' element={< RContact />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
