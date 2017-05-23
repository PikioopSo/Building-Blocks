<?php
$w = fopen("users/walker.json", "r") or die("Unable to open file!");
$val = fread($w,filesize("users/walker.json"));

echo $val;
fclose($w);

?>