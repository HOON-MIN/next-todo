import React from 'react';
import { GetServerSideProps, NextPage } from 'next';
import TodoList from '../components/TodoList';
import { getTodosAPI } from '../lib/api/todo';
import { TodoType } from '../types/todo';

interface Iprops {
    todos: TodoType[];
}

const app: NextPage<Iprops> = ({ todos }) => {
    console.log(process.env.NEXT_PUBLIC_API_URL, '클라이언트');
    return <TodoList todos={todos} />;
};

export const getServerSideProps: GetServerSideProps = async () => {
    try {
        console.log(process.env, '서버');
        const { data } = await getTodosAPI();
        return { props: { todos: data } };
    } catch (e) {
        console.log(e);
        return { props: { todos: [] } };
    }
};

export default app;
