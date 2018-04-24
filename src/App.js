import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import { Route } from 'react-router-dom';
import SearchDocuments from './components/Layout/Dashboard/SearchDocuments/SearchDocuments';
import ComingSoon from './components/Layout/Dashboard/ComingSoon/ComingSoon';


class App extends Component {

  state = {
    english: "en",
    german: "de",
    inUse: "",
    current: {},
    en: {
      id: "en",
      placeholder: "Please select a value",
      nameTitle: "Enter Name",
      usernameTitle: "Enter Username",
      ageTitle: "Enter Age",
      genderTitle: "Enter Gender",
      favFoodTitle: "Enter Favourite Food",
      fromDateTitle:"Select from date",
      toDateTitle:"Select to Date",

      btnText: "Search Results",
      ftrText: [
        {
          first: "Made with",
          second: "by Farrukh"
        }],
      HeadrText: [{
        to: "/",
        title: "Search Documents"
      },
      {
        to: "/comingSoon1",
        title: "Upload Documents"
      },
      {
        to: "/comingSoon2",
        title: "Create Request"
      },
      {
        to: "/comingSoon3",
        title: "Search WF Task"
      }],
      table: {
        tableId: "UserId",
        name: "Name",
        username: "Username",
        age: "Age",
        gender: "Gender",
        favFood: "Favourite Food"
      },
      goBackBtnText: "Go Back"

    },
    de: {
      id: "de",
      placeholder: "Bitte wählen Sie einen Wert",
      nameTitle: "Name eingeben",
      usernameTitle: "Geben Sie den Benutzernamen ein",
      ageTitle: "Geben Sie das Alter ein",
      genderTitle: "Geben Sie das Geschlecht ein",
      favFoodTitle: "Geben Sie Lieblingsessen ein",
      fromDateTitle:"Wählen Sie aus Datum",
      toDateTitle:"Wählen Sie das Datum aus",
      btnText: "Suchergebnisse",
      ftrText: [{ first: "Gemacht mit", second: "von Farrukh" }],
      HeadrText: [{
        to: "/",
        title: "Dokumente suchen"
      },
      {
        to: "/comingSoon1",
        title: "Dokumente hochladen"
      },
      {
        to: "/comingSoon2",
        title: "Anfrage erstellen"
      },
      {
        to: "/comingSoon3",
        title: "WF-Aufgabe suchen"
      }],

      table: {
        tableId: "Benutzeridentifikation",
        name: "Name",
        username: "Nutzername",
        age: "Alter",
        gender: "Geschlecht",
        favFood: "Lieblingsessen"
      },
      goBackBtnText: "Geh zurück"

    }
  }
  initialLanguage = () => {
    this.setState({ current: this.state.en, inUse: this.state.german });
  }

  changeLanguage = () => {

    switch (this.state.current.id) {
      case "en": {
        this.setState({ current: this.state.de, inUse: this.state.english });
        break;
      }
      case "de": {
        this.setState({ current: this.state.en, inUse: this.state.german });
        break;
      }
      default: {
        this.setState({ current: this.state.en, inUse: this.state.english });
      }
    }
  }
  render() {
    return (


      <Layout locale={this.state}>

        <Route exact path="/" render={(props) => (
          <SearchDocuments {...props} initialLanguage={this.initialLanguage} locale={this.state} changeLanguage={this.changeLanguage} />
        )} />

        <Route path="/comingSoon1" component={ComingSoon} />
        <Route path="/comingSoon2" component={ComingSoon} />
        <Route path="/comingSoon3" component={ComingSoon} />

      </Layout>




    );
  }
}

export default App;
