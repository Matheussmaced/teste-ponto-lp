export interface CreateLeadDTO {
  nome: string
  id_origem: string
  email?: string
  telefone?: string
  usuario_atribuido?: string
  lead_ganho?: string
  interesses?: string
  anotacoes?: string
  id_cliente?: string
}