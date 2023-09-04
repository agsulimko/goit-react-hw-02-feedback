   import Notification from '../Notification/Notification'; // Импортируйте компонент Notification

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
    <div className="Statistics">
        <p>Statistics</p>
       
        {good || neutral || bad ? <div>
            <span className='Feedback__Good'>Good: {good}</span>
            <span className='Feedback__Neutral'>Neutral: {neutral}</span>
            <span className='Feedback__Bad'>Bad: {bad}</span>
            <span className='Feedback__Total'>Total: {total}</span>
            <span className='Feedback__PositiveFeedback'>Positive: {positivePercentage}%</span>
        </div> :( <Notification message="There is no feedback" />) }
    </div>
);

export default Statistics;