interface Props{
    title: string,
    description?: string
}
export function CustomHeader({title, description}: Props){
    return(
        <div className="customHeader">
            <h1>{title}</h1>
            {description && <p>{description}</p>}
        </div>
    )
}