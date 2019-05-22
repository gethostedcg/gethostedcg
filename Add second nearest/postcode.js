
function postcodeSearch() {
var inputpostcode = document.getElementById("fname").value;
  console.log(inputpostcode);
  document.getElementById("spinner").style.display = "block";



  // var url = "http://localhost:3000/search/cinemas/coordinates/" + lat + "/" + lon;

  // Closest Nearest Cinema
  var nearestcinema;
  var nearestcinema2;
  var listings;
  const url = "https://api.cinelist.co.uk";
  fetch(url + "/search/cinemas/postcode/" + inputpostcode, {insecure: true, credentials: "same-origin"})
  .then(function(response) {
      // The response is a Response instance.
      // You parse the data into a useable format using `.json()`
      return response.json();
    }).then(function(data) {
      // `data` is the parsed version of the JSON returned from the above endpoint.
      console.log(data);
      nearestcinema = data.cinemas[0].id;
      nearestcinema2 = data.cinemas[1].id;
      nearestcinema3 = data.cinemas[2].id;

     console.log(nearestcinema);
     console.log(nearestcinema2);
      console.log(nearestcinema3);

     document.getElementById("cinema1").innerHTML = data.cinemas[0].name.split(',')[0]
     document.getElementById("cinema2").innerHTML = data.cinemas[1].name.split(',')[0]
     document.getElementById("cinema3").innerHTML = data.cinemas[2].name.split(',')[0]
      console.log(nearestcinema);
      document.getElementById("cinema1").innerHTML = data.cinemas[0].name.split(',')[0]
      return fetch(url + "/get/times/cinema/" + nearestcinema); // make a 2nd request and return a promise
  })
  .then(function(response) {
    return response.json();
  }).then(function(data) {

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
  }
