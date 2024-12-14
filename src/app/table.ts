enum ToDoStatus {
    Todo = "未着手",
    InProgress = "進行中",
    Done = "完了",
    Cancelled = "キャンセル", // 必要に応じて追加
}

interface ToDo {
    id: number;
    title: string;
    contents: string;
    start_date: Date;
    end_date: Date;
    status: ToDoStatus;
}

export const dataArray: ToDo[] = [
    {
        id: 1,
        title: "買い物",
        contents: "牛乳とパンを買う",
        start_date: new Date("2024-03-10T10:00:00"),
        end_date: new Date("2024-03-10T11:00:00"),
        status: ToDoStatus.Todo
    },
    {
        id: 2,
        title: "会議",
        contents: "プロジェクトの進捗会議",
        start_date: new Date("2024-03-15T13:00:00"),
        end_date: new Date("2024-03-15T15:00:00"),
        status: ToDoStatus.Todo
    },
    {
        id: 3,
        title: "歯医者",
        contents: "定期検診の予約",
        start_date: new Date("2024-03-20T09:00:00"),
        end_date: new Date("2024-03-20T09:30:00"),
        status: ToDoStatus.Done
    }
  ];