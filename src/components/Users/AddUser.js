import { useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import classes from './AddUser.module.css';

const AddUser = () => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');

  const addUserHandler = (e) => {
    e.preventDefault();
    console.log(enteredUsername, enteredAge);
  };

  const usernameChangeHandler = (name) => {
    setEnteredUsername(name.target.value);
  };

  const ageChangeHandler = (age) => {
    setEnteredAge(age.target.value);
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor='username'>Username</label>
        <input id='username' type='text' onChange={usernameChangeHandler} />

        <label htmlFor='age'>Age (years)</label>
        <input id='age' type='number' onChange={ageChangeHandler} />

        <Button type='submit'>Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
