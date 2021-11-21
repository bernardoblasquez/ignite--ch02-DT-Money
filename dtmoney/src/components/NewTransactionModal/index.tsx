import { FormEvent, useState, useContext } from 'react';
import Modal from 'react-modal';
import { TransactionsContext } from '../../TransactionsContext'
import { Container, TransactionTypeContainer, RadioBox } from './styles'
import iconClose from '../../assets/close.svg';
import iconIncome from '../../assets/income.svg';
import iconOutcome from '../../assets/outcome.svg';
import { api } from '../../services/api';
import { title } from 'process';
import { type } from 'os';

interface NewTransactionModalProps {
   isOpenModal: boolean;
   onRequestCloseModal: () => void;
}

export function NewTransactionModal (props: NewTransactionModalProps) {
   const { createTransaction } = useContext(TransactionsContext);

   const [title, setTitle] = useState("");
   const [amount, setAmount] = useState(0);
   const [category, setCategory] = useState("");
   
   const [type, setType] = useState('deposit');

   async function handleCreateNewTransaction(event: FormEvent) {
      event.preventDefault();
      
      await createTransaction({
         title, 
         amount,
         category, 
         type,
      })

      setTitle('');
      setAmount(0);
      setCategory('');
      setType('deposit');

      props.onRequestCloseModal();
   };

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

         <Container onSubmit={handleCreateNewTransaction}>
				<h2> Cadastrar Transações </h2>

            <input 
               type="text"
               placeholder='Título' 
               value={title}
               onChange={event => setTitle(event.target.value)}
            />

            <input 
               type="number"
               placeholder='Valor'
               value={amount}
               onChange={event => setAmount(Number(event.target.value))} 
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
               value={category}
               onChange={event => setCategory(event.target.value)}
            />

            <button type="submit">Cadastrar</button>
         </Container>
		</Modal>
   )
}