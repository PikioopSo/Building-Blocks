# Title: _toJSON.py
# Author: Steven Van Sant

# Descirption:
# Used for serializing JTML strings

# Import classes
import json;
import re;
from HTMLParser import HTMLParser;

# Create a JTMLParser class
class JTMLParser(HTMLParser):
    def handle_starttag(self, tag, attrs):
        print 'hi';
        if tag == "x-base":
            removeSpacingA = re.sub(r'\s+(?=\w+)',"",attrs[2][1]);
            removeSpacingB = re.sub(r'\s+(?=\w+\:)',"",removeSpacingA);
            
            print removeSpacingB;
            return removeSpacingB;
        else:
            tag;

    def handle_data(self, data):
        return "Encountered some data  :", data;
