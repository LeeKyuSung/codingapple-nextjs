import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(요청, 응답) {
  if (요청.method == "POST") {
    if (!요청.body.title || !요청.body.content) {
      return 응답.status(400).json({ message: "제목과 내용을 입력해주세요." });
    }
    try {
      const db = (await connectDB).db("forum");
      let result = await db.collection("post").updateOne(
        { _id: new ObjectId(요청.body._id) },
        {
          $set: {
            title: 요청.body.title,
            content: 요청.body.content,
          },
        }
      );
      console.log(result);
      return 응답.status(200).redirect(`/forum/${요청.body._id}`);
    } catch (e) {
      return 응답.status(500).json({ message: e.message });
    }
  } else {
    return 응답.status(404);
  }
}
