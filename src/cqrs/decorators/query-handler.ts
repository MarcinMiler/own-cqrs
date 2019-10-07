import 'reflect-metadata'

import { IQuery } from '../interfaces/queries/query.interface'
import { QUERY_HANDLER_METADATA } from '../constants/query-handler'

export const QueryHandler = (query: IQuery): ClassDecorator => (
    target: object
) => Reflect.defineMetadata(QUERY_HANDLER_METADATA, query, target)
