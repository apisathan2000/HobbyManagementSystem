import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import AddHobby from '../components/AddHobby';
import HobbyList from '../components/HobbyList';
import useLocalStorage from '../hooks/useLocalStorage';


const AppRouter = () => {
    const [hobby, setHobby] = useLocalStorage('books', []);



  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="main-content">
          <Routes>
          <Route
              render={(props) => (
                <HobbyList {...props} books={hobby} setBooks={setHobby} />
              )}
              path="/"
              exact={true}
            />
            <Route render={(props) => (<AddHobby {...props} hobby={hobby} setHobby={setHobby} />
        )} path="/add"/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;