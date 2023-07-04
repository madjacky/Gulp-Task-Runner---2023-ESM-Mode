import './_vendors';
import './_variables';
import './_components';
import './_functions';

import Logger from './components/test';

class Application {
  static main() {
    Logger.log('hello world');
  }
}

Application.main();