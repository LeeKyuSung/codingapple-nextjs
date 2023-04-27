import { connectDB } from "@/util/database";
import { getServerSession } from "next-auth";
import { authOptions } from "./auth/[...nextauth]";

export default async function handler(요청, 응답) {
  if (요청.method == "POST") {
    let session = await getServerSession(요청, 응답, authOptions);

    if (!session) {
      return 응답.status(401).json({ message: "로그인이 필요합니다." });
    } else {
      요청.body.author = session.user.email;
    }

    if (!요청.body.title || !요청.body.content) {
      return 응답.status(400).json({ message: "제목과 내용을 입력해주세요." });
    }

    try {
      const db = (await connectDB).db("forum");
      let result = await db.collection("post").insertOne(요청.body);
      return 응답.status(200).redirect(`/forum/${result.insertedId}`);
    } catch (e) {
      return 응답.status(500).json({ message: e.message });
    }
  } else {
    return 응답.status(404);
  }
}
