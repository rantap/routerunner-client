import React, { useEffect, useState, useRef } from 'react';
import maplibregl from 'maplibre-gl';
import MapLibreGlDirections from '@maplibre/maplibre-gl-directions';
import { walkingMap, cyclingMap } from '../../assets/styles/mapStyles';
import 'maplibre-gl/dist/maplibre-gl.css';
import '@stadiamaps/maplibre-search-box/dist/style.css';
import { MapLibreSearchControl } from '@stadiamaps/maplibre-search-box';
import { formatDistance } from '../../utils/formatDistance';
import { Button } from 'react-aria-components';

const token = import.meta.env.VITE_MAPBOX_TOKEN;

const Map: React.FC = () => {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const [profile, setProfile] = useState<string>('walking');
  const [totalDistance, setTotalDistance] = useState<number>(0);
  const searchControl = new MapLibreSearchControl({
    baseUrl: 'https://api-eu.stadiamaps.com',
  });

  useEffect(() => {
    const map = new maplibregl.Map({
      container: mapRef.current as HTMLDivElement,
      style: profile === 'walking' ? walkingMap : cyclingMap,
      center: [23.8485436, 61.4508978],
      zoom: 13,
    });

    map.addControl(new maplibregl.NavigationControl());

    map.addControl(searchControl, 'top-left');

    map.on('load', () => {
      const directions = new MapLibreGlDirections(map, {
        api: 'https://api.mapbox.com/directions/v5',
        profile: `mapbox/${profile}`,
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
  }, [profile]);

  return (
    <div className='xl:flex'>
      <div className='xl:w-4/5 m-auto'>
        <div className='flex justify-evenly lg:justify-start lg:ml-8'>
          <Button
            onPress={() => {
              setProfile('walking');
            }}
            className={`px-8 py-2 border-2 border-green-300 text-slate-100 rounded-full outline-none data-[focus-visible]:ring data-[focus-visible]:ring-orange-300 lg:mr-4 ${
              profile === 'walking' ? 'bg-green-300 text-zinc-900' : ''
            }`}
          >
            Running
          </Button>
          <Button
            onPress={() => {
              setProfile('cycling');
            }}
            className={`px-8 py-2 border-2 border-green-300 text-slate-100 rounded-full outline-none data-[focus-visible]:ring data-[focus-visible]:ring-orange-300 lg:mr-4 ${
              profile === 'cycling' ? 'bg-green-300 text-zinc-900' : ''
            }`}
          >
            Cycling
          </Button>
        </div>
        <div className='mt-4 mb-16'>
          <h1 className='absolute z-10 px-3 py-1 mx-2 bg-zinc-900 opacity-80 rounded-b-md text-slate-100 font-light'>
            Total distance: {formatDistance(totalDistance)}
          </h1>
          <div ref={mapRef} className='h-[65vh] rounded-xl z-0' />
        </div>
      </div>
    </div>
  );
};

export default Map;
