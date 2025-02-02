
function reGenerate(month, elems) {

	var tmpProgress;

	if (month.nbMinDone < 10)
		tmpProgress = month.nbHourDone + "h0" + month.nbMinDone + " / " + month.nbHourReq + "h";
	else
		tmpProgress = month.nbHourDone + "h" + month.nbMinDone + " / " + month.nbHourReq + "h";
	if (month.percent < 100)
	{
		if (month.nbMinRem < 10)
			elems.textRemaining.innerText = month.nbHourRem + "h0" + month.nbMinRem;
		else
			elems.textRemaining.innerText = month.nbHourRem + "h" + month.nbMinRem;
		elems.textRemaining.style.display = "";
	}
	else
		elems.textRemaining.style.display = "none";

	elems.sideProgress.innerText = tmpProgress;

	if (month.percent < 10)
		elems.sideProgress.style.width = "90px";
	else if (month.percent > 90 && month.percent < 100)
		elems.sideProgress.style.width = "90%";
	else
		elems.sideProgress.style.width = month.percent + "%";

	// color gestion progress bar
	if (month.percent == 0)
	{
		month.progressColor = "rgba(37, 41, 50, 0.8)";
		elems.sideProgress.style.backgroundColor = month.progressColor;
	}
	else
	{
		month.progressColor = "rgba(0, 186, 188, " + (month.percent / 100) + ")";
		elems.sideProgress.style.backgroundColor = month.progressColor;
	}
}

function mOverMonth(e) {

	if (e.target.id != months.indexArray)
	{
		e.target.style.backgroundColor = "rgb(30, 33, 43)";
		e.target.style.color = "rgba(236, 238, 244, 0.9)";
	}
}

function mOutMonth(e) {
	
	if (e.target.id != months.indexArray)
	{
		e.target.style.backgroundColor = "rgba(37, 41, 50, 0.9)";
		e.target.style.color = "rgb(155, 155, 155)";
	}
}

function clickMonth(e) {

	var id = parseInt(e.target.id);
	var oldMonth = months.indexArray;
	var disappear;
	var appear;

	if (oldMonth > id)
	{
		disappear = "disappearRight";
		appear = "appearRight";
	}
	else
	{
		disappear = "disappearLeft";
		appear = "appearLeft";
	}

	elems.monthBlock[oldMonth].style.animation = "0.2s " + disappear;
	elems.monthBlock[oldMonth].style.animationFillMode = "forwards";
	elems.lineGraphs[oldMonth].style.animation = "0.2s " + disappear;
	elems.lineGraphs[oldMonth].style.animationFillMode = "forwards";

	elems.divMonths[oldMonth].style.backgroundColor = "rgba(37, 41, 50, 0.9)";
	elems.divMonths[oldMonth].style.color = "rgb(155, 155, 155)";
	
	elems.divMonths[id].style.backgroundColor = "white";
	elems.divMonths[id].style.color = "#191919";

	months.indexArray = id;
	function setDayNameEvent(value) {
		for (var i = 0; i < elems.monthDayBoxes.length; i++)
			elems.monthDayBoxes[i].style.pointerEvents = value;
		elems.weeklySpan.style.pointerEvents = value;
	}

	// make event clickable for day name when on actual month
	if (id === months.length - 1)
		setDayNameEvent("auto");
	else
		setDayNameEvent("none");

	reGenerate(months[months.indexArray], elems);
	popup.setData(elems);

	setTimeout(function() {
		elems.monthBlock[oldMonth].style.display = "none";
		elems.lineGraphs[oldMonth].style.display = "none";

		elems.monthBlock[id].style.display = "block";
		elems.monthBlock[id].style.animation = "0.2s " + appear;
		elems.monthBlock[id].style.animationFillMode = "forwards";

		elems.lineGraphs[id].style.display = "flex";
		elems.lineGraphs[id].style.animation = "0.2s " + appear;
		elems.lineGraphs[id].style.animationFillMode = "forwards";
	}, 200);
}

function isMonthInArray(array, node) {

	for (var i = 0; i < array.length; i++)
	{
		if (array[i].innerHTML == node.innerHTML)
			return true;
	}
	return false;
}

function getNbUniqueMonth(nodesList) {

	if (!nodesList)
		return 0;
	var tmpList = [];

	for (var i = 0; i < nodesList.length; i++)
	{
		if (!isMonthInArray(tmpList, nodesList[i]))
			tmpList.push(nodesList[i]);
	}
	return tmpList.length;
}

