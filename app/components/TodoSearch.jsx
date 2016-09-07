var React = require('react');

var TodoSearch = React.createClass({
  handleSearch: function () {
    var showCompleted = this.refs.showCompleted.checked;
    var searchText = this.refs.todoSearch.value;

    this.props.onSearch(showCompleted, searchText);
  },
  render: function () {
    return (
      <div>
        <div>
          <input type="search" ref="todoSearch" placeholder="Search Todos" onChange={this.handleSearch} />

        </div>
        <div>
          <label>
            <input type="checkbox" ref="showCompleted" onchange={this.handleSearch} />
            Show Completed todos
          </label>
        </div>
      </div>
    );
  }
});

module.exports = TodoSearch;
