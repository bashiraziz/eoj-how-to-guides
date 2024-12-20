// app/layout.tsx
import '../app/globals.css';
import Sidebar from '../components/Sidebar';
import { ReactNode } from 'react';

export const metadata = {
  title: 'PlanEOJ User Guides',
  description: 'Plan EOJ user guides',
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <Sidebar />
        <main style={{ marginLeft: '270px', padding: '20px' }}>
          {children}
        </main>
      </body>
    </html>
  );
}