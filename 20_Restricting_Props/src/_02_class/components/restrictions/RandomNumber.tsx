import { Component } from "react";

type RandomNumberType = {
  value: number;
};

type PositiveType = RandomNumberType & {
  isPositive: boolean;
  isNegative?: never;
  isZero?: never;
};
type NegativeType = RandomNumberType & {
  isPositive?: never;
  isNegative?: boolean;
  isZero?: never;
};
type ZeroType = RandomNumberType & {
  isPositive?: never;
  isNegative?: never;
  isZero: boolean;
};

type RandomNumberProps = PositiveType | NegativeType | ZeroType;

export default class RandomNumber extends Component<RandomNumberProps> {
  render() {
    const { value, isPositive, isNegative, isZero } = this.props;
    return (
      <div>
        {value} - {isPositive && "Positive"} - {isNegative && "Negative"} -{" "}
        {isZero && "Zero"}
      </div>
    );
  }
}
