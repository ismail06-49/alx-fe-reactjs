import React from 'react';
import { it, expect, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import Search from './Search';
import '@testing-library/jest-dom/vitest'

describe('Search', () => {
    it('should render correctly', () => {
        render(<Search />);

        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
    })
})

describe('group', () => {
    it('should', () => {
        expect(1).toBeTruthy();
    })
})