import React from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

const dummyUsers = [
  {
    id: '1',
    name: 'jack',
    age: 57,
  },
  {
    id: '2',
    name: 'spiderman',
    age: 12,
  },
];

function App() {
  return (
    <div>
      <AddUser />
      <UsersList users={dummyUsers}/>
    </div>
  );
}

export default App;
