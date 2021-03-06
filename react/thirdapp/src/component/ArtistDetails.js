import React, {Component} from 'react';
import Header from './Header';
import AlbumList from './albums';

const url = "http://localhost:8900/artists";

class ArtistDetails extends Component{
    constructor(props){
        super(props)

        this.state={
            details:''
        }

    }


    componentDidMount(){
        fetch(`${url}/${this.props.match.params.id}`,{
            method: "GET"
        })
        .then((response) => response.json())
        .then((data) => {
            this.setState({
                details:data
            })

        })

        
    }
    render(){
        console.log(this.state)
        return(
            <div>
                <Header/>
                <div className="artist_bio">
                    <div className="artist_image">
                        <span style={{background:`url('/images/covers/${this.state.details.cover}.jpg')`}}>

                        </span>
                    </div>
                    <div className="bio">
                        <h3>{this.state.details.name}</h3>
                        <div className="bio_text">
                            {this.state.details.bio}
                        </div>
                    </div>
                    <AlbumList albumlist={this.state.details.albums}/>
                </div>
            </div>
            
        )
    }
}

export default ArtistDetails;