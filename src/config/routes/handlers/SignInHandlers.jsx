import SignInScreen from 'modules/signIn/screens/SignInScreen';

export default class SignInHandlers {
  constructor() {
    this.exact = true;
    this.strict = true;
    this.path = '/sign-in';
    this.name = 'Sign In';
    this.component = SignInScreen;
    this.state = {};
  }
}
