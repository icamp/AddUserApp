import { useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import classes from './AddUser.module.css';

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');

  const addUserHandler = (e) => {
    if (enteredUsername.trim().length <= 0 || enteredAge.trim().length <= 0) {
      return;
    }
    if (+enteredAge < 1) {
      return;
    }
    e.preventDefault();

    props.onAddUser(enteredUsername, enteredAge);

    setEnteredUsername('');
    setEnteredAge('');
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
        <input
          id='username'
          type='text'
          value={enteredUsername}
          onChange={usernameChangeHandler}
        />

        <label htmlFor='age'>Age (years)</label>
        <input
          id='age'
          type='number'
          value={enteredAge}
          onChange={ageChangeHandler}
        />

        <Button type='submit'>Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
