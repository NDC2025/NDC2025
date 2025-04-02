import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";


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

onAuthStateChanged(auth, (user) => {
  if (user) {
    window.location.href = "controle.html";
  }
});

document.getElementById("btnconnexion").addEventListener("click", function () {
  const email = document.getElementById("email").innertHTML;
  const password = document.getElementById("password").innerHTML;
  signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
    const user = userCredential.user;
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorCode, errorMessage);
  });
})
