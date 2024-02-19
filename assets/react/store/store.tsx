import { Store, configureStore } from '@reduxjs/toolkit'
import counterReducer from '../store/counterSlice'
import personReducer from '../store/personSlice'

const store: Store = configureStore({
    reducer: {
      counter: counterReducer,
      person: personReducer
    },
  })

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store

