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
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    title: 'Aquatic invasive species in Minnesota',
    subtitle: 'Tracing the spread of six species through time',
    // Hacky to get a 2 line byline using \n inside the text (otherwise only 1 byline entry allowed)
    byline: 'Made by Geoffrey House',
    footer: 'Source: <a href="https://gisdata.mn.gov/dataset/env-invasive-aquatic-obs" target="_blank">Aquatic Invasive Species Observations" dataset from the Minnesota Department of Natural Resources, hosted on Minnesota Geospatial Commons Data from dataset hosted by Minnesota Geospatial Commons</a> <br> <a href="https://maisrc.umn.edu/about-ais">Most information from the MAISRC 2021-2022 Priority Species List</a> <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    
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
            alignment: 'left',
            hidden: false,
            title: 'Grass Carp',
            image: './images/GrassCarp_MO_MDC.png',
            imageCredit: '<a href="https://mdc.mo.gov/your-property/improve-your-property/habitat-management/pond-stream-management/ponds-plant/grass"> Photo by Lance Merry, Missouri Department of Conservation</a>',
            description: 'This invasive carp species was first introduced in the U.S. in the 1960s to help reduce and maintain aquatic vegetation in lakes, but has since spread more widely likely through escaped individuals. Each fish can live to be about 20 years old, with the young eating aquatic invertebrates and the adults eating up to 2-3 times their weight in vegetation each day (hence the name Grass Carp). The aquatic and terrestrial plants eaten by the Grass Carp usually serve as a food source for birds and provide protection to young fish, so the carp can have especially large ecological effects in the shallow areas near lakeshores.',
            location: {
                center: [-91.079,46.422],
                zoom: 6.0,
                pitch:0,
                bearing:0
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
            alignment: 'left',
            hidden: false,
            title: 'Grass Carp - confimed locations between 2000 and 2010',
            image: './images/GrassCarp_MO_MDC.png',
            imageCredit: '<a href="https://mdc.mo.gov/your-property/improve-your-property/habitat-management/pond-stream-management/ponds-plant/grass"> Photo by Lance Merry, Missouri Department of Conservation</a>',
            description: '',
            location: {
                center: [-91.079,46.422],
                zoom: 6.0,
                pitch:0,
                bearing:0
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
            alignment: 'left',
            hidden: false,
            title: 'Grass Carp - confimed locations between 2010 and 2021',
            image: './images/GrassCarp_MO_MDC.png',
            imageCredit: '<a href="https://mdc.mo.gov/your-property/improve-your-property/habitat-management/pond-stream-management/ponds-plant/grass"> Photo by Lance Merry, Missouri Department of Conservation</a>',
            description: '',
            location: {
                center: [-91.079,46.422],
                zoom: 6.0,
                pitch:0,
                bearing:0
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
            imageCredit: '',
            description: '',
            location: {
                center: [-91.079,46.422],
                zoom: 6.0,
                pitch:0,
                bearing:0
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
            imageCredit: '',
            description: '',
            location: {
                center: [-91.079,46.422],
                zoom: 6.0,
                pitch:0,
                bearing:0
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
            imageCredit: '',
            description: '',
            location: {
                center: [-91.079,46.422],
                zoom: 6.0,
                pitch:0,
                bearing:0
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
            imageCredit: '',
            description: '',
            location: {
                center: [-91.079,46.422],
                zoom: 6.0,
                pitch:0,
                bearing:0
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
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Second Title',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-77.020636, 38.886900],
                zoom: 8.5,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Third Title',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [6.15116, 46.20595],
                zoom: 12.52,
                pitch: 8.01,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'Third Title',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-58.54195, -34.71600],
                zoom: 4,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
