import React from "react";
import { css, cx } from "emotion";
import produce from "immer";
import { mapStateToProps } from "rex";
import { IGlobalStore } from "models/global";

interface IProps {
  passed: string;
  data?: number;
}

interface IState {}

@mapStateToProps((store: IGlobalStore) => ({ data: store.data }))
export default class Inside extends React.PureComponent<IProps, IState> {
  constructor(props) {
    super(props);

    this.state = {};
  }

  immerState(f: (s: IState) => void) {
    this.setState(produce<IState>(f));
  }

  render() {
    console.log("rendering inside");

    return (
      <div className={styleContainer}>
        <div>this is page inside</div>

        <pre>{JSON.stringify(this.props, null, 2)}</pre>
      </div>
    );
  }
}

const styleContainer = css`
  border: 1px solid #ddd;
  margin: 20px;
  padding: 20px;
`;
