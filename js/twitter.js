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
    // to access number 52 in line 14, use entities.urls then use
    // square brackets to access the first element in the array of urls 
    // (which is index 0).   Thus entities.urls[0].   Now to access number
    // 52, the number 52 is the first element in the indicies array.  Thus
    // entities.urls[0].indicies[0].  
    

    var retweeted = $ ("<p>").append("retweeted: " + twitterData.retweeted);
    var displayUrl = $ ("<p>").append("displayUrl: " + 
      twitterData.entities.urls[0].display_url);

    // to access display url in line 17, use entities.urls[0] to get
    // into the urls array.  Once in the urls array, just type display_url
    // because you are still in the first element of the array, which
    // is index 0.

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