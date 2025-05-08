import {
  Cell,
  Column,
  Row,
  Table,
  TableBody,
  TableHeader,
} from 'react-aria-components';
import { Total } from '../../types';
import { formatDuration } from '../../utils/formatDuration';

interface Props {
  totals: Array<Total>;
}

const TotalsTable = ({ totals }: Props) => {
  return (
    <Table className='mt-4 w-full' aria-label='Workouts'>
      <TableHeader className='border-b border-zinc-700 bg-transparent text-center text-zinc-800 dark:text-slate-100'>
        <Column isRowHeader>Type</Column>
        <Column>Count</Column>
        <Column>Distance</Column>
        <Column>Duration</Column>
      </TableHeader>
      <TableBody items={totals} className={'text-zinc-800 dark:text-slate-100'}>
        {(total) => (
          <Row id={total.type} className='border-b border-zinc-700 text-center'>
            <Cell className='py-2'>{total.type}</Cell>
            <Cell className='py-2'>{total._count.type}</Cell>
            <Cell className='py-2'>{total._sum.distance} km</Cell>
            <Cell className='py-2'>{formatDuration(total._sum.duration)}</Cell>
          </Row>
        )}
      </TableBody>
    </Table>
  );
};
export default TotalsTable;
