const brandsModels = {
    AlfaRomeo: ['Giulia', 'Stelvio'],
    AstonMartin: ['Vantage', 'DB11'],
    Audi: ['A3', 'A4', 'Q5', 'Q7'],
    Bentley: ['Continental', 'Bentayga'],
    BMW: ['1 Series', '3 Series', 'X3', 'X5'],
    Citroen: ['C3', 'C4'],
    Cupra: ['Formentor', 'Leon'],
    Dacia: ['Duster', 'Sandero'],
    DS: ['DS 3', 'DS 7'],
    Fiat: ['500', 'Panda'],
    Ford: ['Fiesta', 'Focus', 'Puma', 'Kuga'],
    Honda: ['Civic', 'CR-V'],
    Hyundai: ['Tucson', 'i10', 'Kona', 'i20'],
    Jaguar: ['F-Pace', 'XE'],
    Jeep: ['Wrangler', 'Renegade'],
    Kia: ['Sportage', 'Picanto', 'Niro', 'Rio'],
    LandRover: ['Range Rover', 'Defender', 'Discovery'],
    Lexus: ['UX', 'NX', 'RX'],
    Mazda: ['CX-5', 'Mazda3'],
    MercedesBenz: ['C-Class', 'E-Class', 'A-Class', 'GLA'],
    MG: ['HS', 'ZS'],
    MINI: ['Hatch', 'Countryman'],
    Mitsubishi: ['Outlander', 'L200'],
    Nissan: ['Qashqai', 'Juke', 'Micra', 'Leaf'],
    Peugeot: ['208', '2008', '3008', '108'],
    Polestar: ['Polestar 2'],
    Porsche: ['911', 'Cayenne', 'Macan'],
    Renault: ['Clio', 'Captur'],
    Seat: ['Ibiza', 'Ateca'],
    Skoda: ['Octavia', 'Fabia'],
    Suzuki: ['Swift', 'Vitara'],
    Tesla: ['Model 3', 'Model Y'],
    Toyota: ['Yaris', 'Aygo', 'Corolla', 'Camry', 'RAV4'],
    Vauxhall: ['Corsa', 'Astra', 'Mokka'],
    Volkswagen: ['Golf', 'Polo', 'Tiguan', 'Passat'],
    Volvo: ['XC40', 'XC60', 'XC90']
};

const coloursList = ['Black', 'Blue', 'Brown', 'Gold', 'Green', 'Grey', 'Orange', 'Pink', 'Purple', 'Red', 'Silver', 'Teal', 'White', 'Yellow', 'Unknown'];
const drivetrains = ['All-wheel drive', 'Four-wheel drive', 'Front-wheel drive', 'Rear-wheel drive'];
const gearboxes = ['Automatic', 'Manual'];
const bodySizes = ['Convertible', 'Coupe', 'Estate', 'Hatchback', 'MPV', 'Pickup Truck', 'Saloon', 'SUV/Crossover', 'Van'];
const cabinSizes = ['Crew cab', 'Extended cab', 'Regular cab', 'Unknown'];
const bedSizes = ['Long', 'Regular', 'Unknown'];
const fuelTypes = ['Diesel', 'Dual-fuel', 'Electric', 'Hybrid', 'Petrol'];
const insuranceGroups = ['1-10', '11-20', '21-30', '31-40', '41-50', 'Unknown'];
const featuresList = ['Bluetooth', 'Cruise control', 'Alarm/immobiliser', 'Alloy wheels', 'AUX/USB connectivity', 'DAB radio', 'Satellite navigation', 'ISOFIX', 'Air conditioning', 'Privacy glass/tinted windows', 'Climate control', 'Reversing camera', 'Keyless entry/start system', 'Heated seats', 'Leather seats'];
const seatCapacities = ['2', '3', '4', '5', '6', '7', '8', '9', '15', '17'];
const doorsCount = ['2', '3', '4', '5', '6'];
const ratings = ['Great Deal', 'Good Deal', 'Fair Deal', 'High Priced', 'Overpriced', 'Uncertain', 'No Rating'];
const sellerTypes = ['Authorised dealer', 'CarGurus partners'];
const engineSizes = Array.from({length: 65}, (_, i) => (0.6 + i*0.1).toFixed(1)); // 0.6 to 7.0


