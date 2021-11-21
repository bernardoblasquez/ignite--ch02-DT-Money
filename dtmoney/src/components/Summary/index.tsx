import { useContext } from 'react';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg'; 
import { TransactionsContext } from '../../TransactionsContext';

import { Container } from './styles';

export function Summary () {

   const { transactions } = useContext(TransactionsContext);
   console.log(transactions)

   return(
      <Container>
         <div>
            <header>
               <p>entradas</p>
               <img src={incomeImg} alt="Entradas" />
            </header>
            <strong>R1100,00</strong>
         </div>
         <div>
            <header>
               <p>Saídas</p>
               <img src={outcomeImg} alt="saidas" />
            </header>
            <strong> - R500,00</strong>
         </div>
         <div className='highlight-background'>
            <header>
               <p>Total</p>
               <img src={totalImg} alt="total" />
            </header>
            <strong>R600,00</strong>
         </div>  
      </Container>
   )
}