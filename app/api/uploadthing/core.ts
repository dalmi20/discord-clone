import { auth } from "@clerk/nextjs";
import { createUploadthing, type FileRouter } from "uploadthing/next";
 
const f = createUploadthing();
const handleAuth = () =>{
    const {userId} =auth()
    if(!userId) throw new Error("Unauthorized")
    return {userId:userId}
} 
/*
All files uploaded to uploadthing are associated with a FileRoute. Think of a FileRoute similar to an endpoint, it has:

Permitted types ["image", "video", etc]
Max file size
(Optional) middleware to authenticate and tag requests
onUploadComplete callback for when uploads are completed
*/
 
// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  serverImage :f({image:{maxFileSize:"4MB",maxFileCount:1}})
  .middleware(()=>handleAuth())
  .onUploadComplete(()=>{}),
  messageFile:f(["image","pdf"]).middleware(()=>handleAuth()).onUploadComplete(()=>{})
} satisfies FileRouter;
 
export type OurFileRouter = typeof ourFileRouter;