import { Checkout as SourceCheckout } from "SourceRoute/Checkout/Checkout.component";
import {
  BILLING_STEP,
  DETAILS_STEP,
  SHIPPING_STEP,
} from "SourceRoute/Checkout/Checkout.config";
import ProgressiveContainer from "component/Progressive/Progressive.container";
import "./Checkout.extension.style.scss";

class Checkout extends SourceCheckout {
  progressBar = () => {
    const stepsArray = [
      {
        id: SHIPPING_STEP,
        title: "Shipping",
      },
      {
        id: BILLING_STEP,
        title: "Review & Payments",
      },
      { id: DETAILS_STEP, title: "Success" },
    ];

    return (
      <ProgressiveContainer
        progressSteps={stepsArray}
        checkoutStep={this.props.checkoutStep}
      />
    );
  }
}

export default Checkout;
