// Configuração do Firebase de seu aplicativo
//ADICIONE OS LINKS DO FIREBASE AQUI
/*const firebaseConfig = {
    apiKey: "AIzaSyAWI7P4HGgSojYJ8d6a8frEtdTe5InvV8k",
    authDomain: "app-vamos-conversar-11788.firebaseapp.com",
    projectId: "app-vamos-conversar-11788",
    storageBucket: "app-vamos-conversar-11788.appspot.com",
    messagingSenderId: "1038897739241",
    appId: "1:1038897739241:web:88fbb520a171266bd1c778"
  };

// Inicialize o Firebase
firebase.initializeApp(firebaseConfig);*/

function addUser()
{
    user_name = document.getElementById("user_name").value;
    /*firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });*/
    /*
    Armazene o nome de usuário em localStorage
    Programe window.location para que o usuário possa navegar até a página chat_room.html.
    */
   localStorage.setItem("user_name", user_name);

   window.location = "chat_room.html";
}



