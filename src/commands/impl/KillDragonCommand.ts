import { ICommand } from '../../cqrs/interfaces/commands/command.interface'

export class KillDragonCommand implements ICommand {
    constructor(public readonly id: string) {}
}
