import React from 'react';
import './medium.css';
import { connect } from 'react-redux';

const Medium = props => {
    const { content: _, copySuccess } = props;

    const copyStatusMessage = (
        <div>
            {(copySuccess && (
                <h3 style={{ color: 'green' }}>
                    Copied to Clipboard!
                </h3>
            )) ||
                (copySuccess === undefined && (
                    <h3 style={{ color: 'gray' }}>
                        Waiting to copy rich text...
                    </h3>
                )) || <h3 style={{ color: 'red' }}>Error!</h3>}
        </div>
    );

    return (
        <div
            id="medium"
            className="medium"
            children={copyStatusMessage}></div>
    );
};

export default connect(state => ({
    content: state.content,
    copySuccess: state.copySuccess,
    codespan: state.codespan,
}))(Medium);
