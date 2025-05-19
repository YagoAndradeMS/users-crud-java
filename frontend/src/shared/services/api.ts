import axios from 'axios';

/**
 * Cria uma instância do Axios configurada para se comunicar com a API backend.
 *
 * - baseURL: Define a URL base para todas as requisições feitas por esta instância.
 *   Isso evita que você precise repetir o endereço em cada chamada.
 * - headers: Define os cabeçalhos HTTP padrão para todas as requisições,
 *   garantindo que o conteúdo enviado seja interpretado como JSON.
 */
const api = axios.create({
  baseURL: 'http://localhost:8000', // URL base da API local
  headers: {
    'Content-Type': 'application/json', // Indica que os dados enviados são em JSON
  },
});

export default api; // Exporta a instância para ser usada em toda a aplicação
