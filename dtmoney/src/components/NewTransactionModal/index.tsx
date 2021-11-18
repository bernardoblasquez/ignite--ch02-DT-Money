import Modal from 'react-modal'
import { Container, TransactionTypeContainer, RadioBox } from './styles'
import iconClose from '../../assets/close.svg'
import iconIncome from '../../assets/income.svg'
import iconOutcome from '../../assets/outcome.svg'
import { useState } from 'react'
interface NewTransactionModalProps {
   isOpenModal: boolean;
   onRequestCloseModal: () => void;
}

export function NewTransactionModal (props: NewTransactionModalProps) {
   
   const [type, setType] = useState("")

   return(
      <Modal 
				isOpen={props.isOpenModal}
				onRequestClose={props.onRequestCloseModal}
            overlayClassName="react-modal-overlay" 
            className="react-modal-content" 
			>
         
         <button 
            className="react-modal-close"
            type="button" 
            onClick={props.onRequestCloseModal}
         >
            <img src={iconClose} alt="Fechar Janela" />
         </button>   

         <Container>
				<h2> Cadastrar Transações </h2>

            <input 
               type="text"
               placeholder='Título' 
            />

            <input 
               type="number"
               placeholder='Título' 
            />

            <TransactionTypeContainer>
               <RadioBox 
                  type='button'
                  onClick={() => {setType('deposit')}}
                  isActive={type === 'deposit'}
                  activeColor="green"
               >
                  <img src={iconIncome} alt="Entrada" />
                  <span>Entrada</span>
               </RadioBox>
               <RadioBox 
                  type='button'
                  onClick={() => {setType('withdraw')}}
                  isActive={type === 'withdraw'}   
                  activeColor="red"
               >
                  <img src={iconOutcome} alt="Saída" />
                  <span>Saída</span>
               </RadioBox>
            </TransactionTypeContainer>

            <input 
               type="text"
               placeholder='Categoria' 
            />

            <button type="submit">Cadastrar</button>
         </Container>
		</Modal>
   )
}