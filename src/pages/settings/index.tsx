import React from "react";
import { connect } from "react-redux";
import { Page } from "../../components";
import { updateNationality } from "../../redux/actions";
import { State } from "../../redux/types";
import "./Settings.css";

const AVAILABLE_NATIONALITIES = ["CH", "ES", "FR", "GB"];

interface SettingsPageProps {
  nationality: string;
  onUpdateNationality: (nationality: string) => void;
}
/**
 * Settings page component
 */
export class SettingsPage extends React.Component<SettingsPageProps> {
  render() {
    return (
      <Page className="settings">
        <h2 className="title">Settings</h2>
        <div className="row">
          <div className="label">Nationality:</div>
          <select
            value={this.props.nationality}
            onChange={this.handleNationalityChange}
          >
            {AVAILABLE_NATIONALITIES.map(nationality => (
              <option key={nationality}>{nationality}</option>
            ))}
          </select>
        </div>
      </Page>
    );
  }

  private handleNationalityChange = evt => {
    this.props.onUpdateNationality(evt.target.value);
  };
}

export default connect(
  (state: State) => ({ nationality: state.settings.nationality }),
  { onUpdateNationality: updateNationality }
)(SettingsPage);
