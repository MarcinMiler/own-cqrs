import 'reflect-metadata'

import { ICommand } from '../interfaces/commands/command.interface'
import { COMMAND_HANDLER_METADATA } from '../constants/command-handler'

export const CommandHandler = (command: ICommand): ClassDecorator => (
    target: object
) => Reflect.defineMetadata(COMMAND_HANDLER_METADATA, command, target)
