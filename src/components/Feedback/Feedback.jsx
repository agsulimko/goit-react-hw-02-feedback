import React from 'react';
// import PropTypes from 'prop-types';
//  import css from './Feedback.module.css';
//  import { styled } from 'styled-components';

class Feedback extends React.Component {
    static defaultProps = {
        initialGood: 0,
        initialNeutral: 0,
        initialBad: 0,
        initialTotal: 0,
        positiveFeedback: 0,

    };
       
        // }
        // constructor() {
        //     super();
        //     this.state = {
        //         good: 0,
        //         neutral: 0,
        //         bad: 0,
        //     };
        // };

        // state = {
        //             good: 0,
        //             neutral: 0,
        //             bad: 0,
        //         };
        state = {
            good: this.props.initialGood,
            neutral: this.props.initialNeutral,
            bad: this.props.initialBad,
            total: this.props.initialTotal,
            positiveFeedback: this.props.initialPositiveFeedback,
            
        }
    
    
        handleGood = (event) => {
            this.setState(prevState => {
                return {
                    good: prevState.good + 1,
                
                };
            });
            
        
            // const target = event.target;
            // const { target } = event;
            // console.log('Добавить хорошо');
            // console.log(this);
            // console.log(event.target);
            // setTimeout(() => {
            //     console.log(target);
            // }, 1000);
        }

    

        handleNeutral = (event) => {
            this.setState(prevState => {
                return {
                    neutral: prevState.neutral + 1,
                };
            });
            console.log('Добавить нейтрально');
            console.log(this);
        }



        handleBad = (event) => {
         
            this.setState(prevState => {
                return {
                    bad: prevState.bad + 1,
                };
            });
            console.log('Добавить плохо');
            console.log(this);
        }

    //  количество собранных отзывов 
//     countTotalFeedback = (event) => {
//         return {
         
//      }
//  };


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
                    <span className='Feedback__Total'>total{this.state.total}</span>
                    <span className='Feedback__PositiveFeedback'>positive{this.state.total}</span>
                </div>
            );
        }
       
    };

 
//  количество собранных отзывов 

// countTotalFeedback();

// // процент положительных отзывов
// countPositiveFeedbackPercentage();

export default Feedback;