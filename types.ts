import {Server,Profile,Member} from "@prisma/client"
import {Server as NetServer,Socket} from "net"
import { NextApiResponse } from "next"
import {Server as SocketServerIO} from "socket.io"

export type ServerWithMembersWithProfiles = Server & {
    members:(Member & {profile :Profile})[]
}

export type NextApiResponseServerIO = NextApiResponse & {
    socket:Socket &{
        server:NetServer & {
            io:SocketServerIO
        }
    }
}