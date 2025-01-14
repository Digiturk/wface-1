import * as React from 'react';
import { Formik, Form, FormikHelpers, FormikErrors, FormikProps } from 'formik';
import * as Yup from 'yup';
import { BaseComponentProps } from '../../base/base-component-props';

export interface WFormActions extends FormikHelpers<any> { }
export interface WFormErrors extends FormikErrors<any> { }

export type WFormProps = BaseComponentProps & { 
  initialValues: any;
  onSubmit: (values: any, formikActions?: WFormActions) => void;
  validationSchema?: any | (() => any);
  validate?: ((values: any) => void | object | Promise<WFormErrors>);
  enableReinitialize?: boolean;
  onChange?: (values: any) => void;
  formStyle?: React.CSSProperties; 
}

export class WForm extends React.Component<WFormProps, {}> {
  public render() {
    return (
      <Formik
        {...this.props}
        validate={values => {
          if(this.props.onChange) {
            this.props.onChange(values);
          }

          if(this.props.validate) { 
            return this.props.validate(values);
          }
        }}        
        render={(
          formikProps: FormikProps<any>) => {
          return(
            <Form style={this.props.formStyle}>
              {this.props.children}
            </Form>
          );
        }
        }
      />
    );
  }
}

export { Yup as WFormValidation }