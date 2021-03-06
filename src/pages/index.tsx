import styled from 'styled-components';
import Image from 'next/image';
import { BodyText, Title, Subtitle } from 'components/Text';
import { motion } from 'framer-motion';
import { getSpacing, pxToRem, getBreakpoint } from 'utils/theme';
import Anchor from 'components/Anchor';
import LoginForm from 'forms/LoginForm';

const HomeContainer = styled.div`
  width: 768px;
  height: 90vh;
  margin: auto;
  border-radius: ${pxToRem(8)};
  box-shadow: 0px 10px 10px #ffddff;
  backgroundcolor: ${({ theme }) => theme.colors.lavender};
  display: flex;
  overflow: hidden;
  @media ${getBreakpoint('sm').down} {
    height: 100vh;
    width: 100vw;
  }
`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: ${pxToRem(297)};
  flex: 1;
  margin: auto;
  justify-content: center;
`;

const ImageContainer = styled.div`
  position: relative;
  width: ${pxToRem(327)};
  @media ${getBreakpoint('sm').down} {
    display: none;
  }
`;

const titleAnimation = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.5 } }
};

const subtextAnimation = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { delay: 1.5 } }
};

const Home = () => (
  <HomeContainer>
    <ImageContainer>
      <Image
        src="/images/loginImage.jpg"
        alt="Mulher de óculos olhando para um notebook"
        objectFit="cover"
        quality="100"
        objectPosition="relative"
        layout="fill"
      />
    </ImageContainer>
    <LoginContainer>
      <motion.div variants={titleAnimation} initial="hidden" animate="show">
        <Title>Olá, seja bem-vindo!</Title>
        <Subtitle style={{ marginBottom: getSpacing(5) }}>
          Para acessar a plataforma, faça seu login.
        </Subtitle>
      </motion.div>
      <LoginForm />
      <motion.div variants={subtextAnimation} initial="hidden" animate="show">
        <BodyText style={{ textAlign: 'center', marginTop: getSpacing(5) }}>
          Esqueceu seu login ou senha? Clique <Anchor href="#">aqui</Anchor>.
        </BodyText>
      </motion.div>
    </LoginContainer>
  </HomeContainer>
);

export default Home;
