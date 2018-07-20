import React from 'react'

import Architecture from './get-started-page/architecture.mdx'
import Requirements from './get-started-page/requirements.mdx'
import Setup from './get-started-page/setup.mdx'
import Usage from './get-started-page/usage.mdx'

import * as WFace from '@wface/components'

const components = {
  h1: props => <div><WFace.WTypography variant="display1" {...props} /><br/><br/></div>,
  h2: props => <div><WFace.WTypography variant="headline" {...props} /><br/></div>,
  p: props => <div><WFace.WTypography variant="subheading" {...props} /><br/></div>,
  a: props => <a href={props.href} 
                style={{
                  color: '#3f51b5',
                  textDecoration: 'none',
                  fontWeight: 500
                }}
                target="_blank">
                {props.children}
              </a>,
  blockquote: props =>  <div>
                          <WFace.WPaper elevation={0} 
                            style={{
                              padding:15, 
                              color: 'rgb(132, 146, 166)',
                              backgroundColor:'rgb(239, 242, 247)', 
                              borderLeft: '4px solid #3f51b5',
                              margin: '0px 3px'
                            }}>                            
                            {props.children.props.children}
                          </WFace.WPaper>
                          <br/>
                        </div>,
  inlineCode: props =>  <code 
                          style={{
                            backgroundColor: 'rgb(239, 242, 247)', 
                            padding: '3px 5px', 
                            color: 'indianred',
                            borderRadius: 3
                          }}>
                          {props.children}
                        </code>,                    
  code: props => {
    if(props.className === "language-console") {
      return (
        <div>
          <WFace.WPaper elevation={0} 
            style={{
              padding:15, 
              color: '#DDD',
              backgroundColor:'rgb(40, 44, 52)',
              fontFamily: 'Inconsolata, Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',
              fontSize: 16,
              whiteSpace: 'initial'
            }}>                            
            {props.children}
          </WFace.WPaper>
          <br/>
        </div>
      );
    }
    else {
      return <div>{props.children}</div>;
    }
  }
} 

const Mdx = {
  GetStarted: {
    Architecture: () => <Architecture components={components}/>,
    Requirements: () => <Requirements components={components}/>,
    Setup: () => <Setup components={components}/>,
    Usage: () => <Usage components={components}/>
  },
  WFaceCLI: () => <div>WFace CLI</div>,
  Components: {

  }
}

export default Mdx