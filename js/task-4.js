function getShippingCost(country) {
    `Shipping to ${country} will cost ${price} credits`
    switch (country) {
        case "China":
            return price = 100;
            break;
        case "Chile":
            return 250;
            break;
        case "Australia":
            return 170;
            break;
        case "Jamaica":
            return 120;
            break;
        default:
            return "Sorry, there is no delivery to your country";
    }
}