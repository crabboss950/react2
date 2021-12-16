import React, { memo } from 'react';

const HabitAddForm = memo((props) => {
    const formRef = React.createRef();
    const inputRef = React.createRef();
    
    const onSubmit = (event) => {
        event.preventDefault(); //리프레쉬 안일어남
        const name = inputRef.current.value;
        name && props.onAdd(name);
        // this.inputRef.current.value = '';
        formRef.current.reset();
    };

    return (
        <form ref={formRef} className="add-form" onSubmit={onSubmit}>
            <input 
            ref={inputRef}
            type="text" 
            className="add-input" 
            placeholder="Habit"
            />
            <button className="add-button">Add</button>
        </form>
    );
});

export default HabitAddForm;