import image1 from './image1.jpg';
import image2 from './image2.png';
import image3 from './image3.jpeg';
import image4 from './image4.jpg';
import image5 from './image5.jpg';
import image6 from './image6.jpg';
import image7 from './image7.jpg';
import image8 from './image8.jpeg';
import image9 from './image9.jpg';
import image10 from './image10.jpg';
import image11 from './image11.jpg';
import image12 from './image12.jpg'; 



import wallpaper1 from './wallpaper1.jpg';
import wallpaper2 from './wallpaper2.jpg';




import search_icon from './search.png'
import location_icon from './security-pin.png'
import greater_than_icon from './greater-than.png'



import MainImage1 from './MainImage1.jpg'
import R1S1 from './imageR1S1.jpg'
import R1S2 from './imageR1S2.jpg'
import R1S3 from './imageR1S3.jpg'
import R1S4 from './imageR1S4.jpg'
import R1S5 from './imageR1S5.jpg'
import R1D1 from './imageR1D1.jpg'
import R1D2 from './imageR1D2.jpg'
import R1D3 from './imageR1D3.jpg'
import R1D4 from './imageR1D4.jpg'
import R1D5 from './imageR1D5.jpg'

import logo from './logo.png'


export const assets = {
    search_icon,
    location_icon,
    greater_than_icon,
    wallpaper1,
    wallpaper2,
    logo
}


export const hotels = [
    {
        Id: "H01",
        Name: "Grand Horizons Hotel",
        Location: "Galle, Sri Lanka",
        Image: image1,
        ImageArray: [image6, image2, image3, image4, image5],
        Price: 200,
        decs: "Nestled along the sun-kissed shores of Galle, Grand Horizons Hotel offers an unparalleled blend of modern elegance and tranquil coastal charm. Designed for discerning travelers, our hotel promises a sanctuary of relaxation, adventure, and cultural immersion.",
    
        roomType1: "Standard Room",
        roomType1Features: "1 King Bed, 1 Bathroom, 1 Balcony, 1 Living Room, 1 Kitchen",
        roomType1Amenities: "Free Wi-Fi, Air Conditioning, Hot Water, TV, Mini Fridge, Tea/Coffee Maker, Toiletries, Hair Dryer, Ironing Facilities, Safe, Room Service",
        roomType1image: [R1S1, R1S2, R1S3, R1S4, R1S5],
        room1Price: 200,
        room1Size: "350 sq ft",
        room1Occupancy: "Up to 2 adults + 1 child",
        room1Perks: "Complimentary breakfast, late checkout (subject to availability)",
    
        roomType2: "Deluxe Room",
        roomType2Features: "1 Queen Bed, 1 Bathroom, 1 Balcony, 1 Living Room, 1 Kitchen",
        roomType2Amenities: "Free Wi-Fi, Air Conditioning, Hot Water, TV, Mini Fridge, Tea/Coffee Maker, Toiletries, Hair Dryer, Ironing Facilities, Safe, Room Service",
        roomType2image: [R1D1, R1D2, R1D3, R1D4, R1D5],
        room2Price: 500,
        room2Size: "450 sq ft",
        room2Occupancy: "Up to 3 adults or 2 adults + 2 children",
        room2Perks: "Complimentary breakfast, access to executive lounge",
      },
    {
        Id:"H02",
        Name:"The Beach Hotel",
        Location:"Kandy, Sri Lanka",
        Image:image2,
        Price:150,
    },
    {
        Id:"H03",
        Name:"Whispering Pines Inn",
        Location:"Dambulla, Sri Lanka",
        Image:image3,
        Price:250,
    },
    {
        Id:"H04",
        Name:"Pinecrest Retreat",
        Location:"Matara, Sri Lanka",
        Image:image4,
        Price:150,
    },
    {
        Id:"H05",
        Name:"The Ocean Front Hotel",
        Location:"Negambo, Sri Lanka",
        Image:image5,
        Price:250,
    },
    {
        Id:"H06",
        Name:"Azure Waves Resort",
        Location:"Trincomalee, Sri Lanka",
        Image:image6,
        Price:150,
    },
    {
        Id:"H07",
        Name:"Golden Fern Lodge",
        Location:"Kandy, Sri Lanka",
        Image:image7,
        Price:250,
    },
    {
        Id:"H08",
        Name:"The Grand Celestia",
        Location:"Kandy, Sri Lanka",
        Image:image8,
        Price:150,
    },
    {
        Id:"H09",
        Name:"Casa Amore Boutique Hotel",
        Location:"Nuwaraeliya, Sri Lanka",
        Image:image9,
        Price:250,
    },
    {
        Id:"H10",
        Name:"The Velvet Lantern",
        Location:"Kandy, Sri Lanka",
        Image:image10,
        Price:150,
    },
    {
        Id:"H11",
        Name:"Nova Luxe Suites",
        Location:"Colombo, Sri Lanka",
        Image:image11,
        Price:250,
    },
    {
        Id:"H12",
        Name:"Opal Horizon Resort",
        Location:"Galle, Sri Lanka",
        Image:image12,
        Price:150,
    },
]
