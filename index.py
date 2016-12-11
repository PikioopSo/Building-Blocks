# Title: index.py
# Author: Steven Van Sant

# Descirption:
# Loadss Home Page

# Import built in functions
import urllib
import HTMLParser
import os
import os.path

# Import custom methods
import py._base

class _index:

    def getIndexPage(self):
        if os.path.isfile("index.html"):
            with open("index.html","w") as html_file:
                return html_file

    modules = py._base.base().json()

print _index().modules;
print _index().getIndexPage();