/**
 * Example
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Truncate from '../src/Truncate'

const short_text = "I am a very short text..."
const long_text = "I am a very long text and I just won't stop going on... blah blah blah blah blah blah blah blah blah"

export default class Examples extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>{'Examples Page'}</h1>
        {'Character limits are set to 50.'}
        <hr></hr>
        <div>
          <h1>Short text example</h1>
          <h2>Original</h2>
          {short_text}
          <h2>After truncate</h2>
          <Truncate
            key="short-text"
            characterLimit={50}
            text={short_text}
          />       
        </div>
        <div>
          <hr></hr>
          <h1>Long text example</h1>
          <h2>Original</h2>
          {long_text}
          <h2>After truncate</h2>
          <Truncate
            key="short-text"
            characterLimit={50}
            text={long_text}
          /> 
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Examples />, document.getElementById('examples'));
