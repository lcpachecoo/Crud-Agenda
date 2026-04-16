import { AgendaService } from '../service/AgendaService.mjs';
const svc = new AgendaService();

export function renderTabela() {
	const tbody = document.getElementById('tbl-usuarios');
	const lista = svc.listar();
	tbody.innerHTML = lista.length === 0
		? `<tr><td colspan="4" class="text-center text-muted">Nenhum usuário
cadastrado.</td></tr>`
		: lista.map(u => `
			<tr>
				<td>${u.nome}</td>
				 
				<td>${u.telefone}</td>
				<td>
					<button class="btn btn-sm btn-outline-primary me-1"
						onclick="editarUsuario('${u.id}')">Editar</button>
					 
					<button class="btn btn-sm btn-outline-danger"
						onclick="excluirUsuario('${u.id}')">Excluir</button>
				</td>
			</tr>`
		).join('');
}

export function salvarUsuario(form) {
	const dados = Object.fromEntries(new FormData(form));
	try {
		const id = form.dataset.editId;
		id ? svc.atualizar(id, dados) : svc.salvar(dados);
		form.reset();
		delete form.dataset.editId;
		renderTabela();
		mostrarAlerta('Usuário salvo com sucesso!', 'success');
	} catch (e) {
		mostrarAlerta(e.message, 'danger');
	}
}

export function editarUsuario(id) {
	const u = svc.buscarPorId(id);
	if (!u) return;
	const form = document.getElementById('form-usuario');
	form.nome.value = u.nome;
	form.email.value = u.email;
	form.telefone.value = u.telefone;
	form.dataset.editId = id;
	form.scrollIntoView({ behavior: 'smooth' });
}

export function excluirUsuario(id) {
	if (!confirm('Confirma a exclusão?')) return;
	svc.excluir(id);
	renderTabela();
}

function mostrarAlerta(msg, tipo) {
	const div = document.getElementById('alerta');
	div.className = `alert alert-${tipo}`;
	div.textContent = msg;
	div.classList.remove('d-none');
	setTimeout(() => div.classList.add('d-none'), 3000);
}