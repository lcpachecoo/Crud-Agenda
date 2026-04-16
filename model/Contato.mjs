 
export class Usuario {
  
  constructor({ nome, telefone }) {
    this.id       = Date.now().toString();  
    this.nome     = nome.trim();
    this.telefone = telefone.trim();
  
    
  }
  static validar(dados) {
		const erros = [];
		if (!dados.nome?.trim()) erros.push('Nome é obrigatório');
    if (!dados.telefone?.trim()) erros.push('Telefone é obrigatório');
		return erros;
	}
}
