$(document).ready(function() {
  var newColumn;

  function buildThumbnails(userData) {
    var colDiv = $("<div>").addClass("col-md-3");
    var thumbnailDiv = $("<div>").addClass("thumbnail");
    var userImg = $("<img>").attr("src", "http://lorempicsum.com/simpsons/255/200/" + userData.id);
    var captionDiv = $("<div>").addClass("caption");
    var userH3 = $("<h3>").append(userData.name);
    var userEmail = $("<a>").attr("href", "mailto:" + userData.email).append(userData.username);
    var userP = $("<p>").append(userEmail);
    var cityP = $("<p>").append(userData.address.city);

    thumbnailDiv
      .append(userImg)
      .append(captionDiv.append(userH3).append(userP).append(cityP).append(userData.address.geo.lat)
        .append(", ")
        .append(userData.address.geo.lng)
      );
    colDiv.append(thumbnailDiv);

    return colDiv;
  }

  for (var i = 0; i < window.users.length; i++) {
    newColumn = buildThumbnails(window.users[i]);
    $(".row").append(newColumn);
  }
});