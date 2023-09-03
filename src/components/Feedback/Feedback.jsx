import React from 'react';
import PropTypes from 'prop-types';
 import css from './Feedback.module.css';
 import { styled } from 'styled-components';

class Feedback extends React.Component{
    // constructor() {
    //     super();
    //     this.state = {
    //         good: 0,
    //         neutral: 0,
    //         bad: 0,
    //     };
    // };
state = {
            good: 0,
            neutral: 0,
            bad: 0,
        };

    
    handleGood = (event) => {
        this.setState({
            good: 1,
        });
        // const target = event.target;
        const { target } = event;
        console.log('Добавить хорошо');
        console.log(this);
        console.log(event.target);
        setTimeout(() => {
            console.log(target);
        }, 1000);
    };

    

    handleNeutral = (event) => {
       
        console.log('Добавить нейтрально');
        console.log(this);
    };
     handleBad = (event) => {
        console.log('Добавить плохо');
         console.log(this);
    }

    
    render() {
        return (

            // const Feedback = () => {
            <div className="Feedback">

                <p>Please leave feedback </p>
            
                        <div className='Feedback__controls'>
                    <button type="button" onClick={this.handleGood}>
                        Good
                    </button>
                    <button type="button" onClick={this.handleNeutral}>Neutral</button>
                    <button type="button" onClick={this.handleBad}>Bad</button>
                </div>

                <p>Statistics</p>

                <span className='Feedback__Good'>{this.state.good}</span>
                <span className='Feedback__Neutral'>{this.state.neutral}</span>
                <span className='Feedback__Bad'>{this.state.bad}</span>
            </div>
        );
    };
       
};
 
export default Feedback;