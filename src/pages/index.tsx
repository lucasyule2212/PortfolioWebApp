import Main from '@/layouts/Main';
import Meta from '@/layouts/Meta';
import Teste from '@/components/Teste';

const Index = () => {
  return (
    <Main
      meta={
        <Meta
          title="Lucas Yule | Full Stack Developer"
          description="
    Welcome to my personal Portfolio web application!
  "
        />
      }
    >
      <Teste />
    </Main>
  );
};

export default Index;
