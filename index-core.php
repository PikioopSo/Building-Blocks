<!doctype html>
<html>
  <head>

<!--
  Author: Steven Van Sant
-->

    <meta charset="utf-8"></meta>
    <meta name="description" content="Pi reel."></meta>
    <meta name="keywords" content="computer science, cgi, json, json markup, web, social network, open source"></meta>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

    <link rel="stylesheet" href="/stylesheets/main.css" type="text/css"></link>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">

    <link rel="icon" type="image/png" href="img/pireel-icon.png"></link>

<style id="styles-1" type="text/css">
/* [pi reel] */
#header-bar{
  position: fixed; top: 0%; left: 0%; width: 100%; height: 11%; padding: 0px;
  background-color: rgba(78,78,78,1);
}
#pireel-menu{
    margin-left: 2vw;
}
#animator-canvas{
  position: fixed; top: 11%; left: 0%; width: 100%; height: 65%;
  background-color: rgba(255,255,255,1);
}
#animator-editor{
  position: fixed; top: 77%; left: 0%; width: 100%; height: 22%;
  background-color: rgba(78,78,78,1);
}
#canvas-tools{
  position: fixed; top: 11%; left: 79.5%; width: 10%; height: 9vw;
  background: rgb(165,165,178); border-radius: 0% 0% 0% 100%; border: rgb(78,78,78) 2px outset;
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
@media screen and (min-width: 800px){
  .fit-large{
    height: 90%; padding-left: .5vw; padding-right: .25vw;
  }
  .square-large{
    height: 78%;
  }
  
}
</style>

    <!--<script async='true' src="js/jx.js"></script>-->
    <script async='true' src="node_modules/x-tag/dist/jx.js"></script>

    <title>Pi Reel by Mozilla Club Omaha</title>
  </head>

  <body>
<!-- [json-header] -->
  <j-header id="header-bar" class="container" name="top-toolbar">
    <img id="pireel-btn" class="fit-large circle-icon" name="pireel-btn"
      src="img/pireel-icon.svg" alt="Pi Reel Menu" title="Pi Reel Menu"></img>
    <j-menu id="pireel-menu" class="index-tray" name="pireel-menu">
      <j-el id="add-project" class="btn" name="create-project">
        <j-text id="new_project" class="btn-label" name="new_project" title="New Project"> New Project</j-text>
      </j-el>
    </j-menu>
  </j-header>

<!-- [json-canvas] -->
  <json-canvas id="animator-canvas" class="container" name="animator-viewer">
      <svg id="hello-canvas" class="canvas" name="welcome-screen">
        <text class="sheet">
          <tspan class="paragraph dark-text"
            x="2vw" y="1.5vw">Log in to begin animating</tspan>
          <tspan class="paragraph dark-text"
            x="8vw" y="3vw">or</tspan>
          <tspan class="paragraph dark-text"
            x="3vw" y="4.5vw">use our guest account.</tspan>
        </text>
      </svg>
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

<!-- [user data] -->
    <?php 
    print "<strong>Welcome guest user: </strong>";
    ?>

    <j-line id="media_feed" class="paragraph" name="media_feed">Media Feed</j-line>
  </j-menu>

<!-- [console form] -->
  <json-form id="animator-editor" class="container" name="animator-editor">
    <j-menu id="editor-menu" class="menu" name="editor-menu">
      <j-switch id="editor-hide" class="fa fa-close" name="hide-editor"></j-switch>
      <j-switch id="font-selections" class="fa fa-font" name="font-menu"></j-switch>
      <j-menu id="gui-selections" class="fa fa-bars fa gui-menu" name="gui-menu"></j-menu>
      <j-selector id="mode-selector" class="fa fa-cogs" name="editor-modes"></j-selector>
      <j-menu id="editor-tools" class="fa fa-wrench" name="default45"></j-menu>
      <j-el id="find-selections" class="fa fa-search" name="find-menu">
        <j-el id="line-index" class="index" name="line-index">
          <j-text id="default49" class="default49" name="default49">0 / 4 </j-text>
        </j-el>
      </j-el>
    </j-menu>

    <j-viewport id="writer-viewport" class="container" name="writer-viewport">
      <j-scroll id="text-scrollbar" class="block lite-text" name="text-scrollbar">
        <j-switch id="scroll-up" class="btn-small fa fa-chevron-up"></j-switch>
        <j-switch id="writer-addLine" class="btn-small fa fa-plus-square"></j-switch>
        <j-switch id="writer-removeLine" class="btn-small fa fa-minus-circle"></j-switch>
        <j-switch id="scroll-down" class="btn-small fa fa-chevron-down"></j-switch>
      </j-scroll>
      <j-viewport id="editor-viewport" class="container" name="editor-viewport">
        <json-editor id="text-editor" class="sheet" name="text-editor">
          <e-ln class="dark-text"> <e-key>...</e-key><e-txt>Welcome to Pi Reel.</e-txt></e-ln>
          <e-ln class="dark-text"> <e-key>...</e-key><e-txt>This console is an interface to help you create your animations.</e-txt></e-ln>
          <e-ln class="dark-text"> <e-key>...</e-key><e-txt>Please, join our community at, www.kip.forums.org/mozillaclubs/omahaNE.</e-txt></e-ln>
          <e-ln class="dark-text"> <e-key>...</e-key><e-txt>Thank you for visiting, Pi Reel.</e-txt></e-ln>
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

<!-- [json-style] -->
    <json-style id="animator-player-styles" class="memory">
      <json-css id="player-reel-jcss" class="memory"></json-css>
    </json-style>

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
