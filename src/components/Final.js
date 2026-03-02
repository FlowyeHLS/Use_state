import './Final.css';

function Final({totalQuestions, correctAnswers, onRestart})
{
    return(
        <div className='question'>
            <h2 style={{display: "flex", justifyContent:"space-between"}}><div>Всего вопросов:</div>     <div>{totalQuestions}</div></h2>
            <h2 style={{display: "flex", justifyContent:"space-between"}}><div>Правильных ответов:</div> <div>{correctAnswers}</div></h2>
            <button onClick={onRestart} style={{marginTop: '20px', padding: '10px 20px'}}>
                Перезапуск теста
            </button>
        </div>
    )
}
export default Final;