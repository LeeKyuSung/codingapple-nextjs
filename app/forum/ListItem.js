"use client";
import Link from "next/link";

export default function ListItem({ result }) {
  return (
    <div>
      {result.map((글, i) => {
        return (
          <div className="list-item" key={i}>
            <Link href={`/forum/${글._id}`}>
              <h4>{글.title}</h4>
            </Link>
            {/* <DetailLink /> */}
            <Link href={`/forum/edit/${글._id}`}> 편집 </Link>
            <span
              onClick={(e) => {
                fetch(`/nextjs/api/forum/${글._id}`, {
                  method: "DELETE",
                }).then((res) => {
                  if (res.ok) {
                    alert("삭제되었습니다.");
                    e.target.parentElement.style.opacity = 0;
                    setTimeout(() => {
                      e.target.parentElement.style.display = "none";
                    }, 1000);
                  }
                });
              }}
            >
              삭제
            </span>
          </div>
        );
      })}
    </div>
  );
}
