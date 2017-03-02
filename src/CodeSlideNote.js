const React = require('react');

const style = {
  position: 'fixed',
  bottom: '20px',
  width: '100%',
  padding: '20px',
  background: '#FDFEFE',
  color: '#05416B',
  fontFamily: 'Roboto Condensed',
  fontWeight: 'bold',
  textAlign: 'left'
};

class CodeSlideNote extends React.Component {
  render() {
    return (
      <div style={style}>
        {this.props.children}
      </div>
    );
  }
}

module.exports = CodeSlideNote;
