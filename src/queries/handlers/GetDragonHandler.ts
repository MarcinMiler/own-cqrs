import { QueryHandler } from '../../cqrs/decorators/query-handler'
import { GetDragonQuery } from '../impl/GetDragonQuery'

@QueryHandler(GetDragonQuery)
export class GetDragonHandler {
    async execute(query: GetDragonQuery) {
        return {
            name: 'dragon 1'
        }
    }
}
