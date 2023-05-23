const currencyFormatter = new Intl.NumberFormat(undefined,{
    currency:"USD",
    style:"currency",
    maximumFractionDigits:3
})

export default currencyFormatter;