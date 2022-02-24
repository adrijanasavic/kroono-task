import React from 'react'
import PropTypes from 'prop-types';

function Navbar({ title }) {
    return (<header>
        <h4
            style={{ paddingLeft: '10px', backgroundColor: '#F3F3F3' }}>
            {title}
        </h4>
    </header>
    )
}

Navbar.defaultProps = {
    title: 'Gists'
}

Navbar.propTypes = {
    title: PropTypes.string,
}
export default Navbar