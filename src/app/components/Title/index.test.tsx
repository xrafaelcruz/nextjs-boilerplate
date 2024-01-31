import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Providers from '@/app/providers/styled';

import Title from '.';

describe('Title', () => {
  it('renders a heading', () => {
    render(
      <Providers>
        <Title>Teste</Title>
      </Providers>,
    );

    const heading = screen.getByRole('heading', { level: 1 });

    expect(heading).toBeInTheDocument();
  });
});
