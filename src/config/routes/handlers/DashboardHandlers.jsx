import DashboardScreen from 'modules/dashboard/screens/DashboardScreen';

export default class DashboardHandlers {
  constructor() {
    this.exact = true;
    this.strict = true;
    this.path = '/';
    this.name = 'Dashboard';
    this.component = DashboardScreen;
    this.state = {};
  }
}
