export interface PetitionGet {
  petitionName: string;
  path?: string;
  headers?: any;
  value?: any;
  mensaje?: any;
  mock?: string;
}
export enum Api {
  customerOnboarding = 'customerOnboarding',
  digitalAccounts = 'digitalAccounts',
  other = 'other'
}
