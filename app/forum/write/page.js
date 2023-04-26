export default function Write() {
  return (
    <div className="p-20">
      <h2>글쓰기</h2>
      <form action="/nextjs/api/write" method="post">
        <input type="text" name="title" placeholder="제목" required />
        <input type="text" name="content" placeholder="내용" required />
        <button type="submit">글쓰기</button>
      </form>
    </div>
  );
}
