import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Suspense } from 'react';
import AppBar from 'components/AppBar/AppBar';
import { Container } from './SharedLayoutStyled';


export default function SharedLayout() {
  return (
    <Container>
       <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </Container>
  );
}