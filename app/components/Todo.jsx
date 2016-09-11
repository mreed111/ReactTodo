var React = require('react');
var moment = require('moment');

var Todo = React.createClass({
  render: function () {
    var {id, text, completed, createdAt, completedAt} = this.props;

    var renderDate = () => {
      var message = (completedAt) ? 'Completed ' : 'Created ';
      var timestamp = (completedAt) ? completedAt : createdAt;

      return message + moment.unix(timestamp).format('MM Do, YYYY @ hh:mm A');
    };

    return (
      <div onClick={() => {
          this.props.onToggle(id);
        }}>
        <input type="checkbox" checked={completed} />
        <p>{text}</p>
        <p>{renderDate()}</p>
      </div>
    )
  }
});

module.exports = Todo;
