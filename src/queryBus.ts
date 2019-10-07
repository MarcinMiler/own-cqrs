import { QueryBus } from './cqrs/queryBus'
import { GetDragonHandler } from './queries/handlers/GetDragonHandler'

export const queryBus = new QueryBus()

queryBus.register([new GetDragonHandler()])
