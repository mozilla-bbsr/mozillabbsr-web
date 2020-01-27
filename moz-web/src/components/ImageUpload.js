import React from "react";
import FileUploader from "react-firebase-file-uploader";
import firebase from './Events/firebase';


 
export default class ImgUpload extends React.Component {

  constructor(props) {
    super(props);

    this.onChangeEventname = this.onChangeEventname.bind(this);

    this.state = {

      events:[],
      event_name: '',

      filenames: [],
      downloadURLs: [],
      isUploading: false,
      uploadProgress: 0
    };
  }

  onChangeEventname(e) {
    this.setState({
      event_name: e.target.value
    });
    console.log(this.state);
  }


  componentDidMount() {
    const eventRef = firebase.database().ref('events');
    eventRef.on('value',(snapshot) => {
      let events = snapshot.val();
      let newState = [];
      for( let event in events) {
        newState.push({
          id:event,
          title: events[event].title,          
        });
      }
      this.setState({
        events:newState
      });
    });
  }
  
 
  handleUploadStart = () =>
    this.setState({
      isUploading: true,
      uploadProgress: 0
    });
 
  handleProgress = progress =>
    this.setState({
      uploadProgress: progress
    });
 
  handleUploadError = error => {
    this.setState({
      isUploading: false
      // Todo: handle error
    });
    console.error(error);
  };
 
  handleUploadSuccess = async filename => {
    const downloadURL = await firebase
      .storage()
      .ref("images/MozillaEvents/")
      .child(`${this.state.event_name}`)
      .child(filename)
      .getDownloadURL();
 
    this.setState(oldState => ({
      filenames: [...oldState.filenames, filename],
      downloadURLs: [...oldState.downloadURLs, downloadURL],
      uploadProgress: 100,
      isUploading: false
    }));

    console.log(this.state);
  };

   
  render() {
    return (
      <div class="container text-center">
          <br/><br/><br/><br/><br/><br/>
          <div class="panel-heading">
            <h3 class="panel-title text-center">
            UPLOAD IMAGES TO FIREBASE STORAGE
            </h3>
            <br/>
          </div>

          <div className='form-group text-center col-sm-6 mx-auto md-form'>
            <p>Select The Event To Upload Photos</p>
            <select
              required
              className='form-control'
              value={this.state.eventname}
              onChange={this.onChangeEventname}
            >
              {this.state.events.map((title) =>{
                return (
                  <option>{title.title}</option>
                )
              })}
            </select>
          </div>



          <label style={{backgroundColor: 'steelblue', color: 'white', padding: 10, borderRadius: 4, cursor: 'pointer'}}>
    Choose Images To Be Uploaded
        <FileUploader
            hidden
          accept="image/*"
          name="image-uploader-multiple"
          randomizeFilename
          storageRef={firebase.storage().ref(`images/MozillaEvents/${this.state.event_name}`)}
          onUploadStart={this.handleUploadStart}
          onUploadError={this.handleUploadError}
          onUploadSuccess={this.handleUploadSuccess}
          onProgress={this.handleProgress}
          multiple
        />
         </label>
        <br/>  <br/>
        <p>Progress: {this.state.uploadProgress}</p>
 
        <p>Filenames: {this.state.filenames.join(", ")}</p>
 
        <div>
          {this.state.downloadURLs.map((downloadURL, i) => {
            return <img key={i} src={downloadURL} height='200' />;
          })}
        </div>
      </div>
    );
  }
}



