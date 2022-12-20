import { Provider } from "react-redux";
import "../App.css";

import { NavBar } from "../Components/NavBar/NavBar";
import { CardList } from "../Components/CardList/CardList";
import { SubredditsList } from "../Components/SubredditsList/SubredditsList";

import store from "./Store";

function App() {
  return (
    <Provider store={store}>
      <NavBar />
      <CardList />
      <SubredditsList />
    </Provider>
  );
}

export default App;
