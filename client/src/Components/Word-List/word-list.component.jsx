import './word-list.styles.scss'
const list=['Home', 'About', 'Projects', 'Contact']

const WordList=({onMouseLeaveHandler, onHoverHandler, onClickHandler})=>{
    return(
        <div className="navigation">
            <ul className="word-list"onMouseLeave={onMouseLeaveHandler} onMouseOver={onHoverHandler} onClick={onClickHandler}>
           { list.map((word, n)=>{
                return(
                    <li key={n}>
                        <p>
                        {word}
                        </p>
                    </li>
                )
            })}
            </ul>
        </div>
    )
}

export default WordList;