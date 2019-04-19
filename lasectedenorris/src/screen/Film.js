import React from 'react'

class Film extends React.Component {
    state = {
        data: [],
        cher: ""
    }
    getFilm = (res) => {
        fetch("https://api.themoviedb.org/3/search/movie?api_key=e59edc16a39691eaa185d6b7049ca9d4&query=Chuck norris")
        .then(res => res.json())
        .then(res => console.log(res.results) || this.setState({data: res.results}))
    }
    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
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
                <input type="submit" className="buttonsearch" onClick={this.handleSubmit}/>
                <div>{this.state.data.map(film => <p>{film.title}</p>)}</div>
            </>
        )
    }
}

export default Film