var React = require('react');

var AddTodo = React.createClass({
  onFormSubmit: function(e) {
    e.preventDefault();
    var text = this.refs.text.value;

    if (text.length > 0) {
      // Clear the input field
      this.refs.text.value = '';
      // Make the text available to the parent TodoApp.jsx container
      this.props.onAddTodo(text);
    } else {
      this.refs.text.focus();
    }
  },
  render: function () {
    return (
      <div className="container__footer">
        <form onSubmit={this.onFormSubmit}>
          <div>
            <input type="text" ref="text" placeholder="Enter a new todo" />
          </div>
          <div>
            <button className="button expanded">Add Todo</button>
          </div>
        </form>
      </div>
    );
  }
});

module.exports = AddTodo;