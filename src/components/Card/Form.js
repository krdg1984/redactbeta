import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.handleChange.bind(this)
    this.onSubmit.bind(this)
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
                  }
  }

  handleChange(e, value) {
    let change = {}
    change[value] = e.target.value
    this.setState(change)
  } 

  onSubmit(event) {
    event.preventDefault();
    this.setState({
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
      })
  }
  
    render () {
        
     return (
        <div>
        <div className="field">
         
          <label>Monthly Income:</label>
          <ul><input type="income" onChange={(event)=>this.handleChange(event, "income")} value={this.state.income}></input></ul>

        </div>

        <div className="field">
          
          <label>Monthly Expenses:</label>
         
            <ul>Loans:</ul><ul><input type="loans" onChange={(event)=>this.handleChange(event, "loans")} value={this.state.loans} ></input></ul>
         
            <ul>Credit Cards:</ul><ul><input type="creditCards" onChange={(event)=>this.handleChange(event, "creditCards")} value={this.state.creditCards}></input></ul>
         
            <ul>Utilities:</ul><ul><input type="utilities" onChange={(event)=>this.handleChange(event, "utilities")} value={this.state.utilities} ></input></ul>
         
            <ul>Rent/Mortgage:</ul><ul><input type="rentMorgage" onChange={(event)=>this.handleChange(event, "rentMortgage")} value={this.state.rentMortgage}></input></ul>
         
            <ul>Transportation:</ul><ul><input type="transportation" onChange={(event)=>this.handleChange(event, "transportation")} value={this.state.transportation}></input></ul>
        
        </div>
        
        <div className="field">
          
          <label>Goal:</label>
            
            <ul>Pay off debt:</ul><ul><input type="debt" onChange={(event)=>this.handleChange(event, "debt")} value={this.state.debt}></input></ul>
            
            <ul>Activities:</ul><ul><input type="activities" onChange={(event)=>this.handleChange(event, "activities")} value={this.state.activities}></input></ul>
            
            <ul>Travel:</ul><ul><input type="travel" onChange={(event)=>this.handleChange(event, "travel")} value={this.state.travel}></input></ul>
            
            <ul>Buy a home:</ul><ul><input type="buyHome" onChange={(event)=>this.handleChange(event, "buyHome")} value={this.state.buyHome}></input></ul>
            
            <ul>Investment Funds:</ul><ul><input type="invest" onChange={(event)=>this.handleChange(event, "invest")} value={this.state.invest}></input></ul>
       
        </div>
        
        <div>
        <button type="submit" onClick={(event)=>this.onSubmit(event)}>
        
          Submit

        </button>
        </div>
        </div>
    );
  }
}

export default Form;