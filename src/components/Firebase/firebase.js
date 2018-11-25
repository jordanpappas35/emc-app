import app from 'firebase/app';
import 'firebase/auth';

const PROD_CONFIG = {
  apiKey: "AIzaSyC-_mOY5kTtbWa7MVQV8oCNFvvoAvjNXJo",
  authDomain: "emc-app-72902.firebaseapp.com",
  databaseURL: "https://emc-app-72902.firebaseio.com",
  projectId: "emc-app-72902",
  storageBucket: "emc-app-72902.appspot.com",
  messagingSenderId: "642855175916"
};

const DEV_CONFIG = {
  apiKey: "AIzaSyCd4Tyn_5d69h9neR24S-Q2GjKTOyKxdm4",
  authDomain: "emc-app-dev.firebaseapp.com",
  databaseURL: "https://emc-app-dev.firebaseio.com",
  projectId: "emc-app-dev",
  storageBucket: "emc-app-dev.appspot.com",
  messagingSenderId: "294935446673"
};

const CONFIG = process.env.NODE_ENV === 'production' ? PROD_CONFIG : DEV_CONFIG;

class Firebase {
  constructor() {
    app.initializeApp(CONFIG);
    this.auth = app.auth();
  }

  registerUser(email, password) {
    return this.auth.createUserWithEmailAndPassword(email, password);
  }

  logIn(email, password) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  logOut() {
    return this.auth.signOut();
  }

  changePassword(password) {
    return this.auth.currentUser.updatePassword(password);
  }

  resetPassword(email) {
    return this.auth.sendPasswordResetEmail(email);
  }
}

export default Firebase;
