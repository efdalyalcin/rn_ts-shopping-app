export enum ModalEnum {
  signIn = 'Sign in',
  register = 'Register',
}

export interface ILoginForm {
  username: string;
  password: string;
  passwordCheck?: string;
}
