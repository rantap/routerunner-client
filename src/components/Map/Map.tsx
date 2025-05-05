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
    // Reset distance when profile changes
    setTotalDistance(0);
  }, [profile]);

  return (
    <div className='xl:flex'>
      <div className='xl:w-4/5 m-auto'>
        <div className='flex justify-evenly lg:justify-start lg:ml-8'>
          <Button
            onPress={() => {
              setProfile('walking');
            }}
            className={`px-8 py-2 bo9der-2 border-zinc-900 dark:border-slate-50 rounded-full hover:bg-zinc-900 hover:text-slate-50 dark:hover:bg-slate-50 dark:hover:text-zinc-800  outline-none data-[focus-visible]:ring data-[focus-visible]:ring-orange-300 lg:mr-4 ${
              profile === 'walking'
                ? 'bg-zinc-900 text-slate-50 dark:bg-slate-50 dark:text-zinc-900'
                : 'text-zinc-900 dark:text-slate-50'
            }`}
          >
            Running
          </Button>
          <Button
            onPress={() => {
              setProfile('cycling');
            }}
            className={`px-8 py-2 border-2 border-zinc-900 dark:border-slate-100 rounded-full hover:bg-zinc-900 hover:text-slate-50 dark:hover:bg-slate-50 dark:hover:text-zinc-900 outline-none data-[focus-visible]:ring data-[focus-visible]:ring-orange-300 lg:mr-4 ${
              profile === 'cycling'
                ? 'bg-zinc-900 text-slate-50 dark:bg-slate-50 dark:text-zinc-900'
                : 'text-zinc-900 dark:text-slate-50'
            }`}
          >
            Cycling
          </Button>
        </div>
        <div className='mt-4 mb-16'>
          <h1 className='px-3 py-1 m-auto bg-slate-50 text-zinc-900 dark:bg-zinc-900 dark:text-slate-50 rounded-b-md '>
            Total distance: {formatDistance(totalDistance)}
          </h1>
          <div ref={mapRef} className='h-[65vh] rounded-xl z-0' />
        </div>
      </div>
    </div>
  );
};

export default Map;
