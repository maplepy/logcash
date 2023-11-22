
window.popup = window.popup || {};

function disableTextSelection() {

	document.body.style.MozUserSelect = "none";
	document.body.style.WebkitUserSelect = "none";
	document.body.style.KhtmlUserSelect = "none";
	document.body.style.MsUserSelect = "none";
	document.body.style.UserSelect = "none";
}

popup.setStyle = function(elems) {

	elems.popupRemaining.style.opacity = "1"; // set to zero
	elems.popupRemaining.style.display = "flex";
	elems.popupRemaining.style.position = "absolute";
	elems.popupRemaining.style.height = "100px";
	elems.popupRemaining.style.width = "fit-content";
	elems.popupRemaining.style.borderRadius = "4px";
	elems.popupRemaining.style.zIndex = "1000";
	elems.popupRemaining.style.backgroundColor = "#252932";
	elems.popupRemaining.style.border = "1px solid #2d313c";
	elems.popupRemaining.style.boxShadow = "0px 10px 15px #12141a3a";

	elems.popupRemaining.style.top = "80px"; // remove
	elems.popupRemaining.style.left = "20px"; // remove
	
	// elems.popupTopDiv.style.height = "30px";
	elems.popupTopDiv.style.cursor = "move";
	elems.popupTopDiv.style.width = "100%";
	elems.popupTopDiv.style.borderRadius = "4px";
	elems.popupTopDiv.style.borderBottom = "1px solid #2d313c";
	elems.popupTopDiv.style.display = "flex";
	// elems.popupTopDiv.style.alignItems = "center";
	elems.popupTopDiv.style.whiteSpace = "nowrap";

	elems.popupTopLeftText.style.color = "#e2e2e2";
	elems.popupTopLeftText.style.fontSize = "0.8em";
	elems.popupTopLeftText.style.fontWeight = "bold";
	// elems.popupTopLeftText.style.margin = "10px 20px 10px 10px";
	elems.popupTopLeftText.style.marginBottom = "2px";
	elems.popupTopLeftText.style.pointerEvents = "none";

	// elems.popupTopRightText.style.color = "#c5c5c6";
	// elems.popupTopRightText.style.color = "#e2e2e2";
	elems.popupTopRightText.style.fontSize = "0.6em";
	// elems.popupTopRightText.style.fontWeight = "bold";
	// elems.popupTopRightText.style.margin = "10px 20px";
	elems.popupTopRightText.style.pointerEvents = "none";
}

popup.initPopup = function(elems) {

	var mouseDown = false,
		popupOffset = [0, 0];

	disableTextSelection();
	elems.popupTopDiv.addEventListener("mousedown", function(e) {
		mouseDown = true;
		popupOffset = [elems.popupRemaining.offsetLeft - e.clientX, elems.popupRemaining.offsetTop - e.clientY];
	})
	document.body.addEventListener("mousemove", function(e) {

		e.stopPropagation();
		if (mouseDown) {
			elems.popupRemaining.style.top = e.clientY + popupOffset[1] + "px";
			elems.popupRemaining.style.left = e.clientX + popupOffset[0] + "px";
		}
	})
	document.body.addEventListener("mouseup", function() {
		mouseDown = false;
	})
}
