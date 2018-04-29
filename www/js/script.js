// inicio del codigo de index
function onLoad() {
	document.addEventListener("deviceready", onDeviceReady, false);
}
function onDeviceReady() {
	document.addEventListener("backbutton", onBackKeyDown, false);
}
function onBackKeyDown() {
    swal('Retornar');
    return false;
    $window.history.back();
};
// Si no tiene puntos que los ponga
if (!localStorage.puntosiniciales){
    localStorage.puntosiniciales = 80;
    swal("Has obtenido 80 puntos!", "Registrate para ponerlos en tu cuenta.", "success");
    };

  var config = {
    apiKey: "AIzaSyDZnvMzeELOE9Edf7xV0I57QMVPNMzZ8Uo",
    authDomain: "proyecto1-25a90.firebaseapp.com",
    databaseURL: "https://proyecto1-25a90.firebaseio.com",
    projectId: "proyecto1-25a90",
    storageBucket: "proyecto1-25a90.appspot.com",
    messagingSenderId: "511136041527"
  };
  firebase.initializeApp(config);

if (localStorage.puntosiniciales <= 0) {
  $.ajax({
    method: "PUT",
    url: "http://publify.com.mx/api.php/usuarios/"+usuarioID,
    data: {puntos:15}
  }).done(function( msg ) {});
};
var user = firebase.auth().currentUser;
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    user.providerData.forEach(function (profile) {
    // console.log("Sign-in provider: "+profile.providerId);
    // console.log("  Provider-specific UID: "+profile.uid);
    // console.log("  Name: "+profile.displayName);
    // console.log("  Email: "+profile.email);
    // console.log("  Photo URL: "+profile.photoURL);
  });
  } else {
    // No user is signed in.
  }
});
//función para limpiar los campos
function LimpiarCampos(){
  document.registro.nombre.value="";
  document.registro.apellido.value="";
  document.registro.nacimiento.value="";
  document.registro.email.value="";
  document.registro.contrasena.value="";
  document.registro.nombre.focus();
}
