import React from 'react';
import Header from '../Layout/Header/Header';
import Footer from '../Layout/Footer/Footer';
import Wrapper from '../../hoc/Wrapper';

const layout = (props) => {

    return (

        <Wrapper>
            <Header locale={props.locale} />
            <main>

                {props.children}

            </main>
            <Footer locale={props.locale} />
        </Wrapper>
    );
}


export default layout;