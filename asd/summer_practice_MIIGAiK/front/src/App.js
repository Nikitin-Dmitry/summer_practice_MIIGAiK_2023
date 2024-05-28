import { Routes, Route } from 'react-router-dom';
import Regist from './components/comps/Auth/Regist';
import Login from './components/comps/Auth/Login';
import Account from './components/comps/Account';
import Asses from './components/comps/Asses';
import Likes from './components/comps/Likes/Likes';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path={"/Auth/Login"}
          element={<Login />}
        />
        <Route
          path={"/Auth/Regist"}
          element={<Regist />}
        />
        <Route
          path={"/Account"}
          element={<Account></Account>}
        />
        <Route
          path={"/Asses"}
          element={<Asses></Asses>}
        />
        <Route
          path={"/Likes"}
          element={<Likes></Likes>}
        />
        <Route
          path={"*"}
          element={<Login />}
        />
      </Routes>
    </div>
  );
}

export default App;
