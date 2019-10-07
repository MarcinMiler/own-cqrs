import { CommandHandler } from '../../cqrs/decorators/command-handler.decorator'
import { ICommandHandler } from '../../cqrs/interfaces/commands/command-handler.interface'
import { KillDragonCommand } from '../impl/KillDragonCommand'

@CommandHandler(KillDragonCommand)
export class KillDragonHandler implements ICommandHandler<KillDragonCommand> {
    constructor() {}

    execute(command: KillDragonCommand) {
        console.log(command)
    }
}
