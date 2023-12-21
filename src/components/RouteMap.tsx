import React, { useEffect, useState, useRef } from 'react';
import maplibregl, { StyleSpecification } from 'maplibre-gl';
import MapLibreGlDirections from '@maplibre/maplibre-gl-directions';
import 'maplibre-gl/dist/maplibre-gl.css';

const style: StyleSpecification = {
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
const RouteMap: React.FC = () => {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const [directions, setDirections] = useState<MapLibreGlDirections | null>(null);

  useEffect(() => {
    const map = new maplibregl.Map({
      container: mapRef.current as HTMLDivElement,
      style: style,
      center: [23.8485436, 61.4508978],
      zoom: 13,
      customAttribution: "<a href='http://project-osrm.org/' target='_blank'>&copy; OSRM</a>",
    });

    map.on('load', () => {
      setDirections(
        new MapLibreGlDirections(map, {
          profile: 'foot',
          requestOptions: {
            alternatives: 'true',
          },
        }),
      );
    });

    return () => {
      if (directions) directions.destroy();
      if (map) map.remove();
    };
  }, []); // Empty dependency array to ensure the effect runs only on mount

  useEffect(() => {
    if (directions) {
      directions.interactive = true;
    }
  }, [directions]);

  return (
    <>
      <div ref={mapRef} className='h-[50vh]' />
    </>
  );
};

export default RouteMap;
