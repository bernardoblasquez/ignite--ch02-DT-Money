import { useState } from 'react';
import Modal from 'react-modal';
import { Dashboard } from "./components/Dashboard/index";
import { Header } from "./components/Header/Header";
import { NewTransactionModal } from './components/NewTransactionModal';
import { GlobalStyle } from "./styles/global";

Modal.setAppElement('#root')

export function App() {

	const [isNewTransactionModalOpen,  setIsNewTransactionModalOpen] = useState(false);

	function handleOpenTransactionModal() {
		setIsNewTransactionModalOpen(true);
	}

	function handleCloseTransactionModal() {
		setIsNewTransactionModalOpen(false);
	}

	return (
		<>
			<Header onOpenTransactionModal={handleOpenTransactionModal} />
			<Dashboard />
			<GlobalStyle />
			<NewTransactionModal  
				isOpenModal={isNewTransactionModalOpen}
				onRequestCloseModal={handleCloseTransactionModal}
			/>
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