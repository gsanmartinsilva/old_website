fetch('https://api.artic.edu/api/v1/artworks/23125')
  .then(response => response.json())
  .then(json => console.log(json))  
  