import React,{Component} from 'react';
import classes from './InputField.css';

class InputField extends Component{
    render(){

        let inputClasses=["form-control"];

         if(this.props.invalid && this.props.touched)
        {  
            inputClasses.push(classes.invalid);

        }


        let inputElement;
        
        switch(this.props.elementType)
        {
            case "input":{
                inputElement=
                    <div className={this.props.colWidth}>
          <label className={this.props.labelColor}>{this.props.title}</label>
          <input 
                  
                    type={this.props.elementType}
                    ref={this.props.inputRef} 
                    onChange={this.props.onChange} 
                    list={this.props.datalistId} 
                    value={this.props.value} 
                    className={(inputClasses).join(' ')}
                    placeholder={this.props.placeholder}
                    />
                    <datalist id={this.props.datalistId}>
                    {this.props.children}
                    </datalist>
                    </div>
                    
                  
                ;

                break;
            }
            case "date":{
                inputElement=<div className={this.props.colWidth}>
                <label className={this.props.labelColor}>{this.props.title}</label>
                <input 
                          type={this.props.elementType}
                          ref={this.props.inputRef} 
                          onChange={this.props.onChange} 
                          list={this.props.datalistId} 
                          value={this.props.value} 
                          className={(inputClasses).join(' ')}
                          placeholder={this.props.placeholder}
                          />
                          <datalist id={this.props.datalistId}>
                          {this.props.children}
                          </datalist>
                          </div>

                          break;
            }

            default:{
                inputElement=null;
            }
        }
    

    return inputElement;
}


}

export default InputField;