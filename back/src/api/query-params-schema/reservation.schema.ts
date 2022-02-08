import { ControllerParamsContext, injectable, singleton } from '@triptyk/nfw-core';
import { CheckTypes, QueryParamsSchemaInterface } from '../../json-api/interfaces/query-params.interface.js';

@singleton()
@injectable()
export class ReservationQueryParamsSchema implements QueryParamsSchemaInterface {
  allowedIncludes (_context: ControllerParamsContext): CheckTypes[] | Promise<CheckTypes[]> {
    return ['movie', 'client'];
  }

  allowedFields (_context: ControllerParamsContext): CheckTypes[] | Promise<CheckTypes[]> {
    return [/client.(.+)/g, /movie.(.+)/g, 'number', 'date'];
  }

  allowedSortFields (_context: ControllerParamsContext): CheckTypes[] | Promise<CheckTypes[]> {
    return [];
  }

  allowedFilters (_context: ControllerParamsContext): CheckTypes[] | Promise<CheckTypes[]> {
    return ['id.$eq'];
  }
}
