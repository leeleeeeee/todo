// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Todo } from "@/todo/interface";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  success: boolean;
  data: Todo[] | null;
};

const DB = [
  { checked: false, content: "기본 Todo1", id: 1 },
  { checked: false, content: "기본 Todo2", id: 2 },
] as Todo[];

const postTodo = (todo: Todo) => {
  DB.push(todo);
};

const getTodos = () => {
  return DB;
};

const putTodo = (id: number, todo: Todo) => {
  const targetIndex = DB.findIndex((todo) => todo.id === id);
  if (targetIndex === -1) return;

  DB[targetIndex] = todo;
};

const deleteTodo = (id: number) => {
  const targetIndex = DB.findIndex((todo) => todo.id === id);
  if (targetIndex === -1) return;

  DB.splice(targetIndex, 1);
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    const body = JSON.parse(req.body);
    postTodo({
      ...body,
      id: Date.now(),
    });
    return res.status(201).json({ success: true, data: null });
  }

  if (req.method === "GET") {
    return res.status(200).json({ success: true, data: getTodos() });
  }

  if (req.method === "PUT") {
    const body = JSON.parse(req.body);
    putTodo(body.id, body);
    return res.status(200).json({ success: true, data: null });
  }

  if (req.method === "DELETE") {
    const body = JSON.parse(req.body);
    deleteTodo(body.id);
    return res.status(200).json({ success: true, data: null });
  }
}
