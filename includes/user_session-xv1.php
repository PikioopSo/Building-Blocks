
<html>
    <head>
        <style type="text/css">
            #user-session-form{
                position: absolute; left: 36.5%; top: 2.5%;
            }
        </style>
    </head>
    <body>

<!-- [user session form] -->
        <form action="lib/pi-session.php" id="user-session-form" class="session-form" name="user-session-form">
            <label class="form-label" for="session-user-name">Please enter a session name.</label><br/>
            <input type="text" value="User's session name." id="session-user-name" class="form-input" name="session-user-name" title="session user name."/> <strong class="warning-minor"> ( Auto generated if left blank. )</strong><br/>
            <label class="form-label" for="user-email-address">E-mail updates?</label><br/>
            <input type="text" value="User's email address." id="user-email-address" class="form-input" name="user-email-address" title="user email."/> <strong class="warning-minor">( Not required. )</strong>

            <fieldset class="form-controls">
                <legend class="legend-label">Pi Reel Wizard</legend>
                <label class="form-label" for="project-options-list"></label>
                <input list="project-options" value="" id="project-options-list"/>
                <datalist id="project-options">
                </datalist>
            </fieldset>
        </form>

<!-- -->
        <fire-base data-get="$package.project_keys;" data-list="#project-options(~option.value(this + project),name(project));" id="walker-json" class="memory">
<?php
$session = require("lib/pi_session-xv-1.php");
?>
        </fire-base>

    </body>

</html>