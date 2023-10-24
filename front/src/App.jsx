import { useState, useEffect } from 'react'
import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import axios from 'axios'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import About from './components/About'
import Detail from './components/Detail'
import Form from './components/Form';
const EMAIL = 'dafepa10c29@gmail.com';
const PASSWORD = 'Henry2023';


const App = () => {

   const [characters, setCharacters] = useState([]);
   const { pathname } = useLocation()

   const navigate = useNavigate();
   const [access, setAccess] = useState(false);

   function login(userData) {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      }
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   const onSearch = (id) => {
      axios(`https://rym2.up.railway.app/api/character/${id}?key=pi-dfelipepatino`).then(
         ({ data }) => {
            if (data.name) {
               setCharacters((oldChars) => [data, ...oldChars]);
            } else {
               window.alert('¡No hay personajes con este ID!');
            }
         }
      );
   }


   const onClose = (id) => {
      setCharacters(
         characters.filter((char) => {
            return char.id !== Number(id)
         })
      )
   };





   return (
      <div className='App'>

         {pathname !== "/" && <Nav onSearch={onSearch} />}

         <Routes>
            <Route path='/home'
               element={<Cards characters={characters} onClose={onClose} />}>
            </Route>
            <Route path='/about'
               element={<About />}>
            </Route>
            <Route path='/'
               element={<Form login={login}/>}>
            </Route>
            <Route path='/detail/:id'
               element={<Detail />}>
            </Route>
         </Routes>


      </div>
   );
}

export default App;
