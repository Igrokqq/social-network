import { ValidateStatus } from 'antd/lib/form/FormItem';
import { Dispatch, Action as ReduxAction } from 'redux';

export type Props = {
    store: any;
    state: any;
    dispatch: Dispatch<any>;
}
export type Action = ReduxAction & { payload: any };
export type InputState = {
    validateStatus: ValidateStatus,
    errorMessage: string | null | undefined,
    value: any
}
