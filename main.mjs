import {
	renderTabela,
	salvarUsuario,
	editarUsuario,
	excluirUsuario
} from './controller/AgendaController.mjs';

Object.assign(window, {
	renderTabela,
	salvarUsuario,
	editarUsuario,
	excluirUsuario,

}); 
document.addEventListener('DOMContentLoaded', renderTabela);