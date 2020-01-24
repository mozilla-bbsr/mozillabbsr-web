import React,{ useState , useEffect} from 'react';
import firebase from './Events/firebase';
import Carousel from 'react-material-ui-carousel'
import $ from 'jquery'

/*function Gallery(name)
{
    const[list, setList] = useState([]);
    const [url,setUrl] = useState([]);

    var storage = firebase.storage();

    var storageRef = storage.ref();
    var imagesRef = storageRef.child('images/MozillaEvents/'+name);

//items[].location.path

const getList = async() =>{
    let path = []

    await imagesRef.listAll().then(function(list) {
        for(let item in list.items)
        {
            path.push(list.items[item].location.path)
        }
        setList(path);
    }).catch(function(error){
        console.log(error)
    });
}

const getUrls = async() =>
{
    let urls = []

    for(var i=0;i<list.length;i++)
    { 
        var imageRef = storageRef.child(list[i]);
        await imageRef.getDownloadURL().then(function(url) {
            urls.push(url)
        }).catch(function(error){
            console.log(error)
        });
    }
    setUrl(urls);
}

useEffect(()=>{
    getList();

},[list]);

useEffect(()=>{
    getUrls();

},[url]);



    return(
        <div>
           <Carousel>
           {
                url.map(
                    (url) => <img src={url} />
                )
            }
           </Carousel>
        </div>
    );
}
export default Gallery;*/


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

       $('#List').find('tbody').html('');

       var i =0;
       storageRef.child('images/MozillaEvents/Rust/').listAll().then(function(result){

           result.items.forEach(function(imageRef){

                // console.log("Image Reference" + imageRef.toString());
              
                i++;
                displayImage(i,imageRef);
           })
       })

       function displayImage(row,images) {

        images.getDownloadURL().then(function(url){

            console.log(url);

            let new_html = '';
            new_html += '<tr>';
            new_html += '<td>';
            new_html += row;
            new_html += '</td>';
            new_html += '<td>';
            new_html += '<img src="'+url+'" width="100px">';
            new_html += '</td>';
            new_html += '</tr>';
            $('#List').find('tbody').append(new_html);

        })
       }

       this.setState({
           urls:[displayImage.url]
       });


        // var storageRef = storage.ref();
        // var imagesRef = storageRef.child('images/MozillaEvents/Rust');

        // let path = []

        // imagesRef.listAll().then(function(list) {
        //     for(let item in list.items)
        //     {
        //         path.push(list.items[item].location.path)
        //     }
        // }).catch(function(error){
        //     console.log(error)
        // });
        // this.setState({paths: path});
        // console.log(this.state.paths)
        // console.log("hello")
        // let url = []

        // for(var i=0;i<this.state.paths.length;i++)
        // { 
        //     var imageRef = storageRef.child(this.state.paths[i]);
        //     imageRef.getDownloadURL().then(function(urlfetched) {
        //         url.push(urlfetched)
        //     }).catch(function(error){
        //         console.log(error)
        //     });
        // }
        // this.setState({urls: url});

    }

    

    render() {
        return(
            <div>
                <br/><br/><br/><br/>
            <p class="text-center">Gallery</p>
            <table id="List">
                <tbody>

                </tbody>
            </table>
           {/* <Carousel>
           {
                this.state.urls.map(
                    (url) => <img src={url} />
                )
            }
            </Carousel> */}

            </div>
        );
    }
}
export default Gallery;