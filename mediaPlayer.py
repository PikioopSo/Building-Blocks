# Title: index.py
# Author: Steven Van Sant

# Descirption:
# Loads Media Player Page

# Import built in functions
import urllib;
from HTMLParser import HTMLParser;
import os;
import os.path;
import re;
import pprint;

# Import custom methods
import py
import py._base;

#Create Media Player/Editor Class
class mediaPlayer:

    classJson = py._base.base().classJson();

    templateJson = py._base.base().templateJson();
    HTMLTemplate = open("projects/animator_player.html");

print py._base.base().getJTMLComponent("projects/animator_player.html")