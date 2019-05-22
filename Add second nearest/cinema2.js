
// GET LOCATION
var x = document.getElementById("demo");
var l = document.getElementById("listingstable");
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);


      document.getElementById("spinner").style.display = "block";


  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  // x.innerHTML = "Latitude: " + position.coords.latitude +
  // "<br>Longitude: " + position.coords.longitude;
    console.log("location saved");
var lat = position.coords.latitude;
var lon = position.coords.longitude;
 const url = "https://api.cinelist.co.uk";
// var url = "http://localhost:3000/search/cinemas/coordinates/" + lat + "/" + lon;

// Closest Nearest Cinema
var nearestcinema;
var nearestcinema2;
var nearestcinema3;
var listingslength;
fetch(url + "/search/cinemas/coordinates/" + lat + "/" + lon, {insecure: true, credentials: "same-origin"})
.then(function(response) {
    // The response is a Response instance.
    // You parse the data into a useable format using `.json()`
    return response.json();
  }).then(function(data) {
    // `data` is the parsed version of the JSON returned from the above endpoint.
    console.log(data);  // { "userId": 1, "id": 1, "title": "...", "body": "..." }
      nearestcinema = data.cinemas[0].id;
      nearestcinema2 = data.cinemas[1].id;
      nearestcinema3 = data.cinemas[2].id;

     console.log(nearestcinema);
     console.log(nearestcinema2);
      console.log(nearestcinema3);

     document.getElementById("cinema1").innerHTML = data.cinemas[0].name.split(',')[0]
     document.getElementById("cinema2").innerHTML = data.cinemas[1].name.split(',')[0]
     document.getElementById("cinema3").innerHTML = data.cinemas[2].name.split(',')[0]

                //     document.getElementById("cinema3").innerHTML = data.cinemas[2].name;
                //     console.log(data.cinemas[0].name);
                      return fetch(url + "/get/times/cinema/" + nearestcinema); // make a 2nd request and return a promise
                  //  return fetch("http://localhost:3000/get/times/cinema/" + nearestcinema); // make a 2nd request and return a promise

                  })
                  .then(function(response) {
                      // The response is a Response instance.
                      // You parse the data into a useable format using `.json()`
                      return response.json();
                    }).then(function(data) {  //this gets the data and displays it, also removes the spinner - all in one function.
                      // `data` is the parsed version of the JSON returned from the above endpoint.
                      console.log(data);  // { "userId": 1, "id": 1, "title": "...", "body": "..." }
                        listingslength = data.listings.length;
                        console.log(listingslength.length);
                        console.log(data.listings[0].title);

                         var i;
                         var text = "";
                         for (i = 0; i<listingslength; i++) {
                           text += "<p>" + "<b>" + data.listings[i].title + ": "  + "</b>"  +  " " + data.listings[i].times + "<hr>" + "</p>";
                         }
                          document.getElementById("table1").innerHTML = text;




                                         return fetch(url + "/get/times/cinema/" + nearestcinema2); // make a 2nd request and return a promise
                                         //  return fetch("http://localhost:3000/get/times/cinema/" + nearestcinema); // make a 2nd request and return a promise

                                         })
                                         .then(function(response) {
                                         // The response is a Response instance.
                                         // You parse the data into a useable format using `.json()`
                                         return response.json();
                                         }).then(function(data) {  //this gets the data and displays it, also removes the spinner - all in one function.
                                         // `data` is the parsed version of the JSON returned from the above endpoint.
                                         console.log(data);  // { "userId": 1, "id": 1, "title": "...", "body": "..." }
                                           listingslength = data.listings.length;
                                           console.log(listingslength.length);
                                           console.log(data.listings[0].title);

                                            var i;
                                            var text2 = "";
                                            for (i = 0; i<listingslength; i++) {
                                              text2 += "<p>" + "<b>" + data.listings[i].title + ": "  + "</b>"  +  " " + data.listings[i].times + "<hr>" + "</p>";
                                            }


                                            document.getElementById("table2").innerHTML = text2;




                                                    return fetch(url + "/get/times/cinema/" + nearestcinema3); // make a 2nd request and return a promise
                                                    //  return fetch("http://localhost:3000/get/times/cinema/" + nearestcinema); // make a 2nd request and return a promise

                                                    })
                                                    .then(function(response) {
                                                    // The response is a Response instance.
                                                    // You parse the data into a useable format using `.json()`
                                                    return response.json();
                                                    }).then(function(data) {  //this gets the data and displays it, also removes the spinner - all in one function.
                                                    // `data` is the parsed version of the JSON returned from the above endpoint.
                                                    console.log(data);  // { "userId": 1, "id": 1, "title": "...", "body": "..." }
                                                      listingslength = data.listings.length;
                                                      console.log(listingslength.length);
                                                      console.log(data.listings[0].title);

                                                       var i;
                                                       var text3 = "";
                                                       for (i = 0; i<listingslength; i++) {
                                                         text3 += "<p>" + "<b>" + data.listings[i].title + ": "  + "</b>"  +  " " + data.listings[i].times + "<hr>" + "</p>";
                                                       }


                                                       document.getElementById("table3").innerHTML = text3;




                        document.getElementById("spinner").style.display = "none";







//INSERT TODAYS DATE
        var d = new Date();
        document.getElementById("showdateday").innerHTML = "Todays showings, " + d.getDate();

        var months    = ['January','February','March','April','May','June','July','August','September','October','November','December'];
        var now       = new Date();
        var thisMonth = months[now.getMonth()]; // getMonth method returns the month of the date (0-January :: 11-December)
        var output = document.getElementById('showdatemonth');
        console.log(thisMonth);

         if(output.textContent !== undefined) {
            output.textContent = thisMonth + ":";
          }
          else {
            output.innerText = thisMonth;
          }
//END OF DATE CODE





  });


    // I THINK THIS IS THE CLOSE OF NEAREST CINEMA
//this was used to show promise  .then(res => console.log(res));
//  console.log("the get worked");



} //CLOSE OF MAIN FUNCITON after find location
