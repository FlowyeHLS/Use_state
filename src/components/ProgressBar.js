import './ProgressBar.css';

function ProgressBar({percentage})
{
    const getColor = () =>
    {
        if(percentage < 40)return "#FF0000";
        else if(percentage < 70)return "#d19514";
        else return "#14d134"
    }
    return(
        <div className='progress-bar'>
            <div 
            className='progress-bar-fill'
            style={{width: `${percentage}%`, background:getColor()}}
            >

            </div>
        </div>
    )
}
export default ProgressBar;