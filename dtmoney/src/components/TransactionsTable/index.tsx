import { Container } from "./styles";

export function TransactionsTable () {
   return(
      <Container>
        <table>
           <thead>
              <tr>
                 <th>titulo</th>
                 <th>Valor</th>
                 <th>categoria</th> 
                 <th>data</th>
              </tr>
           </thead>

            <tbody>
               <tr>
                  <td>Desenvolvimento de wesite</td>
                  <td className="deposit">R$ 112.000,00</td>
                  <td>desenvolvimento</td>
                  <td>20/02/2021</td>
               </tr>
               <tr>
                  <td>Desenvolvimento de wesite</td>
                  <td className="withdraw"> -R$ 11000,00</td>
                  <td>desenvolvimento</td>
                  <td>20/02/2021</td>
               </tr>
            </tbody>

        </table>
      </Container>
   )
}