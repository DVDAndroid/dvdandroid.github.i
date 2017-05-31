function toggle(el) {
  var elements = $("[list=" + el.getAttribute("list") + "]");
  elements.eq(0).slideToggle("fast", function () {
    var button = elements.eq(1);
    if (!$(this).is(':visible')) {
      button.text("Show");
    } else {
      button.text("Hide");
    }
  });
}

var jsonData = null;
function loadJSON(callback) {
  $.getJSON("./projects.json", function (data) {
    jsonData = data;
    if (callback !== undefined) callback(data);
  });
  return jsonData;
}

function createCard(key, val) {
  var html = "<div class='card mdl-card mdl-shadow--2dp' style='margin-bottom: 5%; margin-left: 9%'>";
  html += "<div class='mdl-card__title mdl-card--expand mdl-card--border'>";
  html += "<h2 class='mdl-card__title-text'>" + val["title"] + "</h2>";
  html += "</div>";
  html += "<div class='mdl-card__supporting-text'>";
  html += val['description'];

  html += "</div>";
  html += "<div class='mdl-card__supporting-text mdl-card--border no-padding'>";
  html += "<ul class='mdl-list' list=\"" + key + "\" style='display: none; margin-left: 9%'>";

  for (var i = 0; i < val["list"].length; i++) {
    var proj = val["list"][i];
    html += "<li class='mdl-list__item'>";
    html += "<span class='mdl-list__item-primary-content'>";
    html += "<a href='project.html?type=" + key + "&id=" + i + ".html'>" + proj['name'] + "</a>";
    html += "</span>";
    html += "</li>";
  }

  html += "</ul>";
  html += "</div>";
  html += "<div class='mdl-card__actions mdl-card--border'>";
  html += "<a class='mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect' list=\"" + key + "\" onclick='toggle(this);'>Show</a>";
  html += "</div>";
  html += "</div>";

  return html;
}

function getParameter(name) {
  var results = new RegExp('[\?&]' + name + '=([^&#]*)[^html]').exec(window.location.href);
  if (results === null)    return null;
  else return results[1] || 0;
}

function changeIcon(icon) {
  var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
  link.type = 'image/x-icon';
  link.rel = 'shortcut icon';
  link.href = icon;
  document.getElementsByTagName('head')[0].appendChild(link);
}