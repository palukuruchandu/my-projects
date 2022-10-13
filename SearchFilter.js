import React from 'react'
import Data from './Cities.json'
class SearchFilter extends React.Component{
  state={
     
      search: Data
  }

  searchHandler= (event) => {
      if(event.target.value !==""){
       let results = Data.filter((city)=>{
            return city.name.toLowerCase().includes(event.target.value.toLowerCase())
        })
        this.setState({search:results})
      }
  }

    render(){
    return (
        <div>
          <center>
            <h4> Enter your City: </h4>
        <input type="text"  onChange={this.searchHandler}/>
        <br />
        {
            this.state.search.length > 0 ? (this.state.search.map((city ,index)=>{
               return <div key={index} style={{"border": "1px solid black", "padding": "10px", "margin": "10px","maxWidth": "70%"}}>
            {city.name}
          </div>
               
            })) : "no results found"
        }  
        </center>
        </div>
      )
    }  
}

export default SearchFilter;