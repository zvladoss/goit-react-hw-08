export const selectContacts = state => state.contacts.items;

export const selectIsLoading = state => state.contacts.loading;

export const selectIsError = state => state.contacts.error;
