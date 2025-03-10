export const TravelersOptions = [
    {
        id: 1,
        title: 'Just Me',
        description: 'A solo traveler in exploration mode',
        icon: '🛴',
        people: '1 person',
    },
    {
        id: 2,
        title: 'A Couple',
        description: 'Romantic getaway for two',
        icon: '🥂',
        people: '2 people',
    },
    {
        id: 3,
        title: 'Family',
        description: 'A family looking for a fun vacation',
        icon:'🏡',
        people: '3 to 5 people',
    },
    {
        id: 4,
        title: 'Friends',
        icon: '⛵',
        description: 'Group adventure with friends',
        people: '5 to 10 people',
    },
];

export const BudgetOptions = [{
    id: 1,
    title: 'Thrifty',
    description: 'Budget-friendly options',
    icon: '💰',
},
{
    id: 2,
    title: 'Moderate',
    description: 'Balanced options',
    icon: '💸',
},
{
    id: 3,
    title: 'Luxury',
    description: 'High-end options',
    icon: '💎',
},]

export const AI_PROMPT = 'Generate Travel Plan for Location: {location} From {fromLocation}, for {numberOfDays} Days and {numberOfNight} Night for {travelers} with a {budget} budget with a Flight details, Flight Price with Booking url, Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and Places to visit nearby with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, Time to travel each of the location for {noDays} days and {noNight} night with each day plan with best time to visit with accurate flight details in JSON format.'