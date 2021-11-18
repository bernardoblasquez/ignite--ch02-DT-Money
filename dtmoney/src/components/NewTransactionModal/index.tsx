import Modal from 'react-modal'
import { Container, TransactionTypeContainer, RadioBox } from './styles'
import iconClose from '../../assets/close.svg'
import iconIncome from '../../assets/income.svg'
import iconOutcome from '../../assets/outcome.svg'
import { FormEvent, useState } from 'react'

interface NewTransactionModalProps {
   isOpenModal: boolean;
   onRequestCloseModal: () => void;
}

export function NewTransactionModal (props: NewTransactionModalProps) {
   const [title, setTitle] = useState("");
   const [value, setValue] = useState(0);
   const [category, setCategory] = useState("");
   
   const [type, setType] = useState("deposit");

   function handleCreateNewTransaction(event: FormEvent) {
      event.preventDefault();
      console.log({
         title,
         value, 
         type,
         category
      });

      setTitle('');
      setValue(0);
      setCategory('');
      setType('deposit')
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
               value={value}
               onChange={event => setValue(Number(event.target.value))} 
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