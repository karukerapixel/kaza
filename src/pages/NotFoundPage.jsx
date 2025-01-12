import { NotFoundPageContent, NotFoundPageRedirectLink, NotFoundPageWrapper } from "../styles/NotFoundPage";


const NotFoundPage = () => {
  return (
    <main>
      <NotFoundPageWrapper>
        <NotFoundPageContent>
          <h1>404</h1>
          <h2>Oups! La page que vous demandez n'existe pas.</h2>
        </NotFoundPageContent>
        <NotFoundPageRedirectLink to={'/'}>
          Retournez à la page d'accueil
        </NotFoundPageRedirectLink>
      </NotFoundPageWrapper>
    </main>
  );
};

export default NotFoundPage;
