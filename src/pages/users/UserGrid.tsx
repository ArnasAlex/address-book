import React from "react";
import { User } from "../../redux/types";
import { UserRow } from "./UserRow";

interface UserGridProps {
  users: User[];
  onOpenUser: (email: string) => void;
}

/**
 * Component that represents users list
 */
export class UserGrid extends React.Component<UserGridProps> {
  render() {
    return (
      <div>
        {this.props.users.map(user => (
          <UserRow
            key={user.id.value + user.id.name}
            user={user}
            onClick={this.createClickHandler(user)}
          />
        ))}
      </div>
    );
  }

  private createClickHandler = (user: User) => {
    return () => {
      this.props.onOpenUser(user.email);
    };
  };
}
