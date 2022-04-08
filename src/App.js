import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import Programs from './components/Programs'
import UnderConstruction from './components/UnderConstruction';

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/contact" element={<UnderConstruction />}></Route>
          <Route path="/mission" element={<UnderConstruction />}></Route>
          <Route path="/team" element={<UnderConstruction />}></Route>
          <Route path="/programs" element={<Programs />}></Route>
          <Route path="/donate" element={<UnderConstruction />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
