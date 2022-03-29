const ListItem = ({task, handleClick, number}) => {
    return(
        number % 2
            ?<li className="odd" onClick={handleClick}>{task}</li>
            :<li onClick={handleClick}>{task}</li>
    )
}

export default ListItem