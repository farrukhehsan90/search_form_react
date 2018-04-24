import React, { Component } from 'react';
import axios from 'axios';
import InputField from './InputField/InputField';
import Table from './Table/Table';
import Wrapper from '../../../../hoc/Wrapper';
import Button from '../../../Button/Button';
import classes from './SearchDocuments.scss';

class SearchDocuments extends Component {

    state = {
        profiles: [],

        inputValue: '',
        showSearchForm: true,
        showTable: false,
        names: {
            validation: {
                required: true,
                minLength:'3'
            },
            valid: false,
            touched: false
        },
        profileUserData:[],
        formIsValid: false

    }


    componentWillMount() {
        this.props.initialLanguage();
    }

    componentDidMount() {
        axios.get('profiles.json')
            .then(response => {

                this.setState({ profiles: response.data });
            });


        const updateEn = {
            ...this.props.locale.en
        }

        this.setState(this.props.locale.current = updateEn);


    }

    componentDidUpdate() {

        if (this.state.showSearchForm && (this.state.inputValue === '' || this.state.inputValue === ' ' || this.state.inputValue === null)) {

            // this.username.value = '';
            // this.age.value = '';
            // this.gender.value = '';
            // this.favFood.value = '';
        }


        
    }


    checkValidity = (value, rules) => {
        let isValid = true;

        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
            console.log("required",isValid);

        }

        if(rules.minLength)
        {
            isValid=value.trim()>rules.minLength && isValid;
            console.log("minLength",isValid);
        }

