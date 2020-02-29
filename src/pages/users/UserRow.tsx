import React from "react";
import { User } from "../../redux/types";
import { getUserFullName } from "../../utils";
import "./UserRow.css";

interface UserRowProps {
  user: User;
  onClick: () => void;
}

/**
 * Component that represents one user
 */
export function UserRow({ user, onClick }: UserRowProps) {
  return (
    <div className="user-row" onClick={onClick}>
      <div>
        <img
          className="picture"
          src={user.picture.thumbnail}
          alt={getUserFullName(user)}
        />
      </div>
      <div>
        <div>
          <span className="name">{getUserFullName(user)}</span>
          <span> ({user.login.username})</span>
        </div>
        <div className="email">{user.email}</div>
      </div>
    </div>
  );
}
