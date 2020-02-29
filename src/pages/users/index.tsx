import debounce from "debounce";
import React from "react";
import { connect } from "react-redux";
import { Loading, LoadMoreSensor, Page } from "../../components";
import { MAX_USER_COUNT } from "../../constans";
import { closeUser, loadUsers, openUser } from "../../redux/actions";
import { State, User } from "../../redux/types";
import { filterUsers } from "../../utils";
import { UserGrid } from "./UserGrid";
import { UserModal } from "./UserModal";
import "./Users.css";

const DEBOUNCE_FILTER = 300;

interface UsersPageProps {
  users: User[];
  cursor: number;
  user?: User;
  onLoadUsers: () => void;
  onOpenUser: (emai: string) => void;
  onCloseUser: () => void;
}

interface UsersPageState {
  filter: string;
  debouncedFilter: string;
}

/**
 * Users page component
 */
export class UsersPage extends React.Component<UsersPageProps, UsersPageState> {
  constructor(props) {
    super(props);
    this.state = { filter: "", debouncedFilter: "" };
  }

  componentDidMount() {
    this.props.onLoadUsers();
  }

  render() {
    const { users, cursor, user } = this.props;
    const { filter, debouncedFilter } = this.state;
    const maxUsersReached = users.length >= MAX_USER_COUNT;
    const visibleUsers = filterUsers(users.slice(0, cursor), debouncedFilter);

    return (
      <Page className="users">
        <div className="search ">
          <input
            className="limit-width"
            placeholder="Search by user name..."
            value={filter}
            onChange={this.handleUpdateFilter}
          />
        </div>
        <UserGrid users={visibleUsers} onOpenUser={this.props.onOpenUser} />
        <LoadMoreSensor
          onTrigger={this.props.onLoadUsers}
          triggerValue={debouncedFilter}
        />
        {!maxUsersReached && <Loading />}
        {maxUsersReached && (
          <div className="catalog-end">End of users catalog</div>
        )}
        {user && <UserModal user={user} onClose={this.props.onCloseUser} />}
      </Page>
    );
  }

  private handleUpdateFilter = evt => {
    this.setState({ filter: evt.target.value });
    this.updateDebouncedFilter();
  };

  private updateDebouncedFilter = debounce(() => {
    this.setState(state => ({ debouncedFilter: state.filter }));
  }, DEBOUNCE_FILTER);
}

export default connect(
  (state: State) => ({
    users: state.users.list,
    cursor: state.users.cursor,
    user: state.users.user
  }),
  { onLoadUsers: loadUsers, onOpenUser: openUser, onCloseUser: closeUser }
)(UsersPage);
