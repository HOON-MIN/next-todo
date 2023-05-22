import React from "react";
import { NextPage } from "next";
import TodoList from "../components/TodoList";
import { TodoType } from "../types/todo";

const todos: TodoType[] = [
    { id : 1 , text: "마트 가서 장보기1", color :"blue" , checked : false},
    { id : 2 , text: "마트 가서 장보기2", color :"green" , checked : false},
    { id : 3 , text: "마트 가서 장보기3", color :"orange" , checked : true},
    { id : 4 , text: "마트 가서 장보기4", color :"yellow" , checked : true},
    { id : 5 , text: "마트 가서 장보기5", color :"navy", checked : false},
    { id : 6 , text: "마트 가서 장보기6", color :"red" , checked : false},
];

const app: NextPage = () => {
    return <TodoList todos={todos}/>;
};

export default app;