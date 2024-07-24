import {
  reactExtension,
  Banner,
  BlockStack,
  Checkbox,
  Text,
  useApi,
  useApplyAttributeChange,
  useInstructions,
  useTranslate,
  PaymentIcon,
  InlineLayout,
} from "@shopify/ui-extensions-react/checkout";

// 1. Choose an extension target
export default reactExtension("purchase.checkout.payment-method-list.render-before", () => (
  <Extension />
));

function Extension() {
  const translate = useTranslate();
  const { extension } = useApi();
  const instructions = useInstructions();
  const applyAttributeChange = useApplyAttributeChange();



  // 3. Render a UI
  return (
    <BlockStack border={"dotted"} padding={"tight"}>
      <InlineLayout blockAlignment="center" spacing='base' inlineAlignment="center">
        <PaymentIcon name="visa" />
        <PaymentIcon name="master" />
        <PaymentIcon name="amazon" />
        <PaymentIcon name="bitcoin" />
        <PaymentIcon name="shop-pay" />
        <PaymentIcon name="google-pay" />
        <PaymentIcon name="paypal" />
        <PaymentIcon name="apple-pay" />
        <PaymentIcon name="oxxo" />
      </InlineLayout>
    </BlockStack>
  );

  async function onCheckboxChange(isChecked) {
    // 4. Call the API to modify checkout
    const result = await applyAttributeChange({
      key: "requestedFreeGift",
      type: "updateAttribute",
      value: isChecked ? "yes" : "no",
    });
    console.log("applyAttributeChange result", result);
  }
}