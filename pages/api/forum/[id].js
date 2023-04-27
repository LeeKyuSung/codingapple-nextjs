import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req, res) {
  if (req.method == "DELETE") {
    let session = await getServerSession(req, res, authOptions);

    if (!session) {
      return res.status(401).json({ message: "로그인이 필요합니다." });
    } else if (session.user.email !== req.body.author) {
      return res.status(401).json({ message: "작성자만 삭제할 수 있습니다." });
    }

    const db = (await connectDB).db("forum");
    const result = await db.collection("post").deleteOne({
      _id: new ObjectId(req.query.id),
    });
    res.status(200).json(result);
  }
}
