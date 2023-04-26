import { connectDB } from "./../util/database";
import Link from "next/link";
import DetailLink from "./DetailLink";

export default async function Forum() {
  const client = await connectDB;
  const db = client.db("forum");
  let result = await db.collection("post").find().toArray();

  return (
    <div className="list-bg">
      {result.map((글, i) => {
        return (
          <div className="list-item" key={i}>
            <Link href={`/forum/${글._id}`}>
              <h4>{글.title}</h4>
            </Link>
            <DetailLink />
          </div>
        );
      })}
    </div>
  );
}
