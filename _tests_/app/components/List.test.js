// __tests__/List.test.tsx
import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import List from './../../../app/components/List';
import "@testing-library/jest-dom";

const queryClient = new QueryClient();

describe('List component', () => {
  it('renders loading state initially', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <List />
      </QueryClientProvider>
    );
    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
  });

});



