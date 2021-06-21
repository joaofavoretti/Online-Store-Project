/* eslint-disable import/prefer-default-export */
import { cpf, cnpj } from 'cpf-cnpj-validator';

export const formatDocument = (document: string): string | null => {
  if (cpf.isValid(document)) {
    return cpf.format(document);
  }

  if (cnpj.isValid(document)) {
    return cnpj.format(document);
  }

  return null;
};
