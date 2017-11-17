import { Component, Prop } from '@stencil/core';
import firebase from 'firebase/app';
import 'firebase/firestore';

@Component({
  tag: 'fb-content-editor'
})
export class FbContentEditor {


  @Prop() id: any;
  @Prop() key: any;
  @Prop() doc: any;

  fstore:any;
  dataRef:any;
  paragraph:any;
  excerpt: any;
  content: any;
  
 

  render() {
    var config = {
      apiKey: this.id,
      authDomain: this.id + ".firebaseapp.com",
      databaseURL: "https://"+this.id+".firebaseio.com",
      projectId: this.id,
      storageBucket: this.id +".appspot.com"
    };
    firebase.initializeApp(config);  
  

    var db = firebase.firestore();
    this.dataRef = db.collection('posts').doc(this.doc);

  
    return (
      <div class="contentEditorWrapper">
        <div class="contentTextWrapper">
          <textarea class="contentTextField" id="content"></textarea>
        </div>
        <div class="contentButtonWrapper">
          <button class="contentEditorButton" onClick={()=>{this.send()}}>Submit</button>
        </div>
      </div>
    );
  }
  send() {
    this.content = (document.getElementById('content')as HTMLInputElement).value;
    this.excerpt = this.content.substring(0,25) + "...";
      if (confirm("Submit   " +this.excerpt+"?") == true){
        this.dataRef.set({
          data: this.content
        })
      } else {
        return;
      }
    }

}
