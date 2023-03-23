import { Component } from "react";
import { Name } from "../propsTypes/PersonProps2";

type PersonalitiesListProps = {
  names: Name[];
};

export default class PersonalitiesList2Class extends Component<PersonalitiesListProps> {
  render() {
    return (
      <div>
        {this.props.names.map((name) => {
          const { id, firstName, lastName } = name;
          return (
            <h2 key={id}>
              {firstName} {lastName}
            </h2>
          );
        })}
      </div>
    );
  }
}
