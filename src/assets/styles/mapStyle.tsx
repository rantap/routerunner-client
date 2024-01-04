import { StyleSpecification } from 'maplibre-gl';

const mapStyle: StyleSpecification = {
  version: 8,
  sources: {
    'raster-tiles': {
      type: 'raster',
      tiles: ['https://tile.openstreetmap.org/{z}/{x}/{y}.png'],
      tileSize: 256,
      attribution:
        '<a href="https://www.mapbox.com/about/maps/">&copy; Mapbox</a>&nbsp; <a href="https://www.openstreetmap.org/copyright">&copy; OpenStreetMap contributors</a>',
    },
  },
  layers: [
    {
      id: 'simple-tiles',
      type: 'raster',
      source: 'raster-tiles',
      minzoom: 0,
      maxzoom: 22,
    },
  ],
};

export default mapStyle;
