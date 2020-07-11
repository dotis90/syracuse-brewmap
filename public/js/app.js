fetch("api/data").then((response) => {
  response.json().then(({ data, map_token }) => {
    let mymap = L.map("mapid").setView([43.07, -76.12], 12);

    L.tileLayer(
      "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
      {
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: "mapbox/streets-v11",
        tileSize: 512,
        zoomOffset: -1,
        accessToken: map_token,
      }
    ).addTo(mymap);

    setTimeout(function () {
      mymap.invalidateSize();
    }, 800);

    let beerIcon = L.icon({
      iconUrl: "./images/beer2-color-outline.svg",
      shadowUrl: "./images/beer2-black.svg",
      iconSize: [38, 95],
      shadowSize: [38, 95],
      iconAnchor: [19, 95], // point of the icon which will correspond to marker's location 22, 94
      shadowAnchor: [17, 93],
      popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
    });

    data.map((element) => {
      let marker = L.marker([element.lat, element.long], {
        icon: beerIcon,
      }).addTo(mymap);

      marker.bindPopup(
        "<b class='brewery-name'>" +
          element.name +
          "</b>" +
          "<p>" +
          element.phone +
          "</p>" +
          "<p>" +
          element.address +
          "</p>" +
          "<a id='button' href='" +
          element.url +
          "' target='_blank'/>Website</a>"
      );

      mymap.on("popupopen", function (centerMarker) {
        const zoomLvl = 12;
        let cM = mymap.project(centerMarker.popup._latlng);

        cM.y -= centerMarker.popup._container.clientHeight / zoomLvl;
        console.log(mymap.unproject(cM));
        mymap.setView(mymap.unproject(cM), zoomLvl, { animate: true });
      });
    });
  });
});
