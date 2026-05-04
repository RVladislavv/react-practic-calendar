interface IName {
    language: string,
    text: string
}

export interface DataFetch {
    isoCode: string,
    name: IName[],
    officialLanguages: string[]
}

export const fetchCountries = async (): Promise<DataFetch[]> => {
    const response = await fetch('https://openholidaysapi.org/Countries?languageIsoCode=EN')
    if(!response.ok) {
        throw new Error('Problems with fetch countries')
    }
    return await response.json()
}

export interface IHolidaies {
    id: string,
    startDate: string,
    endDate: string,
    name: IName[],
    regionalScope: string,
    temporalScope: string,
    nationwide: string
}

export const fetchHolidaies = async (country: string): Promise<IHolidaies[]> => {
    const res = await fetch('https://openholidaysapi.org/PublicHolidays?countryIsoCode=' + country + '&validFrom=2023-01-01&validTo=2023-12-31')
    if(!res.ok) {
        throw new Error('Problems with fetch holidaies')
    }
    return await res.json()
}
