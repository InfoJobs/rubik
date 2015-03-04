function getLuminance (hexColor) {
    var r, g, b, d ,h, minRGB, maxRGB,
        computedH = 0,
        computedS = 0,
        computedV = 0;

    // Remove # of string
    hexColor = hexColor.charAt(0)=="#" ? hexColor.substring(1,7):hexColor;

    // Convert hexColor to RGB values
    r = parseInt(hexColor.substring(0,2),16) / 255;
    g = parseInt(hexColor.substring(2,4),16) / 255;
    b = parseInt(hexColor.substring(4,6),16) / 255;

    if ( r==null || g==null || b==null || isNaN(r) || isNaN(g)|| isNaN(b) ) {
        console.log('Please enter numeric RGB values!');
        return;
    }

    if (r<0 || g<0 || b<0 || r>255 || g>255 || b>255) {
        console.log('RGB values must be in the range 0 to 255.');
        return;
    }

    minRGB = Math.min(r,Math.min(g,b));
    maxRGB = Math.max(r,Math.max(g,b));

    // Black-gray-white
    // if (minRGB==maxRGB) {
    //      computedV = minRGB;
    //      return [0,0,computedV];
    // }

    // Colors other than black-gray-white:
    d = (r==minRGB) ? g-b : ((b==minRGB) ? r-g : b-r);
    h = (r==minRGB) ? 3 : ((b==minRGB) ? 1 : 5);
    computedH = 60*(h - d/(maxRGB - minRGB));
    computedS = (maxRGB - minRGB)/maxRGB;
    computedV = maxRGB;

    //return [computedH,computedS,computedV];
    return computedV;
}