function isMonthAlreadyAdd(array, monthName) {

	for (var i = 0; i < array.length; i++)
	{
		if (array[i].nameShort === monthName)
			return true;
	}
	return false;
}

function getInfoMonth(elems, calendar) {

	function initArrayCalendar(calendarElem, arrayCalendar) {

		let objMonth = {};
		let arrayMonthsG = [];
		let indexMonth = 0;
		let tmpArray = [];

		for (var i = calendarElem.length - 1; i >= 0; i--)
		{
			if (calendarElem[i].tagName === "g")
				arrayMonthsG.push(calendarElem[i]);
			else if (calendarElem[i].tagName === "text")
			{
				const monthName = calendarElem[i].innerHTML.split(' ')[0];

				if (isMonthAlreadyAdd(tmpArray, monthName))
					break;

				/////////////////////////////////// TEMPORARY to test different date
				tmpArray[indexMonth] = {nameShort: monthName};
				// const actualDate = new Date("2023-02-15");
				const actualDate = new Date();

				objMonth.arrayElems = arrayMonthsG.reverse();
				objMonth.monthIndex = actualDate.getMonth() - indexMonth;
				objMonth.yearIndex = actualDate.getYear();
				if (objMonth.monthIndex < 0)
				{
					objMonth.yearIndex--;
					objMonth.monthIndex += 12;
				}
				objMonth.nameShort = monthName;
				objMonth.nbHourDone = 0;
				objMonth.nbMinDone = 0;
				objMonth.nbHourReq = 0;
				objMonth.nbMinReq = 0;
				objMonth.nbHourRem = 0;
				objMonth.nbMinRem = 0;
				objMonth.percent = 0.0;
				objMonth.salary = 0;
				objMonth.cashEarn = 0;
				objMonth.time = 0;
				objMonth.switchHourCash = 0;
				objMonth.progressColor = 0;
				objMonth.openDaysRemaining = 0;
				objMonth.openDaysTotal = 0;

				objMonth.days = [];
				objMonth.weeks = [[], [], [], [], [], []];
	
				arrayCalendar[indexMonth] = objMonth;
				indexMonth++;
				objMonth = {};
				arrayMonthsG = [];
			}
		}
	}

	const calendarElem = calendar.childNodes;
	var arrayCalendar = Array();

	initArrayCalendar(calendarElem, arrayCalendar);

	arrayCalendar.indexArray = arrayCalendar.length - 1;
	arrayCalendar.nbMonth = arrayCalendar.length;
	arrayCalendar = arrayCalendar.reverse();

	for (var i = 0; i < arrayCalendar.length; i++)
	{
		var indexWeek = 0;
		var lengthMonth = 0;

		if (i === arrayCalendar.length - 1)
			lengthMonth = new Date(arrayCalendar[i].yearIndex + 1900, arrayCalendar[i].monthIndex + 1, 0).getDate();
		else
			lengthMonth = arrayCalendar[i].arrayElems.length;

		for (var j = 0; j < lengthMonth; j++)
		{
			var tmpTimeDone, splitTimeDone;

			if (!arrayCalendar[i].arrayElems[j])
			{
				tmpTimeDone = "0h00";
				splitTimeDone = [0, 0];
			}
			else
			{
				tmpTimeDone = arrayCalendar[i].arrayElems[j].getAttribute("data-original-title");
				splitTimeDone = tmpTimeDone.split('h');
			}

			const numberDay = j + 1;
			let fullDate = (arrayCalendar[i].yearIndex + 1900) + '-';

			if (arrayCalendar[i].monthIndex + 1 < 10)
				fullDate += "0";
			fullDate += (arrayCalendar[i].monthIndex + 1) + "-";
			if (numberDay < 10)
				fullDate += "0";
			fullDate += numberDay;

			var tmpDate = new Date(fullDate);

			arrayCalendar[i].days[j] = {
				dayDate: fullDate,
				dayNumber: tmpDate.getDay(),
				timeDone: tmpTimeDone,
				hourDone: parseInt(splitTimeDone[0]),
				minuteDone: parseInt(splitTimeDone[1]),
			};

			if (arrayCalendar[i].days[j].dayNumber === 0 && j !== 0)
			{
				indexWeek++;
			}
			arrayCalendar[i].weeks[indexWeek].push(arrayCalendar[i].days[j]);
			arrayCalendar[i].nbHourDone += arrayCalendar[i].days[j].hourDone;
			arrayCalendar[i].nbMinDone += arrayCalendar[i].days[j].minuteDone;

			if (arrayCalendar[i].days[j].dayNumber >= 1 && arrayCalendar[i].days[j].dayNumber <= 5)
			{
				arrayCalendar[i].nbHourReq += 7;
				arrayCalendar[i].openDaysTotal++;
				if (!arrayCalendar[i].arrayElems[j])
					arrayCalendar[i].openDaysRemaining++;
			}
		}
		if (data.student.months[i].hoursDeducted > arrayCalendar[i].nbHourReq)
			arrayCalendar[i].nbHourReq = 0;
		else
			arrayCalendar[i].nbHourReq -= data.student.months[i].hoursDeducted;

		arrayCalendar[i].timeEachDay = 0;
		calculProgress(arrayCalendar[i]);
	}
	return (arrayCalendar);
}

