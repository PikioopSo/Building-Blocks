<?php
	session_start();

// $Uname = $_POST["username"];
// $Fname = 'user/'.$Uname.'/'.$_POST["username"].".html";
// $Email = $_POST["email"];

$db = new PDO('mysql:host=localhost;dbname=users','root','');

	// Check to see if the user's file exists
//	if(file_exists($Fname)==true){

//		$_SESSION["username"] = 0;
//		$hd = header( 'Location: index.php' );

//	}
//	else{

//		mkdir("user/".$Uname);
//		$_SESSION["username"] = $Uname;
//		$newUSER = fopen($Fname,"wb");
		$preferences = file_get_contents("includes/html/preferences.html");
//		$insert_new_user = "INSERT INTO `users` (`id`, `usernames`, `email`) VALUES (NULL, '".$Uname."', '".$Email."')";

		print "<html><head>";
		include "includes/html/animator-head.html";
		print "</head><body>";

//		$newUSER = fwrite($newUSER, "<header><h1>Welcome, ".$Uname."</h1></header>".$preferences);
print "<header><h1>Welcome, Tester</h1></header>".$preferences;
//			if( $db->query($insert_new_user) ){
				
//			}
//			else{
				
//			}

		$qy = $db->query("SELECT * FROM users"); 
		while( $user = $qy->fetch() )
			{

			}

//	}

//	include $Fname;

?>
<!-- ========== [user-form] ========== -->
	<style type="text/css">
body{
    background-image: url(../img/fire_rollie.png);
    background-repeat: no-repeat;
    background-position: -80px -80px;
}


/* *************************[form menu and tray]************************* */
j-menu[data-tray="#form-nav-tray"]{

}
j-menu[data-tray="#form-nav-tray"] > j-tray:last-of-type{
    height: 75%;
    background-color: rgba(215,215,215,1);
}
j-menu[data-tray="#form-nav-tray"] j-ico{
    width: 2vw;
    height: 2vw;
}
nav.pireel-link > a{
    display: block;
    color: rgba(185,155,105,1)
}
body > j-header:first-child{
  height: 125px;
  background: rgba(68,68,68,.75);
}
j-header > img:first-child{
  height: 100%;
  float: left;
}
j-header > img + j-menu:first-of-type{
  float: left;
}
body > j-header + json-canvas:first-of-type{
  position: fixed;
  top: 125px;
  left: 0%; 
  width: 90%; 
  height: calc(100% - 300px);
  background-color: lightgrey;
}
j-header.tray{
  overflow: hidden;
}
j-header > .logo:first-of-type{
  padding-left: 2.125%;
  padding-right: 2.125%;
}
j-header > j-menu:last-of-type{
  margin-right: 5px;
  width: 150px;
}
j-header > j-menu:last-of-type{
  margin-right: 5px;
  width: 150px;
}
j-header > j-menu[data-class="callapsed-class"]{
  margin-left: 5px;
  width: 200px;
}

/* [menu component styles] */
j-aside.right-wall{
  top: 125px;
  height: calc(100% - 300px);
}
j-menu > j-ico.fa, j-menu > j-switch.fa,j-menu > j-min.fa{
  margin-left: .35%;
  font-size: 1.35vw;
}
j-menu > j-ico.fa:hover, j-menu > j-switch.fa:hover, j-menu > j-min.fa:hover{
  background-color: rgba(255,255,125,1);
}

/* [console text lines] */
e-ln{
  padding: 1px;
  border: none;
}
input[is="e-key"]{
  height: 100%;
  top: 0px;
  padding: 0%;
  margin: 0%;
  border: .5px solid black;
}
input[is="e-key"]:hover{
  outline: orange 1px solid;
}
input[is="e-key"]:focus{
  outline: skyblue 1px solid;
}
input[is="e-txt"]{
  height: 100%;
  left: 1.1%;
  width: 82%;
  padding: 0% 0% 0% .5%;
  margin: 0%;
  border: .5px solid black;
  background-color: rgba(115,130,115,.85);
  color: rgb(245,215,210);
}
input[is="e-txt"]:hover{
  outline: orange 1px solid;
}
input[is="e-txt"]:focus{
  outline: skyblue 1px solid;
}

