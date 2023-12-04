
window.popup = window.popup || {};

popup.createElems = function(elems) {

	elems.popupRemaining = document.createElement("div");
	elems.popupRemaining.className = "popup-remaining";

	elems.popupTopDiv = document.createElement("div");
	elems.popupTopDiv.className = "popup-top-div";
	
	elems.popupTopLeftText = document.createElement("p");
	// elems.popupTopLeftText.className = "popup-top-left-text";
	elems.popupTopLeftText.innerText = "Logcash";

	elems.popupTopRightText = document.createElement("p");
	// elems.popupTopRightText.className = "popup-top-right-text";

	elems.popupRemaining.appendChild(elems.popupTopDiv);
	elems.popupTopDiv.appendChild(elems.popupTopLeftText);
	elems.popupTopDiv.appendChild(elems.popupTopRightText);

	// POPUP INFO
	elems.popMiddleDiv = document.createElement("div");
	elems.popMiddleDiv.className = "pop-middle-div";
	
	elems.popMiddleDivLeft = document.createElement("div");
	elems.popMiddleDivLeft.className = "pop-middle-div-left";
	elems.middleLine1 = document.createElement("div");
	elems.middleLine1.className = "middle-line-1";
	elems.middleLine2 = document.createElement("div");
	elems.middleLine2.className = "middle-line-2";

	elems.inputContainerSalary = document.createElement("div");
	// elems.inputContainerSalary.className = "pop-input-container";
	elems.inputContainerSalary.style.marginRight = "7px";			/// STYLE
	elems.inputContainerSalary.style.backgroundColor = "#373c48";
	elems.inputContainerSalary.style.maxHeight = "fit-content";
	elems.inputContainerSalary.style.maxWidth = "80px";
	elems.inputContainerSalary.style.padding = "6px";
	elems.inputContainerSalary.style.color = "white";
	elems.inputContainerSalary.style.border = "2px solid rgb(45, 49, 60)";
	elems.inputContainerSalary.style.borderRadius = "6px";
	elems.inputContainerSalary.style.display = "flex";
	elems.inputContainerSalary.style.flexDirection = "column";

	elems.inputSalary = document.createElement("input");
	// elems.inputSalary.className = "inputText";
	elems.inputSalary.type = "text";
	elems.inputSalary.setAttribute('required', '');
	elems.inputSalary.style.backgroundColor = "#373c48";			/// STYLE
	elems.inputSalary.style.color = "rgb(198, 198, 198)";
	elems.inputSalary.style.outline = "none";
	elems.inputSalary.style.border = "none";
	elems.inputSalary.style.fontSize = "16px";

	elems.labelSalary = document.createElement("span");
	elems.labelSalary.className = "label-input";
	// elems.labelSalary.fontSize = "10px";
	elems.labelSalary.innerText = "Your salary";
	

	elems.inputContainerHours = document.createElement("div");
	// elems.inputContainerHours.className = "pop-input-container";
	elems.inputContainerHours.style.backgroundColor = "#373c48";			/// STYLE
	elems.inputContainerHours.style.maxHeight = "fit-content";
	elems.inputContainerHours.style.maxWidth = "80px";
	elems.inputContainerHours.style.padding = "6px";
	elems.inputContainerHours.style.color = "white";
	elems.inputContainerHours.style.border = "2px solid rgb(45, 49, 60)";
	elems.inputContainerHours.style.borderRadius = "6px";
	elems.inputContainerHours.style.display = "flex";
	elems.inputContainerHours.style.flexDirection = "column";

	elems.inputDeducted = document.createElement("input");
	// elems.inputDeducted.className = "inputText";
	elems.inputDeducted.type = "text";
	elems.inputDeducted.setAttribute('required', '');
	elems.inputDeducted.style.backgroundColor = "#373c48";			/// STYLE
	elems.inputDeducted.style.color = "rgb(198, 198, 198)";
	elems.inputDeducted.style.outline = "none";
	elems.inputDeducted.style.border = "none";
	elems.inputDeducted.style.fontSize = "16px";

	elems.labelHours = document.createElement("span");
	elems.labelHours.className = "label-input";
	elems.labelHours.innerText = "Hours Deducted";

	elems.habitContainer = document.createElement("div");
	elems.habitContainer.className = "habit-container";
	elems.weeklySpan = document.createElement("span");
	elems.weeklySpan.innerText = "Weekly Habit";
	elems.weeklySpan.style.marginLeft = "6px";

	elems.lineHabit = document.createElement("div");
	elems.lineHabit.className = "line-habit";

	elems.weekContainer = document.createElement("div");
	elems.weekContainer.className = "week-container";

	elems.habitContainer.appendChild(elems.weeklySpan);
	elems.habitContainer.appendChild(elems.weekContainer);

	elems.weekContainer.appendChild(elems.lineHabit);

	elems.checkboxes = [];
	const arrayDaysLetter = ["S", "M", "T", "W", "T", "F", "S"];
	for (var i = 0; i < 7; i++)
	{
		elems.checkboxes[i] = document.createElement("div");
		elems.checkboxes[i].className = "checkbox-habit";
		elems.checkboxes[i].id = i;
		elems.checkboxes[i].innerText = arrayDaysLetter[i];
	}
	
	// elems.monthlyHabit = document.createElement("div");
	// elems.monthlyHabit.className = "monthly-habit";
	
	elems.monthContainer = document.createElement("div");
	elems.monthContainer.className = "month-container";
	// elems.monthContainer.style.display = "none";

	elems.habitContainer.appendChild(elems.monthContainer);

	elems.monthLineHabit = [0, 0, 0, 0, 0, 0];
	elems.checkboxesMonth = [];
	var indexMonth = 0;

	for (var i = 0; i < popup.months[popup.months.indexArray].weeks.length; i++)
	{
		const tmpCheckbox = [];

		elems.monthLineHabit[i] = document.createElement("div");
		elems.monthLineHabit[i].className = "line-habit";
		if (i === 0)
			elems.monthLineHabit[i].style.justifyContent = "flex-end";
		for (var j = 0; j < popup.months[popup.months.indexArray].weeks[i].length; j++)
		{
			var tmpDay = document.createElement("div");
			tmpDay.className = "checkbox-habit";
			tmpDay.id = ++indexMonth;
			tmpDay.innerText = indexMonth;

			tmpCheckbox.push(tmpDay);
			elems.monthLineHabit[i].appendChild(tmpCheckbox[j]);
		}
		elems.checkboxesMonth.push(tmpCheckbox);
		elems.monthContainer.appendChild(elems.monthLineHabit[i]);
	}

	elems.weeklySpan.addEventListener("mouseover", function(e) {
		e.target.style.backgroundColor = "rgb(27, 30, 37)";
		e.target.style.color = "rgb(226, 226, 226)";
	});

	elems.weeklySpan.addEventListener("mouseout", function(e) {
		e.target.style.backgroundColor = "";
		e.target.style.color = "";
	});

	var showWeekly = true;
	elems.weeklySpan.addEventListener("click", function(e) {

		console.log(data.student);

		if (showWeekly)
		{
			elems.monthContainer.style.display = "flex";
			elems.weekContainer.style.display = "none";
			e.target.innerText = "Monthly Habit";
			showWeekly = false;
		}
		else
		{
			elems.monthContainer.style.display = "none";
			elems.weekContainer.style.display = "flex";
			e.target.innerText = "Weekly Habit";
			showWeekly = true;
		}
	});

	//////////////////////////////////////////////////////////////////////  MIDDLE RIGHT DIV
	elems.popMiddleDivRight = document.createElement("div");
	elems.popMiddleDivRight.className = "pop-middle-div-right";

	elems.salaryContainer = document.createElement("div");
	elems.salaryContainer.className = "salary-container";

	elems.mainTitleInfo = document.createElement("p");
	elems.mainTitleInfo.className = "main-title-info";
	elems.mainTitleInfo.innerText = "Earned";
	elems.lineThisSelection = document.createElement("div");
	elems.lineThisSelection.className = "line-this-selection";
	elems.salaryCircleContainer = document.createElement("div");
	elems.salaryCircleContainer.className = "salary-circle-container";

	elems.thisButtonMonth = document.createElement("div");
	elems.thisButtonMonth.className = "this-button selected";
	elems.thisButtonMonth.innerText = "Month";
	elems.thisButtonMonth.style.marginRight = "6px";
	elems.thisButtonWeek = document.createElement("div");
	elems.thisButtonWeek.className = "this-button";
	elems.thisButtonWeek.innerText = "Week";

	elems.lineThisSelection.appendChild(elems.thisButtonMonth);
	elems.lineThisSelection.appendChild(elems.thisButtonWeek);

	elems.salaryCircle = document.createElement("div");
	elems.salaryCircle.className = "salary-circle";
	elems.salaryInfoContainer = document.createElement("div");
	elems.salaryInfoContainer.className = "salary-info-container";
	elems.salaryAmountLine = document.createElement("div");
	elems.salaryAmountLine.className = "salary-amount-line";
	elems.salaryEuroSign = document.createElement("p");
	elems.salaryEuroSign.className = "salary-euro-sign";
	elems.salaryEuroSign.innerText = "€";
	elems.salaryInteger = document.createElement("p");
	elems.salaryInteger.className = "salary-integer";
	elems.salaryInteger.innerText = "0";
	elems.salaryFloat = document.createElement("p");
	elems.salaryFloat.className = "salary-float";
	elems.salaryFloat.innerText = ".00";

	elems.salaryPercentLine = document.createElement("div");
	elems.salaryPercentLine.className = "salary-percent-line";
	elems.salaryPercent = document.createElement("div");
	elems.salaryPercent.className = "salary-percent";
	elems.salaryPercent.innerText = "0%";

	elems.salarySlide = document.createElement("div");
	elems.salarySlide.className = "salary-slide";

	elems.salaryInfoContainer.appendChild(elems.salaryAmountLine);
	elems.salaryInfoContainer.appendChild(elems.salaryPercentLine);

	elems.salaryCircle.appendChild(elems.salaryInfoContainer);
	elems.salaryCircle.appendChild(elems.salarySlide);
	elems.salaryCircleContainer.appendChild(elems.salaryCircle);

	elems.salaryAmountLine.appendChild(elems.salaryEuroSign);
	elems.salaryAmountLine.appendChild(elems.salaryInteger);
	elems.salaryAmountLine.appendChild(elems.salaryFloat);

	elems.salaryPercentLine.appendChild(elems.salaryPercent);

	elems.salaryContainer.appendChild(elems.mainTitleInfo);
	elems.salaryContainer.appendChild(elems.lineThisSelection);
	elems.salaryContainer.appendChild(elems.salaryCircleContainer);
	elems.popMiddleDivRight.appendChild(elems.salaryContainer);


	//////////////////////////////////////////////////////////////////////  BOTTOM DIV
	elems.popBottomContainer = document.createElement("div");
	elems.popBottomContainer.className = "pop-bottom-container";
	
	elems.popBottomDiv = document.createElement("div");
	elems.popBottomDiv.className = "pop-bottom-div";

	elems.resultsContainer = document.createElement("div");
	elems.resultsContainer.className = "results-container";

	elems.resultsDiv = document.createElement("div");
	elems.resultsDiv.className = "results-div";

	elems.mainTitleDays = document.createElement("p");
	elems.mainTitleDays.className = "main-title-info";
	elems.mainTitleDays.innerText = "Days Remaining";
	elems.lineResultsDays = document.createElement("div");
	elems.lineResultsDays.className = "line-results";

	elems.lineResultsDaysLeft = document.createElement("div");
	elems.lineResultsDaysLeft.className = "line-results-left";
	elems.numberLabelOpen = document.createElement("span");
	elems.numberLabelOpen.className = "number-label";
	elems.numberLabelOpen.innerText = "Open";
	elems.numberResultOpen = document.createElement("p");
	elems.numberResultOpen.className = "number-result";
	elems.numberResultOpen.id = "result-open";
	elems.numberResultOpen.innerText = "0";
	elems.lineResultsDaysLeft.appendChild(elems.numberLabelOpen);
	elems.lineResultsDaysLeft.appendChild(elems.numberResultOpen);

	elems.lineResultsDaysRight = document.createElement("div");
	elems.lineResultsDaysRight.className = "line-results-right";
	elems.numberLabelTotal = document.createElement("span");
	elems.numberLabelTotal.className = "number-label";
	elems.numberLabelTotal.innerText = "Total";
	elems.numberLabelTotal.style.marginLeft = "4px";
	elems.numberResultTotal = document.createElement("p");
	elems.numberResultTotal.className = "number-result";
	elems.numberResultTotal.id = "result-Total";
	elems.numberResultTotal.innerText = "0";
	elems.lineResultsDaysRight.appendChild(elems.numberLabelTotal);
	elems.lineResultsDaysRight.appendChild(elems.numberResultTotal);

	elems.lineResultsDays.appendChild(elems.lineResultsDaysLeft);
	elems.lineResultsDays.appendChild(elems.lineResultsDaysRight);

	elems.moreInfoContainer = document.createElement("div");
	elems.moreInfoContainer.className = "more-info-container";
	elems.moreInfoLogo = document.createElement("div");
	elems.moreInfoLogo.className = "more-info-logo";
	elems.moreInfoContainer.appendChild(elems.moreInfoLogo);

	elems.resultsContainer.appendChild(elems.resultsDiv);

	elems.resultsDiv.appendChild(elems.mainTitleDays);
	elems.resultsDiv.appendChild(elems.lineResultsDays);

	elems.popBottomDiv.appendChild(elems.resultsContainer);
	elems.popBottomDiv.appendChild(elems.moreInfoContainer);
	elems.popBottomContainer.appendChild(elems.popBottomDiv);

	function mouseoverPopBottom(e) {
		elems.moreInfoLogo.style.height = "20px";
		elems.moreInfoContainer.style.backgroundColor = "rgba(30, 35, 42, 0.8)";
	}

	function mouseoutPopBottom(e) {
		elems.moreInfoLogo.style.height = "0px";
		elems.moreInfoContainer.style.backgroundColor = "";
	}
	
	elems.popBottomContainer.addEventListener("mouseover", mouseoverPopBottom);
	elems.popBottomContainer.addEventListener("mouseout", mouseoutPopBottom);

	var optionClicked = false;

	elems.moreInfoLogo.addEventListener("click", function(e) {

		if (optionClicked)
		{
			elems.resultsDiv.style.display = "none";
			elems.moreInfoLogo.style.height = "0px";
			elems.moreInfoContainer.style.backgroundColor = "";
			elems.moreInfoContainer.style.borderTop = "1px solid rgb(45, 49, 60, 0)";
			optionClicked = false;
		}
		else
		{
			elems.moreInfoContainer.style.borderTop = "1px solid rgb(45, 49, 60)";
			elems.moreInfoContainer.style.padding = "4px 0";
			elems.resultsDiv.style.display = "block";
			optionClicked = true;
		}
	});
	

	for (var i = 0; i < 7; i++)
		elems.lineHabit.appendChild(elems.checkboxes[i]);

	elems.popMiddleDiv.appendChild(elems.popMiddleDivLeft);
	elems.popMiddleDiv.appendChild(elems.popMiddleDivRight);
	elems.popMiddleDivLeft.appendChild(elems.middleLine1);
	elems.popMiddleDivLeft.appendChild(elems.middleLine2);
	elems.middleLine1.appendChild(elems.inputContainerSalary);
	elems.middleLine1.appendChild(elems.inputContainerHours);
	
	elems.inputContainerSalary.appendChild(elems.labelSalary);
	elems.inputContainerSalary.appendChild(elems.inputSalary);
	
	elems.inputContainerHours.appendChild(elems.labelHours);
	elems.inputContainerHours.appendChild(elems.inputDeducted);

	elems.middleLine2.appendChild(elems.habitContainer);
	// elems.middleLine2.appendChild(elems.monthlyHabit);

	elems.popupRemaining.appendChild(elems.popMiddleDiv);
	elems.popupRemaining.appendChild(elems.popBottomContainer);
	document.body.appendChild(elems.popupRemaining);
}

