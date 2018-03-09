import { Transaction } from './transaction';

export interface AddressTransactions {
  transactions: Transaction[];
  totalPages: number;
  currentPage: number;
  totalTransactions: number;
}
