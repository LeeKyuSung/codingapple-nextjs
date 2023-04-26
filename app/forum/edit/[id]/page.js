import { ObjectId } from "mongodb";
import { connectDB } from "@/util/database";

export default async function Write(props) {
  const client = await connectDB;
  const db = client.db("forum");
  let result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(props.params.id) });

  return (
    <div className="p-20">
      <h2>수정페이지</h2>
      <form action="/api/edit" method="post">
        <input type="text" name="title" defaultValue={result.title} required />
        <input
          type="text"
          name="content"
          defaultValue={result.content}
          required
        />
        <input
          style={{ display: "none" }}
          type="text"
          name="_id"
          defaultValue={result._id}
        />
        <button type="submit">수정</button>
      </form>
    </div>
  );
}
