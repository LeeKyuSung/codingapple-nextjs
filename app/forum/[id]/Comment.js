"use client";

import { useEffect, useState } from "react";

export default function Comment(props) {
  const [comment, setComment] = useState("");
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`/api/comment?id=${props._id}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      });
  }, []);
  return (
    <div>
      <div>댓글 목록 보여줄 부분</div>
      {data.map((v) => {
        return (
          <div key={v._id}>
            <div>{v.content}</div>
            <div>작성자 : {v.author}</div>
          </div>
        );
      })}

      <input
        onChange={(e) => {
          setComment(e.target.value);
        }}
        value={comment}
      />
      <button
        onClick={() => {
          fetch("/api/comment", {
            method: "POST",
            body: JSON.stringify({
              comment: comment,
              _id: props._id,
            }),
          }).then((res) => {
            if (res.status == 200) {
              res.json().then((res) => {
                setData([...data, res]);
                setComment("");
              });
            } else {
              res.json().then((res) => {
                alert(res.message);
              });
            }
          });
        }}
      >
        댓글 등록
      </button>
    </div>
  );
}
