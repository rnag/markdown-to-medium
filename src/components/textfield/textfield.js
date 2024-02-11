import React from 'react';
import './textfield.css';
import {connect} from 'react-redux';
import {setContent} from '../../state.js';
import converter from "../../converter";
import {copyRichToClip} from "../../clipboard";

const TextField = props => {
  let content;

  async function handleClick() {
      let contentVal = content.value;
      let copySuccess;

      try {
          await copyRichToClip(converter({content: contentVal}));
          copySuccess = true;
      } catch (e) {
          console.log('Fail', e);
          copySuccess = false;
      } finally {
          props.dispatch(setContent(contentVal, copySuccess));
      }
  }


  return <textarea
      className="textfield"
      ref={node => {
        content = node;
      }}
      onChange={handleClick}></textarea>;
};

export default connect()(TextField);
