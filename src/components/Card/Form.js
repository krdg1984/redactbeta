import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
                  loans: '',
                  creditCards: '',
                  utilities: '',
                  rentMortgage: '',
                  transportation: '',
                  debt: '',
                  activities: '',
                  travel: '',
                  buyHome: '',
                  invest: ''
                  };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
                   loans: event.target.loans,
                   creditCards: event.target.creditCards,
                   utilities: event.target.utilities,
                   rentMortgage: event.target.rentMortgage,
                   transportation: event.target.transportation,
                   debt: event.target.debt,
                   activities: event.target.activities,
                   travel: event.target.travel,
                   buyHome: event.target.buyHome,
                   invest: event.target.invest 
                  
                  });
  } 

  handleSubmit(event) {
    event.preventDefault();
  }
    render () {
        
     return (
        <div>
        <div className="field">
         
          <label>Monthly Income:</label>
          <ul><input income={this.state.income} onChange={this.handleChange} name='income' value= ''></input></ul>

        </div>

        <div className="field">
          
          <label>Monthly Expenses:</label>
         
            <ul>Loans:</ul><ul><input loans={this.state.loans} onChange={this.handleChange} name='loans' value= '' ></input></ul>
         
            <ul>Credit Cards:</ul><ul><input creditCards={this.state.creditCards} onChange={this.handleChange} name='creditCards' value= '' ></input></ul>
         
            <ul>Utilities:</ul><ul><input utilities={this.state.utilities} onChange={this.handleChange} name='utilities' value= ''></input></ul>
         
            <ul>Rent/Mortgage:</ul><ul><input rentMortgage={this.state.rentMortgage} onChange={this.handleChange} name='rentMortgage' value= ''></input></ul>
         
            <ul>Transportation:</ul><ul><input transportation={this.state.transportation} onChange={this.handleChange} name='transportation' value= ''></input></ul>
        
        </div>
        
        <div className="field">
          
          <label>Goal:</label>
            
            <ul>Pay off debt:</ul><ul><input debt={this.state.debt} onChange={this.handleChange} name='debt' value= ''></input></ul>
            
            <ul>Activities:</ul><ul><input activities={this.state.activities} onChange={this.handleChange} name='activities' value= ''></input></ul>
            
            <ul>Travel:</ul><ul><input travel={this.state.travel} onChange={this.handleChange} name='travel' value= ''></input></ul>
            
            <ul>Buy a home:</ul><ul><input buyHome={this.state.buyHome} onChange={this.handleChange} name='buyHome' value= ''></input></ul>
            
            <ul>Investment Funds:</ul><ul><input invest={this.state.invest} onChange={this.handleChange} name= 'invest' value= ''></input></ul>
       
        </div>
        
        <button type="submit" onClick={this.submitButton}>
          
          Submit

        </button>
        </div>
    );
  }
}

export default Form;