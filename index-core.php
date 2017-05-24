<!-- [Session] -->
<?php 
ini_set('session.gc_maxlifetime',60);
ini_set('session.gc_probability',100);
session_start();

$_date = new DateTime();
// Check to see if user is posted to this page.
    if($_POST["user_name"]){
        if($_POST["user_name"] != "Pi Alpha"){
            print "User name must Pi Alpha";
        }
        else{
            $_SESSION["username"] = $_POST["user_name"];
            $_SESSION["isLogged"] = "true";
        }
    }

// Check to see if user is logged in.
    if($_POST["isLogged"]){
      $_SESSION["username"] = "New Visitor";
      $_SESSION["isLogged"] = "false";
    }

// Check to see if user is logg on.
    if($_SESSION["isLogged"] == "true"){
        $_SESSION["date"] = $_date->format('m/d/Y');
    }
    else{
        $_SESSION["username"] = "New Visitor";
        $_SESSION["date"] = $_date->format('m/d/Y');
        $_SESSION["isLogged"] = "false";
        $_SESSION["count"] = 0;
    }

// Check session count.
    if($_SESSION["count"] < 1){
        $_SESSION["load"] = "true";
        $_SESSION["count"] = $_SESSION["count"]+1;
        $_SESSION["reload"] = "false";
        }
    else if($_SESSION["count"] > 1){
        $_SESSION["reload"] = "true";
        $_SESSION["count"] = $_SESSION["count"]+1;
    }
?>

<!doctype html>
<html>
  <head>

<!--
  Author: Steven Van Sant
-->

    <meta charset="utf-8"></meta>
    <meta name="description" content="Pi reel."></meta>
    <meta name="keywords" content="animation, cgi, engineering, science, vr"></meta>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

    <link rel="stylesheet" href="css/styles.css" type="text/css"></link>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <link rel="stylesheet" href="https://code.cdn.mozilla.net/fonts/fira.css">

    <link rel="icon" type="image/png" href="img/pireel-icon.png"></link>

<!-- [css] -->
<style type="text/css">
body > j-header:first-child{
  height: 125px;
  background: rgba(68,68,68,1);
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
  height: 65%;
  background-color: lightgrey;
}
j-header.tray{
  overflow: hidden;
}

j-menu.right-wall{
  top: 125px;
  height: calc(100% - 335px);
}

.display{
  background-color: rgba(150,150,150,1);
}


#canvas-tools{
  position: fixed; 
  top: 125px; 
  left: 79.5%; 
  width: 10%; 
  height: 9vw;
  border-radius: 0% 0% 0% 100%;
}



#animator-editor{
  position: fixed; top: 77%; left: 0%; width: 100%; height: 22%;
  background-color: rgba(78,78,78,1);
}
#writer-viewport{
  position: absolute; top: 20%; left: 0%; width: 45.5%; height: 80%;
}
#editor-viewport{
  position: absolute; top: 0%; left: 0%; width: 100%; height: 97%;
}
#text-editor{
  position: absolute; top: 0%; left: 0%; width: 96%; height: 91%;
  background: skyblue;
}
#text-scrollbar{
  position: absolute; top: 17%; left: 97%; width: auto; height: auto; z-index:1;
  background:  rgb(65,65,65);
}
#keyframe-editor{
  position: absolute; top: 20%; left: 46%; width: 50%; height: 80%;
  background: lightgrey;
  display: block;
}
#keyframe-sheet{
  position: absolute; top: 0%; left: 0%; width: 100%; height: 100%;
  background: white;
  display: block;
}
#keyframe-menu{
  position: absolute; left: 46%;
}
#frames{
  height: 30%;
}
#main-frame{
  top: 50%;
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

    <script type="text/javascript" src="node_modules/x-tag/dist/x-tag-core.js"></script>
    <title>Pi Reel by Mozilla Omaha Club</title>
  </head>

  <body>
<!-- [j-header] -->
  <j-header id="header-bar" class="tray" name="top-toolbar">
    <img id="pireel-btn" class="logo inline-block" name="pireel-btn"
      src="img/pireel-icon.png" alt="Pi Reel Menu" title="Pi Reel Menu"></img>

