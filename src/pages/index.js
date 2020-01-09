import React from 'react'
import styles from './index.css';
import 'react-quill/dist/quill.snow.css'; // ES6

import ReactQuill, { Quill } from 'react-quill';
import { ImageDrop } from 'quill-image-drop-module';
import ImageResize from 'quill-image-resize-module';
Quill.register('modules/ImageDrop', ImageDrop);
Quill.register('modules/ImageResize', ImageResize);

const modules = {
  ImageDrop: true,
  ImageResize: {}
};

class Editor extends React.Component {
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
      <ReactQuill
        value={this.state.text}
        modules={modules}
        onChange={this.handleChange} />
    )
  }
}

export default function () {
  return (
    <div className={styles.normal}>
      <Editor></Editor>
    </div>
  );
}
