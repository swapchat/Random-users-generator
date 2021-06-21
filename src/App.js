import React, { useEffect } from "react";
import store from "./store/store";
import { initiateGetUsers } from "./actions/usersActions";
import Header from "./components/Header";
import UsersList from "./components/UsersList";

function App() {
  useEffect(() => {
    store.dispatch(initiateGetUsers());
  }, []);

  return (
    <div className="main-sections">
      <Header />
      <UsersList />
    </div>
  );
}

export default App;
