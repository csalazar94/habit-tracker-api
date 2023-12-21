import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Section,
  Tailwind,
  Text,
} from '@react-email/components';
import * as React from 'react';

interface WelcomeUserEmailProps {
  firstName?: string;
  activateLink?: string;
}

export const WelcomeUserEmail = ({
  firstName = 'Camilo',
  activateLink = 'https://vercel.com/teams/invite/foo',
}: WelcomeUserEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>Comienza tu Viaje hacia Hábitos Saludables!</Preview>
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans">
          <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] w-[465px]">
            <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
              Bienvenido a <strong>Daily Goals</strong>
            </Heading>
            <Text className="text-black text-[14px] leading-[24px]">
              ¡Hola <strong>{firstName}</strong>!
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              Bienvenido a <strong>Daily Goals</strong>, tu compañero de hábitos
              saludables. Estamos emocionados de que te hayas unido a nosotros
              en esta emocionante aventura hacia una vida más saludable y
              productiva.
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              Esperamos ayudarte a alcanzar tus objetivos de hábitos y te brinde
              una experiencia gratificante.
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              ¡Comienza ahora tu viaje hacia una versión mejor de ti mismo/a!
            </Text>
            <Section className="text-center mt-[32px] mb-[32px]">
              <Button
                pX={20}
                pY={12}
                className="bg-[#000000] rounded text-white text-[12px] font-semibold no-underline text-center"
                href={activateLink}
              >
                Confirmar cuenta
              </Button>
            </Section>
            <Text className="text-black text-[14px] leading-[24px]">
              o copia y pega este enlace en tu navegador:{' '}
              <Link href={activateLink} className="text-blue-600 no-underline">
                {activateLink}
              </Link>
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default WelcomeUserEmail;
