import React from 'react';
import './medium.css';
import { connect } from 'react-redux';

const Medium = props => {
    const { content, copySuccess } = props;

    let text;

    if (content) {
        text = (
            <div>
                {(copySuccess && (
                    <h3 style={{ color: 'green' }}>
                        Copied to Clipboard!
                    </h3>
                )) || <h3 style={{ color: 'red' }}>Error!</h3>}
            </div>
        );
    } else {
        text = (
            <div>
                <h3 style={{ color: 'gray' }}>
                    Waiting to copy rich text...
                </h3>
            </div>
        );
    }

    return <div id="medium" className="medium" children={text}></div>;
};

export default connect(state => ({
    content: state.content,
    copySuccess: state.copySuccess,
    codespan: state.codespan,
}))(Medium);
