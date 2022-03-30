const ListItem = ({task, handleClick, index}) => {
    return(
        index % 2
            ?<li onClick={handleClick}>{task}</li>
            :<li className="odd" onClick={handleClick}>{task}</li>
    )
}

export default ListItem