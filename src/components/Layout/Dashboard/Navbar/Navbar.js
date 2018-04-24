import React, { Component } from 'react';
import { NavLink,Link } from 'react-router-dom';
import classes from './Navbar.scss';
import Wrapper from '../../../../hoc/Wrapper';

class Navbar extends Component {

    componentWillMount() {
        this.setState(this.props.locale.current = this.props.locale.en);
    }
    render() {
        const header = this.props.locale.current.HeadrText.map(header => {

            return (<NavLink style={{ color: '#000000' }}  activeClassName={classes.selected} exact className={`nav-item nav-link`} key={header.title} to={header.to}>{header.title}</NavLink>);

        });

        return (

            <Wrapper>
                <nav className={`${classes.Header} navbar navbar-expand-lg navbar-dark`}>
                    <Link className="navbar-brand" to="/">
                        <img src="/assets/metroIcon.png" width="75" height="30" alt="Metro Link +" />
                    </Link>
                </nav>
                <nav className={`${classes.Navbar} navbar navbar-expand-lg navbar-dark`}>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav mr-auto">
                            {header}

                        </div>
                    </div>
                </nav>

            </Wrapper>


        );
    }
}

export default Navbar;