const parsedImageData = [
  {
    "year": 2007,
    "brand": "Jaguar",
    "model": "Xj Series",
    "color": "Gold",
    "image": "Images/2007_jaguar_xj_series-pic-4155628460472991600-1024x768  gold.jpeg"
  },
  {
    "year": 2008,
    "brand": "Daihatsu",
    "model": "Sirion",
    "color": "Gold",
    "image": "Images/2008_daihatsu_sirion-pic-7036321086578526133-1024x768  gold.jpeg"
  },
  {
    "year": 2008,
    "brand": "Ford",
    "model": "Focus",
    "color": "Black",
    "image": "Images/2008_ford_focus-pic-3741601414298800799-1024x768  black.jpeg"
  },
  {
    "year": 2009,
    "brand": "Citroen",
    "model": "C3 Picasso",
    "color": "Unknown",
    "image": "Images/2009_citroen_c3_picasso-pic-7097770020899457910-1024x768.jpeg"
  },
  {
    "year": 2009,
    "brand": "Ford",
    "model": "Fiesta",
    "color": "Blue",
    "image": "Images/2009_ford_fiesta-pic-2040567962715272549-1024x768  blue.jpeg"
  },
  {
    "year": 2009,
    "brand": "Ford",
    "model": "Fiesta",
    "color": "Red",
    "image": "Images/2009_ford_fiesta-pic-7369125186812578962-1024x768 red.jpeg"
  },
  {
    "year": 2009,
    "brand": "Honda",
    "model": "Jazz",
    "color": "Grey",
    "image": "Images/2009_honda_jazz-pic-8977144220411665797-1024x768  grey.jpeg"
  },
  {
    "year": 2009,
    "brand": "Jaguar",
    "model": "Xj Series",
    "color": "Unknown",
    "image": "Images/2009_jaguar_xj_series-pic-3631729016342521155-1024x768.jpeg"
  },
  {
    "year": 2009,
    "brand": "Vauxhall",
    "model": "Astra",
    "color": "Unknown",
    "image": "Images/2009_vauxhall_astra-pic-7784728356034920234-1024x768.jpeg"
  },
  {
    "year": 2009,
    "brand": "Volkswagen",
    "model": "Touran",
    "color": "Unknown",
    "image": "Images/2009_volkswagen_touran-pic-6118203441817844925-1024x768.jpeg"
  },
  {
    "year": 2010,
    "brand": "B M W",
    "model": "3 Series",
    "color": "Unknown",
    "image": "Images/2010_bmw_3_series-pic-7897290133228248299-1024x768.jpeg"
  },
  {
    "year": 2010,
    "brand": "Ford",
    "model": "Focus",
    "color": "Unknown",
    "image": "Images/2010_ford_focus-pic-1472165064536840992-1024x768.jpeg"
  },
  {
    "year": 2010,
    "brand": "Honda",
    "model": "Cr-v",
    "color": "Unknown",
    "image": "Images/2010_honda_cr-v-pic-2332816765667174813-1024x768.jpeg"
  },
  {
    "year": 2010,
    "brand": "Peugeot",
    "model": "107",
    "color": "Unknown",
    "image": "Images/2010_peugeot_107-pic-267861428547331806-1024x768.jpeg"
  },
  {
    "year": 2010,
    "brand": "Renault",
    "model": "Clio",
    "color": "Unknown",
    "image": "Images/2010_renault_clio-pic-7686119573183346187-1024x768.jpeg"
  },
  {
    "year": 2011,
    "brand": "Fiat",
    "model": "500c",
    "color": "Unknown",
    "image": "Images/2011_fiat_500c-pic-305794478212553537-1024x768.jpeg"
  },
  {
    "year": 2011,
    "brand": "Fiat",
    "model": "500c",
    "color": "Unknown",
    "image": "Images/2011_fiat_500c-pic-3789539009681099804-1024x768.jpeg"
  },
  {
    "year": 2011,
    "brand": "Ford",
    "model": "Mondeo",
    "color": "Unknown",
    "image": "Images/2011_ford_mondeo-pic-3260742358572084037-1024x768.jpeg"
  },
  {
    "year": 2011,
    "brand": "Land Rover",
    "model": "Range Rover Sport",
    "color": "Black",
    "image": "Images/2011_land_rover_range_rover_sport-pic-2308769895017079236-1024x768  black.jpeg"
  },
  {
    "year": 2011,
    "brand": "M I N I",
    "model": "Mini",
    "color": "Unknown",
    "image": "Images/2011_mini_mini-pic-4434051325653558654-1024x768.jpeg"
  },
  {
    "year": 2011,
    "brand": "Renault",
    "model": "Scenic",
    "color": "Unknown",
    "image": "Images/2011_renault_scenic-pic-2126456709845195351-1024x768.jpeg"
  },
  {
    "year": 2012,
    "brand": "Ford",
    "model": "B-max",
    "color": "Unknown",
    "image": "Images/2012_ford_b-max-pic-2340098015341227298-1024x768.jpeg"
  },
  {
    "year": 2012,
    "brand": "Ford",
    "model": "Mondeo",
    "color": "Unknown",
    "image": "Images/2012_ford_mondeo-pic-4180949046394014792-1024x768.jpeg"
  },
  {
    "year": 2012,
    "brand": "Nissan",
    "model": "Serena",
    "color": "Green",
    "image": "Images/2012_nissan_serena-pic-5519662316993650049-1024x768  green.jpeg"
  },
  {
    "year": 2013,
    "brand": "Audi",
    "model": "A1",
    "color": "Unknown",
    "image": "Images/2013_audi_a1-pic-4426756346548449239-1024x768.jpeg"
  },
  {
    "year": 2013,
    "brand": "Kia",
    "model": "Picanto",
    "color": "Green",
    "image": "Images/2013_kia_picanto-pic-2790016414510215622-1024x768  green.jpeg"
  },
  {
    "year": 2013,
    "brand": "Land Rover",
    "model": "Range Rover",
    "color": "Gold",
    "image": "Images/2013_land_rover_range_rover-pic-5557259755305427285-1024x768  gold.jpeg"
  },
  {
    "year": 2013,
    "brand": "Mercedes-Benz",
    "model": "A-class",
    "color": "Unknown",
    "image": "Images/2013_mercedes-benz_a-class-pic-5920547500080063437-1024x768.jpeg"
  },
  {
    "year": 2013,
    "brand": "Mercedes-Benz",
    "model": "Cls-class",
    "color": "Unknown",
    "image": "Images/2013_mercedes-benz_cls-class-pic-4665887088543771590-1024x768.jpeg"
  },
  {
    "year": 2013,
    "brand": "Skoda",
    "model": "Superb",
    "color": "Unknown",
    "image": "Images/2013_skoda_superb-pic-5804824553156814085-1024x768.jpeg"
  },
  {
    "year": 2013,
    "brand": "Toyota",
    "model": "Yaris",
    "color": "Grey",
    "image": "Images/2013_toyota_yaris-pic-9218171873894024493-1024x768  grey.jpeg"
  },
  {
    "year": 2014,
    "brand": "Audi",
    "model": "A1",
    "color": "Unknown",
    "image": "Images/2014_audi_a1-pic-6847047818172367878-1024x768.jpeg"
  },
  {
    "year": 2014,
    "brand": "B M W",
    "model": "X1",
    "color": "Blue",
    "image": "Images/2014_bmw_x1-pic-7191097449242816160-1024x768  blue.jpeg"
  },
  {
    "year": 2014,
    "brand": "B M W",
    "model": "X5",
    "color": "Grey",
    "image": "Images/2014_bmw_x5-pic-8691939209658227030-1024x768  grey.jpeg"
  },
  {
    "year": 2014,
    "brand": "B M W",
    "model": "X5",
    "color": "Unknown",
    "image": "Images/2014_bmw_x5-pic-8691939209658227030-1024x768.jpeg"
  },
  {
    "year": 2014,
    "brand": "Fiat",
    "model": "500",
    "color": "Black",
    "image": "Images/2014_fiat_500-pic-5661524323513811740-1024x768  black.jpeg"
  },
  {
    "year": 2014,
    "brand": "Ford",
    "model": "B-max",
    "color": "Unknown",
    "image": "Images/2014_ford_b-max-pic-2162855759048176381-1024x768.jpeg"
  },
  {
    "year": 2014,
    "brand": "Mercedes-Benz",
    "model": "E-class",
    "color": "Black",
    "image": "Images/2014_mercedes-benz_e-class-pic-2387962064331469941-1024x768  black.jpeg"
  },
  {
    "year": 2014,
    "brand": "Seat",
    "model": "Ibiza",
    "color": "Unknown",
    "image": "Images/2014_seat_ibiza-pic-3105927761687251345-1024x768.jpeg"
  },
  {
    "year": 2014,
    "brand": "Skoda",
    "model": "Yeti Outdoor",
    "color": "Unknown",
    "image": "Images/2014_skoda_yeti_outdoor-pic-8952183694582738056-1024x768.jpeg"
  },
  {
    "year": 2014,
    "brand": "Vauxhall",
    "model": "Mokka",
    "color": "Grey",
    "image": "Images/2014_vauxhall_mokka-pic-4028489567720793161-1024x768  grey.jpeg"
  },
  {
    "year": 2014,
    "brand": "Volvo",
    "model": "Xc70",
    "color": "Gold",
    "image": "Images/2014_volvo_xc70-pic-6446076291712049071-1024x768  gold.jpeg"
  },
  {
    "year": 2015,
    "brand": "B M W",
    "model": "1 Series",
    "color": "Unknown",
    "image": "Images/2015_bmw_1_series-pic-1232979968811841365-1024x768.jpeg"
  },
  {
    "year": 2015,
    "brand": "B M W",
    "model": "X1",
    "color": "Grey",
    "image": "Images/2015_bmw_x1-pic-4341791592928364877-1024x768  grey.jpeg"
  },
  {
    "year": 2015,
    "brand": "B M W",
    "model": "X1",
    "color": "Unknown",
    "image": "Images/2015_bmw_x1-pic-4341791592928364877-1024x768.jpeg"
  },
  {
    "year": 2015,
    "brand": "Citroen",
    "model": "C4 Cactus",
    "color": "Unknown",
    "image": "Images/2015_citroen_c4_cactus-pic-7159104255551978487-1024x768.jpeg"
  },
  {
    "year": 2015,
    "brand": "D S",
    "model": "Ds 3",
    "color": "Unknown",
    "image": "Images/2015_ds_ds_3-pic-4611904850375578909-1024x768.jpeg"
  },
  {
    "year": 2015,
    "brand": "Ford",
    "model": "Fiesta",
    "color": "Unknown",
    "image": "Images/2015_ford_fiesta-pic-784234328057447341-1024x768.jpeg"
  },
  {
    "year": 2015,
    "brand": "Ford",
    "model": "Fiesta",
    "color": "Blue",
    "image": "Images/2015_ford_fiesta-pic-8441536279535553260-1024x768  blue.jpeg"
  },
  {
    "year": 2015,
    "brand": "Hyundai",
    "model": "I20",
    "color": "Unknown",
    "image": "Images/2015_hyundai_i20-pic-4658743720187915640-1024x768.jpeg"
  },
  {
    "year": 2015,
    "brand": "Mitsubishi",
    "model": "L200",
    "color": "Green",
    "image": "Images/2015_mitsubishi_l200-pic-4269917031956225602-1024x768  green.jpeg"
  },
  {
    "year": 2015,
    "brand": "Nissan",
    "model": "X-trail",
    "color": "Unknown",
    "image": "Images/2015_nissan_x-trail-pic-6814381736080022035-1024x768.jpeg"
  },
  {
    "year": 2015,
    "brand": "Nissan",
    "model": "X-trail",
    "color": "Green",
    "image": "Images/2015_nissan_x-trail-pic-8097682424525922405-1024x768  green.jpeg"
  },
  {
    "year": 2015,
    "brand": "Skoda",
    "model": "Octavia",
    "color": "Blue",
    "image": "Images/2015_skoda_octavia-pic-2338632516188007621-1024x768  blue.jpeg"
  },
  {
    "year": 2015,
    "brand": "Vauxhall",
    "model": "Corsa",
    "color": "Green",
    "image": "Images/2015_vauxhall_corsa-pic-7165447382522783725-1024x768  green.jpeg"
  },
  {
    "year": 2015,
    "brand": "Vauxhall",
    "model": "Corsa",
    "color": "Green",
    "image": "Images/2015_vauxhall_corsa-pic-9205459720326662755-1024x768  green.jpeg"
  },
  {
    "year": 2016,
    "brand": "Audi",
    "model": "A6 Avant",
    "color": "Unknown",
    "image": "Images/2016_audi_a6_avant-pic-6031924667309753632-1024x768.jpeg"
  },
  {
    "year": 2016,
    "brand": "Audi",
    "model": "Q3",
    "color": "Unknown",
    "image": "Images/2016_audi_q3-pic-3432602028906175527-1024x768.jpeg"
  },
  {
    "year": 2016,
    "brand": "Audi",
    "model": "R8",
    "color": "Green",
    "image": "Images/2016_audi_r8-pic-3064350015200834362-1024x768  green.jpeg"
  },
  {
    "year": 2016,
    "brand": "Citroen",
    "model": "Grand C4 Picasso",
    "color": "Unknown",
    "image": "Images/2016_citroen_grand_c4_picasso-pic-5121979759295916564-1024x768.jpeg"
  },
  {
    "year": 2016,
    "brand": "Fiat",
    "model": "500",
    "color": "Red",
    "image": "Images/2016_fiat_500-pic-4549657047463940058-1024x768 red.jpeg"
  },
  {
    "year": 2016,
    "brand": "Fiat",
    "model": "500",
    "color": "Red",
    "image": "Images/2016_fiat_500-pic-4855625426673848173-1024x768 red.jpeg"
  },
  {
    "year": 2016,
    "brand": "Fiat",
    "model": "500",
    "color": "Red",
    "image": "Images/2016_fiat_500-pic-5457984915775916578-1024x768 red.jpeg"
  },
  {
    "year": 2016,
    "brand": "Fiat",
    "model": "500",
    "color": "Green",
    "image": "Images/2016_fiat_500-pic-9137527559359410108-1024x768  green.jpeg"
  },
  {
    "year": 2016,
    "brand": "Hyundai",
    "model": "I20",
    "color": "White",
    "image": "Images/2016_hyundai_i20-pic-3852559415417397602-1024x768 white.jpeg"
  },
  {
    "year": 2016,
    "brand": "Jaguar",
    "model": "F-pace",
    "color": "Grey",
    "image": "Images/2016_jaguar_f-pace-pic-4412941051502436282-1024x768  grey.jpeg"
  },
  {
    "year": 2016,
    "brand": "Land Rover",
    "model": "Range Rover Sport",
    "color": "Black",
    "image": "Images/2016_land_rover_range_rover_sport-pic-8525652426430212128-1024x768  black.jpeg"
  },
  {
    "year": 2016,
    "brand": "Land Rover",
    "model": "Range Rover Sport",
    "color": "Unknown",
    "image": "Images/2016_land_rover_range_rover_sport-pic-8525652426430212128-1024x768.jpeg"
  },
  {
    "year": 2016,
    "brand": "Mazda",
    "model": "Cx-3",
    "color": "Blue",
    "image": "Images/2016_mazda_cx-3-pic-372726513441641740-1024x768  blue.jpeg"
  },
  {
    "year": 2016,
    "brand": "Mazda",
    "model": "Cx-3",
    "color": "Unknown",
    "image": "Images/2016_mazda_cx-3-pic-372726513441641740-1024x768.jpeg"
  },
  {
    "year": 2016,
    "brand": "Porsche",
    "model": "Cayenne",
    "color": "Grey",
    "image": "Images/2016_porsche_cayenne-pic-1627826024952195169-1024x768  grey.jpeg"
  },
  {
    "year": 2016,
    "brand": "Porsche",
    "model": "Cayenne",
    "color": "Unknown",
    "image": "Images/2016_porsche_cayenne-pic-1627826024952195169-1024x768.jpeg"
  },
  {
    "year": 2016,
    "brand": "Seat",
    "model": "Ibiza",
    "color": "Unknown",
    "image": "Images/2016_seat_ibiza-pic-2181862016613784142-1024x768.jpeg"
  },
  {
    "year": 2016,
    "brand": "Skoda",
    "model": "Fabia",
    "color": "White",
    "image": "Images/2016_skoda_fabia-pic-5506015818042512095-1024x768 white.jpeg"
  },
  {
    "year": 2016,
    "brand": "Skoda",
    "model": "Fabia",
    "color": "Unknown",
    "image": "Images/2016_skoda_fabia-pic-5506015818042512095-1024x768.jpeg"
  },
  {
    "year": 2016,
    "brand": "Toyota",
    "model": "Verso",
    "color": "Unknown",
    "image": "Images/2016_toyota_verso-pic-8288665344799914954-1024x768.jpeg"
  },
  {
    "year": 2016,
    "brand": "Volkswagen",
    "model": "Tiguan",
    "color": "Unknown",
    "image": "Images/2016_volkswagen_tiguan-pic-8573925889838342853-1024x768.jpeg"
  },
  {
    "year": 2017,
    "brand": "Audi",
    "model": "S3",
    "color": "Black",
    "image": "Images/2017_audi_s3-pic-463667075545806865-1024x768  black.jpeg"
  },
  {
    "year": 2017,
    "brand": "Audi",
    "model": "Sq7",
    "color": "Unknown",
    "image": "Images/2017_audi_sq7-pic-4795828929160719048-1024x768.jpeg"
  },
  {
    "year": 2017,
    "brand": "D S",
    "model": "Ds 3",
    "color": "Unknown",
    "image": "Images/2017_ds_ds_3-pic-8590377124166398466-1024x768.jpeg"
  },
  {
    "year": 2017,
    "brand": "Fiat",
    "model": "500",
    "color": "Red",
    "image": "Images/2017_fiat_500-pic-1717397552428582952-1024x768 red.jpeg"
  },
  {
    "year": 2017,
    "brand": "Ford",
    "model": "Ecosport",
    "color": "Blue",
    "image": "Images/2017_ford_ecosport-pic-2390791382529243160-1024x768  blue.jpeg"
  },
  {
    "year": 2017,
    "brand": "Ford",
    "model": "Ecosport",
    "color": "Unknown",
    "image": "Images/2017_ford_ecosport-pic-2390791382529243160-1024x768.jpeg"
  },
  {
    "year": 2017,
    "brand": "Ford",
    "model": "Fiesta",
    "color": "Unknown",
    "image": "Images/2017_ford_fiesta-pic-6322633417825646696-1024x768.jpeg"
  },
  {
    "year": 2017,
    "brand": "Kia",
    "model": "Rio",
    "color": "Grey",
    "image": "Images/2017_kia_rio-pic-4558618820756866758-1024x768  grey.jpeg"
  },
  {
    "year": 2017,
    "brand": "Land Rover",
    "model": "Range Rover",
    "color": "Grey",
    "image": "Images/2017_land_rover_range_rover-pic-1859732566519718166-1024x768  grey.jpeg"
  },
  {
    "year": 2017,
    "brand": "Land Rover",
    "model": "Range Rover",
    "color": "Unknown",
    "image": "Images/2017_land_rover_range_rover-pic-1859732566519718166-1024x768.jpeg"
  },
  {
    "year": 2017,
    "brand": "Land Rover",
    "model": "Range Rover",
    "color": "Black",
    "image": "Images/2017_land_rover_range_rover-pic-7071596003419240557-1024x768  black.jpeg"
  },
  {
    "year": 2017,
    "brand": "Mercedes-Benz",
    "model": "B-class",
    "color": "Unknown",
    "image": "Images/2017_mercedes-benz_b-class-pic-7015318969989554336-1024x768.jpeg"
  },
  {
    "year": 2017,
    "brand": "Mercedes-Benz",
    "model": "Gla-class",
    "color": "Unknown",
    "image": "Images/2017_mercedes-benz_gla-class-pic-814240442680624244-1024x768.jpeg"
  },
  {
    "year": 2017,
    "brand": "Vauxhall",
    "model": "Adam",
    "color": "Blue",
    "image": "Images/2017_vauxhall_adam-pic-1017890055711352702-1024x768  blue.jpeg"
  },
  {
    "year": 2017,
    "brand": "Volkswagen",
    "model": "Up ",
    "color": "Black",
    "image": "Images/2017_volkswagen_up_-pic-2831463212601949108-1024x768  black.jpeg"
  },
  {
    "year": 2018,
    "brand": "B M W",
    "model": "1 Series",
    "color": "Unknown",
    "image": "Images/2018_bmw_1_series-pic-1632593823196374097-1024x768.jpeg"
  },
  {
    "year": 2018,
    "brand": "B M W",
    "model": "X2",
    "color": "Black",
    "image": "Images/2018_bmw_x2-pic-8555493041497115388-1024x768  black.jpeg"
  },
  {
    "year": 2018,
    "brand": "Citroen",
    "model": "C4 Cactus",
    "color": "Grey",
    "image": "Images/2018_citroen_c4_cactus-pic-6675509291697495036-1024x768  grey.jpeg"
  },
  {
    "year": 2018,
    "brand": "Citroen",
    "model": "Grand C4 Spacetourer",
    "color": "Unknown",
    "image": "Images/2018_citroen_grand_c4_spacetourer-pic-559346203933779266-1024x768.jpeg"
  },
  {
    "year": 2018,
    "brand": "Fiat",
    "model": "500",
    "color": "Red",
    "image": "Images/2018_fiat_500-pic-3113401649638392908-1024x768 red.jpeg"
  },
  {
    "year": 2018,
    "brand": "Fiat",
    "model": "500",
    "color": "Green",
    "image": "Images/2018_fiat_500-pic-4006922381130461237-1024x768  green.jpeg"
  },
  {
    "year": 2018,
    "brand": "Fiat",
    "model": "500x",
    "color": "Grey",
    "image": "Images/2018_fiat_500x-pic-6765446819058982718-1024x768  grey.jpeg"
  },
  {
    "year": 2018,
    "brand": "Ford",
    "model": "Focus",
    "color": "Grey",
    "image": "Images/2018_ford_focus-pic-2048065956203772060-1024x768  grey.jpeg"
  },
  {
    "year": 2018,
    "brand": "Jaguar",
    "model": "Xe",
    "color": "Black",
    "image": "Images/2018_jaguar_xe-pic-7104015412442349923-1024x768  black.jpeg"
  },
  {
    "year": 2018,
    "brand": "Kia",
    "model": "Sorento",
    "color": "Grey",
    "image": "Images/2018_kia_sorento-pic-7087768530503441426-1024x768  grey.jpeg"
  },
  {
    "year": 2018,
    "brand": "Kia",
    "model": "Sorento",
    "color": "Unknown",
    "image": "Images/2018_kia_sorento-pic-7087768530503441426-1024x768.jpeg"
  },
  {
    "year": 2018,
    "brand": "Land Rover",
    "model": "Range Rover",
    "color": "Unknown",
    "image": "Images/2018_land_rover_range_rover-pic-2403462244644448275-1024x768.jpeg"
  },
  {
    "year": 2018,
    "brand": "Land Rover",
    "model": "Range Rover Velar",
    "color": "Black",
    "image": "Images/2018_land_rover_range_rover_velar-pic-7033570787324048791-1024x768  black.jpeg"
  },
  {
    "year": 2018,
    "brand": "Land Rover",
    "model": "Range Rover Velar",
    "color": "Unknown",
    "image": "Images/2018_land_rover_range_rover_velar-pic-7033570787324048791-1024x768.jpeg"
  },
  {
    "year": 2018,
    "brand": "Land Rover",
    "model": "Range Rover Velar",
    "color": "Black",
    "image": "Images/2018_land_rover_range_rover_velar-pic-7407090716741379736-1024x768  black.jpeg"
  },
  {
    "year": 2018,
    "brand": "Land Rover",
    "model": "Range Rover Velar",
    "color": "Unknown",
    "image": "Images/2018_land_rover_range_rover_velar-pic-7407090716741379736-1024x768.jpeg"
  },
  {
    "year": 2018,
    "brand": "Mercedes-Benz",
    "model": "C-class",
    "color": "Unknown",
    "image": "Images/2018_mercedes-benz_c-class-pic-8393415521805116708-1024x768.jpeg"
  },
  {
    "year": 2018,
    "brand": "Mitsubishi",
    "model": "L200",
    "color": "Unknown",
    "image": "Images/2018_mitsubishi_l200-pic-4889168832698369529-1024x768.jpeg"
  },
  {
    "year": 2018,
    "brand": "Peugeot",
    "model": "2008 Suv",
    "color": "Unknown",
    "image": "Images/2018_peugeot_2008_suv-pic-4336049432998032785-1024x768.jpeg"
  },
  {
    "year": 2018,
    "brand": "Peugeot",
    "model": "Boxer",
    "color": "White",
    "image": "Images/2018_peugeot_boxer-pic-7662620663005564354-1024x768 white.jpeg"
  },
  {
    "year": 2018,
    "brand": "Peugeot",
    "model": "Boxer",
    "color": "Unknown",
    "image": "Images/2018_peugeot_boxer-pic-7662620663005564354-1024x768.jpeg"
  },
  {
    "year": 2018,
    "brand": "Seat",
    "model": "Arona",
    "color": "Unknown",
    "image": "Images/2018_seat_arona-pic-6886149253392819412-1024x768.jpeg"
  },
  {
    "year": 2018,
    "brand": "Seat",
    "model": "Ibiza",
    "color": "Gold",
    "image": "Images/2018_seat_ibiza-pic-5075237501735825852-1024x768  gold.jpeg"
  },
  {
    "year": 2018,
    "brand": "Toyota",
    "model": "Aygo",
    "color": "Grey",
    "image": "Images/2018_toyota_aygo-pic-8613410875298556820-1024x768  grey.jpeg"
  },
  {
    "year": 2018,
    "brand": "Volkswagen",
    "model": "Tiguan",
    "color": "Unknown",
    "image": "Images/2018_volkswagen_tiguan-pic-6551568253691563940-1024x768.jpeg"
  },
  {
    "year": 2018,
    "brand": "Volkswagen",
    "model": "Touareg",
    "color": "Black",
    "image": "Images/2018_volkswagen_touareg-pic-7313878464754211505-1024x768  black.jpeg"
  },
  {
    "year": 2018,
    "brand": "Volkswagen",
    "model": "Touareg",
    "color": "Unknown",
    "image": "Images/2018_volkswagen_touareg-pic-7313878464754211505-1024x768.jpeg"
  },
  {
    "year": 2018,
    "brand": "Volvo",
    "model": "Xc90",
    "color": "Gold",
    "image": "Images/2018_volvo_xc90-pic-2701935407999109626-1024x768  gold.jpeg"
  },
  {
    "year": 2019,
    "brand": "Audi",
    "model": "A6 Saloon",
    "color": "Black",
    "image": "Images/2019_audi_a6_saloon-pic-3961004037015429765-1024x768  black.jpeg"
  },
  {
    "year": 2019,
    "brand": "Audi",
    "model": "A6 Saloon",
    "color": "Unknown",
    "image": "Images/2019_audi_a6_saloon-pic-3961004037015429765-1024x768.jpeg"
  },
  {
    "year": 2019,
    "brand": "Audi",
    "model": "Q5",
    "color": "Unknown",
    "image": "Images/2019_audi_q5-pic-1981545960255188069-1024x768.jpeg"
  },
  {
    "year": 2019,
    "brand": "B M W",
    "model": "1 Series",
    "color": "Black",
    "image": "Images/2019_bmw_1_series-pic-7785220081424127482-1024x768  black.jpeg"
  },
  {
    "year": 2019,
    "brand": "B M W",
    "model": "2 Series",
    "color": "Unknown",
    "image": "Images/2019_bmw_2_series-pic-4280446248800568334-1024x768.jpeg"
  },
  {
    "year": 2019,
    "brand": "B M W",
    "model": "X5",
    "color": "Blue",
    "image": "Images/2019_bmw_x5-pic-4314969286074326087-1024x768  blue.jpeg"
  },
  {
    "year": 2019,
    "brand": "B M W",
    "model": "X5",
    "color": "Unknown",
    "image": "Images/2019_bmw_x5-pic-4314969286074326087-1024x768.jpeg"
  },
  {
    "year": 2019,
    "brand": "Citroen",
    "model": "Berlingo",
    "color": "Unknown",
    "image": "Images/2019_citroen_berlingo-pic-6539938626134650967-1024x768.jpeg"
  },
  {
    "year": 2019,
    "brand": "Citroen",
    "model": "Berlingo",
    "color": "Unknown",
    "image": "Images/2019_citroen_berlingo-pic-6897271907813199608-1024x768.jpeg"
  },
  {
    "year": 2019,
    "brand": "Fiat",
    "model": "500",
    "color": "Red",
    "image": "Images/2019_fiat_500-pic-2111953396417202181-1024x768 red.jpeg"
  },
  {
    "year": 2019,
    "brand": "Fiat",
    "model": "500",
    "color": "Red",
    "image": "Images/2019_fiat_500-pic-5777067979006466423-1024x768 red.jpeg"
  },
  {
    "year": 2019,
    "brand": "Fiat",
    "model": "500",
    "color": "Green",
    "image": "Images/2019_fiat_500-pic-6980804864675850962-1024x768  green.jpeg"
  },
  {
    "year": 2019,
    "brand": "Mazda",
    "model": "Mazda6",
    "color": "Blue",
    "image": "Images/2019_mazda_mazda6-pic-7633110719266179603-1024x768  blue.jpeg"
  },
  {
    "year": 2019,
    "brand": "Mazda",
    "model": "Mazda6",
    "color": "Unknown",
    "image": "Images/2019_mazda_mazda6-pic-7633110719266179603-1024x768.jpeg"
  },
  {
    "year": 2019,
    "brand": "Mercedes-Benz",
    "model": "C-class",
    "color": "Unknown",
    "image": "Images/2019_mercedes-benz_c-class-pic-1559448667262406180-1024x768.jpeg"
  },
  {
    "year": 2019,
    "brand": "Mercedes-Benz",
    "model": "Sprinter",
    "color": "Unknown",
    "image": "Images/2019_mercedes-benz_sprinter-pic-7685742943518011317-1024x768.jpeg"
  },
  {
    "year": 2019,
    "brand": "M I N I",
    "model": "Mini",
    "color": "Green",
    "image": "Images/2019_mini_mini-pic-1032599688480994810-1024x768  green.jpeg"
  },
  {
    "year": 2019,
    "brand": "Peugeot",
    "model": "3008 Suv",
    "color": "Unknown",
    "image": "Images/2019_peugeot_3008_suv-pic-3766571799457008827-1024x768.jpeg"
  },
  {
    "year": 2019,
    "brand": "Peugeot",
    "model": "3008 Suv",
    "color": "Unknown",
    "image": "Images/2019_peugeot_3008_suv-pic-4575607854262621999-1024x768.jpeg"
  },
  {
    "year": 2019,
    "brand": "Porsche",
    "model": "Boxster 718",
    "color": "Blue",
    "image": "Images/2019_porsche_boxster_718-pic-2724414983788601177-1024x768  blue.jpeg"
  },
  {
    "year": 2019,
    "brand": "Renault",
    "model": "Clio",
    "color": "Unknown",
    "image": "Images/2019_renault_clio-pic-3555188743115909914-1024x768.jpeg"
  },
  {
    "year": 2019,
    "brand": "Volkswagen",
    "model": "Tiguan",
    "color": "Unknown",
    "image": "Images/2019_volkswagen_tiguan-pic-6952318390261026532-1024x768.jpeg"
  },
  {
    "year": 2019,
    "brand": "Volkswagen",
    "model": "Up ",
    "color": "Unknown",
    "image": "Images/2019_volkswagen_up_-pic-2488124701691610898-1024x768.jpeg"
  },
  {
    "year": 2019,
    "brand": "Volvo",
    "model": "V60",
    "color": "Grey",
    "image": "Images/2019_volvo_v60-pic-8826202669311809261-1024x768  grey.jpeg"
  },
  {
    "year": 2019,
    "brand": "Volvo",
    "model": "Xc40",
    "color": "Unknown",
    "image": "Images/2019_volvo_xc40-pic-1971904885253962473-1024x768.jpeg"
  },
  {
    "year": 2019,
    "brand": "Volvo",
    "model": "Xc60",
    "color": "Grey",
    "image": "Images/2019_volvo_xc60-pic-596070331779734302-1024x768  grey.jpeg"
  },
  {
    "year": 2020,
    "brand": "Audi",
    "model": "A6 Saloon",
    "color": "Grey",
    "image": "Images/2020_audi_a6_saloon-pic-8846486087044654514-1024x768  grey.jpeg"
  },
  {
    "year": 2020,
    "brand": "Audi",
    "model": "Q2",
    "color": "Grey",
    "image": "Images/2020_audi_q2-pic-7846353324260219842-1024x768  grey.jpeg"
  },
  {
    "year": 2020,
    "brand": "Audi",
    "model": "Q2",
    "color": "Unknown",
    "image": "Images/2020_audi_q2-pic-7846353324260219842-1024x768.jpeg"
  },
  {
    "year": 2020,
    "brand": "B M W",
    "model": "4 Series",
    "color": "Unknown",
    "image": "Images/2020_bmw_4_series-pic-1321976195442673586-1024x768.jpeg"
  },
  {
    "year": 2020,
    "brand": "Citroen",
    "model": "Relay",
    "color": "White",
    "image": "Images/2020_citroen_relay-pic-7445075174110702068-1024x768 white.jpeg"
  },
  {
    "year": 2020,
    "brand": "Citroen",
    "model": "Relay",
    "color": "Unknown",
    "image": "Images/2020_citroen_relay-pic-7445075174110702068-1024x768.jpeg"
  },
  {
    "year": 2020,
    "brand": "Ford",
    "model": "Transit Connect",
    "color": "Unknown",
    "image": "Images/2020_ford_transit_connect-pic-2303200272078181810-1024x768.jpeg"
  },
  {
    "year": 2020,
    "brand": "Hyundai",
    "model": "I10",
    "color": "White",
    "image": "Images/2020_hyundai_i10-pic-5553376641096718230-1024x768 white.jpeg"
  },
  {
    "year": 2020,
    "brand": "Hyundai",
    "model": "I10",
    "color": "Unknown",
    "image": "Images/2020_hyundai_i10-pic-5553376641096718230-1024x768.jpeg"
  },
  {
    "year": 2020,
    "brand": "Mazda",
    "model": "Cx-5",
    "color": "Unknown",
    "image": "Images/2020_mazda_cx-5-pic-5389294168668869814-1024x768.jpeg"
  },
  {
    "year": 2020,
    "brand": "Mazda",
    "model": "Mazda3",
    "color": "Blue",
    "image": "Images/2020_mazda_mazda3-pic-3383985826626214508-1024x768  blue.jpeg"
  },
  {
    "year": 2020,
    "brand": "Mazda",
    "model": "Mazda3",
    "color": "Unknown",
    "image": "Images/2020_mazda_mazda3-pic-7877015272016581789-1024x768.jpeg"
  },
  {
    "year": 2020,
    "brand": "M G",
    "model": "Zs Suv",
    "color": "Unknown",
    "image": "Images/2020_mg_zs_suv-pic-2629027305648343281-1024x768.jpeg"
  },
  {
    "year": 2020,
    "brand": "Mitsubishi",
    "model": "L200",
    "color": "Black",
    "image": "Images/2020_mitsubishi_l200-pic-705144847406055073-1024x768  black.jpeg"
  },
  {
    "year": 2020,
    "brand": "Mitsubishi",
    "model": "L200",
    "color": "Unknown",
    "image": "Images/2020_mitsubishi_l200-pic-705144847406055073-1024x768.jpeg"
  },
  {
    "year": 2020,
    "brand": "Nissan",
    "model": "Navara",
    "color": "Unknown",
    "image": "Images/2020_nissan_navara-pic-4471849033655186117-1024x768.jpeg"
  },
  {
    "year": 2020,
    "brand": "Peugeot",
    "model": "5008 Suv",
    "color": "Unknown",
    "image": "Images/2020_peugeot_5008_suv-pic-7069766864851492061-1024x768.jpeg"
  },
  {
    "year": 2020,
    "brand": "Peugeot",
    "model": "Rifter",
    "color": "Unknown",
    "image": "Images/2020_peugeot_rifter-pic-7161166141174692372-1024x768.jpeg"
  },
  {
    "year": 2020,
    "brand": "Renault",
    "model": "Kadjar",
    "color": "Unknown",
    "image": "Images/2020_renault_kadjar-pic-8967107266917615647-1024x768.jpeg"
  },
  {
    "year": 2020,
    "brand": "Renault",
    "model": "Koleos",
    "color": "Unknown",
    "image": "Images/2020_renault_koleos-pic-6459026638821121795-1024x768.jpeg"
  },
  {
    "year": 2020,
    "brand": "Seat",
    "model": "Tarraco",
    "color": "Green",
    "image": "Images/2020_seat_tarraco-pic-4580055293198719388-1024x768  green.jpeg"
  },
  {
    "year": 2020,
    "brand": "Vauxhall",
    "model": "Corsa",
    "color": "Unknown",
    "image": "Images/2020_vauxhall_corsa-pic-2639267510561658540-1024x768.jpeg"
  },
  {
    "year": 2020,
    "brand": "Volkswagen",
    "model": "Id 3",
    "color": "Blue",
    "image": "Images/2020_volkswagen_id_3-pic-1041366790878712700-1024x768  blue.jpeg"
  },
  {
    "year": 2020,
    "brand": "Volvo",
    "model": "Xc60",
    "color": "Gold",
    "image": "Images/2020_volvo_xc60-pic-5570945063690058228-1024x768  gold.jpeg"
  },
  {
    "year": 2021,
    "brand": "Abarth",
    "model": "595",
    "color": "Green",
    "image": "Images/2021_abarth_595-pic-302426610374208520-1024x768  green.jpeg"
  },
  {
    "year": 2021,
    "brand": "B M W",
    "model": "3 Series",
    "color": "Blue",
    "image": "Images/2021_bmw_3_series-pic-4711243225426965410-1024x768  blue.jpeg"
  },
  {
    "year": 2021,
    "brand": "B M W",
    "model": "4 Series",
    "color": "Blue",
    "image": "Images/2021_bmw_4_series-pic-2657688448655911620-1024x768  blue.jpeg"
  },
  {
    "year": 2021,
    "brand": "Citroen",
    "model": "C1",
    "color": "Unknown",
    "image": "Images/2021_citroen_c1-pic-1026816291263180271-1024x768.jpeg"
  },
  {
    "year": 2021,
    "brand": "Fiat",
    "model": "Doblo",
    "color": "Unknown",
    "image": "Images/2021_fiat_doblo-pic-7771842771224029782-1024x768.jpeg"
  },
  {
    "year": 2021,
    "brand": "Ford",
    "model": "Focus",
    "color": "Unknown",
    "image": "Images/2021_ford_focus-pic-6024334153462641343-1024x768.jpeg"
  },
  {
    "year": 2021,
    "brand": "Ford",
    "model": "Ranger",
    "color": "Black",
    "image": "Images/2021_ford_ranger-pic-8977255547770893302-1024x768  black.jpeg"
  },
  {
    "year": 2021,
    "brand": "Ford",
    "model": "Ranger",
    "color": "Unknown",
    "image": "Images/2021_ford_ranger-pic-8977255547770893302-1024x768.jpeg"
  },
  {
    "year": 2021,
    "brand": "Ford",
    "model": "Transit",
    "color": "Unknown",
    "image": "Images/2021_ford_transit-pic-869635103709513380-1024x768.jpeg"
  },
  {
    "year": 2021,
    "brand": "Kia",
    "model": "Sportage",
    "color": "Unknown",
    "image": "Images/2021_kia_sportage-pic-109173880730062443-1024x768.jpeg"
  },
  {
    "year": 2021,
    "brand": "Kia",
    "model": "Sportage",
    "color": "Unknown",
    "image": "Images/2021_kia_sportage-pic-1836399693819300498-1024x768.jpeg"
  },
  {
    "year": 2021,
    "brand": "Mazda",
    "model": "Cx-30",
    "color": "Unknown",
    "image": "Images/2021_mazda_cx-30-pic-6046879589955535306-1024x768.jpeg"
  },
  {
    "year": 2021,
    "brand": "M I N I",
    "model": "Mini",
    "color": "Green",
    "image": "Images/2021_mini_mini-pic-8241923867087984442-1024x768  green.jpeg"
  },
  {
    "year": 2021,
    "brand": "Peugeot",
    "model": "2008 Suv",
    "color": "Unknown",
    "image": "Images/2021_peugeot_2008_suv-pic-8105112931385709742-1024x768.jpeg"
  },
  {
    "year": 2021,
    "brand": "Vauxhall",
    "model": "Crossland",
    "color": "Unknown",
    "image": "Images/2021_vauxhall_crossland-pic-4941671435234371134-1024x768.jpeg"
  },
  {
    "year": 2021,
    "brand": "Volkswagen",
    "model": "Id 3",
    "color": "Unknown",
    "image": "Images/2021_volkswagen_id_3-pic-3184887383184412481-1024x768.jpeg"
  },
  {
    "year": 2021,
    "brand": "Volkswagen",
    "model": "Passat",
    "color": "Unknown",
    "image": "Images/2021_volkswagen_passat-pic-1831587816778780512-1024x768.jpeg"
  },
  {
    "year": 2021,
    "brand": "Volkswagen",
    "model": "T-roc",
    "color": "Unknown",
    "image": "Images/2021_volkswagen_t-roc-pic-6972257499356544052-1024x768.jpeg"
  },
  {
    "year": 2021,
    "brand": "Volkswagen",
    "model": "Up ",
    "color": "Unknown",
    "image": "Images/2021_volkswagen_up_-pic-4587163875639453657-1024x768.jpeg"
  },
  {
    "year": 2022,
    "brand": "Audi",
    "model": "A4 Avant",
    "color": "Unknown",
    "image": "Images/2022_audi_a4_avant-pic-8727864164079828215-1024x768.jpeg"
  },
  {
    "year": 2022,
    "brand": "Audi",
    "model": "Q2",
    "color": "Unknown",
    "image": "Images/2022_audi_q2-pic-5508145265358222728-1024x768.jpeg"
  },
  {
    "year": 2022,
    "brand": "Audi",
    "model": "Q2",
    "color": "Unknown",
    "image": "Images/2022_audi_q2-pic-7411910391450033722-1024x768.jpeg"
  },
  {
    "year": 2022,
    "brand": "Citroen",
    "model": "C3 Aircross",
    "color": "Unknown",
    "image": "Images/2022_citroen_c3_aircross-pic-7294994040504718546-1024x768.jpeg"
  },
  {
    "year": 2022,
    "brand": "Citroen",
    "model": "C5 Aircross",
    "color": "Blue",
    "image": "Images/2022_citroen_c5_aircross-pic-6837047679618287591-1024x768  blue.jpeg"
  },
  {
    "year": 2022,
    "brand": "Cupra",
    "model": "Born",
    "color": "Grey",
    "image": "Images/2022_cupra_born-pic-6248970408369066743-1024x768  grey.jpeg"
  },
  {
    "year": 2022,
    "brand": "Dacia",
    "model": "Sandero Stepway",
    "color": "Unknown",
    "image": "Images/2022_dacia_sandero_stepway-pic-2059727606560463011-1024x768.jpeg"
  },
  {
    "year": 2022,
    "brand": "Fiat",
    "model": "500c",
    "color": "Green",
    "image": "Images/2022_fiat_500c-pic-4507696729199621731-1024x768  green.jpeg"
  },
  {
    "year": 2022,
    "brand": "Ford",
    "model": "Tourneo Custom",
    "color": "Unknown",
    "image": "Images/2022_ford_tourneo_custom-pic-7741365703230172021-1024x768.jpeg"
  },
  {
    "year": 2022,
    "brand": "Ford",
    "model": "Transit Custom",
    "color": "Unknown",
    "image": "Images/2022_ford_transit_custom-pic-1932958353001155799-1024x768.jpeg"
  },
  {
    "year": 2022,
    "brand": "Hyundai",
    "model": "Tucson",
    "color": "Blue",
    "image": "Images/2022_hyundai_tucson-pic-4907620036635188137-1024x768  blue.jpeg"
  },
  {
    "year": 2022,
    "brand": "Hyundai",
    "model": "Tucson",
    "color": "Unknown",
    "image": "Images/2022_hyundai_tucson-pic-4907620036635188137-1024x768.jpeg"
  },
  {
    "year": 2022,
    "brand": "Kgm",
    "model": "  Ssangyong Korando E-motion",
    "color": "Blue",
    "image": "Images/2022_kgm___ssangyong_korando_e-motion-pic-4773105936138432269-1024x768  blue.jpeg"
  },
  {
    "year": 2022,
    "brand": "Kia",
    "model": "Pro Ceed",
    "color": "Unknown",
    "image": "Images/2022_kia_pro_ceed-pic-6181673332433936730-1024x768.jpeg"
  },
  {
    "year": 2022,
    "brand": "Land Rover",
    "model": "Range Rover Evoque",
    "color": "Unknown",
    "image": "Images/2022_land_rover_range_rover_evoque-pic-5566348988675365188-1024x768.jpeg"
  },
  {
    "year": 2022,
    "brand": "Mercedes-Benz",
    "model": "Sprinter",
    "color": "Unknown",
    "image": "Images/2022_mercedes-benz_sprinter-pic-6593807682798781447-1024x768.jpeg"
  },
  {
    "year": 2022,
    "brand": "Mercedes-Benz",
    "model": "V-class",
    "color": "Unknown",
    "image": "Images/2022_mercedes-benz_v-class-pic-6559281773154485908-1024x768.jpeg"
  },
  {
    "year": 2022,
    "brand": "M I N I",
    "model": "Hatchback",
    "color": "Yellow",
    "image": "Images/2022_mini_hatchback-pic-1928742287882019898-1024x768 Yellow .jpeg"
  },
  {
    "year": 2022,
    "brand": "Nissan",
    "model": "Qashqai",
    "color": "Unknown",
    "image": "Images/2022_nissan_qashqai-pic-2822914679366479555-1024x768.jpeg"
  },
  {
    "year": 2022,
    "brand": "Peugeot",
    "model": "208",
    "color": "Yellow",
    "image": "Images/2022_peugeot_208-pic-2996441069907295029-1024x768 Yellow .jpeg"
  },
  {
    "year": 2022,
    "brand": "Peugeot",
    "model": "208",
    "color": "Yellow",
    "image": "Images/2022_peugeot_208-pic-3702219483706203174-1024x768 Yellow .jpeg"
  },
  {
    "year": 2022,
    "brand": "Peugeot",
    "model": "208",
    "color": "Unknown",
    "image": "Images/2022_peugeot_208-pic-3702219483706203174-1024x768.jpeg"
  },
  {
    "year": 2022,
    "brand": "Peugeot",
    "model": "3008 Suv",
    "color": "Unknown",
    "image": "Images/2022_peugeot_3008_suv-pic-3929046683185291892-1024x768.jpeg"
  },
  {
    "year": 2022,
    "brand": "Suzuki",
    "model": "Jimny",
    "color": "Green",
    "image": "Images/2022_suzuki_jimny-pic-8526597965029216615-1024x768  green.jpeg"
  },
  {
    "year": 2022,
    "brand": "Suzuki",
    "model": "Vitara",
    "color": "Unknown",
    "image": "Images/2022_suzuki_vitara-pic-5153569969248557785-1024x768.jpeg"
  },
  {
    "year": 2022,
    "brand": "Toyota",
    "model": "Hi-lux",
    "color": "Unknown",
    "image": "Images/2022_toyota_hi-lux-pic-3604527549833345817-1024x768.jpeg"
  },
  {
    "year": 2022,
    "brand": "Toyota",
    "model": "Rav4",
    "color": "Unknown",
    "image": "Images/2022_toyota_rav4-pic-468218537051392579-1024x768.jpeg"
  },
  {
    "year": 2022,
    "brand": "Vauxhall",
    "model": "Corsa",
    "color": "Unknown",
    "image": "Images/2022_vauxhall_corsa-pic-2493509555001468564-1024x768.jpeg"
  },
  {
    "year": 2022,
    "brand": "Vauxhall",
    "model": "Corsa",
    "color": "Unknown",
    "image": "Images/2022_vauxhall_corsa-pic-4401047320390516118-1024x768.jpeg"
  },
  {
    "year": 2022,
    "brand": "Volkswagen",
    "model": "Caddy",
    "color": "White",
    "image": "Images/2022_volkswagen_caddy-pic-8994649220698162929-1024x768 white.jpeg"
  },
  {
    "year": 2022,
    "brand": "Volkswagen",
    "model": "Caddy",
    "color": "Unknown",
    "image": "Images/2022_volkswagen_caddy-pic-8994649220698162929-1024x768.jpeg"
  },
  {
    "year": 2022,
    "brand": "Volkswagen",
    "model": "Tiguan Allspace",
    "color": "Unknown",
    "image": "Images/2022_volkswagen_tiguan_allspace-pic-9169825987698802746-1024x768.jpeg"
  },
  {
    "year": 2022,
    "brand": "Volkswagen",
    "model": "Transporter",
    "color": "Unknown",
    "image": "Images/2022_volkswagen_transporter-pic-7952332967498404150-1024x768.jpeg"
  },
  {
    "year": 2022,
    "brand": "Volvo",
    "model": "Xc40",
    "color": "Unknown",
    "image": "Images/2022_volvo_xc40-pic-2310506596678472462-1024x768.jpeg"
  },
  {
    "year": 2022,
    "brand": "Volvo",
    "model": "Xc60",
    "color": "Grey",
    "image": "Images/2022_volvo_xc60-pic-5281970002939921602-1024x768  grey.jpeg"
  },
  {
    "year": 2022,
    "brand": "Volvo",
    "model": "Xc60",
    "color": "Unknown",
    "image": "Images/2022_volvo_xc60-pic-5281970002939921602-1024x768.jpeg"
  },
  {
    "year": 2022,
    "brand": "Volvo",
    "model": "Xc90",
    "color": "Gold",
    "image": "Images/2022_volvo_xc90-pic-3392272297622611533-1024x768  gold.jpeg"
  },
  {
    "year": 2023,
    "brand": "Audi",
    "model": "A5",
    "color": "Grey",
    "image": "Images/2023_audi_a5-pic-1101127259622338037-1024x768  grey.jpeg"
  },
  {
    "year": 2023,
    "brand": "Audi",
    "model": "A5",
    "color": "Unknown",
    "image": "Images/2023_audi_a5-pic-1101127259622338037-1024x768.jpeg"
  },
  {
    "year": 2023,
    "brand": "Audi",
    "model": "Q4 E-tron",
    "color": "Black",
    "image": "Images/2023_audi_q4_e-tron-pic-4614465074826104380-1024x768  black.jpeg"
  },
  {
    "year": 2023,
    "brand": "Audi",
    "model": "Q4 E-tron",
    "color": "Unknown",
    "image": "Images/2023_audi_q4_e-tron-pic-4614465074826104380-1024x768.jpeg"
  },
  {
    "year": 2023,
    "brand": "Audi",
    "model": "Q5",
    "color": "Black",
    "image": "Images/2023_audi_q5-pic-286075460723956701-1024x768  black.jpeg"
  },
  {
    "year": 2023,
    "brand": "Audi",
    "model": "Q5",
    "color": "Unknown",
    "image": "Images/2023_audi_q5-pic-286075460723956701-1024x768.jpeg"
  },
  {
    "year": 2023,
    "brand": "Audi",
    "model": "Q5",
    "color": "Unknown",
    "image": "Images/2023_audi_q5-pic-3017211299385792771-1024x768.jpeg"
  },
  {
    "year": 2023,
    "brand": "Audi",
    "model": "Rs3",
    "color": "Green",
    "image": "Images/2023_audi_rs3-pic-5949299888462836289-1024x768  green.jpeg"
  },
  {
    "year": 2023,
    "brand": "B M W",
    "model": "X5",
    "color": "Unknown",
    "image": "Images/2023_bmw_x5-pic-609895061375856439-1024x768.jpeg"
  },
  {
    "year": 2023,
    "brand": "Ford",
    "model": "Ecosport",
    "color": "Unknown",
    "image": "Images/2023_ford_ecosport-pic-1302714884914380080-1024x768.jpeg"
  },
  {
    "year": 2023,
    "brand": "Hyundai",
    "model": "Bayon",
    "color": "Green",
    "image": "Images/2023_hyundai_bayon-pic-5451556877317915789-1024x768  green.jpeg"
  },
  {
    "year": 2023,
    "brand": "Hyundai",
    "model": "I10",
    "color": "Black",
    "image": "Images/2023_hyundai_i10-pic-31413742394438017-1024x768  black.jpeg"
  },
  {
    "year": 2023,
    "brand": "Hyundai",
    "model": "I30",
    "color": "Grey",
    "image": "Images/2023_hyundai_i30-pic-8890549189831697121-1024x768  grey.jpeg"
  },
  {
    "year": 2023,
    "brand": "Hyundai",
    "model": "Ioniq 5",
    "color": "Green",
    "image": "Images/2023_hyundai_ioniq_5-pic-3682645954133343750-1024x768  green.jpeg"
  },
  {
    "year": 2023,
    "brand": "Hyundai",
    "model": "Santa Fe",
    "color": "Unknown",
    "image": "Images/2023_hyundai_santa_fe-pic-8151687230385365322-1024x768.jpeg"
  },
  {
    "year": 2023,
    "brand": "Isuzu",
    "model": "D-max",
    "color": "Unknown",
    "image": "Images/2023_isuzu_d-max-pic-1870912596834971688-1024x768.jpeg"
  },
  {
    "year": 2023,
    "brand": "Iveco",
    "model": "Daily S Class",
    "color": "Unknown",
    "image": "Images/2023_iveco_daily_s_class-pic-5489023071873618454-1024x768.jpeg"
  },
  {
    "year": 2023,
    "brand": "Kia",
    "model": "Niro Ev",
    "color": "Blue",
    "image": "Images/2023_kia_niro_ev-pic-7982748978721478918-1024x768  blue.jpeg"
  },
  {
    "year": 2023,
    "brand": "Kia",
    "model": "Sportage",
    "color": "Unknown",
    "image": "Images/2023_kia_sportage-pic-6489276725870687243-1024x768.jpeg"
  },
  {
    "year": 2023,
    "brand": "Kia",
    "model": "Xceed",
    "color": "Green",
    "image": "Images/2023_kia_xceed-pic-4093719064054605566-1024x768  green.jpeg"
  },
  {
    "year": 2023,
    "brand": "Land Rover",
    "model": "Discovery Sport",
    "color": "Blue",
    "image": "Images/2023_land_rover_discovery_sport-pic-6071277198979349146-1024x768  blue.jpeg"
  },
  {
    "year": 2023,
    "brand": "Land Rover",
    "model": "Range Rover",
    "color": "Unknown",
    "image": "Images/2023_land_rover_range_rover-pic-5460565094326785855-1024x768.jpeg"
  },
  {
    "year": 2023,
    "brand": "Land Rover",
    "model": "Range Rover",
    "color": "Gold",
    "image": "Images/2023_land_rover_range_rover-pic-6278992950288598902-1024x768  gold.jpeg"
  },
  {
    "year": 2023,
    "brand": "Lexus",
    "model": "Ux 250h",
    "color": "Unknown",
    "image": "Images/2023_lexus_ux_250h-pic-6771304485579141438-1024x768.jpeg"
  },
  {
    "year": 2023,
    "brand": "Mazda",
    "model": "Mazda2",
    "color": "White",
    "image": "Images/2023_mazda_mazda2-pic-5508605732263790178-1024x768 white.jpeg"
  },
  {
    "year": 2023,
    "brand": "Mazda",
    "model": "Mazda2",
    "color": "Unknown",
    "image": "Images/2023_mazda_mazda2-pic-5508605732263790178-1024x768.jpeg"
  },
  {
    "year": 2023,
    "brand": "Mercedes-Benz",
    "model": "C-class",
    "color": "Blue",
    "image": "Images/2023_mercedes-benz_c-class-pic-650295905302651710-1024x768  blue.jpeg"
  },
  {
    "year": 2023,
    "brand": "Mercedes-Benz",
    "model": "Cla",
    "color": "Unknown",
    "image": "Images/2023_mercedes-benz_cla-pic-5238564937464385975-1024x768.jpeg"
  },
  {
    "year": 2023,
    "brand": "M I N I",
    "model": "Mini",
    "color": "Unknown",
    "image": "Images/2023_mini_mini-pic-1667199873176305791-1024x768.jpeg"
  },
  {
    "year": 2023,
    "brand": "Peugeot",
    "model": "208",
    "color": "Grey",
    "image": "Images/2023_peugeot_208-pic-2998441932115546544-1024x768  grey.jpeg"
  },
  {
    "year": 2023,
    "brand": "Peugeot",
    "model": "208",
    "color": "Yellow",
    "image": "Images/2023_peugeot_208-pic-4907728554427217865-1024x768 Yellow .jpeg"
  },
  {
    "year": 2023,
    "brand": "Peugeot",
    "model": "208",
    "color": "Yellow",
    "image": "Images/2023_peugeot_208-pic-8026982063694927415-1024x768 Yellow .jpeg"
  },
  {
    "year": 2023,
    "brand": "Porsche",
    "model": "Taycan",
    "color": "Green",
    "image": "Images/2023_porsche_taycan-pic-262573983587749266-1024x768  green.jpeg"
  },
  {
    "year": 2023,
    "brand": "Seat",
    "model": "Ateca",
    "color": "Unknown",
    "image": "Images/2023_seat_ateca-pic-4624866425617044766-1024x768.jpeg"
  },
  {
    "year": 2023,
    "brand": "Seat",
    "model": "Ateca",
    "color": "Black",
    "image": "Images/2023_seat_ateca-pic-7470563379402498707-1024x768  black.jpeg"
  },
  {
    "year": 2023,
    "brand": "Skoda",
    "model": "Karoq",
    "color": "Unknown",
    "image": "Images/2023_skoda_karoq-pic-379339075357906517-1024x768.jpeg"
  },
  {
    "year": 2023,
    "brand": "Toyota",
    "model": "Aygo X",
    "color": "Green",
    "image": "Images/2023_toyota_aygo_x-pic-4125493457808834163-1024x768  green.jpeg"
  },
  {
    "year": 2023,
    "brand": "Toyota",
    "model": "Corolla",
    "color": "Unknown",
    "image": "Images/2023_toyota_corolla-pic-4194007436334891420-1024x768.jpeg"
  },
  {
    "year": 2023,
    "brand": "Vauxhall",
    "model": "Astra",
    "color": "Yellow",
    "image": "Images/2023_vauxhall_astra-pic-3550336102386375202-1024x768 Yellow .jpeg"
  },
  {
    "year": 2023,
    "brand": "Vauxhall",
    "model": "Mokka",
    "color": "Unknown",
    "image": "Images/2023_vauxhall_mokka-pic-6550156024538522907-1024x768.jpeg"
  },
  {
    "year": 2023,
    "brand": "Volkswagen",
    "model": "Golf",
    "color": "Unknown",
    "image": "Images/2023_volkswagen_golf-pic-6021537605428105977-1024x768.jpeg"
  },
  {
    "year": 2023,
    "brand": "Volkswagen",
    "model": "Tiguan",
    "color": "White",
    "image": "Images/2023_volkswagen_tiguan-pic-2050702140042812871-1024x768 white.jpeg"
  },
  {
    "year": 2023,
    "brand": "Volvo",
    "model": "Xc60",
    "color": "Blue",
    "image": "Images/2023_volvo_xc60-pic-4949977707314586931-1024x768  blue.jpeg"
  },
  {
    "year": 2024,
    "brand": "Citroen",
    "model": "C3 Aircross",
    "color": "Blue",
    "image": "Images/2024_citroen_c3_aircross-pic-3485405632068550864-1024x768  blue.jpeg"
  },
  {
    "year": 2024,
    "brand": "Citroen",
    "model": "C3 Aircross",
    "color": "Unknown",
    "image": "Images/2024_citroen_c3_aircross-pic-3485405632068550864-1024x768.jpeg"
  },
  {
    "year": 2024,
    "brand": "Ford",
    "model": "Capri",
    "color": "Yellow",
    "image": "Images/2024_ford_capri-pic-8575937448182550145-1024x768 Yellow .jpeg"
  },
  {
    "year": 2024,
    "brand": "Ford",
    "model": "Kuga",
    "color": "Green",
    "image": "Images/2024_ford_kuga-pic-6950022183723466668-1024x768  green.jpeg"
  },
  {
    "year": 2024,
    "brand": "Ford",
    "model": "Mustang Mach-e",
    "color": "Unknown",
    "image": "Images/2024_ford_mustang_mach-e-pic-6916023305089607152-1024x768.jpeg"
  },
  {
    "year": 2024,
    "brand": "Hyundai",
    "model": "Tucson",
    "color": "Unknown",
    "image": "Images/2024_hyundai_tucson-pic-2069616188528043296-1024x768.jpeg"
  },
  {
    "year": 2024,
    "brand": "Hyundai",
    "model": "Tucson",
    "color": "Unknown",
    "image": "Images/2024_hyundai_tucson-pic-3779447989481091947-1024x768.jpeg"
  },
  {
    "year": 2024,
    "brand": "Kia",
    "model": "Stonic",
    "color": "Unknown",
    "image": "Images/2024_kia_stonic-pic-8521416538445368339-1024x768.jpeg"
  },
  {
    "year": 2024,
    "brand": "Land Rover",
    "model": "Discovery",
    "color": "Unknown",
    "image": "Images/2024_land_rover_discovery-pic-7075692877644873329-1024x768.jpeg"
  },
  {
    "year": 2024,
    "brand": "Lexus",
    "model": "Lbx",
    "color": "Unknown",
    "image": "Images/2024_lexus_lbx-pic-4059233911459545895-1024x768.jpeg"
  },
  {
    "year": 2024,
    "brand": "Nissan",
    "model": "X-trail",
    "color": "Unknown",
    "image": "Images/2024_nissan_x-trail-pic-894965734888019496-1024x768.jpeg"
  },
  {
    "year": 2024,
    "brand": "Peugeot",
    "model": "208",
    "color": "Unknown",
    "image": "Images/2024_peugeot_208-pic-5348361081322559032-1024x768.jpeg"
  },
  {
    "year": 2024,
    "brand": "Polestar",
    "model": "Polestar 2",
    "color": "Unknown",
    "image": "Images/2024_polestar_polestar_2-pic-8387090133716139936-1024x768.jpeg"
  },
  {
    "year": 2024,
    "brand": "Porsche",
    "model": "Macan",
    "color": "Unknown",
    "image": "Images/2024_porsche_macan-pic-5336515801262421080-1024x768.jpeg"
  },
  {
    "year": 2024,
    "brand": "Renault",
    "model": "Trafic",
    "color": "Unknown",
    "image": "Images/2024_renault_trafic-pic-4276653242598546461-1024x768.jpeg"
  },
  {
    "year": 2024,
    "brand": "Toyota",
    "model": "Aygo X",
    "color": "Unknown",
    "image": "Images/2024_toyota_aygo_x-pic-5114246224400546996-1024x768.jpeg"
  },
  {
    "year": 2024,
    "brand": "Toyota",
    "model": "Hi-lux",
    "color": "White",
    "image": "Images/2024_toyota_hi-lux-pic-4176985474543258628-1024x768 white.jpeg"
  },
  {
    "year": 2025,
    "brand": "Audi",
    "model": "A3",
    "color": "Unknown",
    "image": "Images/2025_audi_a3-pic-83581101067686942-1024x768.jpeg"
  },
  {
    "year": 2025,
    "brand": "B M W",
    "model": "Ix",
    "color": "Black",
    "image": "Images/2025_bmw_ix-pic-776311188094329702-1024x768  black.jpeg"
  },
  {
    "year": 2025,
    "brand": "Ford",
    "model": "Capri",
    "color": "Yellow",
    "image": "Images/2025_ford_capri-pic-1801369248318440851-1024x768 Yellow .jpeg"
  },
  {
    "year": 2025,
    "brand": "Ford",
    "model": "Kuga",
    "color": "Unknown",
    "image": "Images/2025_ford_kuga-pic-4823273047843634995-1024x768.jpeg"
  },
  {
    "year": 2025,
    "brand": "Ford",
    "model": "Puma Suv",
    "color": "Blue",
    "image": "Images/2025_ford_puma_suv-pic-7396255757978000712-1024x768  blue.jpeg"
  },
  {
    "year": 2025,
    "brand": "Ford",
    "model": "Puma Suv",
    "color": "Unknown",
    "image": "Images/2025_ford_puma_suv-pic-7396255757978000712-1024x768.jpeg"
  },
  {
    "year": 2025,
    "brand": "Kgm",
    "model": "  Ssangyong Musso",
    "color": "Unknown",
    "image": "Images/2025_kgm___ssangyong_musso-pic-2739007414373809182-1024x768.jpeg"
  },
  {
    "year": 2025,
    "brand": "Kia",
    "model": "Ceed",
    "color": "Unknown",
    "image": "Images/2025_kia_ceed-pic-2001453175568637974-1024x768.jpeg"
  },
  {
    "year": 2025,
    "brand": "Kia",
    "model": "Niro",
    "color": "White",
    "image": "Images/2025_kia_niro-pic-8339723290441012375-1024x768 white.jpeg"
  },
  {
    "year": 2025,
    "brand": "Kia",
    "model": "Niro",
    "color": "Unknown",
    "image": "Images/2025_kia_niro-pic-8339723290441012375-1024x768.jpeg"
  },
  {
    "year": 2025,
    "brand": "Kia",
    "model": "Sportage",
    "color": "Unknown",
    "image": "Images/2025_kia_sportage-pic-1463104408015735347-1024x768.jpeg"
  },
  {
    "year": 2025,
    "brand": "Kia",
    "model": "Sportage",
    "color": "Unknown",
    "image": "Images/2025_kia_sportage-pic-4841210435449413791-1024x768.jpeg"
  },
  {
    "year": 2025,
    "brand": "Land Rover",
    "model": "110 Defender",
    "color": "Unknown",
    "image": "Images/2025_land_rover_110_defender-pic-11935661466044263-1024x768.jpeg"
  },
  {
    "year": 2025,
    "brand": "Land Rover",
    "model": "Range Rover Sport",
    "color": "Unknown",
    "image": "Images/2025_land_rover_range_rover_sport-pic-5826843231678356588-1024x768.jpeg"
  },
  {
    "year": 2025,
    "brand": "Mercedes-Benz",
    "model": "Gla-class",
    "color": "Unknown",
    "image": "Images/2025_mercedes-benz_gla-class-pic-1510755667156968187-1024x768.jpeg"
  },
  {
    "year": 2025,
    "brand": "M G",
    "model": "Mg4",
    "color": "Green",
    "image": "Images/2025_mg_mg4-pic-4427170799296265044-1024x768  green.jpeg"
  },
  {
    "year": 2025,
    "brand": "Peugeot",
    "model": "2008 Suv",
    "color": "Grey",
    "image": "Images/2025_peugeot_2008_suv-pic-8694338126499800460-1024x768  grey.jpeg"
  },
  {
    "year": 2025,
    "brand": "Peugeot",
    "model": "208",
    "color": "Yellow",
    "image": "Images/2025_peugeot_208-pic-2921325688377487863-1024x768 Yellow .jpeg"
  },
  {
    "year": 2025,
    "brand": "Peugeot",
    "model": "408",
    "color": "Unknown",
    "image": "Images/2025_peugeot_408-pic-1475631966134336263-1024x768.jpeg"
  },
  {
    "year": 2025,
    "brand": "Peugeot",
    "model": "5008 Suv",
    "color": "Unknown",
    "image": "Images/2025_peugeot_5008_suv-pic-3144281266134047970-1024x768.jpeg"
  },
  {
    "year": 2025,
    "brand": "Porsche",
    "model": "Taycan",
    "color": "Unknown",
    "image": "Images/2025_porsche_taycan-pic-3070192295683614512-1024x768.jpeg"
  },
  {
    "year": 2025,
    "brand": "Volvo",
    "model": "Xc90",
    "color": "Blue",
    "image": "Images/2025_volvo_xc90-pic-1333524871602599909-1024x768  blue.jpeg"
  },
  {
    "year": 2025,
    "brand": "Volvo",
    "model": "Xc90",
    "color": "Unknown",
    "image": "Images/2025_volvo_xc90-pic-2218877762741774616-1024x768.jpeg"
  },
  {
    "year": 2026,
    "brand": "Audi",
    "model": "A5",
    "color": "Unknown",
    "image": "Images/2026_audi_a5-pic-8807187606336759225-1024x768.jpeg"
  },
  {
    "year": 2026,
    "brand": "Kia",
    "model": "Ev3",
    "color": "Black",
    "image": "Images/2026_kia_ev3-pic-4582992712512785969-1024x768  black.jpeg"
  }
];

