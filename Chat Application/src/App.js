import {Routes,Route} from 'react-router-dom';
import HomePage from './pages/home/index'
import RoomPage from './pages/Room/index'
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
         <Route path='/' element={<HomePage/>}/>
         <Route path='/room/:roomId' element={<RoomPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
