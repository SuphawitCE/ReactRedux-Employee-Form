import { createSelector } from 'reselect'

const nameSelector = (state) => state.user_info

export const infoFirstname = createSelector(
  nameSelector,
  data => {
    console.log('user-selector: ', data);
    return data.userList
  }
)

