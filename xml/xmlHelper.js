if (window.XMLHttpRequest) {
    xmlhttp = new XMLHttpRequest();
} else {
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
}

var xmlDoc;
xmlhttp.onload = function () {
    xmlDoc = new DOMParser().parseFromString(xmlhttp.responseText, 'text/xml');
};
xmlhttp.open('GET', 'xml/apps.xml', false);
xmlhttp.send();

function getName(id) {
    return xmlDoc.getElementsByTagName("app")[id].getElementsByTagName("name")[0].childNodes[0].nodeValue;
}

function getPackage_name(id) {
    return xmlDoc.getElementsByTagName("app")[id].getElementsByTagName("packagename")[0].childNodes[0].nodeValue;
}

function getDescription(id) {
    var s;
    try {
        s = String(xmlDoc.getElementsByTagName("app")[id].getElementsByTagName("description")[0].childNodes[0].nodeValue);
        s = s.replace('\\n', '<br>');
    } catch (err) {
        s = "N/A";
    }
    return s;
}

function getDownload(id) {
    return xmlDoc.getElementsByTagName("app")[id].getElementsByTagName("downloadlink")[0].childNodes[0].nodeValue;
}

function getChannel(id) {
    return xmlDoc.getElementsByTagName("app")[id].getElementsByTagName("channel")[0].childNodes[0].nodeValue;
}

function getExternalLink(id) {
    var s;
    try {
        s = xmlDoc.getElementsByTagName("app")[id].getElementsByTagName("externallink")[0].childNodes[0].nodeValue;
    } catch (err) {
        s = "N/A";
    }
    return s;
}

function getGithub(id) {
    var s;
    try {
        s = xmlDoc.getElementsByTagName("app")[id].getElementsByTagName("github")[0].childNodes[0].nodeValue;
    } catch (err) {
        s = "N/A";
    }
    return s;
}

function getType(id) {
    return xmlDoc.getElementsByTagName("app")[id].getElementsByTagName("type")[0].childNodes[0].nodeValue;
}

function getIcon(id, circle) {
    var link;
    try {
        link = xmlDoc.getElementsByTagName("app")[id].getElementsByTagName("icon")[0].childNodes[0].nodeValue;
    } catch (err) {
        link = 'res/ic_launcher_default.png" width="190px'
    }

    if (circle == 1) {
        return '<img src="' + link + '" class="circle" />';
    } else {
        return '<img src="' + link + '" />';
    }
}

function getLangs(id) {
    return xmlDoc.getElementsByTagName("app")[id].getElementsByTagName("langs")[0].childNodes[0].nodeValue;
}

function getVersion_name(id) {
    return xmlDoc.getElementsByTagName("app")[id].getElementsByTagName("versionname")[0].childNodes[0].nodeValue;
}

function getVersion_code(id) {
    return xmlDoc.getElementsByTagName("app")[id].getElementsByTagName("versioncode")[0].childNodes[0].nodeValue;
}

function getMinApi(id) {
    return xmlDoc.getElementsByTagName("app")[id].getElementsByTagName("minapi")[0].childNodes[0].nodeValue;
}

function getTargetApi(id) {
    return xmlDoc.getElementsByTagName("app")[id].getElementsByTagName("targetapi")[0].childNodes[0].nodeValue;
}