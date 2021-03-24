import ForgotPasswordScreen from 'modules/forgotPassword/screens/ForgotPasswordScreen';

export default class ForgotPasswordHandlers {
  constructor() {
    this.exact = true;
    this.strict = true;
    this.path = '/forgot-password';
    this.name = 'Forgot Password';
    this.component = ForgotPasswordScreen;
    this.state = {};
  }
}
