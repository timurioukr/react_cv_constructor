import React, { Children } from 'react';
import propTypes from 'prop-types'
import classNames from 'classnames'


const Description = ({ className, isPrimary, isSecondary, children, ...attrs }) => {
    const classes = classNames('ui-text', className, {
        isPrimary,
        isSecondary
    })

    return (
       <p 
        className={classes} 
        {...attrs }
        contentEditable 
        suppressContentEditableWarning 
        spellCheck={false}
        >
        {children}
        </p>
    );
};

Description.propTypes = {
    isPrimary: propTypes.bool,
    isSecondary: propTypes.bool,
    className: propTypes.string,
    children: propTypes.node.isRequired
}

Description.defaultProps = {
    isPrimary: false,
    isSecondary: false,
    className: '',
    children: null
}


export default Description;