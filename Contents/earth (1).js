//===========================================================================
// Earth widget
// Originally written and Steampunked by: Dean Beedell
// Dean.beedell@lightquick.co.uk
// Vitality code, advice and patience from Harry Whitfield
//
//===========================================================================var mainWindowwidthDefault = mainWindow.width;

//resizing variables
var mainWindowwidthDefault = mainWindow.width;
var mainWindowheightDefault = mainWindow.height;

var imagehoffsetDefault = image.hoffset;
var imagevoffsetDefault = image.voffset;
var imagewidthDefault = image.width;
var imageheightDefault = image.height;

var tingingSound = "Resources/ting.mp3";
var currStamp = "Resources/earth.png";;

//===========================================
// this function runs on startup
//===========================================
function startup()
{
    mainScreen();
    buildVitality(currStamp);
    resize();
    setmenu();
    settooltip();
}
//=====================
//End function
//=====================

//======================================================================================
