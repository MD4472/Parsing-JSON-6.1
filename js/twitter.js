$(document).ready(function() {
  var newColumn;

  function buildThumbnails(twitterData) {
    // console.log(twitterData.text);
    // return;

    var colDiv = $("<div>").addClass("col-md-3");
    var thumbnailDiv = $("<div>").addClass("thumbnail");
    var userImg = $("<img>").attr("src", twitterData.user.profile_image_url);
    var locationDiv = $("<div>").addClass("location");
    var userH3 = $("<h3>").append("Twitter ID: " + twitterData.id_str);
    // var userEmail = $("<a>").attr("href", "mailto:" + twitterData.email).append(twitterData.username);
    // var userP = $("<p>").append(userEmail);
    // var cityP = $("<p>").append(twitterData.address.city);
    var locationP = $("<p>").append("location: " + twitterData.user.location);
    var url = $("<p>").append("url: " + twitterData.entities.urls[0].indices[0]);
    var retweeted = $ ("<p>").append("retweeted: " + twitterData.retweeted);
    var displayUrl = $ ("<p>").append("displayUrl: " + 
      twitterData.entities.urls[0].display_url);

    thumbnailDiv
      .append(userImg)
      .append(userH3)
      .append(locationDiv).append(locationP)
      .append(url)
      .append(retweeted)
      .append(displayUrl)
      // .append(locationDiv.append(userH3).append(cityP)
      ;
    colDiv.append(thumbnailDiv);

    return colDiv;
  }

  for (var i = 0; i < window.tweets.length; i++) {
    newColumn = buildThumbnails(window.tweets[i]);
    $(".row").append(newColumn);
  }
});