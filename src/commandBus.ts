import { CommandBus } from './cqrs/commandBus'

import { KillDragonHandler } from './commands/handlers/KillDragonHandler'

export const commandBus = new CommandBus()

commandBus.register([new KillDragonHandler()])