.display{
  background-color: rgba(150,150,150,1);
}
j-ico.add-project-btn{
  width: auto;
  height: auto;
  padding: 2%;
  margin: 3%;
}

/* [editor form viewport] */
j-viewport[id = "editor-viewport"]{
  position: absolute; 
  top: 0%; 
  left: 0%;
  width: 100%; 
  height: 97%; 
  background-color: rgba(255,255,255,.5);
}

j-resize.pireel-editor-resizer-1{
  position: fixed; 
  top: calc(100% - 155px);
  left: 16%;
  z-index: 20;
  width: 16px;
  height: 10px;
  border-radius: 25%;
}
j-resize.pireel-editor-resizer-2{
  position: fixed; 
  top: calc(100% - 155px);
  left: 92.75%;
  z-index: 20;
  width: 18px;
  height: 10px;
  border-radius: 25%;
}

ico-slider[data-bind = "e-key"]{
  position: fixed;
  top: calc(100% - 138px);
  left: 92.75%;
  z-index: 20;
  width: 18px;
  height: 18px;
  padding-top: 30px;
  border-top: red 1px solid;
  background-position: 0px 10px;
}
ico-slider[data-bind = "e-text"]{
  position: fixed;
  top: calc(100% - 138px);
  left: 15.85%;
  z-index: 20;
  width: 18px;
  height: 18px;
  padding-top: 30px;
  border-top: red 1px solid;
  background-position: 0px 10px;
}

/* [pireel text editor] */
json-form{
  position: fixed; 
  top: calc(100% - 175px); 
  left: 0%; 
  width: 100%; 
  height: 175px;
  background-color: rgba(78,78,78,.75);
}
form[is="json-editor"]{
  position: absolute; 
  top: 0%; 
  left: 0%; 
  width: 96%; 
  height: 91%; 
  background-color: rgba(255,255,255,.125); 
  background-color: none;
}
json-form > j-menu:first-child{
  position: absolute; 
  top: 0%; 
  left: 0%; 
  width: 97%; 
  padding:  .125% 0% 0% 1.5%;
  margin: 0% 0% 0% .5%;
  height: 17%;
  background-color: rbga(255,255,255,.85);
  overflow: visible;
}
json-form > j-tray + j-viewport{
  position: absolute; 
  top: 20%; 
  left: 2%; 
  width: 95.5%; 
  height: 80%;
}
json-editor > e-ln{
  background-color: rgba(255,255,255,.25);
}
j-ico[data-item = "#editor-console-modes-menu"]{
  position: fixed;
  left: -0.125%;
  top: calc(100% - 138px);
}
j-ico[data-item = "#editor-console-preferences-menu"]{
  position: fixed;
  left: -0.125%;
  top: calc(100% - 108px);
}

/* [new menu] */
new-menu{
  position: relative;
  display: inline-block;
  margin: 15px;
  box-sizing: border-box;
  padding: 5px;
  border-radius: 100%;
  float: right;
  background-color: rgba(255,255,255,.75);
}

/* [temp css] */
#canvas-tools{
  position: fixed; 
  top: 125px; 
  left: 79.5%; 
  width: 10%; 
  height: 9vw;
  border-radius: 0% 0% 0% 100%;
}
#text-scrollbar{
  position: absolute; 
  top: 7.5%; 
  left: 97%; 
  width: 1.3vw; 
  height: auto; 
  z-index:1;
  background: rgba(255,255,255,0);
}

/* [media] */
@media screen and (max-width: 1760px){

}
@media screen and (max-width: 1960px){

}
@media screen and (max-width: 2160px){

}
@media screen and (min-width: 2160px){

}
</style>

	

	</body>
</html>