function disableTextSelection() {

	document.body.style.MozUserSelect = "none";
	document.body.style.WebkitUserSelect = "none";
	document.body.style.KhtmlUserSelect = "none";
	document.body.style.MsUserSelect = "none";
	document.body.style.UserSelect = "none";
}

popup.setStyle = function(elems) {

	elems.popupRemaining.style.opacity = "1"; // dev
	elems.popupRemaining.style.display = "flex";
	// elems.popupRemaining.style.opacity = "0"; // normal
	// elems.popupRemaining.style.display = "none";
	elems.popupRemaining.style.position = "absolute";
	elems.popupRemaining.style.borderRadius = "4px";
	elems.popupRemaining.style.zIndex = "1000";
	elems.popupRemaining.style.backgroundColor = "rgba(37, 41, 50, 0.9)";
	elems.popupRemaining.style.border = "1px solid #2d313c";
	elems.popupRemaining.style.boxShadow = "0px 10px 15px #12141a3a";
	elems.popupRemaining.style.backdropFilter = "blur(6px)";

	elems.popupRemaining.style.top = "60px"; // remove dev only
	elems.popupRemaining.style.right = "10px"; // remove dev only
	
	elems.popupTopDiv.style.cursor = "move";
	elems.popupTopDiv.style.height = "fit-content";
	elems.popupTopDiv.style.borderRadius = "4px";
	elems.popupTopDiv.style.borderBottom = "1px solid #2d313c";
	elems.popupTopDiv.style.display = "flex";
	elems.popupTopDiv.style.justifyContent = "space-between";
	elems.popupTopDiv.style.alignItems = "center";
	elems.popupTopDiv.style.color = "#9b9b9b";
	elems.popupTopDiv.style.whiteSpace = "nowrap";
	elems.popupTopDiv.style.padding = "4px";

	elems.popupTopLeftText.style.color = "#e2e2e2";
	elems.popupTopLeftText.style.fontSize = "16px";
	elems.popupTopLeftText.style.margin = "3px";
	elems.popupTopLeftText.style.padding = "0";
	elems.popupTopLeftText.style.fontWeight = "bold";
	elems.popupTopLeftText.style.pointerEvents = "none";
	elems.popupTopLeftText.style.textShadow = "rgb(0, 0, 0) 0px 0px 3px";
	
	elems.popupTopRightText.style.fontSize = "14px";
	elems.popupTopRightText.style.margin = "0 2px 0 0";
	elems.popupTopRightText.style.padding = "2px 4px";
	elems.popupTopRightText.style.width = "fit-content";
	elems.popupTopRightText.style.borderRadius = "2px";
	elems.popupTopRightText.style.textShadow = "rgb(0, 0, 0) 0px 0px 3px";

	elems.popupTopRightText.addEventListener("mouseover", function(e) {
		e.target.style.backgroundColor = "#1b1e25";
		e.target.style.color = "#e2e2e2";
		e.target.style.cursor = "pointer";
	});

	elems.popupTopRightText.addEventListener("mouseout", function(e) {
		e.target.style.backgroundColor = "";
		e.target.style.color = "#9b9b9b";
	});
}

