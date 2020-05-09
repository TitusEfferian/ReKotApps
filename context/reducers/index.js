import {storeLoginData} from '../actions';

export const INITIAL_STATE = {
  count: 0,
  loginUseCase: {
    data: undefined,
  },
};

export const reducer = (state, action) => {
  switch (action.type) {
    case storeLoginData:
      return {
        ...state,
        loginUseCase: {
          data: action.data,
        },
      };
  }
};
