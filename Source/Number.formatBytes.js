/*
---
description: Utility method to format bytes into the most logical magnitude (KB, MB, or GB).

authors:
  - Jean-Nicolas Boulay (http://jean-nicolas.com/)

license:
  - MIT-style license

requires:
 - core/1.4

provides:
  - Number.formatBytes
...
*/

Number.implement({
    formatBytes: function(showUnit, toFixed) {
        var units = (typeOf(showUnit) == 'array' && showUnit.length == 9)?showUnit:['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
            showUnit = (typeOf(showUnit) == 'null')?true:false,
            toFixed = (typeOf(toFixed) == 'null')?2:toFixed,
            bytes = this,
            i;
 
        for (i = 0; bytes >= 1000 && i < 8; i++) {
            bytes /= 1000;
        }

        var unit = (showUnit)?units[i]:'';
        return bytes.toFixed(toFixed) + unit;
    }
});
