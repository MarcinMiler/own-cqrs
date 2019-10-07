import express from 'express'

import { commandBus } from './commandBus'
import { queryBus } from './queryBus'

import { KillDragonCommand } from './commands/impl/KillDragonCommand'
import { GetDragonQuery } from './queries/impl/GetDragonQuery'

const server = express()

server.get('/killDragon', (req, res) => {
    commandBus.execute(new KillDragonCommand('1'))

    res.json({ lol: 'lol' })
})

server.get('/dragon', async (req, res) => {
    const dragon = await queryBus.execute<{}, string>(new GetDragonQuery())

    res.json({ dragon })
})

server.listen(4000, () => console.log('Server started 🚀'))
