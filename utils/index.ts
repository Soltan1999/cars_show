import { CarProps, FilterProps } from "@/types";

export async function fetchCars(filters: FilterProps) {

    const { manufacturer, year, model, limit, fuel } = filters;

    const headers = {
        'X-RapidAPI-Key': 'b88952ec15msh6c91390173b1cd7p19ddd2jsn5ecda15cc494',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const response = await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?
    make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`, {
        headers: headers,
    });

    const result = await response.json();

    return result;
}


export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50; // Dollarla gündəlik əsas icarə qiyməti
    const mileageFactor = 0.1; // Sürülmüş mil başına əlavə dərəcə
    const ageFactor = 0.05; // Nəqliyyat vasitəsinin yaşına görə əlavə tarif

    // Yürüş və yaşa görə əlavə tarifi hesablayın
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;

    // Gündə ümumi icarə haqqını hesablayın
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

    return rentalRatePerDay.toFixed(0);
};


export const generateCarImageUrl = (car: CarProps, angle?: string) => {
    const url = new URL('https://cdn.imagin.studio/getimage');

    const { make, year, model } = car;

    url.searchParams.append('customer', 'hrjavascript-mastery');
    url.searchParams.append('make', make);
    url.searchParams.append('modelFamily', model.split(' ')[0]);
    url.searchParams.append('zoomType', 'fullscreen');
    url.searchParams.append('modelYear', `${year}`);
    url.searchParams.append('angle', `${angle}`);

    return `${url}`;
}


export const updateSearchParams = (type: string, value: string) => {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set(type, value);

    const newPathname = `${window.location.pathname}?${searchParams.toString()}`;
    return newPathname;
}