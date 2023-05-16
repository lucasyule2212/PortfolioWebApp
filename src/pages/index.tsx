import Main from '@/layouts/Main';
import Teste from '@/components/Teste';
import MainContainer from '@/layouts/MainContainer';
import SidebarChanels from '@/layouts/SidebarChanels/indext';

const Index = () => {
  return (
    <Main>
      <MainContainer>
        <SidebarChanels />
        <Teste />
      </MainContainer>
    </Main>
  );
};

export default Index;
