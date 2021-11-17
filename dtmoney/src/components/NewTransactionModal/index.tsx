import Modal from 'react-modal'
import { Container } from './styles'
import iconClose from '../../assets/close.svg'
interface NewTransactionModalProps {
   isOpenModal: boolean;
   onRequestCloseModal: () => void;
}

export function NewTransactionModal (props: NewTransactionModalProps) {
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

            <input 
               type="text"
               placeholder='Categoria' 
            />

            <button type="submit">Cadastrar</button>
         </Container>
		</Modal>
   )
}