import React from 'react'
import MovieRow from '../components/MovieRow';



class Film extends React.Component {
  state = {
      data: [],
      filterData: [],
      cher: ""
  }
  getFilm = (res) => {
      fetch("https://api.themoviedb.org/3/search/movie?api_key=e59edc16a39691eaa185d6b7049ca9d4&query=Chuck norris"  ) 
      .then(res => res.json())
      .then(res => console.log(res.results) || this.setState({data: res.results}))
      
      

  }
  handleChange = e => {
      this.setState({ [e.target.name]: e.target.value }, () => {
        if (this.state.cher && this.state.cher.length > 1) {
          setTimeout(() => {
            let resultSearch = this.state.data.filter(
              character =>
                character.name
                  .toLowerCase()
                  .indexOf(this.state.cher.toLowerCase()) !== -1
            )
            this.setState({ filterData: resultSearch })
          }, 1000)
        } else if (!this.state.cher) {
        }
      })
  }

  
  
  handleSubmit =  () => {
      
      
  }
  
  componentDidMount() {


  }
  render() {
      console.log('Chuck norris',this.state.data)        
      return (
          <>
              <input type="text" name="cher" value={this.state.cher} onChange={this.handleChange}/>
              <input type="submit" className="buttonsearch" onClick={this.getFilm}/>
              <div>{this.state.data.map(film => <p>{film.title}</p>)}</div>
              
          </>
      )
  }
}

export default Film


// class Film extends React.Component {
//     state = {
//         data: [],
//         filterData: [],
//         cher: ""
//     }
//     getFilm = (res) => {
//         fetch("https://api.themoviedb.org/3/search/movie?api_key=e59edc16a39691eaa185d6b7049ca9d4&query=Chuck norris"  ) 
//         .then(res => res.json())
//         .then(res => console.log(res.results) || this.setState({data: res.results}))
        
        

//     }
//     handleChange = e => {
//         this.setState({ [e.target.name]: e.target.value }, () => {
//           if (this.state.cher && this.state.cher.length > 1) {
//             setTimeout(() => {
//               let resultSearch = this.state.data.filter(
//                 character =>
//                   character.name
//                     .toLowerCase()
//                     .indexOf(this.state.cher.toLowerCase()) !== -1
//               )
//               this.setState({ filterData: resultSearch })
//             }, 1000)
//           } else if (!this.state.cher) {
//           }
//         })
//     }

    
    
//     handleSubmit =  () => {
        
        
//     }
    
//     componentDidMount() {


//     }
//     render() {
//         console.log('Chuck norris',this.state.data)        
//         return (
//             <>
//                 <input type="text" name="cher" value={this.state.cher} onChange={this.handleChange}/>
//                 <input type="submit" className="buttonsearch" onClick={this.getFilm}/>
//                 <div>{this.state.data.map(film => <p>{film.title}</p>)}</div>
                
//             </>
//         )
//     }
// }

// export default Film