import { useQuery } from '@tanstack/react-query';
import {
  Cell,
  Column,
  ResizableTableContainer,
  Row,
  Table,
  TableBody,
  TableHeader,
  TableProps,
} from 'react-aria-components';
import { fetchWorkouts } from '../../api/workouts';
import { Spinner } from '../UI/Spinner';

const WorkoutTable = (props: TableProps) => {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ['workouts'],
    queryFn: fetchWorkouts,
  });
  const columns = [
    { name: 'Id', id: 'id', isRowHeader: true },
    { name: 'Type', id: 'type' },
    { name: 'Date', id: 'date' },
    { name: 'Distance', id: 'distance' },
    { name: 'Duration', id: 'duration' },
  ];

  if (isError) return <p>Error: {error.message}</p>;
  if (isLoading) return <Spinner />;

  const workouts = data;

  return (
    <ResizableTableContainer>
      <Table className='rounded w-fit self-start bg-zinc-800' aria-label='Workouts' {...props}>
        <TableHeader className='p-4 text-center bg-transparent' columns={columns}>
          {(column) => (
            <Column
              className='p-4 text-slate-100 text-left bg-transparent'
              isRowHeader={column.isRowHeader}
            >
              {column.name}
            </Column>
          )}
        </TableHeader>
        <TableBody items={workouts}>
          {(workout) => (
            <Row
              className='rounded text-slate-100 data-[selected]:bg-green-300  data-[selected]:text-zinc-900 '
              columns={columns}
            >
              {(column) => (
                <Cell className='text-left p-4'>{workout[column.id as keyof typeof workout]}</Cell>
              )}
            </Row>
          )}
        </TableBody>
      </Table>
    </ResizableTableContainer>
    //{/*         <div className='mx-auto mt-4 w-5/6 sm:w-2/5'>
    //<WorkoutTable selectionMode='single' defaultSelectedKeys={[2]} />
    //</div> */}
  );
};
export default WorkoutTable;
