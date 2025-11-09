import React from 'react';
import {render, screen} from '@testing-library/react';
import {describe, it, expect} from 'vitest';
import '@testing-library/jest-dom/vitest';

import IndividualComment from './IndividualComment';

describe('Individual Comment Test', () => { //Any name here
    const comment = {
        name: "Albert",
        body: "This is my first comment!!"
    }
    it('renders the comment and content', () => {
        render(<IndividualComment value={comment} />);
        expect(screen.getByText('Name: Albert')).toBeInTheDocument();
        expect(screen.getByText('"This is my first comment!!"')).toBeInTheDocument();
    });
});
