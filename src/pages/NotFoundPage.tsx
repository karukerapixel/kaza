import React from 'react';
import { NotFoundPageContent, NotFoundPageRedirectLink, NotFoundPageWrapper } from '../styles/NotFoundPage';

const NotFoundPage: React.FC = () => {
  return (
    <main>
      <NotFoundPageWrapper>
        <NotFoundPageContent>
          <h1>404</h1>
          <h2>Oups! La page que vous demandez n&apos;existe pas.</h2>
        </NotFoundPageContent>
        <NotFoundPageRedirectLink to={'/'}>Retournez à la page d&apos;accueil</NotFoundPageRedirectLink>
      </NotFoundPageWrapper>
    </main>
  );
};

export default NotFoundPage;
