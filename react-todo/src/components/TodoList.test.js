import { render, screen } from '@testing-library/react';
import TodoList from '../components/TodoList';

test('renders TodoList component with initial demo todos', () => {
    render(<TodoList />);
    
    // Assuming the demo todos are "Buy groceries", "Walk the dog", and "Read a book"
    const demoTodos = ['Buy groceries', 'Walk the dog', 'Read a book'];

    demoTodos.forEach(todo => {
        const todoItem = screen.getByText(todo);
        expect(todoItem).toBeInTheDocument();
    });
});