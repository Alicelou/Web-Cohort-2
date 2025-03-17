// Please paste your JavaScript code here
function addLoyalty() {
  //add logic here
  const LID = document.querySelector(".LID input").value.trim();
  let eligibleItemCount = 0;

  if (LID) {
    const eligibleGUIDs = loyaltyData[0].LoyaltyAllowances[0].SKUGUID;
    shoppingCart.forEach((item) => {
      if (eligibleGUIDs.includes(item.GUID)) {
        eligibleItemCount += item.qty * item.conversionFactor;
      }
    });

    if (
      eligibleItemCount >= loyaltyData[0].LoyaltyAllowances[0].MinimumQuantity
    ) {
      const discountAmount =
        loyaltyData[0].LoyaltyAllowances[0].Allowances[0].Amount * -1;

      updateCartUI(discountAmount);
    }
  }
}
