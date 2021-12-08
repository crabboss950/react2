import React, { Component } from 'react';

class Habit extends Component {
    state = {
        count:0,
    };

    handleIncrement = (event) => {
        // staate 오브젝트 안에 있는 count를 증가 한뒤 state를 업데이트 해야함
        this.setState({count: this.state.count + 1});
    };

    handleDecrement = (event) => {
        // staate 오브젝트 안에 있는 count를 증가 한뒤 state를 업데이트 해야함
        this.setState({count: this.state.count - 1});
    };

    render() {
        return(
            <li className='habit'>
                <span className='habit-name'>Reading</span>
                <span className='habit-count'>{this.state.count}</span>
                <button className='habit-button habit-increase' onClick={this.handleIncrement}>
                <i className="far fa-plus-square"></i>
                </button>
                <button className='habit-button habit-decrease' onClick={this.handleDecrement}>
                <i className="far fa-minus-square"></i>
                </button>
                <button className='habit-button habit-delete'>
                <i class="fas fa-trash"></i>
                </button>
            </li>
        );
    }
}

export default Habit;