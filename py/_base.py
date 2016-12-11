# Title: Base.py
# Author: Steven Van Sant

# Descirption:
# Used for understanding the contents of a html file written using JTML (JSON Text Markup Language)

# Import
import urllib;
import re;
import json;
import sqlite3;
from HTMLParser import HTMLParser;

# Import Custom



# Create base class
class base:

    def getJson(self,_url,_token):
        with open(_url,_token) as json_file:
            return json.load(json_file);

# getJTMLComponent is meant to ensure it is a jtml compatible html file.
    def getJTMLComponent(self, _url):
        _doc = "";
        if _url:
            return open(_url);
        else:
            return open("modules/error.html");

    def templateJson(self):
        with open("py/modules/__json__/template_modules.json","r") as json_file:
            return json.load(json_file);

    def classJson(self):
        with open("py/modules/__json__/class_modules.json","r") as json_file:
            return json.load(json_file);

# Create a JTMLParser class
class JTML(HTMLParser):
    def handle_starttag(self, tag, attrs):
        if tag == "x-base":
            removeSpacingA = re.sub(r'\s+(?=\w+)',"",attrs[2][1]);
            removeSpacingB = re.sub(r'\s+(?=\w+\:)',"",removeSpacingA);
            
            print removeSpacingB;
        else:
            tag;

    def handle_data(self, data):
        print "Encountered some data  :", data;
