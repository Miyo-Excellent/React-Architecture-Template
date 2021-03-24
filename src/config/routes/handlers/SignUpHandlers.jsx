import SignUpScreen from 'modules/signUp/screens/SignUpScreen';

export default class SignUpHandlers {
  constructor() {
    this.exact = true;
    this.strict = true;
    this.path = '/sign-up';
    this.name = 'Sign Up';
    this.component = SignUpScreen;
    this.state = {};
  }
}
