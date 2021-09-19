const db = firebase.firestore();
const auth = firebase.auth();
auth.onAuthStateChanged((user)=>{
    if(!user){
        location.replace("../index.html")
     }
    })
const logout=()=>{
    firebase.auth().signOut().then(() => {
        location.replace("../index.html")
      }).catch((error) => {
        // An error happened.
      });
}

const gamePlay =()=>{
    auth.onAuthStateChanged((user)=>{
        db.collection("PlayerData").doc(user.uid).get().then((doc) => {
            var userLevel = doc.data().level;
            if(user){
            console.log(userLevel)
            if(userLevel==undefined){
                location.replace(`./level1.html`)
            }
            else{
                location.replace(`./level${userLevel}.html`)
            }
        }
        })
        
        
        })
}

let popped = 0;
document.addEventListener('mouseover', function(e){
    if (e.target.className === "balloon"){
                e.target.style.backgroundColor = "#ededed";
                e.target.textContent = "POP!";
                popped+=10
                console.log(popped)
                removeEvent(e);
                checkAllPopped();
    }   
});

function removeEvent(e){
    e.target.removeEventListener('mouseover', function(){
        
    })
};

function checkAllPopped(){
    if (popped === 24){
        console.log('all popped!');
        let gallery = document.querySelector('#balloon-gallery');
        let message = document.querySelector('#yay-no-balloons');
        gallery.innerHTML = '';
        message.style.display = 'block';
    }
};