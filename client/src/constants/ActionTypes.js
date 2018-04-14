import {keyMirror} from "../utils/index";

const ActionTypes = keyMirror({


    // ModuleA
    REQUEST_MESSAGE_LIST: null,
    RECEIVE_MESSAGE_LIST: null,
    FAILURE_MESSAGE_LIST: null,

    // ModuleTODO

    REQUEST_TODO_LIST: null,
    RECEIVE_TODO_LIST: null,
    FAILURE_TODO_LIST: null,

    CLOSE_MODAL_CREATE_TABLE: null,
    OPEN_MODAL_CREATE_TABLE: null,
    SELECT_TABLE: null,
    SAVE_TABLE: null,
});

export default ActionTypes;
