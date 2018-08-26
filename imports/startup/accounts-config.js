import { Accounts } from 'meteor/accounts-base';

Accounts.ui.config({
	passwordSignupFields: 'USERNAMES_ONLY',
});