        return isValid;
    }




    onChangeHandler = (event) => {


        this.setState({ inputValue: event.target.value });

        let namesElement = {
            ...this.state.names
        }

        namesElement.valid = this.checkValidity(this.state.inputValue, namesElement.validation);
        namesElement.touched = true;
        console.log(namesElement.valid);

        let formIsValid = true;

        formIsValid = namesElement.valid && formIsValid;

        this.setState({ names: namesElement, formIsValid: formIsValid });
    }

    onSubHandler = (event) => {

    }


    onSearchResults = () => {

        this.setState({ showSearchForm: !this.state.showSearchForm });

        this.setState({ showTable: !this.state.showTable });

                if(this.fromDate.value!==null && this.toDate.value!==null){
            {
                    let profileFilter=this.state.profiles.filter((profile)=>{
        

                let found=(profile.fromDate>=this.fromDate.value && profile.toDate<=this.toDate.value) || profile.name===this.state.inputValue;
                return found;

            }).map((profile)=>{
                
                return profile;
                
            });

            this.setState({profileUserData:profileFilter});
            
        }

        }
        
    }


    onClickShowForm = () => {

        this.setState({ showSearchForm: !this.state.showSearchForm });
        this.setState({showTable:!this.state.showTable});

        this.setState({inputValue:'',formIsValid:false});

        
    }

    onClickLanguageHandler = () => {

        this.props.changeLanguage();

    }


    render() {

        const inputValue = this.state.inputValue;
        const profileNames = this.state.profiles.map(user => {
            return (
                <option key={user.userId}>{user.name}</option>);
        });

        let profileUserData = this.state.profiles.filter(user => {
            return (user.name === inputValue);
        });

        let profileUsername = profileUserData.map(user => {
            return (<option key={user.userId}>{user.username}</option>);
        });

        let profileAge = profileUserData.map(user => {
            return (<option key={user.userId}>{user.age}</option>);
        });


        let profileGender = profileUserData.map(user => {
            return (
                <option key={user.userId}>{user.gender}</option>
            );
        });

        let profileFavouriteFood = profileUserData.map(user => {

            return (

                <option key={user.userId}>{user.favouriteFood}</option>

            );
        });






        if (this.state.showSearchForm) {

            return (

                <div className="container">

                    <form >
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '25px', textAlign: 'center' }} className="row">

                            <InputField
                                elementType="input"
                                invalid={!this.state.names.valid}
                                touched={this.state.names.touched}
                                placeholder={this.props.locale.current.placeholder}
                                labelColor="badge badge-primary"
                                onChange={this.onChangeHandler}
                                value={this.state.inputValue}
                                colWidth="col-md-3 col-xs-12"
                                title={`${this.props.locale.current.nameTitle} *`}
                                datalistId="names">
                                {profileNames}
                            </InputField>


                            <InputField
                                elementType="input"
                                placeholder={this.props.locale.current.placeholder}
                                labelColor="badge badge-primary"
                                inputRef={(input) => { this.username = input }}
                                colWidth="col-md-5 col-xs-12"
                                title={this.props.locale.current.usernameTitle}
                                datalistId="usernames">
                                {profileUsername}
                            </InputField>

                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '25px', textAlign: 'center' }} className="row">

                            <InputField
                                elementType="input"
                                placeholder={this.props.locale.current.placeholder}
                                labelColor="badge badge-primary"
                                inputRef={(input) => { this.age = input }}
                                colWidth="col-md-3 col-xs-12"
                                title={this.props.locale.current.ageTitle}
                                datalistId="ages">
                                {profileAge}
                            </InputField>

                            <InputField
                                elementType="input"
                                placeholder={this.props.locale.current.placeholder}
                                labelColor="badge badge-primary"
                                inputRef={(input) => { this.gender = input }}
                                colWidth="col-md-5 col-xs-12"
                                title={this.props.locale.current.genderTitle}
                                datalistId="genders">
                                {profileGender}
                            </InputField>

                        </div>

                        <div
                            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '25px', textAlign: 'center' }}
                            className="row">

                            <InputField
                                elementType="input"
                                placeholder={this.props.locale.current.placeholder}
                                labelColor="badge badge-primary"
                                inputRef={(input) => { this.favFood = input }}
                                colWidth="col-md-4 col-xs-12"
                                title={this.props.locale.current.favFoodTitle}
                                datalistId="favouriteFood">
                                {profileFavouriteFood}
                            </InputField>

                        </div>

                        <div
                            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '25px', textAlign: 'center' }}
                            className="row">

                            <InputField 
                            placeholder={this.props.locale.current.placeholder}
                            labelColor="badge badge-primary"
                            colWidth="col-md-4 col-xs-12"
                            title={this.props.locale.current.fromDateTitle}
                            inputRef={(input)=>{this.fromDate=input}}
                           onChange={this.onChangeDate} 
                           className="form-control" 
                           elementType="date" >
                           </InputField>

                           <InputField 
                            placeholder={this.props.locale.current.placeholder}
                            labelColor="badge badge-primary"
                            inputRef={(input) => { this.toDate = input }}
                            colWidth="col-md-4 col-xs-12"
                            title={this.props.locale.current.toDateTitle}
                        
                           onChange={this.onChangeDate} 
                           className="form-control" 
                           elementType="date" >
                           </InputField>


                        </div>
                        
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '25px', textAlign: 'center' }} className="row">

                            <Button
                                onClick={this.onSearchResults}
                                style={{ textAlign: 'center' }}
                                className="btn btn-primary"
                                type="submit"
                                disabled={!this.state.formIsValid} >
                                {this.props.locale.current.btnText}
                            </Button>

                        </div>

                        
                    </form>

                    <div className={classes.btnContainer}>
                        <Button
                            onClick={this.onClickLanguageHandler}
                            style={{marginBottom: '50px',bottom:'25px'}}
                            className={`${classes.localeBtn}  btn btn-lg btn-warning`} >
                            <strong>
                                {this.props.locale.inUse}
                            </strong>
                        </Button>
                    </div>
                </div>

            );
        }

        if (this.state.showTable) {
            return (

                <Wrapper>
                    <Button
                        className="btn btn-primary"
                        style={{ margin: '20px' }}
                        onClick={this.onClickShowForm}>
                        <i className="fas fa-arrow-left"></i>
                        {this.props.locale.current.goBackBtnText}
                    </Button>
                    <Table
                        initialLanguage={this.props.initialLanguage}
                        locale={this.props.locale}
                        profile={this.state.profileUserData} />

                    <div className={`${classes.btnContainer} `} style={{display:'flex',justifyContent:'flex-end',alignContent:'flex-end'}}>
                        <Button
                            onClick={this.onClickLanguageHandler}
                            style={{marginBottom: '50px',bottom:'25px'}}
                            className={`${classes.localeBtn}  btn btn-lg btn-warning`}>
                            <strong>
                                {this.props.locale.inUse}
                            </strong>
                        </Button>
                    </div>
                </Wrapper>

            );


        }





    }
}

export default SearchDocuments;