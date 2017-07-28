var dynamicContent = getParameterByName('dc');
var loadWorkshopdirect = false;

function checkurl() {
	 if (dynamicContent != null && dynamicContent.indexOf("workshop") !=14) {
		var res = dynamicContent.replace("workshop", "");
		loadWorkshopdirect = true;
		workshopToLoad = res;
	}
}

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
