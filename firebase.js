import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDx4ZqqqFa1RG3TDnsBaO20uFqKMwTOD2E",
  authDomain: "netflix-clone-506c9.firebaseapp.com",
  projectId: "netflix-clone-506c9",
  storageBucket: "netflix-clone-506c9.appspot.com",
  messagingSenderId: "750068328027",
  appId: "1:750068328027:web:5b1baf9aa8a47c54a1817e",
  databaseURL: "https://netflix-clone-506c9-default-rtdb.firebaseio.com/",
};

const app = initializeApp(firebaseConfig);

export default app;
