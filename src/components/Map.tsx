import React, { useEffect, useState, useRef } from 'react';
import maplibregl from 'maplibre-gl';
import MapLibreGlDirections from '@maplibre/maplibre-gl-directions';
import mapStyle from '../assets/styles/mapStyle';
import 'maplibre-gl/dist/maplibre-gl.css';
import { MapLibreSearchControl } from '@stadiamaps/maplibre-search-box';
import '@stadiamaps/maplibre-search-box/dist/style.css';
import { formatDistance } from '../utils/formatDistance';

const token = import.meta.env.VITE_MAPBOX_TOKEN;

const Map: React.FC = () => {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const [totalDistance, setTotalDistance] = useState<number>(0);
  const searchControl = new MapLibreSearchControl({
    baseUrl: 'https://api-eu.stadiamaps.com',
  });

  useEffect(() => {
    const map = new maplibregl.Map({
      container: mapRef.current as HTMLDivElement,
      style: mapStyle,
      center: [23.8485436, 61.4508978],
      zoom: 13,
      pitch: 30,
    });

    map.addControl(new maplibregl.NavigationControl());

    map.addControl(searchControl, 'top-left');

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
      <h1 className='absolute z-10 px-3 py-1 mx-2 bg-zinc-900 opacity-80 rounded-b-md text-slate-100 font-light'>
        Total distance: {formatDistance(totalDistance)}
      </h1>
      <div ref={mapRef} className='h-[65vh] z-0' />
    </>
  );
};

export default Map;
