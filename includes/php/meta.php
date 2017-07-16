<?php
/* **********
    Developer: Steven Van Sant
********** */

namespace meta;

function _meta_Require($metaJSON = "includes/json/meta.json") {
    // Needs to check url parameter first
    $_req = file_get_contents($metaJSON);
    // not sure what decode is doing for me here
    $_decode_ = json_decode($_req, true);
    $_rt = print "<fire-base class='memory' id='meta-JSON'>".$_req."</fire-base>";
}

function _meta_Library($libraryJSON = "lib/lib.json"){
    // Needs to check url parameter first
    $_req = file_get_contents($libraryJSON);
    // not sure what decode is doing for me here
    $_decode_ = json_decode($_req, true);
    $_rt = print "<fire-base class='memory' id='lib-JSON'>".$_req."</fire-base>";
};
