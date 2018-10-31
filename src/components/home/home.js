import React from "react";
import { Row, Col, Card } from 'react-materialize';
import UserProfile from '../user_profile/user_profile'
import Experience from '../experience/experience'
import company_avatar from '../../images/e-commerce.png';
import company_avatar2 from '../../images/twitter.jpg';
import company_avatar3 from '../../images/social-network.jpg';

const Home = () => (
  <Row>
    <Col m={8} s={14}>
      <UserProfile />
    </Col>
    <Col m={12} s={12}>
        <h5 className="subtitle">Sobre Mim</h5>
        <Card>
          <div>
          Após 8 anos em Call Center liderando e desenvolvendo pessoas, escolhi a tecnologia como objetivo de carreira, e a Laboratoria me proporcionou a oportunidade para essa transição
, me desenvolvendo em skills técnicos e sócio emocionais para que assim eu possa trilhar o caminho em Front-End.
          </div>
        </Card>
        <h5 className="subtitle">Projetos</h5>
   

        
        <Experience title="E-commerce"
                    company="Buy and use your force!"
                    description="E-commerce utilizando Api do mercado livre, hospedagem pelo Firebase."
                    avatar={company_avatar}
        />
        <Experience title="Desafio Criar um Twitter"
                    company="Twitter"
                    description="Sendo um dos primeiros desafio da Laboratoria essa é a replica do Twitter, onde podemos postar com o horário atual."
                    avatar={company_avatar2}                    
        /> 
        <Experience title="Desafio criar uma Rede Social"
                    company="Pixel Tour"
                    description="Trabalhando em dupla, a proposta era criar uma rede social mobile first, de tema livre e utilizar o firebase para criar um sistema de registro e login, seguir outros usuários, publicar, editar e deletar mensagens."
                    avatar={company_avatar3}  
                    link="https://social-network-undefined.firebaseapp.com"                  
        />
    </Col>
  </Row>
);

export default Home;