function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

const cars = [];
let carId = 1;

parsedImageData.forEach(data => {
    let carFeatures = [];
    let numFeatures = Math.floor(Math.random() * 8) + 3;
    for(let f=0; f<numFeatures; f++) {
        let feat = getRandomItem(featuresList);
        if(!carFeatures.includes(feat)) carFeatures.push(feat);
    }
    
    let isUsed = Math.random() > 0.3;

    cars.push({
        id: carId++,
        brand: data.brand,
        make: data.brand,
        model: data.model,
        price: Math.floor(Math.random() * 95000) + 500,
        mileage: Math.floor(Math.random() * 150000),
        year: data.year,
        colour: data.color === 'Unknown' ? getRandomItem(coloursList) : data.color,
        drivetrain: getRandomItem(drivetrains),
        gearbox: getRandomItem(gearboxes),
        bodySize: getRandomItem(bodySizes),
        cabinSize: getRandomItem(cabinSizes),
        bedSize: getRandomItem(bedSizes),
        fuelType: getRandomItem(fuelTypes),
        engineSize: parseFloat(getRandomItem(engineSizes)),
        co2Emissions: Math.floor(Math.random() * 530),
        insuranceGroup: getRandomItem(insuranceGroups),
        approvedUsed: isUsed ? 'Approved used' : 'New',
        features: carFeatures,
        seats: getRandomItem(seatCapacities),
        doors: getRandomItem(doorsCount),
        rating: getRandomItem(ratings),
        hasPhotos: true,
        history: Math.random() > 0.9 ? 'Accidents reported' : 'Clear',
        daysOnMarket: Math.floor(Math.random() * 1000) + 1,
        fuelEconomy: Math.floor(Math.random() * 445) + 4, 
        priceDrops: Math.random() > 0.8,
        sellerType: getRandomItem(sellerTypes),
        commercialUse: Math.random() > 0.8,
        ulez: Math.random() > 0.2,
        image: data.image,
        deliveryAvailable: Math.random() > 0.5 ? 'Yes' : 'No',
        interior: carFeatures.includes('Leather seats') ? 'Leather' : 'Cloth',
        availability: getRandomItem(['In Stock', '1-2 Weeks']),
        delivery: getRandomItem(['Standard Delivery', 'Next-Day Delivery', 'Click & Collect'])
    });
});

