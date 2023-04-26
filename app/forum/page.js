import { connectDB } from "@/util/database";
import ListItem from "./ListItem";
import Link from "next/link";

export default async function Forum() {
  const client = await connectDB;
  const db = client.db("forum");
  let result = await db.collection("post").find().toArray();

  return (
    <div className="list-bg">
      <Link href="/forum/write">게시물 작성</Link>
      <ListItem result={result} />
    </div>
  );
}
