import React from 'react';
import './textfield.css';
import { connect } from 'react-redux';
import { setContent } from '../../state.js';
import converter from '../../converter';
import { copyRichToClip } from '../../clipboard';

const TextField = props => {
    let content;

    async function handleClick(e) {
        let contentVal = content.value;
        let copySuccess;

        console.log(e.target.value);
        console.log(e.target.value?.length);

        try {
            if (contentVal) {
                await copyRichToClip(converter(contentVal));
                copySuccess = true;
            } else copySuccess = undefined;
        } catch (e) {
            console.log('Fail', e);
            copySuccess = false;
        } finally {
            props.dispatch(setContent(contentVal, copySuccess));
        }
    }

    return (
        <textarea
            className="textfield"
            ref={node => {
                content = node;
            }}
            onBlur={handleClick}></textarea>
    );
};

export default connect()(TextField);
