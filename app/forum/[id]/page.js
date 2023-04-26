import { ObjectId } from "mongodb";
import { connectDB } from "../../util/database";

export default async function Detail(props) {
  const client = await connectDB;
  const db = client.db("forum");
  let result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(props.params.id) });

  return (
    <div>
      <h2>상세페이지</h2>
      <h4>{result.title}</h4>
      <p>{result.content}</p>
    </div>
  );
}