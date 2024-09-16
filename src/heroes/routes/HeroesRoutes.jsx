import { Navbar } from '../../ui/components/Navbar';

import { Navigate, Route, Routes } from 'react-router-dom';
import { MarvelPage } from '../pages/MarvelPage';
import { DcPage } from '../pages/DcPage';
import { BuscarPage } from '../pages/BuscarPage';
import { HeroPage } from '../pages/HeroPage';


export const HeroesRoutes = () => {
  return (
    <>
     <Navbar />

     <div className="container">  

     <Routes>
            <Route path="marvel" element={ <MarvelPage/> } />
            <Route path="dc" element={ <DcPage /> } />
            <Route path="search" element={ <BuscarPage /> } />
            <Route path="hero/:id" element={ <HeroPage /> } />
            
            
            {/*  Buscar heroe por id */}

            <Route path="/" element={ <Navigate to="/marvel"/> } />
        </Routes>

        </div> 

    </>
  )
}
