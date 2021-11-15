import { Dashboard } from "./components/Dashboard/index";
import { Header } from "./components/Header/Header";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <>
      <Header />
      <Dashboard />
      <GlobalStyle />
    </>
  );
}

// export function traz algumas vantagens
/*
  Por que utilizar as exportações com export, ao invés de export default?
  - no export default, quem define o nome do componente não é quem está exportando
  e sim quem está importando.
  - quem exporta somente com 'export' obriga a quem importa a chamar exatamente o
  nome da função importada. Ele pode até mudar o nome, mas terá que fazer isso 
  de forma explícita

  Existe uma outra vantagem
  a importação automática do editor fica mais aprimorada também, já que todo 
  componente terá obrigatoriamente um nome específico
*/