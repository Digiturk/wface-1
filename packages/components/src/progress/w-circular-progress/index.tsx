import * as React from 'react'
import { CircularProgress } from '@mui/material';
import { CircularProgressProps } from '@mui/material/CircularProgress';

export interface WCircularProgressProps extends CircularProgressProps { }

export class WCircularProgress extends React.Component<WCircularProgressProps, {}> {
  public render() {
    return <CircularProgress {...this.props} />
  }
}