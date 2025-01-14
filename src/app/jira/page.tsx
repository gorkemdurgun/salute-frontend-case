import BoardColumn from "@/components/board/BoardColumn";

export default function BoardPage() {
  return (
    <div className="flex flex-col">
      {/* Breadcrumb */}
      {/* Title */}
      {/* Filters */}
      {/* Lists */}
      <div className="grid grid-cols-4 gap-4">
        <BoardColumn id="todo" title="To Do" taskIds={["1", "2", "3"]} />
      </div>
    </div>
  );
}
