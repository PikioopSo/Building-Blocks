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
  **********[ Authorship Notes ]**********
  Author: Steven Van Sant
-->

    <!-- [meta data] -->
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

    <script type="text/javascript" src="node_modules/x-tag/dist/x-tag-core.js"></script>
    <title>Pi Reel by Mozilla Omaha Club</title>
  </head>

  <body>
    <!-- *****[j-header]**** -->
    <j-header id="header-bar" class="tray" name="top-toolbar">
      <img id="pireel-btn" class="logo inline-block" name="pireel-btn"
        src="img/logos/pireel-05.png" alt="Pi Reel Menu" title="Pi Reel Logo"></img>

      <!-- [projects] -->
      <j-menu id="pireel-project-menu" class="index-tray" name="pireel-project-menu" title="Project Menu">
        <j-ico id="add-project" class="btn add-project-btn" name="create-project">
          <j-text id="new_project" class="btn-label" name="new_project" title="New Project"> New Project</j-text>
        </j-ico>
      </j-menu>

      <!-- [play menu] -->
      <j-menu id="header-play-menu" name="header-play-menu" data-class="callapsed-class" data-tray="#util-play-tray" data-active="true" title="Pi Reel Play Menu">
        <j-ico id="header-playbackward" class="fa fa-backward"></j-ico>
        <j-ico id="header-pause" class="fa fa-pause-circle-o" title=""></j-ico>
        <j-ico id="header-play" class="fa fa-play-circle-o"></j-ico>
        <j-ico id="header-playforward" class="fa fa-forward"></j-ico>
      </j-menu>
      <j-tray id="util-play-tray" class="memory"></j-tray>

      <!-- [header util menu] -->
      <j-menu id="util-header-menu" class="flt-right" name="util-header-menu" data-tray="#util-menu-tray" data-active="true" title="Pi Reel User Menu">
        <j-ico id="doc-info" class="fa fa-question-circle-o" name="doc-info"></j-ico>
        <j-ico id="appmode-selector" class="fa fa-cogs" name="editor-modes"></j-ico>
        <j-ico id="app-tools" class="fa fa-wrench" name="editor-tools"></j-ico>
        <j-ico id="header-hide" class="fa fa-sign-out" name="hide-header"></j-ico>
      </j-menu>
      <j-tray id="util-menu-tray" class="memory"></j-tray>
    </j-header>

    <!-- [json-canvas] -->
    <json-canvas id="animator-canvas" class="container" name="animator-viewer">
  
    </json-canvas>

    <!-- [canvas tools] -->
    <j-menu id="canvas-tools" class="display" name="canvas-tools">
      <new-menu class="menu-title bg-white">Tray</new-menu>
    </j-menu>

    <!-- *****[user menu]***** -->
    <j-aside id="pireel-user" class="right-wall display" name="pireel-user">
      <section id="mediaplayer-label" class="aside" name="default76">
        <button class="fa fa-user-circle-o"></button>
      </section>
      <j-line id="media_feed" class="paragraph bg-white" name="media_feed">Data Feed</j-line>
      <j-table class="block">No Data Available</j-table>
    </j-aside>

    <!-- *****[key definition console]***** -->
    <json-form id="animator-editor" name="animator-editor" active="true">
  
      <!-- ****[console editor menu]**** -->
      <j-menu id="editor-menu" class="menu" name="editor-menu" data-tray="#editor-menu-tray" data-selectors="j-ico" data-selected="~.editor-icons;" data-hidden="memory" title="Editor user menu">
        <j-ico id="mode-selector" class="fa fa-cogs editor-icons" name="editor-modes" data-item="#editor-console-modes-menu" title="Macro selection tool"></j-ico>
        <j-ico id="editor-preferences" class="fa fa-wrench editor-icons" name="editor-preferences" data-item="#editor-console-preferences-menu" title="Console style and layout"></j-ico>
        <j-switch id="get-keyframesConsole" class="fa fa-arrow-circle-o-right" name="get-keyframesConsole" title="Switch to keyframe console" style="float: right; margin-right: 1.25%;"></j-switch>
        <j-min id="editor-hide" class="fa fa-arrow-circle-o-down" name="hide-editor" title="Snap console to the wall" style="float: right; margin-right: 1.25%;"></j-min>
      </j-menu>
      <j-tray id="editor-menu-tray" class="memory">
        <menu-modes id="editor-console-modes-menu" class="user-editor-menus">
          <form>
            <fieldset>
              <strong class="block">Currently under construction.</strong>
              <p>
                The modes menus gives you access to the your library or third party library "macro" components.
              </p>
            </fieldset>
          </form>
        </menu-modes>
        <menu-preferences id="editor-console-preferences-menu" class="user-editor-menu">
          <form>
            <fieldset>
              <strong class="block">Currently under construction.</strong>
              <p>
                The preferences menu gives you access to the layout and styling choices of the editor.
              </p>
            </fieldset>
          </form>
        </menu-preferences>
      </j-tray>
  
      <!-- ****[editor component]**** -->
      <j-viewport id="writer-viewport" class="container" name="writer-viewport">
  
        <!-- ****[textarea scrollbar]**** --> 
        <j-scroll id="text-scrollbar" class="block dark-text" name="text-scrollbar">
          <j-ico id="scroll-up" class=" fa fa-chevron-up" title="Add line"></j-ico>
          <j-ico id="writer-addLine" class="fa fa-plus-square" title="Add line"></j-ico>
          <j-ico id="writer-removeLine" class="fa fa-minus-circle" title="Add line"></j-ico>
          <j-ico id="scroll-down" class="fa fa-chevron-down" title="Scroll down"></j-ico>
        </j-scroll>

        <!-- ****[textarea viewport]**** -->
        <j-viewport id="editor-viewport" name="editor-viewport" data-scroll="#json-editor">
          <j-resize id="editor-resizer-1" class="pireel-editor-resizer-1 bg-pireOrange ico-slider-1" data-drag="divider" title="Resize column divider"></j-resize>
          <ico-slider class="iconfind-1" data-bind="e-key" title="Macro key help"></ico-slider>
          <ico-slider class="iconfind-1" data-bind="e-text" title="Macro definition help"></ico-slider>
          <j-resize id="editor-resizer-2" class="pireel-editor-resizer-2 bg-pireOrange" data-drag="endpoint" title="Resize end column"></j-resize>
          <form is="json-editor" id="text-editor" name="text-editor">
            <e-ln class="dark-text"><input class="e-key" list="keyDefs" is="e-key"><input type="text" class="e-txt" contenteditable="true" is="e-txt"></e-ln>
            <e-ln class="dark-text"><input class="e-key"  list="keyDefs" is="e-key"><input type="text" class="e-txt" contenteditable="true" is="e-txt"></e-ln>
            <e-ln class="dark-text"><input class="e-key" list="keyDefs" is="e-key"><input type="text" class="e-txt" contenteditable="true" is="e-txt"></e-ln>
            <e-ln class="dark-text"><input class="e-key" list="keyDefs" is="e-key"><input type="text" class="e-txt" contenteditable="true" is="e-txt"></e-ln>
          </form>
        </j-viewport>
      </j-viewport>
    </json-form>

    <!-- *****[keyframe console]***** -->
    <json-form id="keyframe-editor" class="memory" name="keyframe-editor" active="false">
      <j-menu id="keyframe-menu" class="menu" name="keyframe-menu">
        <j-el id="hide-kframe" class="fa fa-close" name="hide-keyframe"></j-el>
        <j-el id="keyframe-edit-menu" class="fa fa-magic" name="default74"></j-el>
      </j-menu>
      <j-input id="frame-sheet" class="keyframes" name="keyframe-sheet">
        <form id="frames" class="display span-window">
          <input type="range" id="main-frame" class="snug-window" min="0" max="100" value="0"/>
          <j-menu id="keyframe-scrollbar" class="scroll" name="scrollbar">
            <j-switch id="keyframe-add" class="fa fa-plus-square" name="scrollbar"></j-switch>
            <j-switch id="keyframe-remove" class="fa fa-minus-circle" name="scrollbar"></j-switch>
          </j-menu>
        </form>
      </j-input>
    </json-form>

    <!-- **********[php]
    <?php
      if($_SESSION["isLogged"] == "false"){
        include "includes/html/user-form-vx1.html";  
  }
      else{
        include "includes/html/user-logout-vx1.html";
  }
    ?>
    ********** -->

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

    <!-- [Lists] -->
    <datalist id="keyDefs" is="j-data">
      <option value="pireel"></option>
    </datalist>
  </body>
</html>
