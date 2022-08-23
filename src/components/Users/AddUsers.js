import React, { useState, useRef } from "react";

import Card from '../UI/Card';
import classes from './AddUsers.module.css';
import Button from "../UI/Button";
import ErrorModal from '../UI/ErrorModal';
import Wrapper from "../Helpers/Wrapper";

const AddUsers = (props) => {

    const nameInputRef = useRef();
    const ageInputRef = useRef();

    // const [enteredUsername, setEnteredUsername] = useState('');
    // const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();

    // const usernameChangeHandler = (event) => {
    //     setEnteredUsername(event.target.value);
    // };

    // const ageChangeHandler = (event) => {
    //     setEnteredAge(event.target.value);
    // };

    const addUserHandler = (event) => {
        event.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredUserAge = ageInputRef.current.value;
        // Validation For empty input
        if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
            setError({
                title: 'Invalid Input',
                message: 'Please Enter a valid name and age (non-empty values).'
            });
            return;
        }
        if (+enteredUserAge < 1) {
            setError({
                title: 'Invalid Age',
                message: 'Please Enter a valid age (> 0).'
            });
            return;
        }
        props.onAddUSer(enteredName, enteredUserAge);
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';

        // setEnteredUsername('');
        // setEnteredAge('');
    };

    // error handler function 

    const errorHandler = () => {
        setError(null);
    };

    return (
        <Wrapper>
            {error && (
                <ErrorModal
                    title={error.title}
                    message={error.message}
                    onConfirm={errorHandler}
                />
            )}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input
                        id="username"
                        type="text"
                        // value={enteredUsername}
                        // onChange={usernameChangeHandler}
                        ref={nameInputRef} />

                    <label htmlFor="age">Age (years)</label>
                    <input
                        id="age"
                        type="number"
                        // value={enteredAge}
                        // onChange={ageChangeHandler}
                        ref={ageInputRef}
                    />

                    <Button type="submit">Add User</Button>
                </form>

            </Card>
        </Wrapper>
    );
};

export default AddUsers;