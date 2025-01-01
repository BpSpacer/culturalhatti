import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";

const f = createUploadthing();

export const ourFileRouter = {
  imageUploader: f({ image: { maxFileSize: "4MB", maxFileCount: 5 } })
    .middleware(async ({ req }) => {
      const { getUser } = getKindeServerSession();
      const user = await getUser();

      if (!user) throw new UploadThingError("Unauthorized");
      return { userId: user.id };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("Upload complete for userId:", metadata.userId);
      console.log("file url", file.url);
      // Optionally store file metadata in your DB here
      return { uploadedBy: metadata.userId, fileUrl: file.url };
    }),

  sellerDocumentUploader: f({
    image: { maxFileSize: "4MB", maxFileCount: 2 }, // For CNIC images (front/back)
    blob: { maxFileSize: "4MB", maxFileCount: 1 }, // For Checkbook or other docs
  })
    .middleware(async ({ req }) => {
      const { getUser } = getKindeServerSession();
      const user = await getUser();

      if (!user) throw new UploadThingError("Unauthorized");
      return { userId: user.id };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("Upload complete for userId:", metadata.userId);
      console.log("file url", file.url);
      // Save file URLs and metadata in your database
      return { uploadedBy: metadata.userId, fileUrl: file.url };
    }),

} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
