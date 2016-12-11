# Title: _toJSON.py
# Author: Steven Van Sant

# Descirption:
# Used for retrieving json
import json
import urllib

class get:
    with open("py/modules/__json__/class_modules.json") as data_file:
      _jsonData = json.load(data_file)

    def class_modules(self):
        return self._jsonData