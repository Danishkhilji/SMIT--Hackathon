const db = firebase.firestore();
const auth = firebase.auth();

let popped = 0;
var life = 3;
var red = 4;
var blue = 3
var yellow = 2


auth.onAuthStateChanged((user) => {
    if (user) {
        document.addEventListener('mouseover', function (e) {
            if (e.target.className === "balloon" && red !== 0) {
                if (red == 1) {
                    document.getElementById("red").style.display = "none"
                    document.getElementById("blue").style.display = "block"
                }
                if (e.target.id === "1" && red !== 0) {
                    e.target.style.backgroundColor = "#ededed";
                    e.target.textContent = "POP!";
                    e.target.className = "done";
                    popped += 10
                    document.getElementById("score").innerHTML = `<h4>Score : ${popped} <h4>`
                    removeEvent(e);

                    red--;
                }
                else {
                    if (life !== 0) {
                        e.target.style.backgroundColor = "#ededed";
                        e.target.textContent = "Opps!";
                        e.target.className = "done";
                        life--;
                        removeEvent(e);
                    }
                    else {
                        alert("Game over")
        
                        db.collection("PlayerData").doc(user.uid).update({
                            score: popped
                        });
                        setTimeout(() => {
                            location.replace("./level1.html")
                        }, 2000);
                    }
                }
            }
            else if (e.target.className === "balloon" && blue !== 0) {
                if (blue == 1) {
                    document.getElementById("blue").style.display = "none"
                    document.getElementById("yellow").style.display = "block"
                }
                if (e.target.id === "2" && blue !== 0) {
                    e.target.style.backgroundColor = "#ededed";
                    e.target.textContent = "POP!";
                    e.target.className = "done";
                    popped += 10
                    document.getElementById("score").innerHTML = `<h4>Score : ${popped} <h4>`

                    removeEvent(e);
                    
                    blue--;
                }
                else {
                    if (life !== 0) {
                        e.target.style.backgroundColor = "#ededed";
                        e.target.textContent = "Opps!";
                        e.target.className = "done";
                        life--;
                    
                        removeEvent(e);
                    }
                    else {
                        alert("Game over")
                        db.collection("PlayerData").doc(user.uid).update({
                            score: popped
                        });
                        setTimeout(() => {
                            location.replace("./level1.html")
                        }, 2000);
        
                    }
                }
            }
            else if (e.target.className === "balloon") {
                if (yellow !== 0) {
                    if (e.target.id === "3" && yellow !== 0) {
                        e.target.style.backgroundColor = "#ededed";
                        e.target.textContent = "POP!";
                        e.target.className = "done";
                        popped += 10
                        document.getElementById("score").innerHTML = `<h4>Score : ${popped} <h4>`
                        
                        removeEvent(e);
                        yellow--;
                    }
                    else {
                        if (life !== 0) {
                            e.target.style.backgroundColor = "#ededed";
                            e.target.textContent = "Opps!";
                            e.target.className = "done";
                            life--;
                            
                            removeEvent(e);
                        }
                        else {
                            alert("Game over")
                            db.collection("PlayerData").doc(user.uid).update({
                                score: popped
                            });
                            setTimeout(() => {
                                location.replace("./level1.html")
                            }, 2000);
                        }
                    }
                }
                else {
                    db.collection("PlayerData").doc(user.uid).update({
                        score: popped,
                        level: 1
                    }); setTimeout(() => {
                        location.replace("./level2.html")
                    }, 2000);
                }
            }
        });

    }
})




function removeEvent(e) {
    e.target.removeEventListener('mouseover', function () {

    })
};

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