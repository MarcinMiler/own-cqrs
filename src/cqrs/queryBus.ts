import * as R from 'ramda'
import 'reflect-metadata'

import { IQueryHandler } from './interfaces/queries/query-handler.interface'
import { IQuery } from './interfaces/queries/query.interface'
import { IQueryResult } from './interfaces/queries/query-result.interface'
import { QUERY_HANDLER_METADATA } from './constants/query-handler'

export type QueryHandlerType = IQueryHandler<IQuery, IQueryResult>

export class QueryBus {
    private availableHandlers = new Map<string, QueryHandlerType>()

    async execute<T extends IQuery, TResult extends IQueryResult>(query: T) {
        const handler = this.availableHandlers.get(this.getQueryName(query))

        const result = await handler.execute(query)

        return result as TResult
    }

    register(handlers: QueryHandlerType[]) {
        handlers.forEach(handler => this.registerHandler(handler))
    }

    private setHandler(handler: QueryHandlerType, name: string) {
        this.availableHandlers.set(name, handler)
    }

    private registerHandler(handler: QueryHandlerType) {
        const target = this.reflectQueryName(handler)

        this.setHandler(handler, target.name)
    }

    private getQueryName(query): string {
        const { constructor } = Object.getPrototypeOf(query)
        return constructor.name as string
    }

    private reflectQueryName(handler: QueryHandlerType): FunctionConstructor {
        return Reflect.getMetadata(QUERY_HANDLER_METADATA, handler.constructor)
    }
}
