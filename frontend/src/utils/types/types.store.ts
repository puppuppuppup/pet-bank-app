export type BankPageType = 'home' | 'cards' | 'subscriptions' | 'help' | 'settings' | 'statistics';

export interface IBankPages {
    prev: BankPageType;
    current: BankPageType;
}
