import IAppHooks from '@wface/ioc/src/interfaces/i-app-hooks';
import { injectable } from "inversify";

@injectable()
export default class AppHooks implements IAppHooks {
  onAppMount() {
    console.log('App mounted');
  }  
}