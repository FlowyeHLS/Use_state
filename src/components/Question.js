import './Question.css';
import ProgressBar from './ProgressBar';


function Question({question, onClickVariant, step, totalQuestions, selectedVariant, showResult})
{

    const percentage = Math.round(step/totalQuestions*100);

    const getClass = (index) => {
        if(!showResult)return "";
        if(index === selectedVariant)
        {
            return selectedVariant === question.correct ? 'correct' : 'wrong';
        }
        if(index === question.correct)return 'correct';
        return "";
    }

    return(
        <div className='question'>
            <ProgressBar percentage={percentage} />
            <h3>{question.title}</h3>
            <ul>
                {
                    question.variants.map
                    (
                        (text,index) =>
                            <li 
                                key={index} 
                                className={getClass(index)}
                                onClick={() => !showResult && onClickVariant(index)}
                            >
                                {text}
                            </li>
                    )
                }
            </ul>
        </div>
    )
}
export default Question;