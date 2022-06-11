import { CheckoutContainer as SourceCheckoutContainer } from "SourceRoute/Checkout/Checkout.container";
import Checkout from "./Checkout.component";

class CheckoutContainer extends SourceCheckoutContainer {
  render() {
    return (
      <Checkout
        {...this.props}
        {...this.state}
        {...this.containerFunctions}
        {...this.containerProps()}
      />
    );
  }
}

export default CheckoutContainer;