// Shuffle cars array to avoid clustering by colour initially
for (let i = cars.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cars[i], cars[j]] = [cars[j], cars[i]];
}

const DOM = {
    filtersForm: document.getElementById('filters-form'),
    productGrid: document.getElementById('product-grid'),
    resultsCount: document.getElementById('results-count'),
    clearBtn: document.getElementById('clear-filters'),
    sortSelect: document.getElementById('sort-select')
};

const filterCategories = [
    { id: 'distance', label: 'Search radius (miles)', type: 'select', options: ['10', '30', '50', '100', 'National'], key: 'distance' },
    { id: 'deliveryListings', label: 'Include delivery listings?', type: 'radio', options: ['Yes', 'No'], key: 'deliveryAvailable' },
    { id: 'brand', label: 'Make and model', type: 'checkbox', key: 'brand' },
    { id: 'price', label: 'Price (£)', type: 'minmax', key: 'price', placeholder: ['Min', 'Max'] },
    { id: 'mileage', label: 'Mileage', type: 'minmax', key: 'mileage', placeholder: ['Min', 'Max'] },
    { id: 'year', label: 'Years', type: 'minmax', key: 'year', placeholder: ['Min', 'Max'] },
    { id: 'colour', label: 'Exterior colour', type: 'checkbox', key: 'colour' },
    { id: 'drivetrain', label: 'Drivetrain', type: 'checkbox', key: 'drivetrain' },
    { id: 'gearbox', label: 'Gearbox', type: 'checkbox', key: 'gearbox' },
    { id: 'bodySize', label: 'Body style', type: 'checkbox', key: 'bodySize' },
    { id: 'cabinSize', label: 'Cabin size', type: 'checkbox', key: 'cabinSize' },
    { id: 'bedSize', label: 'Bed size', type: 'checkbox', key: 'bedSize' },
    { id: 'fuelType', label: 'Fuel type', type: 'checkbox', key: 'fuelType' },
    { id: 'engineSize', label: 'Engine size (Litres)', type: 'minmax', key: 'engineSize', placeholder: ['Min', 'Max'] },
    { id: 'co2Emissions', label: 'CO2 emissions (g/Km)', type: 'minmax', key: 'co2Emissions', placeholder: ['Min', 'Max'] },
    { id: 'insuranceGroup', label: 'Insurance group', type: 'checkbox', key: 'insuranceGroup' },
    { id: 'approvedUsed', label: 'Approved used', type: 'checkbox', key: 'approvedUsed' },
    { id: 'features', label: 'Features', type: 'checkbox_array', key: 'features' },
    { id: 'seats', label: 'Seating capacity', type: 'checkbox', key: 'seats' },
    { id: 'doors', label: 'Number of doors', type: 'checkbox', key: 'doors' },
    { id: 'rating', label: 'Deal rating', type: 'checkbox', key: 'rating' },
    { id: 'hasPhotos', label: 'Hide vehicles without photos', type: 'boolean_inverse', key: 'hasPhotos' },
    { id: 'history', label: 'Vehicle history', type: 'checkbox', key: 'history' },
    { id: 'daysOnMarket', label: 'Days on market', type: 'minmax', key: 'daysOnMarket', placeholder: ['Min', 'Max'] },
    { id: 'fuelEconomy', label: 'Fuel economy (mpg)', type: 'minmax', key: 'fuelEconomy', placeholder: ['Min', 'Max'] },
    { id: 'priceDrops', label: 'Only show recent price drops', type: 'boolean', key: 'priceDrops' },
    { id: 'sellerType', label: 'Seller type', type: 'checkbox', key: 'sellerType' },
    { id: 'commercialUse', label: 'Only show VAT-registered vehicles', type: 'boolean', key: 'commercialUse' },
    { id: 'ulez', label: 'Only show ULEZ-compliant vehicles', type: 'boolean', key: 'ulez' }
];

