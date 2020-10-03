const initialState = {
    projects: [
        {
            'id': 1,
            'title': 'find nimo',
            'content': 'blag blah'
        }, {
            'id': 2,
            'title': 'find mimi',
            'content': 'blag blah'
        }, {
            'id': 3,
            'title': 'find  momo',
            'content': 'blag blah'
        }
    ]
};

const projectReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('Project created', action.type);
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error', action.type);
            return state;
        case 'DELETE_PROJECT':
            console.log('delete project');
            return state;
        case 'DELETE_PROJECT_ERROR':
            console.log('delete project error', 'state: ', state, 'action: ', action.project);
            return state;
        default:
            return state;
    }
}

export default projectReducer;