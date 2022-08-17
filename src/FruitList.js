import React from "react";

const FruitList = (props) => {

    const deleteItems = () => {

    };

    return (
        <div className="fruit_style">
            <li>{props.text.replace('-', ' ')}</li>
            <button className="fruit_delete" onClick={() =>
                props.onSelect(props.id)}>Delete</button>
            {/* Call Function */}
        </div>
    )
};

export default FruitList;