let activeFilters = {};

const resetFilters = () => {
    activeFilters = {};
    filterCategories.forEach(cat => {
        if (cat.type === 'checkbox' || cat.type === 'checkbox_array') {
            activeFilters[cat.key] = [];
        } else if (cat.type === 'minmax') {
            activeFilters[cat.key] = { min: '', max: '' };
        } else if (cat.type === 'radio' || cat.type === 'select') {
            activeFilters[cat.key] = '';
        } else if (cat.type === 'boolean' || cat.type === 'boolean_inverse') {
            activeFilters[cat.key] = false;
        }
    });
};

resetFilters();

const formatPrice = (price) => {
    return new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP', maximumFractionDigits: 0 }).format(price);
};

const getUniqueValues = (key) => {
    let values = [];
    cars.forEach(car => {
        if (Array.isArray(car[key])) {
            values.push(...car[key]);
        } else {
            values.push(car[key]);
        }
    });
    // For string/number it works, if undefined we filter out
    values = values.filter(v => v !== undefined && v !== null);
    
    // Sort logic, handle numbers and strings
    if (typeof values[0] === 'number') {
        return [...new Set(values)].sort((a, b) => a - b);
    }
    return [...new Set(values)].sort();
};

const renderFilters = () => {
    DOM.filtersForm.innerHTML = '';
    
    filterCategories.forEach(category => {
        const groupEl = document.createElement('div');
        groupEl.className = 'filter-group';
        
        const titleEl = document.createElement('div');
        titleEl.className = 'filter-title';
        titleEl.textContent = category.label;
        groupEl.appendChild(titleEl);
        
        if (category.type === 'checkbox' || category.type === 'checkbox_array') {
            const optionsEl = document.createElement('div');
            optionsEl.className = 'filter-options';
            
            const uniqueVals = getUniqueValues(category.key);
            uniqueVals.forEach(val => {
                let count = 0;
                if (category.type === 'checkbox_array') {
                    count = cars.filter(c => c[category.key].includes(val)).length;
                } else {
                    count = cars.filter(c => c[category.key] === val).length;
                }
                
                const wrapper = document.createElement('label');
                wrapper.className = 'checkbox-wrapper';
                wrapper.innerHTML = `
                    <input type="checkbox" name="${category.key}" value="${val}" ${activeFilters[category.key].includes(String(val)) ? 'checked' : ''}>
                    <span class="checkbox-label">
                        <span>${val}</span>
                        <span class="count">(${count})</span>
                    </span>
                `;
                optionsEl.appendChild(wrapper);
            });
            groupEl.appendChild(optionsEl);
        } else if (category.type === 'minmax') {
            const minPlaceholder = category.placeholder ? category.placeholder[0] : 'Min';
            const maxPlaceholder = category.placeholder ? category.placeholder[1] : 'Max';
            groupEl.innerHTML += `
                <div class="minmax-inputs">
                    <input type="number" data-type="min" data-key="${category.key}" placeholder="${minPlaceholder}" value="${activeFilters[category.key].min}">
                    <span>to</span>
                    <input type="number" data-type="max" data-key="${category.key}" placeholder="${maxPlaceholder}" value="${activeFilters[category.key].max}">
                </div>
            `;
        } else if (category.type === 'select') {
            let optionsHTML = category.options.map(o => `<option value="${o}" ${activeFilters[category.key] === o ? 'selected' : ''}>${o}</option>`).join('');
            groupEl.innerHTML += `
                <select class="select-input" data-key="${category.key}">
                    <option value="">Any</option>
                    ${optionsHTML}
                </select>
            `;
        } else if (category.type === 'radio') {
            let radioHTML = category.options.map(o => `
                <label class="radio-wrapper">
                    <input type="radio" name="${category.key}" value="${o}" ${activeFilters[category.key] === o ? 'checked' : ''}>
                    ${o}
                </label>
            `).join('');
            groupEl.innerHTML += `
                <div class="radio-group">
                    <label class="radio-wrapper">
                        <input type="radio" name="${category.key}" value="" ${activeFilters[category.key] === '' ? 'checked' : ''}>
                        Any
                    </label>
                    ${radioHTML}
                </div>
            `;
        } else if (category.type === 'boolean' || category.type === 'boolean_inverse') {
            groupEl.className = 'filter-group boolean-filter';
            groupEl.innerHTML = `
                <label class="checkbox-wrapper">
                    <input type="checkbox" data-key="${category.key}" data-type="${category.type}" ${activeFilters[category.key] ? 'checked' : ''}>
                    <span class="checkbox-label">${category.label}</span>
                </label>
            `;
        }
        
        DOM.filtersForm.appendChild(groupEl);
    });

    attachFilterListeners();
};

