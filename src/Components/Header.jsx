import React from 'react'
import PropTypes from 'prop-types'

const Header = props => {
    let {title,subTitle} = props;
    // const title = props.title;
    // const subTitle = props.subTitle;
    return (
        <div>
            {title}
            <p>{subTitle}</p>
        </div>
    )
}
Header.defaultProps = {
    title: "My Header",
    subTitle:false
}
Header.propTypes = {
    title: PropTypes.string,
    subTitle: PropTypes.oneOfType([PropTypes.string,PropTypes.bool])
}

export {Header}
