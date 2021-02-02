import React, { Component } from 'react'

const api = 'https://api.themoviedb.org/3'
const apiKey = 'a9632aa4c0a084cd40a2f5f911739ec0'

export default class MovieInfo extends Component {
    state = {
        movieInfo:[]
    }
    componentWillMount(){
        const {movieInfo} = this.state
        let movieId = sessionStorage.getItem('movieId');
        let page = sessionStorage.getItem('Page');
         let url
         url = `${api}/${page}/${movieId}?api_key=${apiKey}&append_to_response=credits`
        
         fetch(url)
         .then((response) => {
             response.json().then((data) => {
             let info
             if (response.status === 200) {
                
             info = {
                tagline: data.tagline,
                poster: data.poster_path,
                genres: data.genres,
                title: data.title,
                name:data.name,
                status: data.status,
                overview: data.overview,
                rating: data.vote_average,
                companies: data.production_companies,
                release: data.release_date,
                startSeries: data.first_air_date,
                background: data.backdrop_path,
                runtime: data.runtime,
                episodeRuntime: data.episode_run_time,
                homepage: data.homepage
             }
            }else{
                info={name: "Sorry couldn't retrieve any data"}
            }
             movieInfo.push(info)
             this.setState({movieInfo})
         })
        })
     
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