const attachFilterListeners = () => {
    const checkboxes = DOM.filtersForm.querySelectorAll('input[type="checkbox"]:not([data-type="boolean"]):not([data-type="boolean_inverse"])');
    checkboxes.forEach(cb => {
        cb.addEventListener('change', (e) => {
            const key = e.target.name;
            const value = e.target.value;
            
            if (e.target.checked) {
                if (!activeFilters[key].includes(value)) activeFilters[key].push(value);
            } else {
                activeFilters[key] = activeFilters[key].filter(v => String(v) !== value);
            }
            applyFilters();
        });
    });

    const minmaxInputs = DOM.filtersForm.querySelectorAll('.minmax-inputs input');
    minmaxInputs.forEach(input => {
        input.addEventListener('change', (e) => {
            const key = e.target.dataset.key;
            const type = e.target.dataset.type; // 'min' or 'max'
            activeFilters[key][type] = e.target.value;
            applyFilters();
        });
    });

    const selects = DOM.filtersForm.querySelectorAll('select.select-input');
    selects.forEach(select => {
        select.addEventListener('change', (e) => {
            const key = e.target.dataset.key;
            activeFilters[key] = e.target.value;
            applyFilters();
        });
    });

    const radios = DOM.filtersForm.querySelectorAll('input[type="radio"]');
    radios.forEach(radio => {
        radio.addEventListener('change', (e) => {
            const key = e.target.name;
            activeFilters[key] = e.target.value;
            applyFilters();
        });
    });

    const booleans = DOM.filtersForm.querySelectorAll('input[data-type="boolean"], input[data-type="boolean_inverse"]');
    booleans.forEach(boolInput => {
        boolInput.addEventListener('change', (e) => {
            const key = e.target.dataset.key;
            activeFilters[key] = e.target.checked;
            applyFilters();
        });
    });
};

