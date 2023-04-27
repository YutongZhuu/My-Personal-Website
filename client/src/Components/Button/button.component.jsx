import'./button.styles.scss'
const Button=({children, url})=>{
    return(
        <div>
            <a href={url}target="_blank">
        <button className={"button"}>
            {children}
        </button>
            </a>
        </div>
    )
}

export default Button;