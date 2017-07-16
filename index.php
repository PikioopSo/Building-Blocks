<?php 

    // ========== [ Session ] ==========
    ini_set('session.gc_maxlifetime',60);
    ini_set('session.gc_probability',100);
    session_start();
    $_date = new DateTime();
    
    // ========== [ Require PHP files ] ==========
    include "includes/php/meta.php";
    
    // ========== [ Global variables ] ==========
    global $_meta_Require;
    global $_meta_Library;

    // Check to see if user is logged in.
    if(isset($_SESSION["username"])){
		if($_SESSION["username"] == 0){
			print "<strong style='position:fixed'>Please choose a different username.</strong>";
		}
		
	}
?>

<!doctype html>
<html>
  <head>
<!-- ========== [ Authorship Notes ] 
  Author: Steven Van Sant
========== -->

    <!-- ========== [meta data] ========== -->
    <meta charset="utf-8"/>
    <meta name="description" content="The Pi Reel Science and Engineering Animator." />
    <meta name="keywords" content="animation, cgi, engineering, science, vr" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <!-- ========== [Pi Reel CSS] ========== -->
    <link rel="stylesheet" href="css/styles.css" type="text/css" />
    <link rel="stylesheet" href="css/active.css" type="text/css" />
    <link rel="stylesheet" href="css/animate.css" type="text/css" />
    <link rel="stylesheet" href="css/index-landing.css" type="text/css" />
    
    <!-- ========== [third party css] ========== -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

    <!-- ========== [pi reel icon] ========== -->
    <link rel="icon" type="image/png" href="img/pireel-icon.png" />

    <!-- ========== [third party javascript] ========== -->
    <script type="text/javascript" src="node_modules/x-tag/dist/x-tag-core.js"></script>

    <!-- ========== [component scripts] ========== -->
    <script src="js/jx.js"></script>
	<script src="js/animator.js"></script>
	<script src="js/components.js"></script>
	<script src="js/components-colors.js"></script>
	<script src="js/components-jMenu.js"></script>
	<script src="js/syntax.js"></script>
	<script src="js/editor.js"></script>

    <title>Pi Reel Project</title>
  </head>

  <body>
    <!-- ========== [json generation] ========== -->
    <?php

    print meta\_meta_Require();
    print meta\_meta_Library();

    ?>

    <!-- ========== [log on form] ========== -->
    <?php

    include "includes/html/user-form.html";

	 ?>

  </body>
</html>
