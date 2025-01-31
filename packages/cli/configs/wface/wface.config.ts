import { IConfiguration, IHttpService } from "@wface/ioc";
import AuthService from '../../src/services/auth-service';
import AppHooks from '../../src/services/app-hooks';
import { DemoScreen } from '../../src/screens/demo-screen'
import { DemoScreen2 } from '../../src/screens/demo-screen-2'
import { DemoScreen3 } from '../../src/screens/demo-screen-3'
import { WTheme } from '@wface/components';

const theme = {  
} as WTheme

const config = {
  projectName: 'WFace',
  screenList: {
    DemoScreen,
    DemoScreen2,
    DemoScreen3
  },    
  authService: AuthService,
  theme: theme,
  useLocalStorage: true,
  hooks: AppHooks,
  search: true,
  rightContextItems: [
    {
      id: 'my-profile',
      icon: 'account_circle',
      text: 'My Profile',
      onClick: () => alert('You clicked my profile')
    }
  ],
  // rightDrawer: {
  //   contentComponent: () => "component"
  // }
} as IConfiguration

export default config;