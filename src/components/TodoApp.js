import ListItem from './ListItem';

/**
 * Part 1: Generate list (See Lists and keys lecture)
 * DONE - Create a function component here, may call it 'TodoApp'
 * DONE - generats a list from the array below, with the array-method .map()
 * DONE - Place the code for listItems, into a new child (function) component, may call it 'Todo'
 * DONE - Add a key to every listItem
 *
 * Part 2: Add an event to the listItems (See Conditional Rendering lecture)
 * DONE - Begin by creating a new function 'handleClick' in 'TodoApp' component
 * DONE - The function will add a class .done, to the target element (e.target)
 * DONE - Pass down the function as a prop, to the child component 'Todo'
 * DONE - Make sure every listItem has the onClick eventhandler, that calls the function 'handleClick'
 * 
 * Part 3 (hard): Conditional rendering (google how to use conditions with .map() )
 * DONE - Make sure every other listItem has the className="odd"
 * 
 * 
 * NOTE! Dont forget to add 'TodoApp' to App.js
 */




const TodoApp = () => {
    const todos = [
        {id: 1, task: 'Syssla 1'},
        {id: 2, task: 'Syssla 2'},
        {id: 3, task: 'Syssla 3'},
        {id: 4, task: 'Syssla 4'},
        {id: 5, task: 'Syssla 5'}
    ];

    const handleClick = (e) => {
        e.target.classList.toggle("done");
    }

    return (
        <ul>
            {todos.map((listItem, index) =>  <ListItem key={listItem.id} task={listItem.task} handleClick={handleClick} index={index} />)}
        </ul>
    )
}

export default TodoApp