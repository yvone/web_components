'use strict';

const e = React.createElement;
let dataText = document.currentScript.getAttribute('data-text');

class GreetingsTag extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return e(
      "div", {
        style: {
          fontSize: '0.8rem',
          width: '200px',
          display: 'inline-block',
          border: '1px solid black',
          padding: '5px',
          background: 'red',
          borderRadius: '3px'
        }
      }, this.props.tag
    )
  }
}

const domContainer = document.querySelector('#greetings_tag_container');
ReactDOM.render(e(GreetingsTag, {tag: dataText}), domContainer);