import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from './TodoList';

test('renders TodoList component with initial demo todos', () => {
    render(<TodoList />);
    
    // Assuming the demo todos are "Buy groceries", "Walk the dog", and "Read a book"
    const demoTodos = ['Buy groceries', 'Walk the dog', 'Read a book'];

    demoTodos.forEach(todo => {
        const todoItem = screen.getByText(todo);
        expect(todoItem).toBeInTheDocument();
    });
});

test('check add todo functionality', () => {
    render(<TodoList />);

    fireEvent.click(screen.getByText('AddTodoForm'))
})