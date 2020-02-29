import React from "react";
import { Button, Modal, ModalButtons } from "../../components";
import { User } from "../../redux/types";
import { getUserFullName } from "../../utils";
import "./UserModal.css";

interface UserModalProps {
  user: User;
  onClose: () => void;
}

/**
 * Component that represents user details in the modal
 */
export function UserModal({ user, onClose }: UserModalProps) {
  return (
    <Modal onClose={onClose}>
      <div className="user-modal">
        <div>
          <img
            className="picture"
            src={user.picture.large}
            alt={getUserFullName(user)}
          />
        </div>
        <div className="details">
          <div className="name">{getUserFullName(user)}</div>
          <DetailsRow label="City" value={user.location.city} />
          <DetailsRow label="State" value={user.location.state} />
          <DetailsRow label="Post Code" value={user.location.postcode} />
          <DetailsRow label="Phone" value={user.phone} />
          <DetailsRow label="Cell" value={user.cell} />
        </div>
      </div>
      <ModalButtons>
        <Button label="Close" onClick={onClose} />
      </ModalButtons>
    </Modal>
  );
}

function DetailsRow({ label, value }) {
  return (
    <div className="row">
      <div className="label">{label}: </div>
      <div className="value">{value}</div>
    </div>
  );
}
