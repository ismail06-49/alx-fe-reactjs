import React from 'react';
import { it, expect, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import Search from './Search';
import '@testing-library/jest-dom/vitest'

describe('Search', () => {
    it('should render correctly', () => {
        render(<Search />);

        const user = screen.getByRole('userInput');
        const location = screen.getByRole('locationInput');
        const repo = screen.getByRole('repoInput')
        const button = screen.getByRole('button');

        expect(user).toBeInTheDocument();
        expect(location).toBeInTheDocument();
        expect(repo).toBeInTheDocument();
        expect(button).toBeInTheDocument();
    })
})
