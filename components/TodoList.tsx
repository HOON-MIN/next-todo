import React, { useCallback, useMemo } from 'react';
import styled from 'styled-components';
import palette from '../styles/palette';
import { TodoType } from '../types/todo';

const Container = styled.div`
    width: '100%';
    .todo-list-header {
        padding: 12px;
        border-bottom: 1px solid ${palette.gray};

        .todo-list-last-todo {
            font-size: 14px;
            span {
                margin-left: 8px;
            }
        }
    }
`;

interface IProps {
    todos: TodoType[];
}

type ObjectIndexType = {
    [key: string]: number | undefined;
};

const TodoList: React.FC<IProps> = ({ todos }) => {
    const getTodoColorsNum = useCallback(() => {
        let red = 0;
        let orange = 0;
        let yellow = 0;
        let green = 0;
        let blue = 0;
        let navy = 0;
        todos.forEach((todo) => {
            switch (todo.color) {
                case 'red':
                    red += 1;
                    break;
                case 'orange':
                    orange += 1;
                    break;
                case 'yellow':
                    yellow += 1;
                    break;
                case 'green':
                    green += 1;
                    break;
                case 'blue':
                    blue += 1;
                    break;
                case 'navy':
                    navy += 1;
                    break;
            }
        });
        return {
            red,
            orange,
            yellow,
            green,
            blue,
            navy,
        };
    }, [todos]);
    const todoColorNum = useMemo(getTodoColorsNum, [todos]);

    const todoColorNum2 = useMemo(() => {
        const colors: ObjectIndexType = {};
        todos.forEach((todo) => {
            const value = colors[todo.color];
            if (!value) {
                colors[`${todo.color}`] = 1;
            } else {
                colors[`${todo.color}`] = value + 1;
            }
        });
        return colors;
    }, [todos]);
    console.log(todoColorNum2);

    return (
        <Container>
            <div className="todo-list-header">
                <p className="todo-list-last-todo">
                    남은 TODO<span>{todos.length}개</span>
                </p>
            </div>
        </Container>
    );
};

export default TodoList;