function calculProgress(arrayCalendar) {

	///////////////////////////////////////////////////////// calcul all other value
	if (arrayCalendar.nbMinDone >= 60)
	{
		var extraHour = parseInt(arrayCalendar.nbMinDone / 60);

		arrayCalendar.nbHourDone += extraHour;
		arrayCalendar.nbMinDone = arrayCalendar.nbMinDone - (extraHour * 60);
	}
	arrayCalendar.nbHourRem = arrayCalendar.nbHourReq - arrayCalendar.nbHourDone;
	arrayCalendar.nbMinRem = arrayCalendar.nbMinReq - arrayCalendar.nbMinDone;
	
	if (arrayCalendar.nbMinRem < 0)
	{
		arrayCalendar.nbMinRem += 60;
		arrayCalendar.nbHourRem--;
	}
	else if (arrayCalendar.nbMinRem >= 60)
	{
		arrayCalendar.nbMinRem -= 60;
		arrayCalendar.nbHourRem++;
	}
	arrayCalendar.percent = (arrayCalendar.nbHourDone + (arrayCalendar.nbMinDone / 60)) / arrayCalendar.nbHourReq * 100;

	if (arrayCalendar.percent == 0)
		arrayCalendar.progressColor = "rgba(37, 41, 50, 0.8)";
	else
		arrayCalendar.progressColor = "rgba(0, 186, 188, " + (arrayCalendar.percent / 100) + ")";
}

var isPanelVisible = false;

function clickRemaining(e) {

	e.stopPropagation();

	if (e.target.className == "setting-button")
	{
		if (!isPanelVisible)
		{
			const popupDimension = elems.popupRemaining.getBoundingClientRect();
			const sideRemaining = elems.sideRemaining.getBoundingClientRect();
			const targetDimension = e.target.getBoundingClientRect();
	
			let topPopup = e.pageY + sideRemaining.height + (targetDimension.top - e.clientY) + 5;
			let leftPopup = e.pageX - (popupDimension.width / 2);

			elems.popupRemaining.style.top = topPopup + "px";
			elems.popupRemaining.style.left = leftPopup - 200 + "px";

			elems.sideRemaining.style.backgroundColor = "";
			elems.popupRemaining.style.opacity = "1";
			elems.popupRemaining.style.display = "flex";
			isPanelVisible = true;
		}
		else
		{
			elems.sideRemaining.style.backgroundColor = "";
			elems.popupRemaining.style.opacity = "0";
			elems.popupRemaining.style.display = "none";
			isPanelVisible = false;
		}
	}
}

let timeOut;
function clickSetting(e) {

	elems.settingButton.style.opacity = "0";
	elems.settingButton.style.cursor = "default";
	clickRemaining(e);
}

function mouseoverProgress() {

	clearTimeout(timeOut);
	elems.settingButton.style.opacity = "1";
	elems.settingButton.style.cursor = "pointer";
	elems.settingButton.addEventListener("click", clickSetting);
}

function mouseoutProgress() {

	timeOut = setTimeout(function() {
		elems.settingButton.removeEventListener("click", clickSetting);
		elems.settingButton.style.opacity = "0";
		elems.settingButton.style.cursor = "default";
	}, 800);
}

function initButtons(elems) {

	for (var i = 0; i < months.nbMonth; i++)
	{
		elems.divMonths[i].addEventListener("mouseover", mOverMonth);
		elems.divMonths[i].addEventListener("mouseout", mOutMonth);
		elems.divMonths[i].addEventListener("click", clickMonth);
	}
}

function notDublicates(ltMonths) {
	if (ltMonths.length > 1)
	{
		arr = Array.from(ltMonths).map(val=>val.textContent).sort();
		return (arr[0] !== arr[1]);
	}
	return (false);
}