const renderProducts = (productsToRender) => {
    DOM.productGrid.innerHTML = '';
    
    DOM.resultsCount.textContent = `${productsToRender.length} vehicle${productsToRender.length !== 1 ? 's' : ''} found`;
    
    if (productsToRender.length === 0) {
        DOM.productGrid.innerHTML = `
            <div class="no-results">
                <h3>No vehicles match your criteria</h3>
                <p>Try adjusting or clearing some filters to see more results.</p>
            </div>
        `;
        return;
    }

    productsToRender.forEach(car => {
        const card = document.createElement('div');
        card.className = 'product-card';
        
        let ratingBadgeClass = 'badge-gray';
        if (car.rating === 'Great Deal') ratingBadgeClass = 'badge-green';
        
        card.innerHTML = `
            <div class="card-image-wrapper">
                <img src="${car.image}" alt="${car.make} ${car.model}" class="card-image" ${!car.hasPhotos ? 'style="opacity: 0.3;"' : ''}>
                ${!car.hasPhotos ? '<div style="position: absolute; top:50%; width:100%; text-align:center; transform: translateY(-50%); font-weight: bold; z-index: 10; background: rgba(255,255,255,0.7); padding: 4px;">No Photo Available</div>' : ''}
            </div>
            <div class="card-content">
                <div class="card-header">
                    <div>
                        <h3 class="car-title">${car.make} ${car.model}</h3>
                        <div class="car-subtitle">${car.year} • ${car.bodySize} • ${car.mileage.toLocaleString()} miles</div>
                        <div class="car-subtitle" style="font-size: 13px; margin-top: 2px;">${car.engineSize}L ${car.fuelType} • ${car.gearbox} • ${car.drivetrain}</div>
                    </div>
                </div>
                <div class="car-price">${formatPrice(car.price)}</div>
                
                <div class="car-specs">
                    <div class="spec-item">
                        <svg><use href="#icon-paint"></use></svg>
                        ${car.colour} Exterior
                    </div>
                    <div class="spec-item">
                        <svg><use href="#icon-seat"></use></svg>
                        ${car.seats} Seats • ${car.doors} Doors
                    </div>
                    <div class="spec-item">
                        <svg><use href="#icon-truck"></use></svg>
                        ${car.deliveryAvailable === 'Yes' ? 'Delivery' : 'Collection'} • ${car.ulez ? 'ULEZ Exempt' : 'Non-ULEZ'}
                    </div>
                </div>
                
                <div class="card-footer">
                    <span class="badge ${ratingBadgeClass}">${car.rating}</span>
                </div>
            </div>
        `;
        DOM.productGrid.appendChild(card);
    });
};

