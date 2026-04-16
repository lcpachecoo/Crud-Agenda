import { Usuario } from '../model/Contato.mjs';
const KEY = 'usuarios';

export class AgendaService {
	listar() {
		const dados = localStorage.getItem(KEY);
		return dados ? JSON.parse(dados) : [];
	}

	buscarPorId(id) {
		return this.listar().find(u => u.id == id) ?? null;
	}

	salvar(dados) {
		const erros = Usuario.validar(dados);
		if (erros.length) throw new Error(erros.join(' | '));
		const lista = this.listar();
		const usuario = new Usuario(dados);
		lista.push(usuario);
		localStorage.setItem(KEY, JSON.stringify(lista));
		return usuario;
	}

	atualizar(id, dados) {
		const erros = Usuario.validar(dados);
		if (erros.length) throw new Error(erros.join(' | '));
		const lista = this.listar().map(u =>
			u.id === id ? { ...u, ...dados, id } : u
		);
		localStorage.setItem(KEY, JSON.stringify(lista));
	}

	excluir(id) {
		const lista = this.listar().filter(u => u.id != id);
		localStorage.setItem(KEY, JSON.stringify(lista));
	}
}