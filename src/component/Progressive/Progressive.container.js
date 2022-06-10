import { PureComponent } from "react";
import Progressive from "./Progressive.component";
import "./Progressive.style.scss";

class ProgressiveContainer extends PureComponent {
  state = { order: 1 };

  setStep = () => {
    let order = 1;

    this.props.progressSteps.forEach((step, idx) => {
      if (step.id === this.props.checkoutStep) {
        order = idx + 1;
      }
    });
    return order;
  };
  componentDidMount() {
    const newOrder = this.setStep();
    this.setState({ order: newOrder });
  }

  componentDidUpdate() {
    const newOrder = this.setStep();
    this.setState({ order: newOrder });
  }

  render() {
    return (
      <div className="Progressive">
        {this.props.progressSteps.map((step, idx) => {
          return (
            <Progressive
              key={step.id}
              step={{ ...step, idx: idx + 1 }}
              onStepOrder={this.state.order}
              isStepVisible={idx + 1 !== this.props.progressSteps.length}
            />
          );
        })}
      </div>
    );
  }
}

export default ProgressiveContainer;
