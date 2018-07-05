import * as React from 'react';
import * as WFace from '@wface/components';
import { withStyles } from '@material-ui/core';
import { HashRouter, Route, Redirect, Link } from 'react-router-dom'
import WMuiThemeProvider from './WMuiThemeProvider';
import MainPage from './Pages/main-page';
import GetStartedPage from './Pages/get-started-page';
import ComponentsPage from './Pages/components-page';
import SetupPage from './Pages/setup-page';
import FaqPage from './Pages/faq-page';
import BlogPage from './Pages/blog-page';
import ContributePage from './Pages/contribute-page';

class App extends React.Component<any, any> {

  private renderMenuLink(href: string, text:string): React.ReactNode {
    return <WFace.WButton 
            color="inherit" 
            href={"#" + href} 
            className={this.props.classes.linkButton}>
              {text}
          </WFace.WButton>
  }

  public render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <WFace.WAppBar position="absolute" className={classes.appBar}>
          <WFace.WToolbar>
            <WFace.WTypography variant="title" color="inherit" noWrap className={classes.flex}>
              WFace Dökümantasyon
            </WFace.WTypography>

            {this.renderMenuLink("Main", "Ana Sayfa")}
            {this.renderMenuLink("GetStarted", "Hızlı Başlangıç")}
            {this.renderMenuLink("Setup", "Kurulum")}
            {this.renderMenuLink("Components", "Bileşenler")}
            {/* {this.renderMenuLink("Blog", "Blog")} */}
            {/* {this.renderMenuLink("Faq", "S.S.S.")} */}
            {/* {this.renderMenuLink("Contribute", "Katkı")}             */}
          </WFace.WToolbar>
        </WFace.WAppBar>

        <main className={classes.content}>
          <HashRouter> 
            <WMuiThemeProvider>                        
              <Route exact path="/" render={props => <Redirect to="/Main"/>}/>
              <Route path="/Main" component={MainPage} />            
              <Route path="/GetStarted" component={GetStartedPage} />            
              <Route path="/Setup" component={SetupPage} />            
              <Route path="/Components" component={ComponentsPage} />            
              <Route path="/Blog" component={BlogPage} />            
              <Route path="/Faq" component={FaqPage} />            
              <Route path="/Contribute" component={ContributePage} />            
            </WMuiThemeProvider >
          </HashRouter>        
        </main>
      </div>
    )
  }
}

const styles:any = theme => ({
  root: {
    flexGrow: 1,
    height: '%100',
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  flex: {
    flex: 1,
  },
  linkButton: {
    textTransform: 'none'
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,        
    padding: 0, // theme.spacing.unit * 3
    minWidth: 0, // So the Typography noWrap works
    marginTop: 64
  }
});

export default withStyles(styles)(App)