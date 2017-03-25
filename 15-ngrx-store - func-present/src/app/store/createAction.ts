import {Action} from '@ngrx/store';

export function createAction(type, payload?): Action {
  return { type, payload };
}

// here is an example 
const loginSendAction: Action = createAction('LOGIN_SEND', {
  username: 'katie',
  password: '35c0cd1ecbbb68c75498b83c4e79fe2b'
});