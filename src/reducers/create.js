import * as create from '../../src/actions/create'
const initialState = {
    access: undefined,
    refresh: undefined,
    errors: {},
}
export default (state=initialState, action) => {
    switch(action.type) {
        case create.CREATE_SUCCESS:
            console.log(action.payload.access)
            return {
                access: {
                    resp: action.payload.access,

                }
            }

        case create.CREATE_FAILURE:
            return {
                access: undefined,
                refresh: undefined,
                errors:
                action.payload.response ||
                {'non_field_errors': action.payload.statusText},
            }
        default:
            return state
    }
}
