import {create } from "zustand"
import {Channel, ChannelType, Server} from "@prisma/client"




export type ModalType = "createServer" | "invite" |"editServer" | "members" |
"createChannel" |"leaveServer" | "deleteServer" |"deleteChannel" |"editChannel" |"messageFile"|"deleteMessage"// type that mean we create a personel modal with name ModalType
interface ModalData{
    server?: Server
    channel?:Channel
    channelType?:ChannelType
    apiUrl?:string
    query?:Record<string,any>
}
interface ModalStore {//define types of props 
    type:ModalType |null
    isOpen:boolean
    data:ModalData
    onOpen:(type:ModalType,data?:ModalData)=>void
    onClose:()=>void
}

//create a store with zustand 
//Your store is a hook! You can put anything in it: primitives, objects, functions. 
//State has to be updated immutably and the set function merges state to help it.
//ModalStore is state
export const useModal = create<ModalStore>((set)=>({
    type:null,
    isOpen:false,
    data:{},
    onOpen:(type,data={})=>{set({isOpen:true,type,data})},
    onClose:()=>set({type:null,isOpen:false})
}))

