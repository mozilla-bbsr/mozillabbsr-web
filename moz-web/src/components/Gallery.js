import React,{ useState , useEffect} from 'react';
import firebase from './Events/firebase';
import Carousel from 'react-material-ui-carousel'
import $ from 'jquery'
import { Typography } from '@material-ui/core';

class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            paths: [],
            urls: []
        };
      }

    componentDidMount() {
        var storage = firebase.storage();
        var storageRef = storage.ref();
        


       var i =0;
       storageRef.child('images/MozillaEvents/'+this.props.name).listAll().then(function(result){

           result.items.forEach(function(imageRef){              
                i++;
                displayImage(i,imageRef);
           })
       })
       const displayImage = (row,images) => {
        
        images.getDownloadURL().then((url)=>{

            console.log(url);

            this.setState({
                urls: [ ...this.state.urls, url]
            });
        })
        
       }
       
    }
    
    render() {
        return(
            <div id='List'>
           <Carousel className='carousel'>
               {this.state.urls.map( url => <img src={url} className='CarImage'/>)}
           </Carousel>

            </div>
        );
    }
}
export default Gallery;