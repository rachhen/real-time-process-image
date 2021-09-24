import { expressSharp, S3Adapter } from "express-sharp";
import Keyv from "keyv";

const bucketName = process.env.AWS_BUCKET;
const cache = new Keyv({ namespace: "express-sharp" });

if (!bucketName) {
  throw new Error("AWS_BUCKET not set");
}

export default expressSharp({
  cache: cache,
  imageAdapter: new S3Adapter(bucketName),
});