function isCheckboxUse() {

	for (var i = 0; i < data.student.weeklyHabit.length; i++)
	{
		if (data.student.weeklyHabit[i])
			return true;
	}
	return false;
}

function getOpenDays(numberYear, numberMonth, numberDay) {

	const numberDaysInMonth = new Date(numberYear, numberMonth + 1, 0).getDate();
	const todayDate = new Date();
	var actualDay = todayDate.getDay();
	var openDays = 0;
	var totalDays = 0;
	var i = numberDay - 1;
	var indexHabit = actualDay;
	var useAll = isCheckboxUse();

	while (++i <= numberDaysInMonth)
	{
		if (indexHabit === 7)
		{
			indexHabit = 0;
		}
		// console.log("check data for day: " + actualDay);
		if (actualDay == 7)
			actualDay = 0;
		if (actualDay >= 1 && actualDay <= 5)
		{
			if (data.student.weeklyHabit[indexHabit] || !useAll)
				openDays++;
		}
		// console.log(i + " / " + numberDaysInMonth + "  -  habit: " + data.student.habit[indexHabit]);
		if (data.student.weeklyHabit[indexHabit] || !useAll)
		{
			totalDays++;
		}
		
		indexHabit++;
		actualDay++;
	}
	return ({open: openDays, total: totalDays});
}

