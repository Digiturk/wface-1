import { WGrid, WIcon, WIconButton, withSnackbar, WPaper, WTypography, WCircularProgress } from '@wface/components';
import IOC, { IMenuTreeItem, MenuTreeUtil, IHttpService } from '@wface/ioc';
import { AppContextActions, ScreenData, WStore } from '@wface/store';
import * as React from 'react';
import { connect } from 'react-redux';

export interface WScreenWrapperProps {
  screen?: ScreenData;
  enqueueSnackbar?: (message: string, options: object) => void
}

export interface DispatchProps {
  closeScreen: (menuTreeItem: IMenuTreeItem) => void;
  openScreen: (menuTreeItem: IMenuTreeItem, initialValues?: any) => void;
  saveScreenState: (screenId: string, state: any) => void;
  setValue: (key: string, value: any) => void;
  changeScreenMode: (screenId: string, mode: 'normal' | 'loading') => void;
}

class WScreenWrapper extends React.Component<WScreenWrapperProps & WStore & DispatchProps, any> {

  private screenRef: any;

  constructor(props) {
    super(props);

    this.state = {
      screen: undefined
    }

    this.screenRef = React.createRef();
  }

  componentWillUnmount() {
    if (this.screenRef.current) {
      this.props.saveScreenState(this.props.screen.menuTreeItem.id, this.screenRef.current.state);
    }
  }

  openScreen = (screen: string, initialValues: any): boolean => {
    const item = MenuTreeUtil.findByName(this.props.appContext.menuTree, screen);
    if (!item) {
      return false;
    }

    this.props.openScreen(item, initialValues);
    return true;
  }

  closeScreen = (screen: string) => {
    const item = MenuTreeUtil.findByName(this.props.appContext.menuTree, screen);
    if (!item) {
      return false;
    }

    this.props.closeScreen(item);
    return true;
  }

  showSnackbar = (message: string, type: 'error' | 'success' | 'warning' | 'info' = 'info', duration: number = 5000) => {
    this.props.enqueueSnackbar(message, {
      variant: type,
      autoHideDuration: duration,
      action: <WIconButton><WIcon style={{ color: '#ffffff99' }} iconSize="small">close</WIcon></WIconButton>
    });
  }

  changeScreenMode = (mode: 'normal' | 'loading' = 'normal') => {
    this.props.changeScreenMode(this.props.screen.menuTreeItem.id, mode);
  }

  public render() {
    const Screen = this.props.appContext.configuration.screenList[this.props.screen.menuTreeItem.screen] as any;
    return (
      <div style={{ position: 'relative', width: '100%', height: '100%', }}>
        {this.props.appContext.currentScreen.mode === 'loading' &&
          <div style={{ display: 'table', position: 'absolute', width: '100%', height: '100%', background: '#3f51b544', zIndex: 9999 }}>
            <div style={{ display: 'table-cell', verticalAlign: 'middle', textAlign: 'center' }}>
              <WCircularProgress size={60} />
            </div>
          </div>
        }
        {Screen ?
          <div style={{padding: 10}}>
            <Screen
              ref={this.screenRef}
              appContext={this.props.appContext}
              changeScreenMode={(mode) => {
                this.changeScreenMode(mode)
              }}
              httpService={IOC.get<IHttpService>("IHttpService")}
              screenData={this.props.appContext.currentScreen}
              userContext={this.props.userContext}
              closeScreen={this.closeScreen}
              openScreen={this.openScreen}
              showSnackbar={this.showSnackbar}
              setValue={this.props.setValue}
            />
          </div>
          :
          <WGrid container justify="center" style={{ paddingTop: 30 }}>
            <WGrid item md={6}>
              <WPaper elevation={4} style={{ padding: 20 }}>
                <WTypography variant="h5" component="h2" align="center">
                  Sayfa bulunamadı
                              </WTypography>
                <WTypography component="p" align="center">
                  Lütfen proje ve ekran alanlarını doğru tanımladığınızdan emin olunuz.
                              </WTypography>
              </WPaper>
            </WGrid>
          </WGrid>
        }
      </div>
    )
  }
}

const mapStateToProps = (state: WStore) => ({
  appContext: state.appContext,
  userContext: state.userContext,
} as WStore);

const mapDispatchToProps = dispatch => ({
  closeScreen: (menuTreeItem: IMenuTreeItem) => dispatch(AppContextActions.closeScreen(menuTreeItem)),
  openScreen: (menuTreeItem: IMenuTreeItem, initialValues?: any) => dispatch(AppContextActions.openScreen({ menuTreeItem, initialValues })),
  saveScreenState: (screenId: string, state: any) => dispatch(AppContextActions.saveScreenState({ screenId, state })),
  setValue: (key: string, value: any) => dispatch(AppContextActions.setValue({ key, value })),
  changeScreenMode: (screenId: string, mode: 'normal' | 'loading') => dispatch(AppContextActions.changeScreenMode({ screenId, mode })),
});

export default connect<WStore, DispatchProps, WScreenWrapperProps>(mapStateToProps, mapDispatchToProps)(withSnackbar(WScreenWrapper) as any);