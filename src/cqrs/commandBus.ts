import 'reflect-metadata'

import { ICommand } from './interfaces/commands/command.interface'
import { ICommandHandler } from './interfaces/commands/command-handler.interface'
import { COMMAND_HANDLER_METADATA } from './constants/command-handler'

type CommandHandlerType = ICommandHandler<ICommand>

export class CommandBus {
    private availableHandlers = new Map<string, CommandHandlerType>()

    execute<T extends ICommand>(command: T) {
        const handler = this.availableHandlers.get(this.getCommandName(command))

        handler.execute(command)
    }

    register(handlers: CommandHandlerType[]) {
        handlers.forEach(handler => this.registerHandler(handler))
    }

    private setHandler<T extends ICommand>(
        handler: ICommandHandler<T>,
        name: string
    ) {
        this.availableHandlers.set(name, handler)
    }

    private registerHandler(handler: CommandHandlerType) {
        const target = this.reflectCommandName(handler)

        this.setHandler(handler, target.name)
    }

    private reflectCommandName(
        handler: CommandHandlerType
    ): FunctionConstructor {
        return Reflect.getMetadata(
            COMMAND_HANDLER_METADATA,
            handler.constructor
        )
    }

    private getCommandName(command: ICommand) {
        const { constructor } = Object.getPrototypeOf(command)
        return constructor.name as string
    }
}
