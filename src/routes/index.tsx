import * as React from 'react';
import { createFileRoute } from '@tanstack/react-router';
import { Foo } from '../components/foo';

export const Route = createFileRoute('/')({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <div
      style={{
        backgroundColor: 'black',
        color: 'white',
        padding: '20px',
        height: '100vh',
      }}
    >
      <Foo />
    </div>
  );
}