popup.setData = function(elems) {

	elems.popupTopRightText.innerText = data.student.pseudo;
	for (var i = 0; i < elems.checkboxes.length; i++)
	{
		// console.log(i + " " + data.student.weeklyHabit[i]);
		if (data.student.weeklyHabit[i])
			elems.checkboxes[i].style.borderColor = "rgb(0, 186, 188)";
		else
			elems.checkboxes[i].style.borderColor = "rgb(45, 49, 60)";
	}

	const date = new Date();
	var numberYear = date.getFullYear();
	var numberMonth = date.getMonth();
	var numberDay = date.getDate();

	var numberDays = getOpenDays(numberYear, numberMonth, numberDay);

	elems.numberResultOpen.innerText = numberDays.open;
	elems.numberResultTotal.innerText = numberDays.total;

	if (popup.months[popup.months.indexArray].percent >= 100)
	{
		var totalSalaryEarn = parseFloat(data.student.salary);
		var percentSalary = 100.0;
		// var integerSalary = parseInt(totalSalaryEarn);
		// var floatSalary = totalSalaryEarn - integerSalary;
	}
	else
	{
		var totalSalaryEarn = parseFloat(popup.months[popup.months.indexArray].percent / 100 * data.student.salary);
		var percentSalary = popup.months[popup.months.indexArray].percent;
	}
	var integerSalary = parseInt(totalSalaryEarn);
	var floatSalary = totalSalaryEarn - integerSalary;

	// console.log("salary earn: " + totalSalaryEarn);
	// console.log("integer earn: " + integerSalary);
	// console.log("float earn: " + floatSalary.toFixed(2).split('.')[1]);

	elems.salaryInteger.innerText = integerSalary;
	elems.salaryFloat.innerText = "." + floatSalary.toFixed(2).split('.')[1];
	elems.salaryPercent.innerText = percentSalary.toFixed(1) + '%';
	elems.salarySlide.style.height = percentSalary + "%";
}

