const db = firebase.firestore();
const auth = firebase.auth();


var provider = new firebase.auth.GoogleAuthProvider();

const googleLogin=()=>{
    firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
        var user = result.user;
    setTimeout(() => {
        location.replace("../html/game.html")    
    }, 2000);
      
    }).catch((error) => {
    });

}

const logIn =()=>{
    googleLogin();
}

firebase.auth().onAuthStateChanged((user)=>{
    if(user){
     
    }
})
