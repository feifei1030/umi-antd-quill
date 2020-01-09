import React from 'react'
import styles from './index.css';
import ReactQuill from 'react-quill'; // ES6
import 'react-quill/dist/quill.snow.css'; // ES6

class Editor extends React.Component{
  constructor(props) {
    super(props)
    this.state = { text: '' } // You can also pass a Quill Delta here
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(value) {
    this.setState({ text: value })
  }

  render() {
    return (
      <ReactQuill value={this.state.text}
                  onChange={this.handleChange} />
    )
  }
}

export default function() {
  return (
    <div className={styles.normal}>
      <Editor></Editor>
    </div>
  );
}
