import React, { useState, Fragment } from 'react';

import AddUsers from './components/Users/AddUsers';
import UsersList from './components/Users/UsersList';

function App() {

  const [userList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <Fragment>
      <AddUsers onAddUSer={addUserHandler} />
      <UsersList users={userList} />
    </Fragment>
  );
}

export default App;
