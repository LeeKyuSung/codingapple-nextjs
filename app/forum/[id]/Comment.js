"use client";

import { useState } from "react";

export default function Comment(props) {
  const [comment, setComment] = useState("");
  return (
    <div>
      <div>댓글 목록 보여줄 부분</div>
      <input
        onChange={(e) => {
          setComment(e.target.value);
        }}
      />
      <button
        onClick={() => {
          fetch("/api/comment", {
            method: "POST",
            body: JSON.stringify({
              comment: comment,
              _id: props._id,
            }),
          });
        }}
      >
        댓글 등록
      </button>
    </div>
  );
}
