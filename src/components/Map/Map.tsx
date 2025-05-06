import React, { useEffect, useState, useRef } from 'react';
import maplibregl from 'maplibre-gl';
import MapLibreGlDirections from '@maplibre/maplibre-gl-directions';
import { walkingMap, cyclingMap } from '../../assets/styles/mapStyles';
import 'maplibre-gl/dist/maplibre-gl.css';
import '@stadiamaps/maplibre-search-box/dist/style.css';
import { MapLibreSearchControl } from '@stadiamaps/maplibre-search-box';
import { formatDistance } from '../../utils/formatDistance';
import { Button } from 'react-aria-components';
import { HelpButton } from './Help/HelpButton';

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
      <div className='m-auto xl:mx-10 xl:w-full'>
        <div className='flex justify-evenly lg:ml-8 lg:mt-8 lg:justify-start'>
          <Button
            onPress={() => {
              setProfile('walking');
            }}
            className={`rounded-full border border-zinc-900 px-8 py-2 outline-none hover:bg-violet-800 hover:text-slate-50 data-[focus-visible]:ring data-[focus-visible]:ring-orange-300 dark:border-slate-50 dark:hover:bg-green-300 dark:hover:text-zinc-800 lg:mr-4 ${
              profile === 'walking'
                ? 'border-violet-800 bg-violet-800 text-slate-50 dark:border-green-300 dark:bg-green-300 dark:text-zinc-900'
                : 'text-zinc-900 dark:text-slate-50'
            }`}
          >
            Running
          </Button>
          <Button
            onPress={() => {
              setProfile('cycling');
            }}
            className={`rounded-full border border-zinc-900 px-8 py-2 outline-none hover:bg-violet-800 hover:text-slate-50 data-[focus-visible]:ring data-[focus-visible]:ring-orange-300 dark:border-slate-50 dark:hover:bg-green-300 dark:hover:text-zinc-900 lg:mr-4 ${
              profile === 'cycling'
                ? 'border-violet-800 bg-violet-800 text-slate-50 dark:border-green-300 dark:bg-green-300 dark:text-zinc-900'
                : 'text-zinc-900 dark:text-slate-50'
            }`}
          >
            Cycling
          </Button>
        </div>
        <div className='sm:mb-16 sm:mt-4 lg:mt-0'>
          <div className='flex justify-center'>
            <h1 className='rounded-b-md px-3 py-1'>
              Total distance: {formatDistance(totalDistance)}
            </h1>
            <div className='sm:hidden lg:block'>
              <HelpButton />
            </div>
          </div>
          <div ref={mapRef} className='z-0 h-[65vh] rounded-xl' />
        </div>
      </div>
    </div>
  );
};

export default Map;