function clickHabit(e) {
	
	const index = parseInt(e.target.id);

	// console.log(e.target.id);
	if (data.student.weeklyHabit[index])
	{
		// console.log(e.target.id + ": false");
		data.student.weeklyHabit[index] = false;
		e.target.style.borderColor = "rgb(45, 49, 60)";
	}
	else
	{
		// console.log(e.target.id + ": true");
		data.student.weeklyHabit[index] = true;
		e.target.style.borderColor = "rgb(0, 186, 188)";
	}
	if (data.isHomePage === -1)
		data.updateLocalStorage(data.student);
	popup.setData(elems);
}

popup.initPopup = function(elems, months) {

	popup.months = months;

	var mouseDown = false,
		popupOffset = [0, 0];

	popup.createElems(elems);
	popup.setStyle(elems);
	popup.setData(elems);
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

	// put in setStyle
	if (!data.student.salary)
		elems.inputSalary.value = 0;
	else
		elems.inputSalary.value = data.student.salary;
	if (!data.student.hoursDeducted)
		elems.inputDeducted.value = 0;
	else
		elems.inputDeducted.value = data.student.hoursDeducted;

	elems.inputSalary.addEventListener("blur", function(e) {

		if (isNaN(e.target.value) || !e.target.value)
			e.target.value = 0;
		else
		{
			data.student.salary = e.target.value;
			if (data.isHomePage === -1)
				data.updateLocalStorage(data.student);
		}
		popup.setData(elems);
	});

	elems.inputDeducted.addEventListener("blur", function(e) {

		if (isNaN(e.target.value)  || !e.target.value)
			e.target.value = 0;
		else
		{
			data.student.hoursDeducted = e.target.value;
			if (data.isHomePage === -1)
				data.updateLocalStorage(data.student);
		}
		var newRequire = months[months.indexArray].openDaysTotal * 7 - e.target.value;

		if (newRequire < 0)
			months[months.indexArray].nbHourReq = 0;
		else
			months[months.indexArray].nbHourReq = newRequire;
		calculProgress(months[months.indexArray]);
		reGenerate(months[months.indexArray], elems);
		popup.setData(elems);
	});

	for (var i = 0; i < elems.checkboxes.length; i++)
	{
		elems.checkboxes[i].addEventListener("click", clickHabit);
	}
	elems.inputSalary.addEventListener("click", function(e) { this.select(); });
	elems.inputDeducted.addEventListener("click", function(e) { this.select(); });
}
