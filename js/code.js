function rand(min, max) {
    let randomNum = Math.random() * (max - min) + min;
    return Math.floor(randomNum);
  }

async function getData(obj) {
    let pictureURL
    let artistName
    let title
    let description

    pictureURL = obj.data.thumbnail.url + "/full/843,/0/default.jpg"
    artistName = obj.data.artist_title
    title = obj.data.title
    description = obj.data.description

    console.log(pictureURL)
    console.log(artistName)
    console.log(title)
    console.log(description)
    document.getElementById("title").innerHTML = title;
    document.getElementById("artistName").innerHTML = artistName;
    document.getElementById("description").innerHTML = description;
    document.getElementById('artImage').src = pictureURL;

    return pictureURL, artistName, title, description

  }






///full/843,/0/default.jpg

import {obj} from "./artData.js";

let jsondata
jsondata = JSON.parse(obj);


let maxLength = Object.keys(jsondata.id).length
let rndNumber = rand(1, maxLength)
let artID = jsondata.id[rndNumber]


let artWorkInfo

fetch(`https://api.artic.edu/api/v1/artworks/${artID}`)
        .then(res => res.json())
        .then(data => artWorkInfo = data)
        .then(() => console.log(artWorkInfo))
        .then(() => getData(artWorkInfo))


// promiseJSON.then(response => {
//     return response.json();
//   }).then(people => {
//     artWorkInfo = people; console.log(people);
//   });



  



console.log(jsondata);

console.log(maxLength);

console.log(artID)





