import {
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  AreaChart,
  Area,
} from 'recharts';
import { Data } from '../../../types';
import { useMemo } from 'react';

type Props = {
  data: Data;
  isDark: boolean;
};

const Chart = ({ data, isDark }: Props) => {
  const workouts = data.workouts.map((workout) => ({
    ...workout,
    date: new Date(workout.date).toLocaleDateString('en-GB'),
  }));

  const theme = useMemo(() => {
    return isDark
      ? {
          stroke: '#86efac',
          tooltipBg: '#18181b',
          text: '#f1f5f9',
        }
      : {
          stroke: '#5b21b6',
          tooltipBg: '#f8fafc',
          text: '#27272a',
        };
  }, [isDark]);

  return (
    <div className='h-[200px] w-full lg:h-[400px]'>
      <ResponsiveContainer
        minWidth='0'
        minHeight='undefined'
        aspect={undefined}
      >
        <AreaChart
          data={workouts}
          margin={{
            top: 40,
            right: 60,
            left: 20,
            bottom: 20,
          }}
        >
          <defs>
            <linearGradient id='colorDistance' x1='0' y1='0' x2='0' y2='1'>
              <stop offset='5%' stopColor={theme.stroke} stopOpacity={0.8} />
              <stop offset='95%' stopColor={theme.stroke} stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='date' dy={16} reversed={true} stroke={theme.text} />
          <YAxis
            type='number'
            dataKey='distance'
            domain={[
              0,
              Math.ceil(Math.max(...workouts.map((w) => w.distance))),
            ]}
            unit=' km'
            stroke={theme.text}
          />
          <Area
            type='monotone'
            dataKey='distance'
            stroke={theme.stroke}
            fillOpacity={1}
            fill='url(#colorDistance)'
          />
          <Tooltip
            contentStyle={{
              backgroundColor: theme.tooltipBg,
              border: 'none',
              borderRadius: '0.25rem',
              color: theme.text,
            }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};
export default Chart;
