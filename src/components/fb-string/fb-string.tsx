import { Component, Prop } from '@stencil/core';
import firebase from 'firebase/app';
import 'firebase/firestore';

@Component({
  tag: 'fb-string'
})
export class FbString {


  @Prop() id: any;
  @Prop() key: any;
  @Prop() item: string;

  fstore:any;
  dataRef:any;
  docData:any;
  
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
    this.dataRef = db.collection('posts').doc(this.item)
    

    this.dataRef.onSnapshot(function(res) {
      this.docData = res.data().data;
      document.getElementById('fbDataTarget').innerHTML = this.docData;
    });
    return (
     
      <div id="fbDataTarget"></div>
      
    );
  }
  }