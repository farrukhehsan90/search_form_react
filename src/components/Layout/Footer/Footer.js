import React, { Component } from 'react';
import classes from './Footer.scss';


class Footer extends Component {

  componentWillMount() {

    this.setState(this.props.locale.current = this.props.locale.en);

  }


  render() {
    return (
      <footer className={classes.footer}>
        <div style={{ display: 'flex', justifyContent: 'center' }} className="container">

          {this.props.locale.current.ftrText.map((footer) => {
            return (

              <span style={{ textAlign: 'center' }} key={`${footer.first} ${footer.second}`} className={`text-muted`}>{footer.first} <i className={`${classes.heart} fas fa-heart`}></i> {footer.second}</span>

            )
          })}
        </div>
      </footer>
    );
  }
}

export default Footer;