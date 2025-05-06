import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';
import { Data } from '../../../types';

type Props = {
  data: Data;
};

const Chart = ({ data }: Props) => {
  const workouts = data.workouts.map((workout) => ({
    ...workout,
    date: new Date(workout.date).toLocaleDateString('en-GB'),
  }));
  return (
    <div className='h-[200px] w-full lg:h-[400px]'>
      <ResponsiveContainer
        minWidth='0'
        minHeight='undefined'
        aspect={undefined}
      >
        <LineChart
          data={workouts}
          margin={{
            top: 10,
            right: 20,
            left: 0,
            bottom: 0,
          }}
        >
          <Tooltip
            contentStyle={{
              backgroundColor: 'rgb(39 39 42)',
              border: 'none',
              borderRadius: '0.25rem',
            }}
          />
          <Line
            type='monotone'
            dataKey='distance'
            stroke='rgb(134 239 172)'
            activeDot={{ r: 8 }}
          />
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='date' dy={10} />
          <YAxis type='number' unit=' km' domain={[0, 20]} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
export default Chart;
