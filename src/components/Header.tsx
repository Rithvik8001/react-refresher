import ResCard from "./ResCard";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Header = () => {
  const resObj = [
    {
      card: {
        card: {
          "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
          header: {
            title: "Top restaurant chains in Bangalore",
            action: {},
            headerStyling: {
              padding: {
                left: 16,
                top: 28,
                bottom: 18,
              },
            },
          },
          layout: {
            rows: 1,
            columns: 20,
            horizontalScrollEnabled: true,
            itemSpacing: 32,
            widgetPadding: {},
            containerStyle: {
              containerPadding: {
                left: 16,
                right: 12,
                bottom: 12,
              },
            },
            scrollBar: {
              scrollThumbColor: "#E46D47",
              scrollTrackColor: "#02060C",
              width: 54,
              height: 4,
              scrollStyling: {
                padding: {
                  top: 6,
                  bottom: 24,
                },
              },
            },
            widgetTheme: {
              defaultMode: {
                backgroundColour: "#1B3028",
                theme: "THEME_TYPE_DARK",
              },
              darkMode: {
                backgroundColour: "#1B3028",
                theme: "THEME_TYPE_DARK",
              },
            },
          },
          id: "top_brands_for_you",
          gridElements: {
            infoWithStyle: {
              "@type":
                "type.googleapis.com/swiggy.presentation.food.v2.FavouriteRestaurantInfoWithStyle",
              restaurants: [
                {
                  info: {
                    id: "43836",
                    name: "McDonald's",
                    cloudinaryImageId:
                      "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/3/4716f54a-61ad-4178-8265-51066cacbbd2_43836.jpg",
                    locality: "MG Road",
                    areaName: "Ashok Nagar",
                    costForTwo: "₹400 for two",
                    cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
                    avgRating: 4.4,
                    parentId: "630",
                    avgRatingString: "4.4",
                    totalRatingsString: "26K+",
                    sla: {
                      deliveryTime: 26,
                      lastMileTravel: 3.5,
                      serviceability: "SERVICEABLE",
                      slaString: "25-30 mins",
                      lastMileTravelString: "3.5 km",
                      iconType: "ICON_TYPE_EMPTY",
                    },
                    availability: {
                      nextCloseTime: "2025-06-28 02:45:00",
                      opened: true,
                    },
                    badges: {
                      imageBadges: [
                        {
                          imageId: "Ratnesh_Badges/Rx_Awards_2025/Bolt.png",
                          description: "Delivery!",
                        },
                      ],
                    },
                    isOpen: true,
                    type: "F",
                    badgesV2: {
                      entityBadges: {
                        imageBased: {
                          badgeObject: [
                            {
                              attributes: {
                                description: "Delivery!",
                                imageId:
                                  "Ratnesh_Badges/Rx_Awards_2025/Bolt.png",
                              },
                            },
                          ],
                        },
                        textBased: {},
                        textExtendedBadges: {},
                      },
                    },
                    aggregatedDiscountInfoV3: {
                      header: "30% OFF",
                      subHeader: "UPTO ₹70",
                    },
                    differentiatedUi: {
                      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      differentiatedUiMediaDetails: {
                        lottie: {},
                        video: {},
                      },
                    },
                    reviewsSummary: {},
                    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    restaurantOfferPresentationInfo: {},
                    externalRatings: {
                      aggregatedRating: {
                        rating: "--",
                      },
                    },
                    ratingsDisplayPreference:
                      "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                  },
                  analytics: {
                    context: "seo-data-bb51b242-5bfd-4c43-829f-8a9ecc37083d",
                  },
                  cta: {
                    link: "https://www.swiggy.com/city/bangalore/mcdonalds-mg-road-ashok-nagar-rest43836",
                    type: "WEBLINK",
                  },
                },
                {
                  info: {
                    id: "10892",
                    name: "Pizza Hut",
                    cloudinaryImageId:
                      "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/611f45a5-52b7-4ad0-84d7-f605643f46ea_10892.JPG",
                    locality: "Vani Vilas Road",
                    areaName: "Basavanagudi",
                    costForTwo: "₹350 for two",
                    cuisines: ["Pizzas"],
                    avgRating: 4.2,
                    parentId: "721",
                    avgRatingString: "4.2",
                    totalRatingsString: "10K+",
                    sla: {
                      deliveryTime: 34,
                      lastMileTravel: 2.8,
                      serviceability: "SERVICEABLE",
                      slaString: "30-35 mins",
                      lastMileTravelString: "2.8 km",
                      iconType: "ICON_TYPE_EMPTY",
                    },
                    availability: {
                      nextCloseTime: "2025-06-28 02:00:00",
                      opened: true,
                    },
                    badges: {},
                    isOpen: true,
                    type: "F",
                    badgesV2: {
                      entityBadges: {
                        imageBased: {},
                        textBased: {},
                        textExtendedBadges: {},
                      },
                    },
                    aggregatedDiscountInfoV3: {
                      header: "ITEMS",
                      subHeader: "AT ₹59",
                    },
                    differentiatedUi: {
                      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      differentiatedUiMediaDetails: {
                        lottie: {},
                        video: {},
                      },
                    },
                    reviewsSummary: {},
                    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    restaurantOfferPresentationInfo: {},
                    externalRatings: {
                      aggregatedRating: {
                        rating: "--",
                      },
                    },
                    ratingsDisplayPreference:
                      "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                  },
                  analytics: {
                    context: "seo-data-bb51b242-5bfd-4c43-829f-8a9ecc37083d",
                  },
                  cta: {
                    link: "https://www.swiggy.com/city/bangalore/pizza-hut-vani-vilas-road-basavanagudi-rest10892",
                    type: "WEBLINK",
                  },
                },
                {
                  info: {
                    id: "394084",
                    name: "Chinese Wok",
                    cloudinaryImageId: "e0839ff574213e6f35b3899ebf1fc597",
                    locality: "3rd Stage",
                    areaName: "Banashankari",
                    costForTwo: "₹250 for two",
                    cuisines: ["Chinese", "Asian", "Tibetan", "Desserts"],
                    avgRating: 4.3,
                    parentId: "61955",
                    avgRatingString: "4.3",
                    totalRatingsString: "5.0K+",
                    sla: {
                      deliveryTime: 35,
                      lastMileTravel: 6.4,
                      serviceability: "SERVICEABLE",
                      slaString: "35-40 mins",
                      lastMileTravelString: "6.4 km",
                      iconType: "ICON_TYPE_EMPTY",
                    },
                    availability: {
                      nextCloseTime: "2025-06-28 02:00:00",
                      opened: true,
                    },
                    badges: {},
                    isOpen: true,
                    type: "F",
                    badgesV2: {
                      entityBadges: {
                        imageBased: {},
                        textBased: {},
                        textExtendedBadges: {},
                      },
                    },
                    aggregatedDiscountInfoV3: {
                      header: "ITEMS",
                      subHeader: "AT ₹129",
                    },
                    differentiatedUi: {
                      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      differentiatedUiMediaDetails: {
                        lottie: {},
                        video: {},
                      },
                    },
                    reviewsSummary: {},
                    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    restaurantOfferPresentationInfo: {},
                    externalRatings: {
                      aggregatedRating: {
                        rating: "--",
                      },
                    },
                    ratingsDisplayPreference:
                      "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                  },
                  analytics: {
                    context: "seo-data-bb51b242-5bfd-4c43-829f-8a9ecc37083d",
                  },
                  cta: {
                    link: "https://www.swiggy.com/city/bangalore/chinese-wok-3rd-stage-banashankari-rest394084",
                    type: "WEBLINK",
                  },
                },
                {
                  info: {
                    id: "770772",
                    name: "Olio - The Wood Fired Pizzeria",
                    cloudinaryImageId:
                      "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/17/9981e910-f172-48ba-b08f-c7e5141e7983_770772.JPG",
                    locality: "Ali Askar Road",
                    areaName: "Central Bangalore",
                    costForTwo: "₹300 for two",
                    cuisines: [
                      "Pizzas",
                      "Pastas",
                      "Italian",
                      "Fast Food",
                      "Snacks",
                      "Beverages",
                      "Desserts",
                    ],
                    avgRating: 4.4,
                    parentId: "11633",
                    avgRatingString: "4.4",
                    totalRatingsString: "953",
                    sla: {
                      deliveryTime: 39,
                      lastMileTravel: 5,
                      serviceability: "SERVICEABLE",
                      slaString: "35-40 mins",
                      lastMileTravelString: "5.0 km",
                      iconType: "ICON_TYPE_EMPTY",
                    },
                    availability: {
                      nextCloseTime: "2025-06-28 05:00:00",
                      opened: true,
                    },
                    badges: {
                      imageBadges: [
                        {
                          imageId: "newg.png",
                          description: "Gourmet",
                        },
                      ],
                    },
                    isOpen: true,
                    type: "F",
                    badgesV2: {
                      entityBadges: {
                        imageBased: {
                          badgeObject: [
                            {
                              attributes: {
                                description: "Gourmet",
                                imageId: "newg.png",
                              },
                            },
                          ],
                        },
                        textBased: {},
                        textExtendedBadges: {},
                      },
                    },
                    aggregatedDiscountInfoV3: {
                      header: "ITEMS",
                      subHeader: "AT ₹99",
                    },
                    differentiatedUi: {
                      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      differentiatedUiMediaDetails: {
                        lottie: {},
                        video: {},
                      },
                    },
                    reviewsSummary: {},
                    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    restaurantOfferPresentationInfo: {},
                    externalRatings: {
                      aggregatedRating: {
                        rating: "--",
                      },
                    },
                    ratingsDisplayPreference:
                      "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                  },
                  analytics: {
                    context: "seo-data-bb51b242-5bfd-4c43-829f-8a9ecc37083d",
                  },
                  cta: {
                    link: "https://www.swiggy.com/city/bangalore/olio-the-wood-fired-pizzeria-ali-askar-road-central-bangalore-rest770772",
                    type: "WEBLINK",
                  },
                },
                {
                  info: {
                    id: "77949",
                    name: "Burger King",
                    cloudinaryImageId:
                      "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/07b2b9e0-f960-4dbb-9f13-789a953f0a35_77949.jpg",
                    locality: "Hebbal",
                    areaName: "Basavanagudi",
                    costForTwo: "₹350 for two",
                    cuisines: ["Burgers", "American"],
                    avgRating: 4.3,
                    parentId: "166",
                    avgRatingString: "4.3",
                    totalRatingsString: "34K+",
                    sla: {
                      deliveryTime: 29,
                      lastMileTravel: 2.8,
                      serviceability: "SERVICEABLE",
                      slaString: "25-30 mins",
                      lastMileTravelString: "2.8 km",
                      iconType: "ICON_TYPE_EMPTY",
                    },
                    availability: {
                      nextCloseTime: "2025-06-28 02:00:00",
                      opened: true,
                    },
                    badges: {},
                    isOpen: true,
                    type: "F",
                    badgesV2: {
                      entityBadges: {
                        imageBased: {},
                        textBased: {},
                        textExtendedBadges: {},
                      },
                    },
                    aggregatedDiscountInfoV3: {
                      header: "ITEMS",
                      subHeader: "AT ₹139",
                    },
                    differentiatedUi: {
                      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      differentiatedUiMediaDetails: {
                        lottie: {},
                        video: {},
                      },
                    },
                    reviewsSummary: {},
                    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    restaurantOfferPresentationInfo: {},
                    externalRatings: {
                      aggregatedRating: {
                        rating: "4.5",
                        ratingCount: "376",
                      },
                      source: "GOOGLE",
                      sourceIconImageId:
                        "v1704440323/google_ratings/rating_google_tag",
                    },
                    ratingsDisplayPreference:
                      "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                  },
                  analytics: {
                    context: "seo-data-bb51b242-5bfd-4c43-829f-8a9ecc37083d",
                  },
                  cta: {
                    link: "https://www.swiggy.com/city/bangalore/burger-king-hebbal-basavanagudi-rest77949",
                    type: "WEBLINK",
                  },
                },
                {
                  info: {
                    id: "17301",
                    name: "KFC",
                    cloudinaryImageId:
                      "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/5bfe1062-dbda-4cea-962f-ecd60a1d1764_17301.JPG",
                    locality: "Basavanagudi",
                    areaName: "Basavanagudi",
                    costForTwo: "₹400 for two",
                    cuisines: ["Burgers", "Fast Food", "Rolls & Wraps"],
                    avgRating: 4.2,
                    parentId: "547",
                    avgRatingString: "4.2",
                    totalRatingsString: "14K+",
                    sla: {
                      deliveryTime: 28,
                      lastMileTravel: 2.5,
                      serviceability: "SERVICEABLE",
                      slaString: "25-30 mins",
                      lastMileTravelString: "2.5 km",
                      iconType: "ICON_TYPE_EMPTY",
                    },
                    availability: {
                      nextCloseTime: "2025-06-28 02:00:00",
                      opened: true,
                    },
                    badges: {},
                    isOpen: true,
                    type: "F",
                    badgesV2: {
                      entityBadges: {
                        imageBased: {},
                        textBased: {},
                        textExtendedBadges: {},
                      },
                    },
                    aggregatedDiscountInfoV3: {
                      header: "ITEMS",
                      subHeader: "AT ₹29",
                    },
                    differentiatedUi: {
                      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      differentiatedUiMediaDetails: {
                        lottie: {},
                        video: {},
                      },
                    },
                    reviewsSummary: {},
                    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    restaurantOfferPresentationInfo: {},
                    externalRatings: {
                      aggregatedRating: {
                        rating: "4.0",
                        ratingCount: "6.1K+",
                      },
                      source: "GOOGLE",
                      sourceIconImageId:
                        "v1704440323/google_ratings/rating_google_tag",
                    },
                    ratingsDisplayPreference:
                      "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                  },
                  analytics: {
                    context: "seo-data-bb51b242-5bfd-4c43-829f-8a9ecc37083d",
                  },
                  cta: {
                    link: "https://www.swiggy.com/city/bangalore/kfc-basavanagudi-rest17301",
                    type: "WEBLINK",
                  },
                },
                {
                  info: {
                    id: "1452",
                    name: "Subway",
                    cloudinaryImageId:
                      "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/12/c90a815a-cee7-47a8-afb2-5e1eabd8be63_1452.jpg",
                    locality: "Bull Temple Road",
                    areaName: "Basavanagudi",
                    costForTwo: "₹350 for two",
                    cuisines: ["sandwich", "Salads", "wrap", "Healthy Food"],
                    avgRating: 4.3,
                    parentId: "2",
                    avgRatingString: "4.3",
                    totalRatingsString: "19K+",
                    sla: {
                      deliveryTime: 24,
                      lastMileTravel: 3,
                      serviceability: "SERVICEABLE",
                      slaString: "20-25 mins",
                      lastMileTravelString: "3.0 km",
                      iconType: "ICON_TYPE_EMPTY",
                    },
                    availability: {
                      nextCloseTime: "2025-06-28 02:00:00",
                      opened: true,
                    },
                    badges: {},
                    isOpen: true,
                    type: "F",
                    badgesV2: {
                      entityBadges: {
                        imageBased: {},
                        textBased: {},
                        textExtendedBadges: {},
                      },
                    },
                    aggregatedDiscountInfoV3: {
                      header: "10% OFF",
                      subHeader: "UPTO ₹40",
                    },
                    differentiatedUi: {
                      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      differentiatedUiMediaDetails: {
                        lottie: {},
                        video: {},
                      },
                    },
                    reviewsSummary: {},
                    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    restaurantOfferPresentationInfo: {},
                    externalRatings: {
                      aggregatedRating: {
                        rating: "--",
                      },
                    },
                    ratingsDisplayPreference:
                      "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                  },
                  analytics: {
                    context: "seo-data-bb51b242-5bfd-4c43-829f-8a9ecc37083d",
                  },
                  cta: {
                    link: "https://www.swiggy.com/city/bangalore/subway-bull-temple-road-basavanagudi-rest1452",
                    type: "WEBLINK",
                  },
                },
                {
                  info: {
                    id: "755276",
                    name: "La Pino'z Pizza",
                    cloudinaryImageId: "f44bc9708c514cd2dd6ae0d8b4677214",
                    locality: "Pulikeshi Nagar",
                    areaName: "Pulikeshi Nagar",
                    costForTwo: "₹250 for two",
                    cuisines: [
                      "Pizzas",
                      "Pastas",
                      "Italian",
                      "Desserts",
                      "Beverages",
                    ],
                    avgRating: 4.3,
                    parentId: "4961",
                    avgRatingString: "4.3",
                    totalRatingsString: "2.1K+",
                    sla: {
                      deliveryTime: 31,
                      lastMileTravel: 6.3,
                      serviceability: "SERVICEABLE",
                      slaString: "30-35 mins",
                      lastMileTravelString: "6.3 km",
                      iconType: "ICON_TYPE_EMPTY",
                    },
                    availability: {
                      nextCloseTime: "2025-06-28 02:30:00",
                      opened: true,
                    },
                    badges: {},
                    isOpen: true,
                    type: "F",
                    badgesV2: {
                      entityBadges: {
                        imageBased: {},
                        textBased: {},
                        textExtendedBadges: {},
                      },
                    },
                    aggregatedDiscountInfoV3: {
                      header: "₹175 OFF",
                      subHeader: "ABOVE ₹799",
                      discountTag: "FLAT DEAL",
                    },
                    differentiatedUi: {
                      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      differentiatedUiMediaDetails: {
                        lottie: {},
                        video: {},
                      },
                    },
                    reviewsSummary: {},
                    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    restaurantOfferPresentationInfo: {},
                    externalRatings: {
                      aggregatedRating: {
                        rating: "4.0",
                        ratingCount: "152",
                      },
                      source: "GOOGLE",
                      sourceIconImageId:
                        "v1704440323/google_ratings/rating_google_tag",
                    },
                    ratingsDisplayPreference:
                      "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                  },
                  analytics: {
                    context: "seo-data-bb51b242-5bfd-4c43-829f-8a9ecc37083d",
                  },
                  cta: {
                    link: "https://www.swiggy.com/city/bangalore/la-pinoz-pizza-pulikeshi-nagar-rest755276",
                    type: "WEBLINK",
                  },
                },
                {
                  info: {
                    id: "575063",
                    name: "Veg Darbar by Behrouz Biryani",
                    cloudinaryImageId: "2b579171cefc545ce6479e21c0016798",
                    locality: "Rashtriya Vidyalaya Road",
                    areaName: "Jayanagar",
                    costForTwo: "₹700 for two",
                    cuisines: [
                      "Biryani",
                      "North Indian",
                      "Kebabs",
                      "Mughlai",
                      "Lucknowi",
                      "Hyderabadi",
                      "Desserts",
                      "Beverages",
                    ],
                    avgRating: 4.3,
                    veg: true,
                    parentId: "344904",
                    avgRatingString: "4.3",
                    totalRatingsString: "53",
                    sla: {
                      deliveryTime: 35,
                      lastMileTravel: 3,
                      serviceability: "SERVICEABLE",
                      slaString: "35-40 mins",
                      lastMileTravelString: "3.0 km",
                      iconType: "ICON_TYPE_EMPTY",
                    },
                    availability: {
                      nextCloseTime: "2025-06-28 03:00:00",
                      opened: true,
                    },
                    badges: {
                      imageBadges: [
                        {
                          imageId: "v1695133679/badges/Pure_Veg111.png",
                          description: "pureveg",
                        },
                      ],
                    },
                    isOpen: true,
                    type: "F",
                    badgesV2: {
                      entityBadges: {
                        imageBased: {
                          badgeObject: [
                            {
                              attributes: {
                                description: "pureveg",
                                imageId: "v1695133679/badges/Pure_Veg111.png",
                              },
                            },
                          ],
                        },
                        textBased: {},
                        textExtendedBadges: {},
                      },
                    },
                    aggregatedDiscountInfoV3: {
                      header: "ITEMS",
                      subHeader: "AT ₹99",
                    },
                    differentiatedUi: {
                      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      differentiatedUiMediaDetails: {
                        lottie: {},
                        video: {},
                      },
                    },
                    reviewsSummary: {},
                    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    restaurantOfferPresentationInfo: {},
                    externalRatings: {
                      aggregatedRating: {
                        rating: "--",
                      },
                    },
                    ratingsDisplayPreference:
                      "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                  },
                  analytics: {
                    context: "seo-data-bb51b242-5bfd-4c43-829f-8a9ecc37083d",
                  },
                  cta: {
                    link: "https://www.swiggy.com/city/bangalore/veg-darbar-by-behrouz-biryani-rashtriya-vidyalaya-road-jayanagar-rest575063",
                    type: "WEBLINK",
                  },
                },
                {
                  info: {
                    id: "837892",
                    name: "The Pizza Project by Oven Story",
                    cloudinaryImageId: "f1b907b0b8f86c62e4fc347c6b1434e6",
                    locality: "Rashtriya Vidyalaya Rd",
                    areaName: "Jayanagar",
                    costForTwo: "₹400 for two",
                    cuisines: ["Pizzas", "Italian", "Desserts", "Beverages"],
                    avgRating: 4.5,
                    parentId: "497031",
                    avgRatingString: "4.5",
                    totalRatingsString: "47",
                    sla: {
                      deliveryTime: 36,
                      lastMileTravel: 3,
                      serviceability: "SERVICEABLE",
                      slaString: "35-40 mins",
                      lastMileTravelString: "3.0 km",
                      iconType: "ICON_TYPE_EMPTY",
                    },
                    availability: {
                      nextCloseTime: "2025-06-28 03:00:00",
                      opened: true,
                    },
                    badges: {},
                    isOpen: true,
                    type: "F",
                    badgesV2: {
                      entityBadges: {
                        imageBased: {},
                        textBased: {},
                        textExtendedBadges: {},
                      },
                    },
                    aggregatedDiscountInfoV3: {
                      header: "ITEMS",
                      subHeader: "AT ₹89",
                    },
                    differentiatedUi: {
                      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      differentiatedUiMediaDetails: {
                        lottie: {},
                        video: {},
                      },
                    },
                    reviewsSummary: {},
                    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    restaurantOfferPresentationInfo: {},
                    externalRatings: {
                      aggregatedRating: {
                        rating: "--",
                      },
                    },
                    ratingsDisplayPreference:
                      "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                  },
                  analytics: {
                    context: "seo-data-bb51b242-5bfd-4c43-829f-8a9ecc37083d",
                  },
                  cta: {
                    link: "https://www.swiggy.com/city/bangalore/the-pizza-project-by-oven-story-rashtriya-vidyalaya-rd-jayanagar-rest837892",
                    type: "WEBLINK",
                  },
                },
                {
                  info: {
                    id: "566296",
                    name: "Faasos Signature Wraps & Rolls",
                    cloudinaryImageId: "c583ca6ce40b426797a78ae2ac91f2ec",
                    locality: "Rashtriya Vidyalaya Rd",
                    areaName: "Jayanagar",
                    costForTwo: "₹350 for two",
                    cuisines: ["Fast Food", "Snacks", "Desserts", "Beverages"],
                    avgRating: 3.9,
                    parentId: "340366",
                    avgRatingString: "3.9",
                    totalRatingsString: "136",
                    sla: {
                      deliveryTime: 35,
                      lastMileTravel: 3,
                      serviceability: "SERVICEABLE",
                      slaString: "30-35 mins",
                      lastMileTravelString: "3.0 km",
                      iconType: "ICON_TYPE_EMPTY",
                    },
                    availability: {
                      nextCloseTime: "2025-06-28 03:00:00",
                      opened: true,
                    },
                    badges: {
                      textExtendedBadges: [
                        {
                          iconId: "guiltfree/GF_Logo_android_3x",
                          shortDescription: "options available",
                          fontColor: "#7E808C",
                        },
                      ],
                    },
                    isOpen: true,
                    type: "F",
                    badgesV2: {
                      entityBadges: {
                        imageBased: {},
                        textBased: {},
                        textExtendedBadges: {
                          badgeObject: [
                            {
                              attributes: {
                                description: "",
                                fontColor: "#7E808C",
                                iconId: "guiltfree/GF_Logo_android_3x",
                                shortDescription: "options available",
                              },
                            },
                          ],
                        },
                      },
                    },
                    aggregatedDiscountInfoV3: {
                      header: "ITEMS",
                      subHeader: "AT ₹129",
                    },
                    differentiatedUi: {
                      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      differentiatedUiMediaDetails: {
                        lottie: {},
                        video: {},
                      },
                    },
                    reviewsSummary: {},
                    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    restaurantOfferPresentationInfo: {},
                    externalRatings: {
                      aggregatedRating: {
                        rating: "--",
                      },
                    },
                    ratingsDisplayPreference:
                      "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                  },
                  analytics: {
                    context: "seo-data-bb51b242-5bfd-4c43-829f-8a9ecc37083d",
                  },
                  cta: {
                    link: "https://www.swiggy.com/city/bangalore/faasos-signature-wraps-and-rolls-rashtriya-vidyalaya-rd-jayanagar-rest566296",
                    type: "WEBLINK",
                  },
                },
                {
                  info: {
                    id: "263747",
                    name: "Veg Meals by Lunchbox",
                    cloudinaryImageId: "thlkrttaciooe5a8umud",
                    locality: "Rashtriya Vidyalaya Rd",
                    areaName: "Jayanagar",
                    costForTwo: "₹200 for two",
                    cuisines: ["Biryani", "Desserts", "Beverages"],
                    avgRating: 4.4,
                    veg: true,
                    parentId: "21938",
                    avgRatingString: "4.4",
                    totalRatingsString: "167",
                    sla: {
                      deliveryTime: 30,
                      lastMileTravel: 3,
                      serviceability: "SERVICEABLE",
                      slaString: "30-35 mins",
                      lastMileTravelString: "3.0 km",
                      iconType: "ICON_TYPE_EMPTY",
                    },
                    availability: {
                      nextCloseTime: "2025-06-28 03:00:00",
                      opened: true,
                    },
                    badges: {
                      imageBadges: [
                        {
                          imageId: "v1695133679/badges/Pure_Veg111.png",
                          description: "pureveg",
                        },
                      ],
                    },
                    isOpen: true,
                    type: "F",
                    badgesV2: {
                      entityBadges: {
                        imageBased: {
                          badgeObject: [
                            {
                              attributes: {
                                description: "pureveg",
                                imageId: "v1695133679/badges/Pure_Veg111.png",
                              },
                            },
                          ],
                        },
                        textBased: {},
                        textExtendedBadges: {},
                      },
                    },
                    aggregatedDiscountInfoV3: {
                      header: "₹125 OFF",
                      subHeader: "ABOVE ₹499",
                      discountTag: "FLAT DEAL",
                    },
                    differentiatedUi: {
                      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      differentiatedUiMediaDetails: {
                        lottie: {},
                        video: {},
                      },
                    },
                    reviewsSummary: {},
                    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    restaurantOfferPresentationInfo: {},
                    externalRatings: {
                      aggregatedRating: {
                        rating: "--",
                      },
                    },
                    ratingsDisplayPreference:
                      "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                  },
                  analytics: {
                    context: "seo-data-bb51b242-5bfd-4c43-829f-8a9ecc37083d",
                  },
                  cta: {
                    link: "https://www.swiggy.com/city/bangalore/veg-meals-by-lunchbox-rashtriya-vidyalaya-rd-jayanagar-rest263747",
                    type: "WEBLINK",
                  },
                },
                {
                  info: {
                    id: "855717",
                    name: "Burgerama",
                    cloudinaryImageId:
                      "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/5/bc55063f-9d8d-439c-bc58-b630bbdc280f_855717.jpg",
                    locality: "Vasanth Nagar",
                    areaName: "R.T. Nagar",
                    costForTwo: "₹700 for two",
                    cuisines: ["Burger"],
                    avgRating: 4.3,
                    parentId: "8993",
                    avgRatingString: "4.3",
                    totalRatingsString: "274",
                    sla: {
                      deliveryTime: 26,
                      lastMileTravel: 5,
                      serviceability: "SERVICEABLE",
                      slaString: "25-30 mins",
                      lastMileTravelString: "5.0 km",
                      iconType: "ICON_TYPE_EMPTY",
                    },
                    availability: {
                      nextCloseTime: "2025-06-28 04:00:00",
                      opened: true,
                    },
                    badges: {
                      imageBadges: [
                        {
                          imageId: "newg.png",
                          description: "Gourmet",
                        },
                      ],
                    },
                    isOpen: true,
                    type: "F",
                    badgesV2: {
                      entityBadges: {
                        imageBased: {
                          badgeObject: [
                            {
                              attributes: {
                                description: "Gourmet",
                                imageId: "newg.png",
                              },
                            },
                          ],
                        },
                        textBased: {},
                        textExtendedBadges: {},
                      },
                    },
                    aggregatedDiscountInfoV3: {
                      header: "ITEMS",
                      subHeader: "AT ₹110",
                    },
                    differentiatedUi: {
                      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      differentiatedUiMediaDetails: {
                        lottie: {},
                        video: {},
                      },
                    },
                    reviewsSummary: {},
                    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    restaurantOfferPresentationInfo: {},
                    externalRatings: {
                      aggregatedRating: {
                        rating: "--",
                      },
                    },
                    ratingsDisplayPreference:
                      "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                  },
                  analytics: {
                    context: "seo-data-bb51b242-5bfd-4c43-829f-8a9ecc37083d",
                  },
                  cta: {
                    link: "https://www.swiggy.com/city/bangalore/burgerama-vasanth-nagar-r-t-nagar-rest855717",
                    type: "WEBLINK",
                  },
                },
                {
                  info: {
                    id: "102334",
                    name: "Dindigul Thalappakatti - Since 1957\n",
                    cloudinaryImageId: "ogidjgqgh5w4otvuiipj",
                    locality: "Mg Road",
                    areaName: "Indiranagar",
                    costForTwo: "₹650 for two",
                    cuisines: [
                      "Biryani",
                      "Barbecue",
                      "South Indian",
                      "Chinese",
                      "North Indian",
                    ],
                    avgRating: 4.4,
                    parentId: "641506",
                    avgRatingString: "4.4",
                    totalRatingsString: "9.5K+",
                    sla: {
                      deliveryTime: 29,
                      lastMileTravel: 5.6,
                      serviceability: "SERVICEABLE",
                      slaString: "25-30 mins",
                      lastMileTravelString: "5.6 km",
                      iconType: "ICON_TYPE_EMPTY",
                    },
                    availability: {
                      nextCloseTime: "2025-06-28 03:00:00",
                      opened: true,
                    },
                    badges: {},
                    isOpen: true,
                    type: "F",
                    badgesV2: {
                      entityBadges: {
                        imageBased: {},
                        textBased: {},
                        textExtendedBadges: {},
                      },
                    },
                    aggregatedDiscountInfoV3: {
                      header: "ITEMS",
                      subHeader: "AT ₹29",
                    },
                    differentiatedUi: {
                      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      differentiatedUiMediaDetails: {
                        lottie: {},
                        video: {},
                      },
                    },
                    reviewsSummary: {},
                    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    restaurantOfferPresentationInfo: {},
                    externalRatings: {
                      aggregatedRating: {
                        rating: "--",
                      },
                    },
                    ratingsDisplayPreference:
                      "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                  },
                  analytics: {
                    context: "seo-data-bb51b242-5bfd-4c43-829f-8a9ecc37083d",
                  },
                  cta: {
                    link: "https://www.swiggy.com/city/bangalore/dindigul-thalappakatti-since-1957-mg-road-indiranagar-rest102334",
                    type: "WEBLINK",
                  },
                },
                {
                  info: {
                    id: "776939",
                    name: "The Belgian Waffle Co.",
                    cloudinaryImageId:
                      "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/16/bcb05119-9e50-44fb-a5dd-9a66aeb57929_776939.jpg",
                    locality: "KODHANDARAMAPURAM",
                    areaName: "MALLESHWARM",
                    costForTwo: "₹200 for two",
                    cuisines: ["Waffle", "Desserts", "Ice Cream", "Beverages"],
                    avgRating: 4.6,
                    veg: true,
                    parentId: "2233",
                    avgRatingString: "4.6",
                    totalRatingsString: "814",
                    sla: {
                      deliveryTime: 29,
                      lastMileTravel: 6.2,
                      serviceability: "SERVICEABLE",
                      slaString: "25-30 mins",
                      lastMileTravelString: "6.2 km",
                      iconType: "ICON_TYPE_EMPTY",
                    },
                    availability: {
                      nextCloseTime: "2025-06-28 03:00:00",
                      opened: true,
                    },
                    badges: {},
                    isOpen: true,
                    type: "F",
                    badgesV2: {
                      entityBadges: {
                        imageBased: {},
                        textBased: {},
                        textExtendedBadges: {},
                      },
                    },
                    aggregatedDiscountInfoV3: {
                      header: "ITEMS",
                      subHeader: "AT ₹99",
                    },
                    differentiatedUi: {
                      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      differentiatedUiMediaDetails: {
                        lottie: {},
                        video: {},
                      },
                    },
                    reviewsSummary: {},
                    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    restaurantOfferPresentationInfo: {},
                    externalRatings: {
                      aggregatedRating: {
                        rating: "--",
                      },
                    },
                    ratingsDisplayPreference:
                      "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                  },
                  analytics: {
                    context: "seo-data-bb51b242-5bfd-4c43-829f-8a9ecc37083d",
                  },
                  cta: {
                    link: "https://www.swiggy.com/city/bangalore/the-belgian-waffle-co-kodhandaramapuram-malleshwarm-rest776939",
                    type: "WEBLINK",
                  },
                },
                {
                  info: {
                    id: "392828",
                    name: "Big Bowl",
                    cloudinaryImageId:
                      "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/22/deff0d02-ca1d-4ef9-9d62-b0cbeabf33d3_392828.JPG",
                    locality: "Chikka Lakshmaiah Layout",
                    areaName: "Adugodi",
                    costForTwo: "₹250 for two",
                    cuisines: [
                      "North Indian",
                      "Chinese",
                      "Tibetan",
                      "Desserts",
                    ],
                    avgRating: 4.3,
                    parentId: "434792",
                    avgRatingString: "4.3",
                    totalRatingsString: "3.4K+",
                    sla: {
                      deliveryTime: 30,
                      lastMileTravel: 5.7,
                      serviceability: "SERVICEABLE",
                      slaString: "25-30 mins",
                      lastMileTravelString: "5.7 km",
                      iconType: "ICON_TYPE_EMPTY",
                    },
                    availability: {
                      nextCloseTime: "2025-06-28 02:00:00",
                      opened: true,
                    },
                    badges: {},
                    isOpen: true,
                    type: "F",
                    badgesV2: {
                      entityBadges: {
                        imageBased: {},
                        textBased: {},
                        textExtendedBadges: {},
                      },
                    },
                    aggregatedDiscountInfoV3: {
                      header: "ITEMS",
                      subHeader: "AT ₹129",
                    },
                    differentiatedUi: {
                      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      differentiatedUiMediaDetails: {
                        lottie: {},
                        video: {},
                      },
                    },
                    reviewsSummary: {},
                    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    restaurantOfferPresentationInfo: {},
                    externalRatings: {
                      aggregatedRating: {
                        rating: "--",
                      },
                    },
                    ratingsDisplayPreference:
                      "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                  },
                  analytics: {
                    context: "seo-data-bb51b242-5bfd-4c43-829f-8a9ecc37083d",
                  },
                  cta: {
                    link: "https://www.swiggy.com/city/bangalore/big-bowl-chikka-lakshmaiah-layout-adugodi-rest392828",
                    type: "WEBLINK",
                  },
                },
                {
                  info: {
                    id: "767218",
                    name: "Seoul Burgers & Shakes",
                    cloudinaryImageId:
                      "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/7/82be0d9c-958f-4bf9-bba2-da7d23305885_767218.jpg",
                    locality: "6TH BLOCK",
                    areaName: "RAJAJINAGAR",
                    costForTwo: "₹200 for two",
                    cuisines: [
                      "Burger",
                      "Bubble Tea",
                      "Fast Food",
                      "Beverages",
                      "Juice and shake",
                    ],
                    avgRating: 4.3,
                    parentId: "588706",
                    avgRatingString: "4.3",
                    totalRatingsString: "633",
                    sla: {
                      deliveryTime: 30,
                      lastMileTravel: 4.9,
                      serviceability: "SERVICEABLE",
                      slaString: "30-35 mins",
                      lastMileTravelString: "4.9 km",
                      iconType: "ICON_TYPE_EMPTY",
                    },
                    availability: {
                      nextCloseTime: "2025-07-04 00:00:00",
                      opened: true,
                    },
                    badges: {},
                    isOpen: true,
                    type: "F",
                    badgesV2: {
                      entityBadges: {
                        imageBased: {},
                        textBased: {},
                        textExtendedBadges: {},
                      },
                    },
                    aggregatedDiscountInfoV3: {
                      header: "ITEMS",
                      subHeader: "AT ₹100",
                    },
                    differentiatedUi: {
                      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      differentiatedUiMediaDetails: {
                        lottie: {},
                        video: {},
                      },
                    },
                    reviewsSummary: {},
                    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    restaurantOfferPresentationInfo: {},
                    externalRatings: {
                      aggregatedRating: {
                        rating: "--",
                      },
                    },
                    ratingsDisplayPreference:
                      "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                  },
                  analytics: {
                    context: "seo-data-bb51b242-5bfd-4c43-829f-8a9ecc37083d",
                  },
                  cta: {
                    link: "https://www.swiggy.com/city/bangalore/seoul-burgers-and-shakes-6th-block-rajajinagar-rest767218",
                    type: "WEBLINK",
                  },
                },
                {
                  info: {
                    id: "767216",
                    name: "Boba Bhai - Bubble Tea & Korean Street Food",
                    cloudinaryImageId:
                      "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/7/37f756bb-d9c0-4884-a2e3-0f595afe9b31_767216.jpg",
                    locality: "Rajajinagar",
                    areaName: "Rajajinagar",
                    costForTwo: "₹200 for two",
                    cuisines: [
                      "Bubble Tea",
                      "Burger",
                      "Korean",
                      "Beverages",
                      "Fast Food",
                      "Juice and shake",
                    ],
                    avgRating: 4.2,
                    parentId: "361235",
                    avgRatingString: "4.2",
                    totalRatingsString: "816",
                    sla: {
                      deliveryTime: 33,
                      lastMileTravel: 4.8,
                      serviceability: "SERVICEABLE",
                      slaString: "30-35 mins",
                      lastMileTravelString: "4.8 km",
                      iconType: "ICON_TYPE_EMPTY",
                    },
                    availability: {
                      nextCloseTime: "2025-07-04 00:00:00",
                      opened: true,
                    },
                    badges: {},
                    isOpen: true,
                    type: "F",
                    badgesV2: {
                      entityBadges: {
                        imageBased: {},
                        textBased: {},
                        textExtendedBadges: {},
                      },
                    },
                    aggregatedDiscountInfoV3: {
                      header: "ITEMS",
                      subHeader: "AT ₹60",
                    },
                    differentiatedUi: {
                      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      differentiatedUiMediaDetails: {
                        lottie: {},
                        video: {},
                      },
                    },
                    reviewsSummary: {},
                    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    restaurantOfferPresentationInfo: {},
                    externalRatings: {
                      aggregatedRating: {
                        rating: "3.8",
                        ratingCount: "33",
                      },
                      source: "GOOGLE",
                      sourceIconImageId:
                        "v1704440323/google_ratings/rating_google_tag",
                    },
                    ratingsDisplayPreference:
                      "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                  },
                  analytics: {
                    context: "seo-data-bb51b242-5bfd-4c43-829f-8a9ecc37083d",
                  },
                  cta: {
                    link: "https://www.swiggy.com/city/bangalore/boba-bhai-bubble-tea-and-korean-street-food-rajajinagar-rest767216",
                    type: "WEBLINK",
                  },
                },
                {
                  info: {
                    id: "831197",
                    name: "Pastas By Pizza Hut",
                    cloudinaryImageId: "dce75bf0d124fb1fa390597828d8ffd9",
                    locality: "Vani Vilas Road",
                    areaName: "Basavanagudi",
                    costForTwo: "₹400 for two",
                    cuisines: ["Pastas"],
                    avgRating: 4,
                    parentId: "306806",
                    avgRatingString: "4.0",
                    totalRatingsString: "34",
                    sla: {
                      deliveryTime: 26,
                      lastMileTravel: 2.8,
                      serviceability: "SERVICEABLE",
                      slaString: "25-30 mins",
                      lastMileTravelString: "2.8 km",
                      iconType: "ICON_TYPE_EMPTY",
                    },
                    availability: {
                      nextCloseTime: "2025-06-28 02:00:00",
                      opened: true,
                    },
                    badges: {
                      textExtendedBadges: [
                        {
                          iconId: "guiltfree/GF_Logo_android_3x",
                          shortDescription: "options available",
                          fontColor: "#7E808C",
                        },
                      ],
                    },
                    isOpen: true,
                    type: "F",
                    badgesV2: {
                      entityBadges: {
                        imageBased: {},
                        textBased: {},
                        textExtendedBadges: {
                          badgeObject: [
                            {
                              attributes: {
                                description: "",
                                fontColor: "#7E808C",
                                iconId: "guiltfree/GF_Logo_android_3x",
                                shortDescription: "options available",
                              },
                            },
                          ],
                        },
                      },
                    },
                    aggregatedDiscountInfoV3: {
                      header: "₹80 OFF",
                      subHeader: "ABOVE ₹249",
                      discountTag: "FLAT DEAL",
                    },
                    differentiatedUi: {
                      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      differentiatedUiMediaDetails: {
                        lottie: {},
                        video: {},
                      },
                    },
                    reviewsSummary: {},
                    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    restaurantOfferPresentationInfo: {},
                    externalRatings: {
                      aggregatedRating: {
                        rating: "--",
                      },
                    },
                    ratingsDisplayPreference:
                      "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                  },
                  analytics: {
                    context: "seo-data-bb51b242-5bfd-4c43-829f-8a9ecc37083d",
                  },
                  cta: {
                    link: "https://www.swiggy.com/city/bangalore/pastas-by-pizza-hut-vani-vilas-road-basavanagudi-rest831197",
                    type: "WEBLINK",
                  },
                },
                {
                  info: {
                    id: "74444",
                    name: "Samosa Party",
                    cloudinaryImageId:
                      "RX_THUMBNAIL/IMAGES/VENDOR/2025/4/18/a0bed024-c4ec-4fd1-b430-46b8c5d455cb_74444.jpg",
                    locality: "Koramangala",
                    areaName: "Koramangala",
                    costForTwo: "₹100 for two",
                    cuisines: [
                      "Fast Food",
                      "Snacks",
                      "Beverages",
                      "Chaat",
                      "North Indian",
                      "Street Food",
                      "Sweets",
                      "Desserts",
                      "Punjabi",
                      "Bakery",
                    ],
                    avgRating: 4.4,
                    parentId: "6364",
                    avgRatingString: "4.4",
                    totalRatingsString: "18K+",
                    sla: {
                      deliveryTime: 34,
                      lastMileTravel: 6.9,
                      serviceability: "SERVICEABLE",
                      slaString: "30-35 mins",
                      lastMileTravelString: "6.9 km",
                      iconType: "ICON_TYPE_EMPTY",
                    },
                    availability: {
                      nextCloseTime: "2025-07-05 00:00:00",
                      opened: true,
                    },
                    badges: {
                      imageBadges: [
                        {
                          imageId: "Rxawards/_CATEGORY-Snacks.png",
                          description: "Delivery!",
                        },
                      ],
                    },
                    isOpen: true,
                    type: "F",
                    badgesV2: {
                      entityBadges: {
                        imageBased: {
                          badgeObject: [
                            {
                              attributes: {
                                description: "Delivery!",
                                imageId: "Rxawards/_CATEGORY-Snacks.png",
                              },
                            },
                          ],
                        },
                        textBased: {},
                        textExtendedBadges: {},
                      },
                    },
                    aggregatedDiscountInfoV3: {
                      header: "ITEMS",
                      subHeader: "AT ₹149",
                    },
                    differentiatedUi: {
                      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      differentiatedUiMediaDetails: {
                        lottie: {},
                        video: {},
                      },
                    },
                    reviewsSummary: {},
                    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    restaurantOfferPresentationInfo: {},
                    externalRatings: {
                      aggregatedRating: {
                        rating: "3.7",
                        ratingCount: "221",
                      },
                      source: "GOOGLE",
                      sourceIconImageId:
                        "v1704440323/google_ratings/rating_google_tag",
                    },
                    ratingsDisplayPreference:
                      "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                  },
                  analytics: {
                    context: "seo-data-bb51b242-5bfd-4c43-829f-8a9ecc37083d",
                  },
                  cta: {
                    link: "https://www.swiggy.com/city/bangalore/samosa-party-koramangala-rest74444",
                    type: "WEBLINK",
                  },
                },
              ],
              theme: "Restaurant_Group_WebView_SEO_PB_Theme",
              widgetType: "WIDGET_TYPE_POPULAR_BRANDS",
              style: {
                width: {
                  type: "TYPE_RELATIVE",
                  value: 0.41111112,
                  reference: "RELATIVE_DIMENSION_REFERENCE_DEVICE_WIDTH",
                },
                height: {
                  type: "TYPE_RELATIVE",
                  value: 0.7027027,
                  reference: "RELATIVE_DIMENSION_REFERENCE_WIDTH",
                },
                layoutAlignment: "LAYOUT_ALIGNMENT_LEFT",
              },
              collectionId: "84124",
            },
          },
        },
      },
    },
  ];

  const restaurants =
    resObj[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

  return (
    <>
      <div className="flex flex-col space-y-8">
        <div className="mt-8 sm:mt-12">
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center items-center px-4 sm:px-6">
            <Input
              className="w-full max-w-md sm:max-w-lg md:max-w-xl bg-white border-gray-300 focus:border-primary focus:ring-primary placeholder:text-sm text-gray-100"
              placeholder="Search for restaurants, cuisines, or dishes..."
            />
            <Button
              variant="outline"
              className="w-full sm:w-auto px-8 py-2 border-gray-300 hover:bg-primary hover:text-white transition-colors"
            >
              Search
            </Button>
          </div>
        </div>

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 sm:gap-8">
            {restaurants.map((restaurant: any) => (
              <ResCard key={restaurant.info.id} resData={restaurant.info} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
