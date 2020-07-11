## Syracuse Brewmap

### About

This is a simple application created using Node.js, Express, and the Leaflet JavaScript Map Library. This example uses data regarding breweries in Syracuse, NY to display information on an intuitive map interface. The data can be swapped out for data of your own choosing, and this project can be greatly expanded upon.

1. **Downloading and Installing**

Using the terminal, move into the project directory. Then type:

```shell
npm install
```

In order for the leaflet map API to work, you need an API key from [Mapbox](https://mapbox.com). the src folder, create a new file, config.env, and export your mapbox API key as a variable.

```
const API_KEY = "here-goes-your-key";
module.exports = API_KEY;
```

To start the server, type:

```shell
node src/app.js
```

You can change the data in src/utils/data.js to import data of your own choosing. Update the images on the client side app.js file.

2. **Acknowledgements**

-Leafletjs mapping library: https://leafletjs.com/index.html
-Icons from Flaticon.com
