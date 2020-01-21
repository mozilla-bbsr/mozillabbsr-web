import React from "react";
import ReactDOM from "react-dom";
import FileUploader from "react-firebase-file-uploader";
 
import firebase from './Events/firebase';
 
class ImgUpload extends React.Component {
  state = {
    filenames: [],
    downloadURLs: [],
    isUploading: false,
    uploadProgress: 0
  };
 
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
      .ref("images")
      .child(filename)
      .getDownloadURL();
 
    this.setState(oldState => ({
      filenames: [...oldState.filenames, filename],
      downloadURLs: [...oldState.downloadURLs, downloadURL],
      uploadProgress: 100,
      isUploading: false
    }));
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
          <label style={{backgroundColor: 'steelblue', color: 'white', padding: 10, borderRadius: 4, cursor: 'pointer'}}>
    Choose Images To Be Uploaded
        <FileUploader
            hidden
          accept="image/*"
          name="image-uploader-multiple"
          randomizeFilename
          storageRef={firebase.storage().ref("images")}
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

export default ImgUpload;