const applyFilters = () => {
    let filteredCars = cars.filter(car => {
        let isMatch = true;
        
        filterCategories.forEach(cat => {
            const val = activeFilters[cat.key];
            if (!isMatch) return; // fail fast
            
            // For checking primitive arrays we should cast to string because checkbox inputs give us strings
            const carValStr = String(car[cat.key]);

            if (cat.type === 'checkbox') {
                if (val.length > 0 && !val.includes(carValStr)) isMatch = false;
            } else if (cat.type === 'checkbox_array') {
                if (val.length > 0) {
                    const hasAll = val.every(feat => car[cat.key].includes(feat));
                    if (!hasAll) isMatch = false;
                }
            } else if (cat.type === 'minmax') {
                const min = val.min !== '' ? parseFloat(val.min) : -Infinity;
                const max = val.max !== '' ? parseFloat(val.max) : Infinity;
                if (car[cat.key] < min || car[cat.key] > max) isMatch = false;
            } else if (cat.type === 'radio' || cat.type === 'select') {
                if (val !== '' && carValStr !== val) isMatch = false;
            } else if (cat.type === 'boolean') {
                if (val === true && car[cat.key] !== true) {
                    if(cat.key === 'approvedUsed' && car[cat.key] !== 'Approved used') isMatch = false;
                    else if(cat.key !== 'approvedUsed' && car[cat.key] !== true) isMatch = false;
                }
            } else if (cat.type === 'boolean_inverse') {
                if (val === true && car[cat.key] === false) isMatch = false;
            }
        });
        
        return isMatch;
    });
    
    const sortVal = DOM.sortSelect.value;
    if (sortVal === 'price-low') {
        filteredCars.sort((a, b) => a.price - b.price);
    } else if (sortVal === 'price-high') {
        filteredCars.sort((a, b) => b.price - a.price);
    }
    
    renderProducts(filteredCars);
};

DOM.clearBtn.addEventListener('click', () => {
    resetFilters();
    renderFilters(); 
    applyFilters();
});

DOM.sortSelect.addEventListener('change', () => {
    applyFilters();
});

const init = () => {
    renderFilters();
    applyFilters();
};

document.addEventListener('DOMContentLoaded', init);
