import Firebase from 'firebase';
let config = {
  databaseURL: 'https://react-raiseit.firebaseio.com/',
  projectId: 'react-raiseit',
};
let app = Firebase.initializeApp(config);
export  const db = app.database();