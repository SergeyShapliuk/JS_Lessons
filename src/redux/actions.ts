export enum ACTIONS_TYPE {
    CHANGE_CURRENCY_FIELD_TYPE = 'CurrencyExchange/CHANGE_CURRENCY_FIELD_TYPE',
    CHANGE_CHANGE_ACTION = 'CurrencyExchange/CHANGE_CHANGE_ACTION',
    CHANGE_CURRENT_CURRENCY = 'CurrencyExchange/CHANGE_CURRENT_CURRENCY',
}


export type ChangeCurrencyFieldType = {
   type:ACTIONS_TYPE.CHANGE_CURRENCY_FIELD_TYPE;
   payload:{amountOfBYN: string, amountOfCurrency: string}
};


export const ChangeCurrencyFieldAC = (amountOfBYN: string, amountOfCurrency: string): ChangeCurrencyFieldType => ({
    type:ACTIONS_TYPE.CHANGE_CURRENCY_FIELD_TYPE, payload:{amountOfBYN, amountOfCurrency}
});

export type ChangeAction = {
    type:ACTIONS_TYPE.CHANGE_CHANGE_ACTION
    payload:{isBuying: boolean,amountOfCurrency:'',amountOfBYN:''}
};

export const ChangeActionAC = (isBuying: boolean): ChangeAction => ({
    type:ACTIONS_TYPE.CHANGE_CHANGE_ACTION,payload:{isBuying,amountOfCurrency:'',amountOfBYN:''}
});

export type ChangeCurrentCurrencyType = {
    type:ACTIONS_TYPE.CHANGE_CURRENT_CURRENCY
    payload:{currentCurrency: string,amountOfCurrency:'',amountOfBYN:''}
};

export const ChangeCurrentCurrencyAC = (currentCurrency: string): ChangeCurrentCurrencyType => ({
    type:ACTIONS_TYPE.CHANGE_CURRENT_CURRENCY,payload:{currentCurrency,amountOfCurrency:'',amountOfBYN:''}
});

export type CurrencyReducersTypes = ChangeCurrencyFieldType | ChangeAction | ChangeCurrentCurrencyType;