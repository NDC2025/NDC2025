import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAhrYj90-pt7fMEQjzHhNzoBm8AsfD2njI",
  authDomain: "ndc2025-6a79d.firebaseapp.com",
  projectId: "ndc2025-6a79d",
  storageBucket: "ndc2025-6a79d.firebasestorage.app",
  messagingSenderId: "153804251895",
  appId: "1:153804251895:web:573edb252ef96d4bcda9f2"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth()
const db = getFirestore()
const user = auth.currentUser;
if (user !== null) {
  const displayName = user.displayName;
  const email = user.email;
  const uid = user.uid;
  const classe = user.classe
}

const querySnapshot = await getDocs(collection(db, "Equipe"));
querySnapshot.forEach((doc) => {
  let liste = document.createElement("li");
  let equipe = document.createElement("button");
  equipe.classList.add("liste-buttton");
  equipe.innerHTML = doc.id;
  liste.appendChild(equipe);
  document.getElementById("liste-equipe").appendChild(liste);
  //document.getElementById("liste-equipe").appendChild(document.creatElement("li").appendChild(document.creatEkement("p").innerHTML = doc.id));
});


