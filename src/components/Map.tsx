import React, { useEffect, useState, useRef } from 'react';
import maplibregl, { StyleSpecification } from 'maplibre-gl';
import MapLibreGlDirections from '@maplibre/maplibre-gl-directions';
import 'maplibre-gl/dist/maplibre-gl.css';

const token = import.meta.env.VITE_MAPBOX_TOKEN;
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
const Map: React.FC = () => {
  const mapRef = useRef<HTMLDivElement | null>(null);
  // const [directions, setDirections] = useState<MapLibreGlDirections | null>(null);
  const [totalDistance, setTotalDistance] = useState<number>(0);

  useEffect(() => {
    const map = new maplibregl.Map({
      container: mapRef.current as HTMLDivElement,
      style: mapStyle,
      center: [23.8485436, 61.4508978],
      zoom: 13,
    });

    map.addControl(new maplibregl.NavigationControl());

    map.on('load', () => {
      const directions = new MapLibreGlDirections(map, {
        api: 'https://api.mapbox.com/directions/v5',
        profile: 'mapbox/walking',
        requestOptions: {
          access_token: token,
        },
      });
      directions.on('fetchroutesend', (ev) => {
        setTotalDistance(ev.data?.routes[0].distance as number);
      });
      directions.on('removewaypoint', () => {
        if (directions.waypoints.length < 2) {
          setTotalDistance(0);
        }
      });
      directions.interactive = true;
    });
  }, []); // Empty dependency array to ensure the effect runs only on mount

  return (
    <>
      <h1>Total distance: {Math.trunc(totalDistance)} m</h1>
      <div ref={mapRef} className='h-[50vh]' />
    </>
  );
};

export default Map;
