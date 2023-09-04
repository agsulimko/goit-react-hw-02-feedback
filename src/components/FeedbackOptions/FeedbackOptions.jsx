const FeedbackOptions = ({ onHandleGood, onHandleNeutral, onHandleBad } ) => (
<div className='FeedbackOptions'>
                        <button type="button" onClick={onHandleGood}>
                            Good
                        </button>
                        <button type="button" onClick={onHandleNeutral}>Neutral</button>
                        <button type="button" onClick={onHandleBad}>Bad</button>
                    </div>
);

export default FeedbackOptions;
    

