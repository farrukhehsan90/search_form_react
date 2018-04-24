import React, { Component } from 'react';
import classes from './Table.scss';

class Table extends Component {

    componentWillMount = () => {
        this.props.initialLanguage();
    }

    render() {

        const profile = this.props.profile.map(user => {
            
            return (
                <tr key={user.userId}>
                    <th scope="row">{user.userId}</th>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.age}</td>
                    <td>{user.gender}</td>
                    <td>{user.favouriteFood}</td>
                </tr>
            );
        });



        return (

            <div className={`${classes.container} table-responsive`}>
                <table className="table table-hover">
                    <thead className={classes.tableHeader}>
                        <tr>
                            <th scope="col">{this.props.locale.current.table.tableId}</th>
                            <th scope="col">{this.props.locale.current.table.name}</th>
                            <th scope="col">{this.props.locale.current.table.username}</th>
                            <th scope="col">{this.props.locale.current.table.age}</th>
                            <th scope="col">{this.props.locale.current.table.gender}</th>
                            <th scope="col">{this.props.locale.current.table.favFood}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {profile}
                    </tbody>
                </table>
            </div>




        );

    }
}

export default Table;