export const formatPlural = (
	amount: number,
	singular: string,
	plural: string
) => (amount === 1 ? singular : plural)
