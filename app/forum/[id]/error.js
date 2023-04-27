"use client";

export default function Error({ error, reset }) {
  return (
    <div>
      <h2>에러가 발생했습니다.</h2>
      {/* <h4>{error.toString()}</h4> */}
      {/* <button onClick={reset()}>돌아가기</button> */}
    </div>
  );
}
