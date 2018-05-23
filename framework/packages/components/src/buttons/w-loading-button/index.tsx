import * as React from 'react';
import * as classNames from 'classnames';
import { WButton, WButtonProps } from '../w-button';
import { WCircularProgress, WCircularProgressProps } from '../../w-circular-progress';
import green from '@material-ui/core/colors/green';
import red from '@material-ui/core/colors/red';
import { withStyles } from '@material-ui/core/styles';

export enum WLoadingButtonStatus {    
    error,
    normal,
    success
}

export interface WLoadingButtonProps extends WButtonProps {
    isLoading?: boolean;
    status?: WLoadingButtonStatus;
}

class WLoadingButtonInner extends React.Component<WLoadingButtonProps & ClassNames & any, {}> {
    public render() {
        const { classes } = this.props;
        const buttonClassname = classNames({
            [classes.buttonError]: this.props.status == WLoadingButtonStatus.error,
            [classes.buttonSuccess]: this.props.status == WLoadingButtonStatus.success,
        });

        return (
            <div className={classes.wrapper}>
                <WButton
                    {...this.props}
                    variant="raised"
                    color="primary"
                    className={buttonClassname}
                    disabled={this.props.isLoading}                    
                >
                    {this.props.children}
                </WButton>
                {this.props.isLoading && <WCircularProgress size={24} className={classes.buttonProgress} />}
            </div>
        )
    }
}

const styles = theme => ({
    root: {
      display: 'flex',
      alignItems: 'center',
    },
    wrapper: {      
      position: 'relative',
    },
    buttonError: {
        backgroundColor: theme.palette.error.main,
        '&:hover': {
            backgroundColor: theme.palette.error.dark,
        },
    },
    buttonSuccess: {
      backgroundColor: theme.palette.success.main,
      '&:hover': {
        backgroundColor: theme.palette.success.dark,
      },
    },
    fabProgress: {
      color: green[500],
      position: 'absolute',
      top: -6,
      left: -6,
      zIndex: 1,
    },
    buttonProgress: {
      color: green[500],
      position: 'absolute',
      top: '50%',
      left: '50%',
      marginTop: -12,
      marginLeft: -12,
    },
});
type ClassNames = { classes: { [className in keyof typeof styles]: string } };

const WLoadingButton = withStyles(styles as any)(WLoadingButtonInner)
export { WLoadingButton }
