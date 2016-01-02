if (window.XMLHttpRequest) {
    xmlhttp = new XMLHttpRequest();
} else {
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
}

var xmlDoc;
var app_id;
xmlhttp.onload = function () {
    xmlDoc = new DOMParser().parseFromString(xmlhttp.responseText, 'text/xml');
};
xmlhttp.open('GET', 'xml/apps.xml', false);
xmlhttp.send();

function setAppId(id) {
    app_id = id;
}

function getLength() {
    var nodes = xmlDoc.getElementsByTagName('apps');

    return nodes[0].getElementsByTagName('app').length;
}

function getName(i) {
    var number = app_id;

    if (typeof i != "undefined") {
        number = i;
    }

    return xmlDoc.getElementsByTagName("app")[number].getElementsByTagName("name")[0].childNodes[0].nodeValue;
}

function getPackageName(i) {
    var number = app_id;

    if (typeof i != "undefined") {
        number = i;
    }
    return xmlDoc.getElementsByTagName("app")[number].getElementsByTagName("packagename")[0].childNodes[0].nodeValue;
}

function getDescription(i) {
    var number = app_id;

    if (typeof i != "undefined") {
        number = i;
    }

    var s;
    try {
        s = String(xmlDoc.getElementsByTagName("app")[number].getElementsByTagName("description")[0].childNodes[0].nodeValue);
        s = s.replace('\\n', '<br>');
    } catch (err) {
        s = "";
    }
    return s;
}

function getDownload() {
    return xmlDoc.getElementsByTagName("app")[app_id].getElementsByTagName("downloadlink")[0].childNodes[0].nodeValue;
}

function getDownloadNumber() {
    return xmlDoc.getElementsByTagName("app")[app_id].getElementsByTagName("downloadnumber")[0].childNodes[0].nodeValue;
}

function getChannel() {
    return xmlDoc.getElementsByTagName("app")[app_id].getElementsByTagName("channel")[0].childNodes[0].nodeValue;
}

function getDev() {
    var s;
    try {
        s = xmlDoc.getElementsByTagName("app")[app_id].getElementsByTagName("dev")[0].childNodes[0].nodeValue;
    } catch (err) {
        s = "dvdandroid";
    }
    return s;
}

function getExternalLink() {
    return xmlDoc.getElementsByTagName("app")[app_id].getElementsByTagName("externallink")[0].childNodes[0].nodeValue;
}

function getGithub() {
    return s = xmlDoc.getElementsByTagName("app")[app_id].getElementsByTagName("github")[0].childNodes[0].nodeValue;
}

function getType() {
    return xmlDoc.getElementsByTagName("app")[app_id].getElementsByTagName("type")[0].childNodes[0].nodeValue;
}

function getIcon(i) {
    var link;
    var number = app_id;

    if (typeof i != "undefined") {
        number = i;
    }
    try {
        link = xmlDoc.getElementsByTagName("app")[number].getElementsByTagName("icon")[0].childNodes[0].nodeValue;
    } catch (err) {
        link = 'res/ic_launcher_default.png';
    }
    return link;
}

function getLangs() {
    return xmlDoc.getElementsByTagName("app")[app_id].getElementsByTagName("langs")[0].childNodes[0].nodeValue;
}

function getVersionName() {
    return xmlDoc.getElementsByTagName("app")[app_id].getElementsByTagName("versionname")[0].childNodes[0].nodeValue;
}

function getVersionCode() {
    return xmlDoc.getElementsByTagName("app")[app_id].getElementsByTagName("versioncode")[0].childNodes[0].nodeValue;
}

function getMinApi() {
    return xmlDoc.getElementsByTagName("app")[app_id].getElementsByTagName("minapi")[0].childNodes[0].nodeValue;
}

function getAndroidVersion(api) {
    var v;
    switch (parseInt(api)) {
        case 5:
        case 6:
        case 7:
            v = "Eclair 2.0";
            break;
        case 8:
            v = "Froyo 2.2";
            break;
        case 9:
        case 10:
            v = "Gingerbread 2.3";
            break;
        case 11:
        case 12:
        case 13:
            v = "Honeycomb 3.0";
            break;
        case 14:
        case 15:
            v = "Ice Cream Sandwich 4.0";
            break;
        case 16:
        case 17:
        case 18:
            v = "Jelly Bean 4.1";
            break;
        case 19:
            v = "KitKat 4.4";
            break;
        case 21:
            v = "Lollipop 5.0";
            break;
        case 22:
            v = "Lollipop 5.1";
            break;
        case 23:
            v = "Marshmallow 6.0";
            break;
    }
    return v;
}

function getTargetApi() {
    return xmlDoc.getElementsByTagName("app")[app_id].getElementsByTagName("targetapi")[0].childNodes[0].nodeValue;
}

function getScreenshotNumber() {
    return xmlDoc.getElementsByTagName("app")[app_id].getElementsByTagName("screenshots")[0].getElementsByTagName("screenshot").length;
}

function getScreenshot(n) {
    return xmlDoc.getElementsByTagName("app")[app_id].getElementsByTagName("screenshots")[0].getElementsByTagName("screenshot")[n].childNodes[0].nodeValue;
}

function getScreenshotTitle(n) {
    return xmlDoc.getElementsByTagName("app")[app_id].getElementsByTagName("screenshots")[0].getElementsByTagName("screenshot")[n].getAttribute("title");
}

function isDefined(s) {
    return s != "undefined";
}