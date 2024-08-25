import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import HomePage from './HomePage';
import RecipeDetails from './RecipeDetails';



function App() {
  return (
      <>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path='/recipe/:id' element={<RecipeDetails/>}/>
          </Routes>
        </Router>
        
      </>



  );
}

export default App;
