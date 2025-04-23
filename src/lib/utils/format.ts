
/**
 * Formata um número para exibição como peso em kg
 * @param value Valor a ser formatado
 * @param digits Número de casas decimais
 * @returns String formatada
 */
export function formatWeight(value: number, digits = 2): string {
  return `${value.toFixed(digits)} kg`;
}

/**
 * Formata uma data para o formato local (pt-BR)
 * @param dateString String de data ISO
 * @returns Data formatada
 */
export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
}

/**
 * Formata um tipo de resíduo para exibição
 * @param type Tipo de resíduo
 * @returns Nome formatado
 */
export function formatMaterialType(type: string): string {
  const types: Record<string, string> = {
    'aluminio': 'Alumínio',
    'vidro': 'Vidro',
    'pano': 'Pano',
    'pet': 'PET',
  };
  
  return types[type] || type;
}

/**
 * Formata um turno para exibição
 * @param shift Turno
 * @returns Nome formatado
 */
export function formatShift(shift: string): string {
  const shifts: Record<string, string> = {
    'matutino': 'Matutino',
    'vespertino': 'Vespertino',
    'noturno': 'Noturno',
    'integral': 'Integral',
  };
  
  return shifts[shift] || shift;
}
