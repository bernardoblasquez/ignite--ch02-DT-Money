import { useContext } from 'react';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg'; 
import { TransactionsContext } from '../../TransactionsContext';

import { Container } from './styles';

export function Summary () {

   const { transactions } = useContext(TransactionsContext);
   
   const summary = transactions.reduce((acc, transaction) => {
      if(transaction.type === 'deposit'){
         acc.deposit += transaction.amount;
         acc.total += transaction.amount;
      }
      else{
         acc.withdraw += transaction.amount;
         acc.total -= transaction.amount; 
      }
      return acc;

   }, {
      deposit: 0,
      withdraw: 0, 
      total: 0
   }); 

   const transformToBRLMoney = (money:number) => {
      const convertedMoney = Intl.NumberFormat('pt-BR', {
         style: 'currency',
         currency: 'BRL'
      }).format(money)
      return convertedMoney
   }

   return(
      <Container>
         <div>
            <header>
               <p>entradas</p>
               <img src={incomeImg} alt="Entradas" />
            </header>
            <strong>
               {transformToBRLMoney(summary.deposit)}
            </strong>
         </div>
         <div>
            <header>
               <p>Saídas</p>
               <img src={outcomeImg} alt="saidas" />
            </header>
            <strong> 
               {transformToBRLMoney(summary.withdraw)}
            </strong>
         </div>
         <div className='highlight-background'>
            <header>
               <p>Total</p>
               <img src={totalImg} alt="total" />
            </header>
            <strong>
               {transformToBRLMoney(summary.total)}
            </strong>
         </div>  
      </Container>
   )
}