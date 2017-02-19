var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoApp = require('TodoApp');

describe('TodoApp', () => {
  it('should exist', () => {
    expect(TodoApp).toExist();
  });

  it('should add todo to the todos state on handleAddToDo', () => {
    var todoText = "test text";
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

    todoApp.setState({todos: []});
    todoApp.handleAddToDo(todoText);

    expect(todoApp.state.todos[0].text).toBe(todoText);
    // Expect createdAt to be a number
    expect(todoApp.state.todos[0].createdAt).toBeA('number');
  });

  it('should toggle completed value when handleToggle called', () => {
    // Sample test data
    var todoData = {
      id: 11,
      text: 'test data',
      completed: false,
      createdAt: 0,
      completedAt: undefined
    };
    // Create a renderable component for testing
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    // Set the state to the test data
    todoApp.setState({todos: [todoData]});

    // Check that todos first item has completed value of false
    expect(todoApp.state.todos[0].completed).toBe(false);

    // Call handletoggle with 11
    todoApp.handleToggle(todoData.id);

    // Verify that the value changed
    expect(todoApp.state.todos[0].completed).toBe(true);

    // Expect completedAt to be a number
    expect(todoApp.state.todos[0].completedAt).toBeA('number');
  });

  it('should toggle completed todo from completed to incomplete', () => {
    // Sample test data
    var todoData = {
      id: 11,
      text: 'test data',
      completed: true,
      createdAt: 0,
      completedAt: 123
    };
    // Create a renderable component for testing
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    // Set the state to the test data
    todoApp.setState({todos: [todoData]});

    // Check that todos first item has completed value of false
    expect(todoApp.state.todos[0].completed).toBe(true);

    // Call handletoggle with 11
    todoApp.handleToggle(todoData.id);

    // Verify that the value changed
    expect(todoApp.state.todos[0].completed).toBe(false);

    // Expect completedAt to be a number
    expect(todoApp.state.todos[0].completedAt).toNotExist();
  });

});