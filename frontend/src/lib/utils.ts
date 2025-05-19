import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combina múltiplos valores de classe CSS, incluindo condicionais,
 * e funde as classes Tailwind conflitantes para evitar sobreposição.
 *
 * @param inputs - Lista de valores de classe (strings, objetos, arrays, etc.)
 * @returns Uma única string com as classes combinadas e mescladas
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
