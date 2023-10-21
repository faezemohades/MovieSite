import './Styles/Style.css';
import '././Styles/ResponsivStyle.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from './Components/common/Layout';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import { HelmetProvider } from 'react-helmet-async';
import MovieDetail from './Pages/MovieDetail';
import ChanelDetail from './Pages/ChanelDetail';
import Pagenotfound from './Components/Pagenotfound';

function App() {
  return (
      <BrowserRouter>
          <HelmetProvider>
              <Routes>
                <Route path="/" element={<Layout />}>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/Home/Channels/:id/:title" element={<ChanelDetail />} />
                <Route exact path="/Home/Video/:id/:title" element={<MovieDetail />} />
                <Route exact path="/profile" element={<Profile />} />
                <Route path="/404" exact element={<Pagenotfound />} />
              </Route>
          </Routes>
          </HelmetProvider>
        </BrowserRouter>
  );
}

export default App;
