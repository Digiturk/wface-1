import * as React from 'react';
import SpeedDialAction, { SpeedDialActionProps } from '@mui/material/SpeedDialAction';

export interface WSpeedDialActionProps extends SpeedDialActionProps {
}

export class WSpeedDialAction extends React.Component<WSpeedDialActionProps, {}> {
  public render() {
    return <SpeedDialAction {...this.props}/>
  }
}