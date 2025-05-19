export interface User {
  /** Identificador único do usuário */
  id: number;

  /** Nome completo do usuário */
  nome: string;

  /** Endereço de email do usuário */
  email: string;

  /** Senha do usuário (deve ser armazenada com segurança no backend) */
  senha: string;

  /** Cidade onde o usuário reside (opcional) */
  cidade?: string;

  /** Idade do usuário (opcional) */
  idade?: string;
}
