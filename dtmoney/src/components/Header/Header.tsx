import { useState } from 'react';
import Modal from 'react-modal';
import logoImg from '../../assets/logoDTMoney.svg';
import { Container, Content } from './styles';

interface HeaderProps {
   onOpenTransactionModal: () => void ;
}

export function Header(props: HeaderProps) {

   return(
      <Container>
         <Content>
            <img src={logoImg} alt="dt money" />
            <button 
               type="button"
               onClick={props.onOpenTransactionModal}
            >
               Nova transação
            </button>

            
         </Content>
      </Container>
   )
}