<!-- [projects] -->
    <j-menu id="pireel-menu" class="index-tray" name="pireel-menu">
      <j-el id="add-project" class="btn" name="create-project">
        <j-text id="new_project" class="btn-label" name="new_project" title="New Project"> New Project</j-text>
      </j-el>
    </j-menu>
  </j-header>

<!-- [json-canvas] -->
  <json-canvas id="animator-canvas" class="container" name="animator-viewer">

  </json-canvas>

<!-- [canvas tools] -->
  <j-menu id="canvas-tools" class="display" name="canvas-tools">
    <j-text class="menu-title">Tray</j-text>
  </j-menu>

<!-- [user menu] -->
  <j-menu id="pireel-user" class="right-wall display" name="pireel-user">
    <section id="mediaplayer-label" class="aside" name="default76">
      <button id="default78" class="fa fa-user-circle-o" name="default78"></button>
    </section>
    <j-line id="media_feed" class="paragraph" name="media_feed">Media Feed</j-line>
  </j-menu>

<!-- [console form] -->
  <json-form id="animator-editor" class="container" name="animator-editor">
    <j-menu id="editor-menu" class="menu" name="editor-menu">
      <j-selector id="mode-selector" class="fa fa-cogs" name="editor-modes"></j-selector>
      <j-menu id="editor-tools" class="fa fa-wrench" name="editor-tools"></j-menu>
      <j-switch id="editor-hide" class="fa fa-close" name="hide-editor"></j-switch>
    </j-menu>

    <j-viewport id="writer-viewport" class="container" name="writer-viewport">
      <j-scroll id="text-scrollbar" class="block dark-text" name="text-scrollbar">
        <j-switch id="scroll-up" class="btn-small fa fa-chevron-up"></j-switch>
        <j-switch id="writer-addLine" class="btn-small fa fa-plus-square"></j-switch>
        <j-switch id="writer-removeLine" class="btn-small fa fa-minus-circle"></j-switch>
        <j-switch id="scroll-down" class="btn-small fa fa-chevron-down"></j-switch>
      </j-scroll>

      <j-viewport id="editor-viewport" class="container" name="editor-viewport">
        <json-editor id="text-editor" class="sheet" name="text-editor">
          <e-ln class="dark-text"> <e-key>...</e-key><e-txt contenteditable="true"></e-txt></e-ln>
          <e-ln class="dark-text"> <e-key>...</e-key><e-txt contenteditable="true"></e-txt></e-ln>
          <e-ln class="dark-text"> <e-key>...</e-key><e-txt contenteditable="true"></e-txt></e-ln>
          <e-ln class="dark-text"> <e-key>...</e-key><e-txt contenteditable="true"></e-txt></e-ln>
        </json-editor>
      </j-viewport>
    </j-viewport>

    <j-menu id="keyframe-menu" class="menu" name="keyframe-menu">
      <j-el id="hide-kframe" class="fa fa-close" name="hide-keyframe"></j-el>
      <j-el id="keyframe-edit-menu" class="fa fa-magic" name="default74"></j-el>
    </j-menu>

    <j-viewport id="keyframe-editor" class="keyframes" name="keyframe-editor">
      <j-input id="frame-sheet" class="keyframes" name="keyframe-sheet">
        <form id="frames" class="display span-window">
          <input type="range" id="main-frame" class="snug-window" min="0" max="100" value="0"/>
          <j-menu id="keyframe-scrollbar" class="scroll" name="scrollbar">
            <j-switch id="keyframe-add" class="fa fa-plus-square" name="scrollbar"></j-switch>
            <j-switch id="keyframe-remove" class="fa fa-minus-circle" name="scrollbar"></j-switch>
          </j-menu>
        </form>
      </j-input>
    </j-viewport>
  </json-form>

<!-- [php -->
<?php
  if($_SESSION["isLogged"] == "false"){
    include "includes/html/user-form-vx1.html";  
  }
  else{
    include "includes/html/user-logout-vx1.html";
  }
?>

<!-- [SVG preload nodes]  -->
    <svg id="svgPreloadNode" class="memory" style="">
      <def></def>
      <g></g>
      <text id="text_node">
        <tspan x="0" y=""></tspan>
      </text>
      <circle></circle>
      <path></path>
      <polygon></polygon>
      <image></image>
    </svg>
  </body>
</html>
