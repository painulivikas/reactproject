import React, { useState } from 'react';

import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.title);

    // Function For clickhandler
    const clickHandler = () => {
        setTitle('Updated!');
    };

    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>₹ {props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    );
}

export default ExpenseItem;

// 1- create a const for dummy data
//     const expenseDate = new Date(2022, 8, 28);
//     const expenseTitle = 'Car Insaurance';
//     const expenseAmount = 200;

// toISOString() method is used to convert the given date object's contents into a string in ISO format (ISO 8601) i.e, in the form of (YYYY-MM-DDTHH:mm:ss).

// 2- after creating const we can pass our data through props concept

// 3- Create an array in APP.js file to use prop concept & calling the array through given below code
{/* <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}>
      </ExpenseItem> */}

// 4- adding props as a parameter for ExpenseItem in ExpenseItem.js and calling the prop data in our jsx code like <h2>props.title</h2> & remove the comment (1), or ExpenseDate in JSX

// 5- Now Add some normal js logic in component 
{/*
      first remove {props.date.toISOString()} and add
      date separatly like 
      <div>
        <div>Month</div>
        <div>Year</div>
        <div>Day</div>
       </div>
    
    */}

// 6- 
{/*splitting components in multiple components by creating a date compenent for date and remove this code from comment 5 <div>
        <div>Month</div>
        <div>Year</div>
        <div>Day</div>
       </div >

       importing 
       import ExpenseDate from './ExpenseDate';
       in ExpenseItem.js and call the <ExpenseDate /> component in jsx

       we are getting the data through props from ExpenseDate.js that's why the jsx code is like that 
       <ExpenseDate date={props.date} />


*/}

// 7- create a component Expenses.js file just to clean our app.js file & passing data through props with const expenses or prop.item

// 8-  The Concept of "Composition" ("children props")
{/*
    creating card component for understanding the {props.children} & how to use old css class = const classes = 'card' + ' ' + props.className;
*/}

// 9- working with eventhandlers
{/*
    creating a button with the prop called onClick & creating a function for clickHandler.
    Note: In react we ad an eventlistner by going to the JSX element, like this button - <button onClick={clickHandler}>Change Title</button>

    clickhandler is a prop with on, because react exposes all these default events as props start with on.
*/}

// 10- How component function are executed
{/*
    let title = props.title;

    // Function For clickhandler
    const clickHandler = () => {
        title = 'updated';
        console.log(title);
    };
*/}

// 11- Working with state 
{/* To use useState we need to import specific function called useState.
import syntex - import React, { useState } from 'react';

this is the default import which import overall react library = import React from 'react';

Note: useState is a hook, in react evevry function which start with use called a hook.

comment 10 is deleted when we use useState
*/}