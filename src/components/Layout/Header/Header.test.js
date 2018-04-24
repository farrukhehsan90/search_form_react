import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import {configure,shallow} from 'enzyme';
import Header from './Header';
import Navbar from '../Dashboard/Navbar/Navbar';

configure({adapter:new Adapter()});

describe('<Header/>',()=>{

    let wrapper;
    const localeProps = {
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
            to: "/comingSoon",
            title: "Upload Documents"
          },
          {
            to: "/comingSoon",
            title: "Create Request"
          },
          {
            to: "/comingSoon",
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
            to: "/comingSoon",
            title: "Dokumente hochladen"
          },
          {
            to: "/comingSoon",
            title: "Anfrage erstellen"
          },
          {
            to: "/comingSoon",
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

    beforeEach(()=>{

        wrapper=shallow(<Header locale={localeProps}/>);

    });

    it('should render <Navbar/> component',()=>{
        
        expect(wrapper.find(Navbar)).toHaveLength(1);

    });
});