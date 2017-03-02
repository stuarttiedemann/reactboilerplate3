var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var AddTodo = React.createClass({
  onFormSubmit: function(e) {
    e.preventDefault();
    var text = this.refs.todoText.value;
    console.log(text);
    var {dispatch} = this.props;

    if (text.length > 0) {
      // Clear the input field
      this.refs.todoText.value = '';
      // Make the text available to the parent TodoApp.jsx container
      dispatch(actions.addTodo(text));
    } else {
      this.refs.text.focus();
    }
  },
  render: function () {
    return (
      <div className="container__footer">
        <form onSubmit={this.onFormSubmit}>
          <div>
            <input type="text" ref="todoText" placeholder="Enter a new todo" />
          </div>
          <div>
            <button className="button expanded">Add Todo</button>
          </div>
        </form>
      </div>
    );
  }
});

export default connect()(AddTodo);