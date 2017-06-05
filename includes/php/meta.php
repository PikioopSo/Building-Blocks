<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
namespace meta;

function _meta_Require($metaJSON = "includes/json/meta.json") {
    // Needs to check url parameter first
    $_req = file_get_contents($metaJSON);
    $_decode_ = json_decode($_req, true);
    $_rt = print "<fire-base class='memory' id='meta-JSON'>".$_req."</fire-base>";
}

function _meta_Library($libraryJSON = "lib/lib.json"){
    // Needs to check url parameter first
    $_req = file_get_contents($libraryJSON);
    $_decode_ = json_decode($_req, true);
    $_rt = print "<fire-base class='memory' id='lib-JSON'>".$_req."</fire-base>";
};

