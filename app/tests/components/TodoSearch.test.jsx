var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoSearch = require('TodoSearch');

describe('TodoSearch', () => {
  it('should exist', () => {
    expect(TodoSearch).toExist();
  });

  it('should call onSearch with entered input text', () => {
    var searchText = 'Search Me';
    var spy = expect.createSpy();
    var searchTodos = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);
    //var $el = $(ReactDOM.findDOMNode(searchTodos));

    searchTodos.refs.todoSearch.value = searchText;
    TestUtils.Simulate.change(searchTodos.refs.todoSearch);

    expect(spy).toHaveBeenCalledWith(false, searchText);
  });

  it('should call onSearch with proper Checked value', () => {
    var spy = expect.createSpy();
    var searchTodos = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);

    searchTodos.refs.showCompleted.checked = true;
    TestUtils.Simulate.change(searchTodos.refs.showCompleted);

    expect(spy).toHaveBeenCalledWith(true, '');
  });

});
