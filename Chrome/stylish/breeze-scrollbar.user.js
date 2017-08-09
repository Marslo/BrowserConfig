// ==UserScript==
// @name          Breeze Scrollbar
// @namespace     http://userstyles.org
// @description	  A scrollbar for Chrome inspired by KDE Breeze.
// @author        thesbros
// @homepage      https://userstyles.org/styles/139391
// @run-at        document-start
// @version       0.20170224202817
// ==/UserScript==
(function() {var css = [
	"::-webkit-scrollbar",
	"{",
	"	width: 7px;",
	"	height: 7px;",
	"}",
	"",
	"::-webkit-scrollbar-button",
	"{",
	"	width: 0px;",
	"	height: 0px;",
	"}",
	"",
	"::-webkit-scrollbar-thumb",
	"{",
	"	background: #909396;",
	"	border-radius: 50px;",
	"}",
	"",
	"::-webkit-scrollbar-thumb:hover",
	"{",
	"  	background: #3DAEE9;",
	"}",
	"",
	"::-webkit-scrollbar-track",
	"{",
	"	background: transparent;",
	"	border-radius: 50px;",
	"}",
	"",
	"::-webkit-scrollbar-track:hover",
	"{",
	"	background: rgba(106, 110, 113, 0.3);",
	"}",
	"",
	"::-webkit-scrollbar-corner",
	"{",
	"  	background: transparent;",
	"}"
].join("\n");
if (typeof GM_addStyle != "undefined") {
	GM_addStyle(css);
} else if (typeof PRO_addStyle != "undefined") {
	PRO_addStyle(css);
} else if (typeof addStyle != "undefined") {
	addStyle(css);
} else {
	var node = document.createElement("style");
	node.type = "text/css";
	node.appendChild(document.createTextNode(css));
	var heads = document.getElementsByTagName("head");
	if (heads.length > 0) {
		heads[0].appendChild(node);
	} else {
		// no head yet, stick it whereever
		document.documentElement.appendChild(node);
	}
}
})();
