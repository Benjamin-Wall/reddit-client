import { Provider } from 'react-redux';
import '../App.css';

import { NavBar } from '../Components/NavBar/NavBar';
import { CardList } from '../Components/CardList/CardList';
import { SubredditsList } from '../Components/SubredditsList/SubredditsList';

import store from './Store';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Provider store={store}>
      <NavBar />

      <Routes>
        <Route
          path={'/r/:subreddit'}
          element={<CardList />}
        />
        <Route
          path={'/'}
          element={<CardList />}
        />
      </Routes>

      <SubredditsList />
    </Provider>
  );
}

export default App;
