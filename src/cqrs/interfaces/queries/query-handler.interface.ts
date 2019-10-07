import { IQuery } from './query.interface'

export interface IQueryHandler<T extends IQuery, Res> {
    execute(query: T): Promise<Res>
}
