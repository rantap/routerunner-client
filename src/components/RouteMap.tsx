import Map, { MapStyle } from 'react-map-gl/maplibre';
import 'maplibre-gl/dist/maplibre-gl.css';

const style: MapStyle = {
  version: 8,
  sources: {
    'raster-tiles': {
      type: 'raster',
      tiles: ['https://tile.openstreetmap.org/{z}/{x}/{y}.png'],
      tileSize: 256,
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
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

const RouteMap = () => {
  return (
    <Map
      initialViewState={{
        longitude: 23.8485436,
        latitude: 61.4508978,
        zoom: 14,
      }}
      style={{ width: '100%', height: ' 50vh ' }}
      mapStyle={style}
    />
  );
};

export default RouteMap;