function waitForLogTimesChartToLoad(ltSvg) {
	const ltDays = ltSvg.getElementsByTagName("g");
	const ltMonths = ltSvg.querySelectorAll("svg > text");
	if (ltDays.length == 0 || ltMonths.length == 0 || notDublicates(ltMonths)) {
		setTimeout(function() {
			waitForLogTimesChartToLoad(ltSvg);
		}, 100);
		return false;
	}
}

async function fetchCalendar(elems)
{
	const ltSvg = document.getElementById("user-locations");

	if (ltSvg) {
		waitForLogTimesChartToLoad(ltSvg);
	}
	return ltSvg;
}

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

function displayMessage(message) {
	const reset = "\x1b[0m";

	console.log('%c[LogCash]%c %s', 'color: #ffa91f', reset, message);
}

function getFirstDayOfMonth(year, month) {

	var dateFirstDay = String(year) + "-";
	if (month < 10)
		dateFirstDay += "0";
	dateFirstDay += String(month) + "-01";

	return new Date(dateFirstDay).getDay()
}

function getNumberOpenDays(numberYear, numberMonth, numberDay) {

	const numberDaysInMonth = new Date(numberYear, numberMonth + 1, 0).getDate();
	var numberFirstDay = getFirstDayOfMonth(numberYear, numberMonth + 1);
	var openDaysRemaining = 0;
	var openDaysTotal = 0;
	var i = -1;

	while (++i < numberDaysInMonth)
	{
		if (numberFirstDay == 7)
			numberFirstDay = 0;
		if (numberFirstDay >= 1 && numberFirstDay <= 5)
		{
			if (i < numberDay)
				openDaysRemaining++;
			openDaysTotal++;
		}
		numberFirstDay++;
	}
	return [openDaysRemaining, openDaysTotal];
}

function initStyleProgressBar() {

	elems.containerLogcash.style.display = "flex";

	for (var i = 0; i < months.nbMonth; i++)
	{
		elems.divMonths[i].style.margin = "0 3px";
		elems.divMonths[i].setAttribute('id', i);
	}
	elems.sideProgress.style.margin = 0;
}

function updateTime(minuteToAdd) {

	var tmpHourDay = popup.months[popup.months.nbMonth - 1].days[popup.numberDay - 1].hourDone;
	var tmpMinutesDay = popup.months[popup.months.nbMonth - 1].days[popup.numberDay - 1].minuteDone + minuteToAdd;

	var tmpHourGlobal = months[months.length - 1].nbHourDone;
	var tmpMinutesGlobal = months[months.length - 1].nbMinDone + minuteToAdd;

	if (minuteToAdd > 0)
	{
		if (tmpMinutesDay >= 60) {
			tmpMinutesDay = tmpMinutesDay - 60;
			tmpHourDay += 1;
		}
		if (tmpMinutesGlobal >= 60) {
			tmpMinutesGlobal = tmpMinutesGlobal - 60;
			tmpHourGlobal += 1;
		}
	}
	else
	{
		if (tmpMinutesDay < 0)
		{
			var positiveMinute = tmpMinutesDay * -1;
			var newMinute = 60 - positiveMinute;

			if (tmpHourDay <= 0)
			{
				tmpHourDay = 0;
				tmpMinutesDay = 0;
			}
			else
			{
				tmpHourDay -= 1;
				tmpMinutesDay = newMinute;
			}
		}
		if (tmpMinutesGlobal < 0)
		{
			var positiveMinute = tmpMinutesGlobal * -1;
			var newMinute = 60 - positiveMinute;

			if (tmpHourGlobal <= 0)
			{
				tmpHourGlobal = 0;
				tmpMinutesGlobal = 0;
			}
			else
			{
				tmpHourGlobal -= 1;
				tmpMinutesGlobal = newMinute;
			}
		}
	}

	popup.months[popup.months.nbMonth - 1].days[popup.numberDay - 1].hourDone = parseInt(tmpHourDay);
	popup.months[popup.months.nbMonth - 1].days[popup.numberDay - 1].minuteDone = parseInt(tmpMinutesDay);
	months[months.length - 1].nbHourDone = parseInt(tmpHourGlobal);
	months[months.length - 1].nbMinDone = parseInt(tmpMinutesGlobal);

	calculProgress(months[months.length - 1]);
	popup.calculDays(elems, months.length - 1);
	popup.setAttributeDaySlide(elems, months.length - 1);
	popup.setData(elems);

	if (months.indexArray == months.length - 1)
	{
		reGenerate(months[months.length - 1], elems);
	}
}

