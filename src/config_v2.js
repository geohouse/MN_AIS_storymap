var config_v2 = {
    style: 'mapbox://styles/geohouse/cl17496x4005815qojpzx03xu',
    /* style: 'mapbox://styles/sgmapbox/ck8etv6jr25781jqhhq8clbzc',*/
    /*
    style: 'mapbox://styles/mapbox/streets-v11',
    */
    /*
    Mine
    */

    accessToken: 'pk.eyJ1IjoiZ2VvaG91c2UiLCJhIjoiY2wxNWh1NjM4MDE3dzNwb2RtOTNhbjR5cSJ9.Q2t41-ACFm5YkkQU_Ohl1w',
    /*accessToken: 'pk.eyJ1IjoiZ2VvaG91c2UiLCJhIjoiY2wxMmR1b3FjMDBrZzNlbzB2NDY3cDBjbSJ9.kQ5PnFxiciMd_GTpnN8DYg',*/
    
    showMarkers: false,
    markerColor: '#3FB1CE',
    // Don't think the projection is working.
    projectiion: 'albers',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    title: 'Aquatic invasive species in Minnesota',
    subtitle: 'Tracing the spread of six species through time',
    // Hacky to get a 2 line byline using \n inside the text (otherwise only 1 byline entry allowed)
    byline: 'Made by Geoffrey House',
    footer: 'Source: <a href="https://gisdata.mn.gov/dataset/env-invasive-aquatic-obs" target="_blank">Aquatic Invasive Species Observations" dataset from the Minnesota Department of Natural Resources, hosted on Minnesota Geospatial Commons</a> <br> <a href="https://maisrc.umn.edu/about-ais">Most information is from the MAISRC 2021-2022 Priority Species List</a> <br>Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    
    /*
    location: {
        center: [-91.079,46.422],
        zoom: 6.0,
        pitch:0,
        bearing:0
    }
    */

/* All layers off
            onChapterEnter: [
                {
                    layer: 'GrassCarp_2010-2015',
                    opacity: 0,
                    duration: 500
                },
                {
                    layer: 'GrassCarp_2000-2009',
                    opacity: 0,
                    duration: 500
                },
                {
                    layer: 'GrassCarp_before_2000',
                    opacity: 0,
                    duration: 500
                },
                {
                    layer: 'GrassCarp_all',
                    opacity: 0,
                    duration: 500
                },
                {
                    layer: 'ZebraMussels_2015-2021',
                    opacity: 0,
                    duration: 500
                },
                {
                    layer: 'ZebraMussels_2010-2014',
                    opacity: 0,
                    duration: 500
                },
                {
                    layer: 'ZebraMussels_2005-2009',
                    opacity: 0,
                    duration: 500
                },
                {
                    layer: 'ZebraMussels_before_2005',
                    opacity: 0,
                    duration: 500
                },
                {
                    layer: 'ZebraMussels_all',
                    opacity: 0,
                    duration: 500
                },
                {
                    layer: 'PurpleLoosestrife_2011-2021',
                    opacity: 0,
                    duration: 500
                },
                {
                    layer: 'PurpleLoosestrife_1985-1995',
                    opacity: 0,
                    duration: 500
                },
                {
                    layer: 'PurpleLoosestrife_all',
                    opacity: 0,
                    duration: 500
                },
                {
                    layer: 'CurlyleafPondweed_2010-2021',
                    opacity: 0,
                    duration: 500
                },
                {
                    layer: 'CurlyleafPondweed_2000-2009',
                    opacity: 0,
                    duration: 500
                },
                {
                    layer: 'CurlyleafPondweed_1990-1999',
                    opacity: 0,
                    duration: 500
                },
                {
                    layer: 'CurlyleafPondweed_1980-1989',
                    opacity: 0,
                    duration: 500
                },
                {
                    layer: 'CurlyleafPondweed_1970-1979',
                    opacity: 0,
                    duration: 500
                },
                {
                    layer: 'CurlyleafPondweed_1960-1969',
                    opacity: 0,
                    duration: 500
                },
                {
                    layer: 'CurlyleafPondweed_all',
                    opacity: 0,
                    duration: 500
                },
                {
                    layer: 'FloweringRush_2010-2021',
                    opacity: 0,
                    duration: 500
                },
                {
                    layer: 'FloweringRush_2000-2009',
                    opacity: 0,
                    duration: 500
                },
                {
                    layer: 'FloweringRush_before_2000',
                    opacity: 0,
                    duration: 500
                },
                {
                    layer: 'FloweringRush_all',
                    opacity: 0,
                    duration: 500
                },
                {
                    layer: 'RustyCrayfish_2010-2021',
                    opacity: 0,
                    duration: 500
                },
                {
                    layer: 'RustyCrayfish_2000-2009',
                    opacity: 0,
                    duration: 500
                },
                {
                    layer: 'RustyCrayfish_1990-1999',
                    opacity: 0,
                    duration: 500
                },
                {
                    layer: 'RustyCrayfish_all',
                    opacity: 0,
                    duration: 500
                }
            ],
*/
    // Having trouble with fading outlines of points (can't figure out how to pass 'circle-stroke-opacity' correctly, so just
    // removed the stroke from all points in the style.)
    chapters: [
        {
            id: 'grasscarp-all-id',
            alignment: 'right',
            hidden: false,
            title: 'Grass Carp',
            image: './images/GrassCarp_MO_MDC.png',
            imageCredit: '<a href="https://mdc.mo.gov/your-property/improve-your-property/habitat-management/pond-stream-management/ponds-plant/grass"> Photo by Lance Merry, Missouri Department of Conservation</a>',
            description: 'This invasive carp species was first introduced in the U.S. in the 1960s to help reduce and maintain aquatic vegetation in lakes, but has since spread more widely likely through escaped individuals. Each fish can live to be about 20 years old, with the young eating aquatic invertebrates and the adults eating up to 2-3 times their weight in vegetation each day (hence the name Grass Carp). The aquatic and terrestrial plants eaten by the Grass Carp usually serve as a food source for birds and provide protection to young fish, so the carp can have especially large ecological effects in the shallow areas near lakeshores. <br> <a href="https://maisrc.umn.edu/invasive-carp">Learn more</a>',
            location: {
                center: [-93.08659, 46.86022],
                zoom: 6.23,
                pitch:63.83,
                bearing:-23.73
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'GrassCarp_all',
                    opacity: 1,
                    duration: 300
                }
            ],
            onChapterExit: [
                {
                    layer: 'GrassCarp_all',
                    opacity: 0,
                    duration: 300
                }
            ]
        },
        {
            id: 'grasscarp-early-id',
            alignment: 'right',
            hidden: false,
            title: 'Grass Carp - confimed locations between 2000 and 2010',
            image: './images/GrassCarp_MO_MDC.png',
            imageCredit: '<a href="https://mdc.mo.gov/your-property/improve-your-property/habitat-management/pond-stream-management/ponds-plant/grass"> Photo by Lance Merry, Missouri Department of Conservation</a>',
            description: '',
            location: {
                center: [-93.08659, 46.86022],
                zoom: 6.23,
                pitch:63.83,
                bearing:-23.73
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'GrassCarp_2000-2009',
                    opacity: 1,
                    duration: 500
                }
            ],
            onChapterExit: [
                {
                    layer: 'GrassCarp_2000-2009',
                    opacity: 0,
                    duration: 500
                }
            ]
        },
        {
            id: 'grasscarp-recent-id',
            alignment: 'right',
            hidden: false,
            title: 'Grass Carp - confimed locations between 2010 and 2021',
            image: './images/GrassCarp_MO_MDC.png',
            imageCredit: '<a href="https://mdc.mo.gov/your-property/improve-your-property/habitat-management/pond-stream-management/ponds-plant/grass"> Photo by Lance Merry, Missouri Department of Conservation</a>',
            description: '',
            location: {
                center: [-93.08659, 46.86022],
                zoom: 6.23,
                pitch:63.83,
                bearing:-23.73
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'GrassCarp_2010-2015',
                    opacity: 1,
                    duration: 500
                }
            ],
            onChapterExit: [
                {
                    layer: 'GrassCarp_2010-2015',
                    opacity: 0,
                    duration: 500
                }
            ]
        },
        {
            id: 'zebra-mussels-all-id',
            alignment: 'left',
            hidden: false,
            title: 'Zebra mussels',
            image: './images/sdpb_zebraMussels.jpg',
            imageCredit: '<a href="https://listen.sdpb.org/news/2019-11-01/new-zebra-mussel-infestations-found-in-south-dakota-lakes"> Photo by US Fish and Wildlife Service</a>',
            description: 'These mussels became established in the Duluth Harbor in 1989 and as of late 2021, 539 water bodies in Minnesota are listed as either being infested with zebra mussels or are connected to another water body that is. The mussels get their name from the alternating light and dark stripes on their shells, and while each mussel is small (1/4" - 1 1/2"), they form extremely dense colonies that carpet lake bottoms and hard surfaces like clogging water inlets and attaching to boat surfaces. These colonies can overgrow and kill native mussels and filter far larger amounts of phytoplankton from the water column, leading to substantial negative effects on the lake foodwebs. Zebra mussels can spread in water transported between lakes, such as in boats, making proper boat cleaning and draining a key action to prevent their further spread. <br><a href="https://maisrc.umn.edu/zebra-mussels">Learn more</a>',
            location: {
                center: [-96.07575, 46.46848],
                zoom: 6.01,
                pitch:0,
                bearing:1
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'ZebraMussels_all',
                    opacity: 1,
                    duration: 300
                }
            ],
            onChapterExit: [
                {
                    layer: 'ZebraMussels_all',
                    opacity: 0,
                    duration: 300
                }
            ]
        },
        {
            id: 'zebra-mussels-early-id',
            alignment: 'left',
            hidden: false,
            title: 'Zebra mussels - confirmed locations before 2005',
            image: './images/sdpb_zebraMussels.jpg',
            imageCredit: '<a href="https://listen.sdpb.org/news/2019-11-01/new-zebra-mussel-infestations-found-in-south-dakota-lakes"> Photo by US Fish and Wildlife Service</a>',
            description: '',
            location: {
                center: [-96.07575, 46.46848],
                zoom: 6.01,
                pitch:0,
                bearing:1
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'ZebraMussels_before_2005',
                    opacity: 1,
                    duration: 300
                }
            ],
            onChapterExit: [
                {
                    layer: 'ZebraMussels_before_2005',
                    opacity: 0,
                    duration: 300
                }
            ]
        },
        {
            id: 'zebra-mussels-mid-id',
            alignment: 'left',
            hidden: false,
            title: 'Zebra mussels - confirmed locations between 2005 and 2009',
            image: './images/sdpb_zebraMussels.jpg',
            imageCredit: '<a href="https://listen.sdpb.org/news/2019-11-01/new-zebra-mussel-infestations-found-in-south-dakota-lakes"> Photo by US Fish and Wildlife Service</a>',
            description: '',
            location: {
                center: [-96.07575, 46.46848],
                zoom: 6.01,
                pitch:0,
                bearing:1
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'ZebraMussels_2005-2009',
                    opacity: 1,
                    duration: 300
                }
            ],
            onChapterExit: [
                {
                    layer: 'ZebraMussels_2005-2009',
                    opacity: 0,
                    duration: 300
                }
            ]
        },
        {
            id: 'zebra-mussels-recent-id',
            alignment: 'left',
            hidden: false,
            title: 'Zebra mussels - confirmed locations between 2010 and 2014',
            image: './images/sdpb_zebraMussels.jpg',
            imageCredit: '<a href="https://listen.sdpb.org/news/2019-11-01/new-zebra-mussel-infestations-found-in-south-dakota-lakes"> Photo by US Fish and Wildlife Service</a>',
            description: '',
            location: {
                center: [-96.07575, 46.46848],
                zoom: 6.01,
                pitch:0,
                bearing:1
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'ZebraMussels_2010-2014',
                    opacity: 1,
                    duration: 300
                }
            ],
            onChapterExit: [
                {
                    layer: 'ZebraMussels_2010-2014',
                    opacity: 0,
                    duration: 300
                }
            ]
        },
        {
            id: 'rusty-crayfish-all-id',
            alignment: 'right',
            hidden: false,
            title: 'Rusty crayfish',
            image: './images/UMN_RustyCrayfish.jpg',
            imageCredit: '<a href="https://extension.umn.edu/identify-invasive-species/rusty-crayfish"> Photo by Bob McNamara</a>',
            description: 'This crayfish species, which was first identified in Minnesota in the late 1990s is an example of a species that is native to part of the U.S. (the Ohio River basin) but causes ecological problems when introduced outside of that range. Rusty crayfish are problematic for native Minnesota crayfish species for two main reasons: 1) Rusty crayfish are more aggresive than the native Minnesota crayfish, causing those native crayfish populations to decline, and 2) Rusty crayfish also can breed with the other native crayfish species, which results in hybrid crayfish instead of distinct native species. They also can degrade stands of aquatic plants in lakes and compete with fish populations by eating fish eggs and fish prey. <br><a href="https://www.dnr.state.mn.us/invasives/aquaticanimals/rustycrayfish/index.html">Learn more</a>',
            location: {
                center: [-94.20361, 47.66561],
                zoom: 6.23,
                pitch:48.83,
                bearing:-126.93
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'RustyCrayfish_all',
                    opacity: 1,
                    duration: 300
                }
            ],
            onChapterExit: [
                {
                    layer: 'RustyCrayfish_all',
                    opacity: 0,
                    duration: 300
                }
            ]
        },
        {
            id: 'rusty-crayfish-early-id',
            alignment: 'right',
            hidden: false,
            title: 'Rusty crayfish - confirmed locations 1990-1999',
            image: './images/UMN_RustyCrayfish.jpg',
            imageCredit: '<a href="https://extension.umn.edu/identify-invasive-species/rusty-crayfish"> Photo by Bob McNamara</a>',
            description: 'Rusty crayfish were first observed in northeastern Minnesota near Ely',
            location: {
                center: [-94.20361, 47.66561],
                zoom: 6.23,
                pitch:48.83,
                bearing:-126.93
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'RustyCrayfish_1990-1999',
                    opacity: 1,
                    duration: 300
                }
            ],
            onChapterExit: [
                {
                    layer: 'RustyCrayfish_1990-1999',
                    opacity: 0,
                    duration: 300
                }
            ]
        },
        {
            id: 'rusty-crayfish-mid-id',
            alignment: 'right',
            hidden: false,
            title: 'Rusty crayfish - confirmed locations 2000-2009',
            image: './images/UMN_RustyCrayfish.jpg',
            imageCredit: '<a href="https://extension.umn.edu/identify-invasive-species/rusty-crayfish"> Photo by Bob McNamara</a>',
            description: 'They then were observed in a wider area around Ely, including near the Boundary Waters Canoe Area Wilderness.',
            location: {
                center: [-94.20361, 47.66561],
                zoom: 6.23,
                pitch:48.83,
                bearing:-126.93
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'RustyCrayfish_2000-2009',
                    opacity: 1,
                    duration: 300
                }
            ],
            onChapterExit: [
                {
                    layer: 'RustyCrayfish_2000-2009',
                    opacity: 0,
                    duration: 300
                }
            ]
        },
        {
            id: 'rusty-crayfish-late-id',
            alignment: 'right',
            hidden: false,
            title: 'Rusty crayfish - confirmed locations 2010-2021',
            image: './images/UMN_RustyCrayfish.jpg',
            imageCredit: '<a href="https://extension.umn.edu/identify-invasive-species/rusty-crayfish"> Photo by Bob McNamara</a>',
            description: 'In the decade since 2010, they have spread south and west and are now found in geographically distant areas of Minnesota.',
            location: {
                center: [-94.20361, 47.66561],
                zoom: 6.23,
                pitch:48.83,
                bearing:-126.93
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'RustyCrayfish_2010-2021',
                    opacity: 1,
                    duration: 300
                }
            ],
            onChapterExit: [
                {
                    layer: 'RustyCrayfish_2010-2021',
                    opacity: 0,
                    duration: 300
                }
            ]
        },
        {
            id: 'curlyleaf-pondweed-all-id',
            alignment: 'left',
            hidden: false,
            title: 'Curlyleaf pondweed',
            image: './images/UMN_curlyleafPondweed.jpg',
            imageCredit: '<a href="https://extension.umn.edu/identify-invasive-species/curly-leaf-pondweed"> Photo from University of Minnesota Extension</a>',
            description: 'This invasive aquatic plant is distinguished by its curving, serrated leaf margins and often grows in extremely high densities. Plants can survive when submerged in up to 15 feet of water, and spread by producing buds called turions that can remain dormant and viable in lake sediments for at least two years. Curlyleaf pondweed stands can displace native plants that provide food and shelter for waterfowl and young fish, causing ecological shifts. High abundances of the pondweed can form mats on the surface of lakes and  limit swimming and boating opportunities. It is most commonly found in lakes used heavily for recreation and is primarily spread by people unknowingly moving its turions or other vegetative pieces from lake to lake. <br><a href="https://maisrc.umn.edu/curlyleaf-pondweed">Learn more</a>',
            location: {
                center: [-96.07575, 46.46848],
                zoom: 6.01,
                pitch:0,
                bearing:1
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'CurlyleafPondweed_all',
                    opacity: 1,
                    duration: 300
                }
            ],
            onChapterExit: [
                {
                    layer: 'CurlyleafPondweed_all',
                    opacity: 0,
                    duration: 300
                }
            ]
        },
        {
            id: 'curlyleaf-pondweed-before70s-id',
            alignment: 'left',
            hidden: false,
            title: 'Curlyleaf pondweed',
            image: './images/UMN_curlyleafPondweed.jpg',
            imageCredit: '<a href="https://extension.umn.edu/identify-invasive-species/curly-leaf-pondweed"> Photo from University of Minnesota Extension</a>',
            description: '',
            location: {
                center: [-96.07575, 46.46848],
                zoom: 6.01,
                pitch:0,
                bearing:1
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'CurlyleafPondweed_before_1970',
                    opacity: 1,
                    duration: 300
                }
            ],
            onChapterExit: [
                {
                    layer: 'CurlyleafPondweed_before_1970',
                    opacity: 0,
                    duration: 300
                }
            ]
        },
        {
            id: 'curlyleaf-pondweed-70s-id',
            alignment: 'left',
            hidden: false,
            title: 'Curlyleaf pondweed',
            image: './images/UMN_curlyleafPondweed.jpg',
            imageCredit: '<a href="https://extension.umn.edu/identify-invasive-species/curly-leaf-pondweed"> Photo from University of Minnesota Extension</a>',
            description: '',
            location: {
                center: [-96.07575, 46.46848],
                zoom: 6.01,
                pitch:0,
                bearing:1
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'CurlyleafPondweed_1970-1979',
                    opacity: 1,
                    duration: 300
                }
            ],
            onChapterExit: [
                {
                    layer: 'CurlyleafPondweed_1970-1979',
                    opacity: 0,
                    duration: 300
                }
            ]
        },
        {
            id: 'curlyleaf-pondweed-80s-id',
            alignment: 'left',
            hidden: false,
            title: 'Curlyleaf pondweed',
            image: './images/UMN_curlyleafPondweed.jpg',
            imageCredit: '<a href="https://extension.umn.edu/identify-invasive-species/curly-leaf-pondweed"> Photo from University of Minnesota Extension</a>',
            description: '',
            location: {
                center: [-96.07575, 46.46848],
                zoom: 6.01,
                pitch:0,
                bearing:1
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'CurlyleafPondweed_1980-1989',
                    opacity: 1,
                    duration: 300
                }
            ],
            onChapterExit: [
                {
                    layer: 'CurlyleafPondweed_1980-1989',
                    opacity: 0,
                    duration: 300
                }
            ]
        },
        {
            id: 'curlyleaf-pondweed-90s-id',
            alignment: 'left',
            hidden: false,
            title: 'Curlyleaf pondweed',
            image: './images/UMN_curlyleafPondweed.jpg',
            imageCredit: '<a href="https://extension.umn.edu/identify-invasive-species/curly-leaf-pondweed"> Photo from University of Minnesota Extension</a>',
            description: '',
            location: {
                center: [-96.07575, 46.46848],
                zoom: 6.01,
                pitch:0,
                bearing:1
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'CurlyleafPondweed_1990-1999',
                    opacity: 1,
                    duration: 300
                }
            ],
            onChapterExit: [
                {
                    layer: 'CurlyleafPondweed_1990-1999',
                    opacity: 0,
                    duration: 300
                }
            ]
        },
        {
            id: 'curlyleaf-pondweed-00s-id',
            alignment: 'left',
            hidden: false,
            title: 'Curlyleaf pondweed',
            image: './images/UMN_curlyleafPondweed.jpg',
            imageCredit: '<a href="https://extension.umn.edu/identify-invasive-species/curly-leaf-pondweed"> Photo from University of Minnesota Extension</a>',
            description: '',
            location: {
                center: [-96.07575, 46.46848],
                zoom: 6.01,
                pitch:0,
                bearing:1
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'CurlyleafPondweed_2000-2009',
                    opacity: 1,
                    duration: 300
                }
            ],
            onChapterExit: [
                {
                    layer: 'CurlyleafPondweed_2000-2009',
                    opacity: 0,
                    duration: 300
                }
            ]
        },
        {
            id: 'curlyleaf-pondweed-10s-id',
            alignment: 'left',
            hidden: false,
            title: 'Curlyleaf pondweed',
            image: './images/UMN_curlyleafPondweed.jpg',
            imageCredit: '<a href="https://extension.umn.edu/identify-invasive-species/curly-leaf-pondweed"> Photo from University of Minnesota Extension</a>',
            description: '',
            location: {
                center: [-96.07575, 46.46848],
                zoom: 6.01,
                pitch:0,
                bearing:1
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'CurlyleafPondweed_2010-2021',
                    opacity: 1,
                    duration: 300
                }
            ],
            onChapterExit: [
                {
                    layer: 'CurlyleafPondweed_2010-2021',
                    opacity: 0,
                    duration: 300
                }
            ]
        },
        {
            id: 'flowering-rush-all-id',
            alignment: 'right',
            hidden: false,
            title: 'Flowering rush',
            image: './images/UMN_floweringRush.jpg',
            imageCredit: '<a href="https://extension.umn.edu/identify-invasive-species/flowering-rush"> Photo from University of Minnesota Extension</a>',
            description: 'Flowering rush was first found in North America around 1900, and was likely spread to the Great Lakes through live fragments being transported in ship ballast water. It has been found in Minnesota since 1968, and can be difficult to control because it can successfully live submerged by up to ten feet of water and can spread both through root fragments as well as fertile buds that occur with the flowers. It is a strong grower and can outcompete native plant species like bulrushes to reduce habitat diversity for native animal species and make accessing open water from the shore of lakes more difficult. <br><a href="https://www.dnr.state.mn.us/invasives/terrestrialplants/herbaceous/floweringrush.html">Learn more</a>',
            location: {
                center: [-93.08659, 46.86022],
                zoom: 6.23,
                pitch:63.83,
                bearing:-23.73
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'FloweringRush_all',
                    opacity: 1,
                    duration: 300
                }
            ],
            onChapterExit: [
                {
                    layer: 'FloweringRush_all',
                    opacity: 0,
                    duration: 300
                }
            ]
        },
        {
            id: 'flowering-rush-early-id',
            alignment: 'right',
            hidden: false,
            title: 'Flowering rush',
            image: './images/UMN_floweringRush.jpg',
            imageCredit: '<a href="https://extension.umn.edu/identify-invasive-species/flowering-rush"> Photo from University of Minnesota Extension</a>',
            description: '',
            location: {
                center: [-93.08659, 46.86022],
                zoom: 6.23,
                pitch:63.83,
                bearing:-23.73
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'FloweringRush_before_2000',
                    opacity: 1,
                    duration: 300
                }
            ],
            onChapterExit: [
                {
                    layer: 'FloweringRush_before_2000',
                    opacity: 0,
                    duration: 300
                }
            ]
        },
        {
            id: 'flowering-rush-mid-id',
            alignment: 'right',
            hidden: false,
            title: 'Flowering rush',
            image: './images/UMN_floweringRush.jpg',
            imageCredit: '<a href="https://extension.umn.edu/identify-invasive-species/flowering-rush"> Photo from University of Minnesota Extension</a>',
            description: '',
            location: {
                center: [-93.08659, 46.86022],
                zoom: 6.23,
                pitch:63.83,
                bearing:-23.73
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'FloweringRush_2000-2009',
                    opacity: 1,
                    duration: 300
                }
            ],
            onChapterExit: [
                {
                    layer: 'FloweringRush_2000-2009',
                    opacity: 0,
                    duration: 300
                }
            ]
        },
        {
            id: 'flowering-rush-late-id',
            alignment: 'right',
            hidden: false,
            title: 'Flowering rush',
            image: './images/UMN_floweringRush.jpg',
            imageCredit: '<a href="https://extension.umn.edu/identify-invasive-species/flowering-rush"> Photo from University of Minnesota Extension</a>',
            description: '',
            location: {
                center: [-93.08659, 46.86022],
                zoom: 6.23,
                pitch:63.83,
                bearing:-23.73
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'FloweringRush_2010-2021',
                    opacity: 1,
                    duration: 300
                }
            ],
            onChapterExit: [
                {
                    layer: 'FloweringRush_2010-2021',
                    opacity: 0,
                    duration: 300
                }
            ]
        },
        {
            id: 'purple-loosestrife-all-id',
            alignment: 'left',
            hidden: false,
            title: 'Purple loosestrife',
            image: './images/PurpleLoosestrife_MO_MDC.png',
            imageCredit: '<a href="https://mdc.mo.gov/trees-plants/invasive-plants/purple-loosestrife-control"> Photo from Missouri Department of Conservation</a>',
            description: 'This wetland plant has conspicuous pink flower spikes in spring and is commonly found in roadside ditches and margins of waterbodies. It was used as an ornamental plant before it was known to be invasive and spreads effectively through millions of very small seeds that can be produced by each plant annually. It typically forms dense stands with large root mats. This growth form makes it difficult for people to access the edge of lakes and ponds where it is growing, reduces the suitible habitat for native animals, displaces native plants, and its roots can alter water flow patterns in the wetlands where it is found. Purple loosestrife can be effectively controlled using biological methods however, with the release of specific species of beetles that feed exclusively on the plants and that can become established in Minnesota. <br><a href="https://www.dnr.state.mn.us/invasives/aquaticplants/purpleloosestrife/index.html">Learn more</a>',
            location: {
                center: [-96.07575, 46.46848],
                zoom: 6.01,
                pitch:0,
                bearing:1
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'PurpleLoosestrife_all',
                    opacity: 1,
                    duration: 300
                }
            ],
            onChapterExit: [
                {
                    layer: 'PurpleLoosestrife_all',
                    opacity: 0,
                    duration: 300
                }
            ]
        },
        {
            id: 'purple-loosestrife-early-id',
            alignment: 'left',
            hidden: false,
            title: 'Purple loosestrife',
            image: './images/PurpleLoosestrife_MO_MDC.png',
            imageCredit: '<a href="https://mdc.mo.gov/trees-plants/invasive-plants/purple-loosestrife-control"> Photo from Missouri Department of Conservation</a>',
            description: '',
            location: {
                center: [-96.07575, 46.46848],
                zoom: 6.01,
                pitch:0,
                bearing:1
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'PurpleLoosestrife_1985-1995',
                    opacity: 1,
                    duration: 300
                }
            ],
            onChapterExit: [
                {
                    layer: 'PurpleLoosestrife_1985-1995',
                    opacity: 0,
                    duration: 300
                }
            ]
        },
        {
            id: 'purple-loosestrife-late-id',
            alignment: 'left',
            hidden: false,
            title: 'Purple loosestrife',
            image: './images/PurpleLoosestrife_MO_MDC.png',
            imageCredit: '<a href="https://mdc.mo.gov/trees-plants/invasive-plants/purple-loosestrife-control"> Photo from Missouri Department of Conservation</a>',
            description: '',
            location: {
                center: [-96.07575, 46.46848],
                zoom: 6.01,
                pitch:0,
                bearing:1
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'PurpleLoosestrife_2011-2021',
                    opacity: 1,
                    duration: 300
                }
            ],
            onChapterExit: [
                {
                    layer: 'PurpleLoosestrife_2011-2021',
                    opacity: 0,
                    duration: 300
                }
            ]
        },
    ]
};
