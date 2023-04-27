import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import { authOptions } from "./auth/[...nextauth]";
import { getServerSession } from "next-auth";

export default async function handler(req, res) {
  if (req.method == "POST") {
    const session = await getServerSession(req, res, authOptions);
    if (!session) {
      res.status(401).json({ message: "로그인이 필요합니다." });
      return;
    }
    req.body = JSON.parse(req.body);
    let 저장할거 = {
      content: req.body.comment,
      parent: new ObjectId(req.body._id),
      author: session.user.email,
    };

    let db = (await connectDB).db("forum");
    await db.collection("comment").insertOne(저장할거);
    res.status(200).json(저장할거);
  } else if (req.method == "GET") {
    let db = (await connectDB).db("forum");
    let result = await db
      .collection("comment")
      .find({ parent: new ObjectId(req.query.id) })
      .toArray();
    res.status(200).json(result);
  }
}
