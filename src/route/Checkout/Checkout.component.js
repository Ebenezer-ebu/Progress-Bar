import { Checkout as SourceCheckout } from "SourceRoute/Checkout/Checkout.component";
import {
  BILLING_STEP,
  DETAILS_STEP,
  SHIPPING_STEP,
} from "SourceRoute/Checkout/Checkout.config";
import ContentWrapper from "@scandipwa/scandipwa/src/component/ContentWrapper";
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
      <>
        <ProgressiveContainer
          progressSteps={stepsArray}
          checkoutStep={this.props.checkoutStep}
        />
        <main>
          <ContentWrapper
            wrapperMix={{ block: "Checkout", elem: "Wrapper" }}
            label={__("Checkout page")}
          >
            {this.renderSummary(true)}
            <div block="Checkout" elem="Step">
              {this.renderTitle()}
              {this.renderGuestForm()}
              {this.renderStep()}
              {this.renderLoader()}
            </div>
            <div>
              {this.renderSummary()}
              {this.renderPromo()}
              {this.renderCoupon()}
            </div>
          </ContentWrapper>
        </main>
      </>
    );
  };

  render() {
    return this.progressBar();
  }
}

export default Checkout;