function updateMinutes(minuteToAdd) {

	popup.numberMinutes += minuteToAdd;
	if (popup.numberMinutes >= 60)
	{
		popup.numberMinutes -= 60;
		popup.numberHour += 1;
	}
	else if (popup.numberMinutes < 0)
	{
		popup.numberMinutes += 60;
		popup.numberHour -= 1;
	}
}

function initLogcash()
{
	const elems = {};

	const userPosteStatus = document.querySelector(".user-poste-status");

	if (userPosteStatus.innerText !== "Unavailable")
		data.session.logAtSchool = true;

	// calendar = await fetchCalendar(elems);
	// calendar = fetchCalendar(elems);

	fetchCalendar(elems).then(function(calendar) {

		if (calendar)
		{
			const months = getInfoMonth(elems, calendar);
		
			init.generateContainerLogcash(elems, months, calendar);
		
			window.elems = elems;
			window.months = months;
			initStyleProgressBar();
		
			reGenerate(months[months.indexArray], elems);
			initButtons(elems);
			if (data.session.logAtSchool)
			{
				displayMessage("Start setInterval each minutes");
				setInterval(function() {
					updateMinutes(1);
					updateTime(1);
				}, 60000);
				// }, 1000);
			}
		
			if (data.session.devMode)
			{
				const buttonAddOneMinute = document.querySelector(".dev-add-1-min");
				const buttonAddOneHour = document.querySelector(".dev-add-1-hour");
				const buttonRemoveOneMinute = document.querySelector(".dev-remove-1-min");
				const buttonRemoveOneHour = document.querySelector(".dev-remove-1-hour");
				const devClock = document.querySelector(".dev-clock");
	
				devClock.innerText = popup.numberHour + ":" + popup.numberMinutes;
	
				function addTime(number) {
					updateMinutes(number);
					updateTime(number);
					devClock.innerText = popup.numberHour + ":" + popup.numberMinutes;
				}
			
				buttonAddOneMinute.addEventListener("click", function() {
					addTime(1);
				});
				buttonAddOneHour.addEventListener("click", function() {
					addTime(60);
				});
				buttonRemoveOneMinute.addEventListener("click", function() {
					addTime(-1);
				});
				buttonRemoveOneHour.addEventListener("click", function() {
					addTime(-60);
				});
			}
		}
		else
			displayMessage("Cannot found logtime calendar");
	});
}

function setRefreshInterval() {
	return setInterval(function() {location.reload();}, 5000);
}

function startDevMode() {

	data.session.devMode = true;
	var refreshButton = document.querySelector(".dev-refresh");
	var refreshButtonActivator = document.querySelector(".dev-refresh-button");
	var refreshButtonRemove = document.querySelector(".dev-remove-localStorage");
	var refreshOn = true;
	var cycleRefresh = setRefreshInterval();

	// STYLE
	var mainNavbar = document.querySelector(".main-navbar");
	var mainDiv = document.querySelector(".main-div");

	document.body.style.backgroundColor = "#12141a";
	document.body.style.margin = "0";
	document.body.style.padding = "0";

	mainNavbar.style.backgroundColor = "grey";
	mainNavbar.style.height = "60px";

	mainDiv.style.backgroundColor = "#1d2028";
	mainDiv.style.boxSizing = "border-box";
	mainDiv.style.padding = "25px";
	mainDiv.style.display = "flex";
	mainDiv.style.flexDirection = "column";
	mainDiv.style.justifyContent = "center";

	refreshButtonActivator.addEventListener("click", function() {
		if (refreshOn)
		{
			refreshButtonActivator.innerText = "REFRESH: OFF";
			clearInterval(cycleRefresh);
			refreshOn = false;
		}
		else
		{
			refreshButtonActivator.innerText = "REFRESH: ON";
			cycleRefresh = setRefreshInterval();
			refreshOn = true;
		}
	});

	refreshButtonRemove.addEventListener("click", function() {
		localStorage.removeItem("student42");
	});

	refreshButton.addEventListener("click", function() {
		location.reload();
	});
	setTimeout(function() {
		initLogcash();
	}, 300);
}

function startLogcash() {

	data.init();
	
	if (window.location.href.indexOf("logcash.html") !== -1)
		startDevMode();
	else
	{
		setTimeout(function() {
			initLogcash();
		}, 1000);
	}
}

setTimeout(function() {
	startLogcash();
}, 100);
