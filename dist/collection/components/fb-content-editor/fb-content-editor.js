import { } from '@stencil/core';
import firebase from 'firebase/app';
import 'firebase/firestore';
export class FbContentEditor {
    render() {
        var config = {
            apiKey: this.id,
            authDomain: this.id + ".firebaseapp.com",
            databaseURL: "https://" + this.id + ".firebaseio.com",
            projectId: this.id,
            storageBucket: this.id + ".appspot.com"
        };
        firebase.initializeApp(config);
        var db = firebase.firestore();
        this.dataRef = db.collection('posts').doc(this.doc);
        return (h("div", { class: "contentEditorWrapper" },
            h("div", { class: "contentTextWrapper" },
                h("textarea", { class: "contentTextField", id: "content" })),
            h("div", { class: "contentButtonWrapper" },
                h("button", { class: "contentEditorButton", onClick: () => { this.send(); } }, "Submit"))));
    }
    send() {
        this.content = document.getElementById('content').value;
        this.excerpt = this.content.substring(0, 25) + "...";
        if (confirm("Submit   " + this.excerpt + "?") == true) {
            this.dataRef.set({
                data: this.content
            });
        }
        else {
            return;
        }
    }
}
