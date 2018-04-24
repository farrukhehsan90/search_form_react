import React from 'react';
import {configure,shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import InputField from './InputField/InputField';
import SearchDocuments from './SearchDocuments';
import Button from '../../../Button/Button';

configure({adapter:new Adapter()});

describe('<SearchDocuments />',()=>{

    let wrapper;

    const localeProps={
        english:"en",
        german:"de",
        inUse:"",
        current:{},
        en:{
            id:"en",
            placeholder:"Please select a value",
            nameTitle:"Enter Name",
            usernameTitle:"Enter Username",
            ageTitle:"Enter Age",
            genderTitle:"Enter Gender",
            favFoodTitle:"Enter Favourite Food",
            btnText:"Search Results",
            ftrText:[
              {
              first:"Made with",
              second:"by Farrukh"
            }],
            HeadrText:[{
              to:"/",
              title:"Search Documents"
            },
            {
              to:"/comingSoon",
              title:"Upload Documents"
            },
            {
              to:"/comingSoon",
              title:"Create Request"
            },
            {
              to:"/comingSoon",
              title:"Search WF Task"
            }],
            table:{
              tableId:"UserId",
              name:"Name",
              username:"Username",
              age:"Age",
              gender:"Gender",
              favFood:"Favourite Food"
            },
            goBackBtnText:"Go Back"

        },
        de:{
            id:"de",
            placeholder:"Bitte wählen Sie einen Wert",
            nameTitle:"Name eingeben",
            usernameTitle:"Geben Sie den Benutzernamen ein",
            ageTitle:"Geben Sie das Alter ein",
            genderTitle:"Geben Sie das Geschlecht ein",
            favFoodTitle:"Geben Sie Lieblingsessen ein",
            btnText:"Suchergebnisse",
            ftrText:[{first:"Gemacht mit",second:"von Farrukh"}],
            HeadrText:[{
              to:"/",
              title:"Dokumente suchen"
            },
            {
              to:"/comingSoon",
              title:"Dokumente hochladen"
            },
            {
              to:"/comingSoon",
              title:"Anfrage erstellen"
            },
            {
              to:"/comingSoon",
              title:"WF-Aufgabe suchen"
            }],

            table:{
              tableId:"Benutzeridentifikation",
              name:"Name",
              username:"Nutzername",
              age:"Alter",
              gender:"Geschlecht",
              favFood:"Lieblingsessen"
            },
            goBackBtnText:"Geh zurück"

        }
}
     
beforeEach(()=>{

    wrapper=shallow(<SearchDocuments initialLanguage={()=>{}}  locale={localeProps} changeLanguage={()=>{}} />);
});

    it('should render 5 <InputField /> components when searchForm is visible',()=>{
    
       wrapper.setProps({showSearchForm:true});
        
       expect(wrapper.find(InputField)).toHaveLength(7);

    });

    it('should render <Button /> components twice when showSearchForm is true',()=>{
        
        wrapper.setProps({showSearchForm:true});
        
        expect(wrapper.find(Button)).toHaveLength(2);

    });
});