// [Session]
<?php 
    ini_set('session.gc_maxlifetime',60);
    ini_set('session.gc_probability',100);
    session_start();
    $_date = new DateTime();

    // Require PHP files
    include "includes/php/meta.php";
    
    // Global variables
    global $_meta_Require;
    global $_meta_Library;

    print "<!doctype HTML>";
    print "<html>";

    // Check to see if user is posted to this page.
    if(isset($_POST["user_name"])){
        $_SESSION["username"] = $_POST["user_name"];
        print "<head>";
        include "includes/html/animator-head.html";
        print "<title>".$_SESSION["username"]."</title></head><body>";

        // json generation
        print meta\_meta_Require();
        print meta\_meta_Library();
        include "includes/html/animator-body.html";
        print "</body></html>";
    }
    else{
      // json generation
      print "<head>";
      include "includes/html/animator-head.html";
 
      print meta\_meta_Require();
      print meta\_meta_Library();

      print "<title>Welcome</title></head><body>";
      include "includes/html/user-form.html"; 
      print "</body></html>";
    }    

    

?>
