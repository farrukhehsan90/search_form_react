import React from 'react';
import Navbar from '../Dashboard/Navbar/Navbar';

const header = (props) => {
    return (

        <Navbar locale={props.locale} />

    );
}
export default header;