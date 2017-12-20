var TodoList = React.createClass({

    render: function() {
        return ( <div>
            <TypeNew / >
            <ListTodo / >
            </div>
        )
    }
});
var TypeNew = React.createClass({
    render: function() {
        return ( <form>
            <input type = "text" placeholder = "typing a newthing todo" / >
            </form>
        )
    }
});
var ListTodo = React.createClass({
    render: function() {
        return (<ul id = "tido-list" >

            </ul>
        )
    }
});
ReactDOM.render(
    <TodoList / > ,
    document.getElementById('example')
);