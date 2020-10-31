import React from "react";

import {colorsRoles, gradient, projectColors, colors} from "./Colors";
import {EvergreenProject, SkillsAnimals, SamsungProject, KiaProject, TelenetProject} from "./Images-UXUI";
import {ClavieProject, ParentrepriseProject, SoSmartProject} from "../01 Atoms/Images-Developer";
import {
    Sketch,
    RawSketch,
    AtomicDesign,
    Invision,
    StyledComponents,
    ReactJs,
    PixelPerfect,
    Zeplin,
    Trello,
    Agile,
    Html5,
    Sass,
    SamsungGuidelines,
    Photoshop,
    ResponsiveDesign,
    Git,
    Bootsrap,
    CSS3,
    Javascript, CoffeeBreak, Streching, LightRoom, GraphicTablet, CrossBrowsersTesting
} from "./Icons-Methodo";
import {
    AlmahaProject,
    EatBxlProject,
    MercoProject,
    PrimeMinisterProject,
    TheHotelProject,
    WTFPorject
} from "./Images-Retoucher";

export const pathuiux = "/ux-ui-designer";
export const pathdev = "/creative-developer";
export const pathphoto = "/photo-retoucher";
export const pathabout = "/about";

const  UXUIDesigner
    = (
    <>
        UX/UI
        <br />
        Designer
    </>
);
const CreativeDev = (
    <>
        Creative
        <br />
        Developer
    </>
);
const PhotoRetoucher = (
    <>
        Photo
        <br />
        Retoucher
    </>
);

export const videoportrait = "videoportrait : true";
export const videolandscape = "videolandscape : true";
export const carre = "carre : true";
export const rectanglelandscape = "rectanglelandscape : true";
export const rectangleportrait = "rectangleportrait : true";
export const bigPicture = "bigPicture: true";
export const fullheight = "fullheight:true";
export const fullwidth = "fullwidth:true";


export const Skills =  [
    {
        titleNav: UXUIDesigner,
        mainTitle: "UX/UI Designer",
        quote: '" I understand the perfect user interface should look good and work even better. "',
        altMainImg: "Parrot with human body",
        srcMainImg: SkillsAnimals.Parrot,
        mainColor: colorsRoles.Brand01,
        mainGradient: gradient.Brand0130,
        labelCTA: "Learn more",
        pathname: pathuiux,

    },
    {
        titleNav: CreativeDev,
        mainTitle: "Creative Developer",
        quote: '"I understand the scope, requirements, and technical restraints of the project I am currently working on."',
        altMainImg: "Fox with human body",
        srcMainImg: SkillsAnimals.Fox,
        mainColor: colorsRoles.Brand02,
        mainGradient: gradient.Brand0230,
        labelCTA: "Learn more",
        pathname: pathdev,
    },
    {
        titleNav: PhotoRetoucher,
        mainTitle: "Photo Retoucher",
        quote: "I understand that quality is not just about the retouching itself but also about the added value of service that you provide",
        altMainImg: "Horse with human body",
        srcMainImg: SkillsAnimals.Horse,
        mainColor: colorsRoles.Brand03,
        mainGradient: gradient.Brand0330,
        labelCTA: "Learn more",
        pathname: pathphoto,
    },

]

export const MainMethodoUXUI = [
    Streching,
    RawSketch,
    Sketch,
    PixelPerfect,
    AtomicDesign,
    Invision,
    Zeplin,
    CoffeeBreak,
]
export const MainMethodoDeveloper = [
    Streching,
    ReactJs,
    StyledComponents,
    ResponsiveDesign,
    CrossBrowsersTesting,
    Git,
    CoffeeBreak,
]
export const MainMethodoRetoucher = [
    LightRoom,
    Photoshop,
    GraphicTablet,
]


export const UIUXProjects = [
    {
        title: "Evergreen",
        skill: "UX/UI Designer",
        fields: "UI Design • Prototyping • Html/CSS",
        description: "Evergreen Garden Care is the leading garden care company outside North America, producing high quality garden care products designed to help people create their own green oasis amid the rush of modern life.",
        roles: [
            {
                titlerole: "Team",
                descriptionrole:"6 people",
            },
            {
                titlerole: "Role",
                descriptionrole:"Design the entire platform based on the wireframes provided. Implement atomic components (html/css)",
            },
            {
                titlerole: "Time",
                descriptionrole:"Around 4 months",
            },
        ],
        slug: "Evergreen",
        headerImage: EvergreenProject.HeaderEvergreen,
        decorativeimage: EvergreenProject.DecoEvergreen,
        maincolor: projectColors.Evergreen,
        FieldTextColorVisible: projectColors.Evergreen,
        backgroundpicture: EvergreenProject.EvergreenFirst,
        foregroundpicture: EvergreenProject.Leaves,
        methodology: [
            Trello,
            AtomicDesign,
            Sketch,
            Agile,
            Invision,
            Html5,
            Sass,
        ],
        images: [
            {
                srcDesktop: EvergreenProject.EvergreenFolioDesktop,
                srcMobile: EvergreenProject.EvergreenFolioMobile,
                altImg: "Evergreen project portfolio",
                bgColor: colors.PureWhite,
            },
        ]

    },
    {
        title: "Samsung",
        skill: "UX/UI Designer",
        fields: "UI Design • Prototyping",
        description: "Samsung is a South Korean electronics company which sells televisions, household appliances and perhaps most notably, mobile devices.",
        roles: [
            {
                titlerole: "Team",
                descriptionrole:"4 people",
            },
            {
                titlerole: "Role",
                descriptionrole:"The Samsung Members app have got some updates and wants to inform the clients via its website. Plus, retain the audience via monthly newsletters. I had to Keep consistency and design regarding all technical contraints (Samsung guidelines)",
            },
            {
                titlerole: "Time",
                descriptionrole:"Around 3 months",
            },
        ],
        slug: "Samsung",
        headerImage: SamsungProject.SamsungHeader,
        decorativeimage: SamsungProject.SamsungDeco,
        maincolor: projectColors.Samsung,
        backgroundpicture: SamsungProject.Samsungfirst,
        foregroundpicture: SamsungProject.SamsungStar,
        FieldTextColorVisible: colorsRoles.White,
        methodology: [
            SamsungGuidelines,
            AtomicDesign,
            PixelPerfect,
            Sketch,
            Agile,
            Invision,
        ],
        images: [
            {
                srcDesktop: SamsungProject.SamsungFolio01,
                srcMobile: SamsungProject.SamsungFolioMobile01,
                altImg: "Samsung project portfolio 1",
                bgColor: colors.PureWhite,
            },
            {
                srcDesktop: SamsungProject.SamsungFolio02,
                srcMobile: SamsungProject.SamsungFolioMobile02,
                altImg: "Samsung project portfolio 2",
                bgColor: colors.PureWhite,
            },
            {
                srcDesktop: SamsungProject.SamsungFolio03,
                srcMobile: SamsungProject.SamsungFolioMobile03,
                altImg: "Samsung project portfolio 3",
                bgColor: colors.PureWhite,
            },
        ]

    },
    {
        title: "Kia",
        skill: "UX/UI Designer",
        fields: "UI Design • Photo Retouching",
        description: "Kia Motors Corporation is a South Korean multinational automotive manufacturer headquartered in Seoul. ",
        roles: [
            {
                titlerole: "Team",
                descriptionrole:"3 people",
            },
            {
                titlerole: "Role",
                descriptionrole:"I had to create/imagine a landing page and advertising posters for the promotion of the new Kia SUV's. I had to retouch the car's pictures as well ",
            },
            {
                titlerole: "Time",
                descriptionrole:"Around 1 week",
            },
        ],
        slug: "Kia",
        headerImage: KiaProject.KiaHeader,
        decorativeimage: KiaProject.KiaDeco,
        maincolor: projectColors.Kia,
        backgroundpicture: KiaProject.KiaFirst,
        foregroundpicture: KiaProject.KiaWheel,
        FieldTextColorVisible: projectColors.Kia,
        methodology: [
            Trello,
            Photoshop,
            Sketch,
            PixelPerfect,
            Agile,
            Invision,
            Zeplin,
        ],
        images: [
            {
                srcDesktop: KiaProject.KiaFolio01,
                srcMobile: KiaProject.KiaFolio01,
                altImg: "Kia project portfolio 1",
                bgColor: colors.PureWhite,
            },
            {
                srcDesktop: KiaProject.KiaFolio02,
                srcMobile: KiaProject.KiaFolio02,
                altImg: "Kia project portfolio 2",
                bgColor: colors.PureWhite,
            },
            {
                srcDesktop: KiaProject.KiaFolio03,
                srcMobile: KiaProject.KiaFolio03,
                altImg: "Kia project portfolio 3",
                bgColor: colors.PureWhite,
            },
        ]

    },
    {
        title: "Telenet",
        skill: "UX/UI Designer",
        fields: "UX/UI Design • Prototyping",
        description: " Telenet specialises in the supply of broadband internet, fixed and mobile telephony services and cable television to customers throughout Flanders and Brussels over a powerful HFC (hybrid fibre-coax) network",
        roles: [
            {
                titlerole: "Team",
                descriptionrole:"2 people",
            },
            {
                titlerole: "Role",
                descriptionrole:"Create an interface in order to present the concept of the Digicovers (custom adhesive sheets that cover client's Digicorder). And create the home page in order to promote the \"Signal switch\".",
            },
            {
                titlerole: "Time",
                descriptionrole:"Around 3 weeks",
            },
        ],
        slug: "Telenet",
        headerImage: TelenetProject.TelenetHeader,
        decorativeimage:  TelenetProject.TelenetDeco,
        maincolor: projectColors.Telenet,
        backgroundpicture:  TelenetProject.Telenetfirst,
        foregroundpicture:  TelenetProject.TelenetSignal,
        FieldTextColorVisible: projectColors.Telenet,
        methodology: [
            Sketch,
            PixelPerfect,
            Agile,
            Invision,
            Zeplin,
        ],
        images: [
            {
                srcDesktop: TelenetProject.TelenetFolio01,
                srcMobile: TelenetProject.TelenetFolio01,
                altImg: "Telenet project portfolio 1",
                bgColor: colors.PureWhite,
            },
            {
                srcDesktop: TelenetProject.TelenetFolio02,
                srcMobile: TelenetProject.TelenetFolio02,
                altImg: "Telenet project portfolio 3",
                bgColor: colors.PureWhite,
            },
            {
                srcDesktop: TelenetProject.TelenetFolio03,
                srcMobile: TelenetProject.TelenetFolio03,
                altImg: "Telenet project portfolio 3",
                bgColor: colors.PureWhite,
            },
            {
                srcDesktop: TelenetProject.TelenetFolio04,
                srcMobile: TelenetProject.TelenetFolio04,
                altImg: "Telenet project portfolio 1",
                bgColor: colors.PureWhite,
            },

        ]

    },



]

export const CreativeDeveloperProjects = [
    {
        title: "Clavie",
        skill: "Creative Developer",
        fields: "Integration HTML/CSS",
        description: "Active for more than 40 years in the packaging sector, the CLAVIE company has developed a professional approach in the solution of packaging problems.",
        madeWith: [
            Html5,
            Sass,
            Javascript
        ],
        roles: [
            {
                titlerole: "Team",
                descriptionrole:"3 people",
            },
            {
                titlerole: "Role",
                descriptionrole:"(re)-Design of the website and implementation with in html/css/js",
            },
            {
                titlerole: "Website",
                descriptionrole:"www.clavie.be",
            },
        ],
        slug: "Clavie",
        headerImage: ClavieProject.ClavieHeader,
        decorativeimage: ClavieProject.ClavieDecorative,
        maincolor: projectColors.Clavie,
        FieldTextColorVisible: projectColors.Clavie,
        thumbnailproject : ClavieProject.ClavieThumbnail,
        methodology: [
            Sketch,
            Html5,
            Sass,
            Javascript,
            Bootsrap,
            Git,
        ],
        images: [
            {
                srcDesktop: ClavieProject.ClavieFolio01,
                srcMobile: ClavieProject.ClavieFolio01,
                altImg: "Clavie project portfolio",
                bgColor: colors.PureWhite,
            },
            {
                srcDesktop: ClavieProject.ClavieFolio02,
                srcMobile: ClavieProject.ClavieFolio02,
                altImg: "Clavie project portfolio",
                bgColor: colors.PureWhite,
            },
        ]

    },
    {
        title: "SoSmart",
        skill: "Creative Developer",
        fields: "Integration HTML/CSS",
        description: "So Smart is an online marketplace for booking hairdressing, aesthetic and well-being services under strong promotion during off-peak hours or at the last minute.\n",
        madeWith: [
            Html5,
            CSS3
        ],
        roles: [
            {
                titlerole: "Team",
                descriptionrole:"3 people",
            },
            {
                titlerole: "Role",
                descriptionrole:"Design the entire platform based on the wireframes provided. Integration of the website (html/css)",
            },
            {
                titlerole: "Website",
                descriptionrole:"www.so-smart.be",
            },
        ],
        slug: "SoSmart",
        headerImage: SoSmartProject.SoSmartHeader,
        decorativeimage: SoSmartProject.SoSmartDeco,
        maincolor: projectColors.SoSmart,
        FieldTextColorVisible: projectColors.Evergreen,
        thumbnailproject : SoSmartProject.SoSmartThumbnail,
        methodology: [
            Sketch,
            Html5,
            CSS3,
            Git
        ],
        images: [
            {
                srcDesktop: SoSmartProject.SoSmartFolio01,
                srcMobile: SoSmartProject.SoSmartFolio01,
                altImg: "So smart project portfolio",
                bgColor: colors.PureWhite,
            },
        ]

    },
    {
        title: "Parentreprise",
        skill: "Creative Developer",
        fields: "Integration HTML/CSS",
        description: "Parentreprise work on employee satisfaction with effective, new and original methods.Work for fulfillment and promote change in employees in all spheres of life.",
        madeWith: [
            Html5,
            Sass,
            Javascript
        ],
        roles: [
            {
                titlerole: "Team",
                descriptionrole:"3 people",
            },
            {
                titlerole: "Role",
                descriptionrole:"Design the entire platform based on the wireframes provided. Integration of the website (html/css)",
            },
            {
                titlerole: "Website",
                descriptionrole:"www.parentreprise.be",
            },
        ],
        slug: "Parentreprise",
        headerImage: ParentrepriseProject.ParentrepriseHeader,
        decorativeimage: ParentrepriseProject.ParentrepriseDeco,
        maincolor: projectColors.Parentreprise,
        FieldTextColorVisible: projectColors.Evergreen,
        thumbnailproject : ParentrepriseProject.ParentrepriseThumbnail,
        methodology: [
            Sketch,
            Html5,
            CSS3,
            Git
        ],
        images: [
            {
                srcDesktop: ParentrepriseProject.ParentrepriseFolio01,
                srcMobile: ParentrepriseProject.ParentrepriseFolio01,
                altImg: "Parentreprise project portfolio",
                bgColor: colors.PureWhite,
            },
        ]

    },


]

export const PhotoRetoucherProjects = [
    {
        title: "Eat Brussels Festival",
        skill: "Photo Retoucher",
        slug: "EatBrusselsFestival",
        description: "The Eat Brussels Festival promote great names in Brussels gastronomy",
        thumbnailproject : EatBxlProject.EatBXLBThumbnail,
        roles: [
            {
                titlerole: "Role",
                descriptionrole:"Post-production",
            },
            {
                titlerole: "Pictures",
                descriptionrole:"FredSablon",
            },
            {
                titlerole: "Client",
                descriptionrole:"www.eat.brussels/fr",
            },
        ],
        headerImage: EatBxlProject.EatBXlDeco,
        images: [
            {
                src: EatBxlProject.EatBXLBeforeAfter,
                altImg: "Eat Brussels Festival picture portfolio",
                bigPicture,
                rectanglelandscape,
                fullwidth,
            },
            {
                src: EatBxlProject.EatBXLPict02,
                altImg: "Eat Brussels Festival picture portfolio",
                rectangleportrait,
                fullheight,
            },
            {
                src: EatBxlProject.EatBXLPict03,
                altImg: "Eat Brussels Festival picture portfolio",
                rectangleportrait,
                fullheight
            },
            {
                src: EatBxlProject.EatBXLPict04,
                altImg: "Eat Brussels Festival picture portfolio",
                rectangleportrait,
                fullheight
            },
            {
                src: EatBxlProject.EatBXLPict05,
                altImg: "Eat Brussels Festival picture portfolio",
                rectangleportrait,
                fullheight
            },{
                src: EatBxlProject.EatBXLPict06,
                altImg: "Eat Brussels Festival picture portfolio",
                rectangleportrait,
                fullheight
            },{
                src: EatBxlProject.EatBXLPict07,
                altImg: "Eat Brussels Festival picture portfolio",
                rectangleportrait,
                fullheight
            },{
                src: EatBxlProject.EatBXLPict08,
                altImg: "Eat Brussels Festival picture portfolio",
                rectangleportrait,
                fullheight
            },
            {
                src: EatBxlProject.EatBXLPict09,
                altImg: "Eat Brussels Festival picture portfolio",
                rectangleportrait,
                fullheight
            },
            {
                src: EatBxlProject.EatBXLPict10,
                altImg: "Eat Brussels Festival picture portfolio",
                rectangleportrait,
                fullheight
            },




        ]
    },
    {
        title: "Belgian Prime Minister",
        skill: "Photo Retoucher",
        slug: "PrimeMinister",
        description: "Charles Michel is a Belgian politician who was Prime Minister of Belgium between 2014-2019",
        thumbnailproject : PrimeMinisterProject.PrimeMinisterMainThumbnail,
        roles: [
            {
                titlerole: "Role",
                descriptionrole:"Post-production",
            },
            {
                titlerole: "Pictures",
                descriptionrole:"FredSablon",
            },
            {
                titlerole: "Client",
                descriptionrole:"Charles Michel",
            },
        ],
        headerImage: PrimeMinisterProject.PrimeMinisterMainDeco,
        images: [
            {
                src: PrimeMinisterProject.PrimeMinisterMainBeforeAfter,
                altImg: "Prime Minister Charles Michel picture portfolio",
                bigPicture,
                rectanglelandscape,
                fullheight,
            },
            {
                src: PrimeMinisterProject.PrimeMinisterMainPicture,
                altImg: "Prime Minister Charles Michel picture portfolio",
                bigPicture,
                rectanglelandscape,
                fullheight,
            },
            {
                src: PrimeMinisterProject.PrimeMinisterMainFolio01,
                altImg: "Prime Minister Charles Michel picture portfolio",
                rectangleportrait,
                fullheight,
            },
            {
                src: PrimeMinisterProject.PrimeMinisterMainFolio02,
                altImg: "Prime Minister Charles Michel picture portfolio",
                rectangleportrait,
                fullheight,
            },


        ]
    },
    {
        title: "Mercedes",
        skill: "Photo Retoucher",
        slug: "Mercedes",
        description: "Mercedes car dealership",
        thumbnailproject : MercoProject.MercoThumbnail,
        roles: [
            {
                titlerole: "Role",
                descriptionrole:"Post-production",
            },
            {
                titlerole: "Pictures",
                descriptionrole:"FredSablon",
            },
            {
                titlerole: "Client",
                descriptionrole:"www.mannes.be",
            },
        ],
        headerImage: MercoProject.MercoDeco,
        images: [
            {
                src: MercoProject.MercoMain,
                altImg: "Mercedes Manes picture portfolio",
                bigPicture,
                rectanglelandscape,
                fullheight,
            },
            {
                src: MercoProject.MercoBA,
                altImg: "Mercedes Manes picture portfolio",
                bigPicture,
                rectanglelandscape,
                fullheight,
            },
            {
                src: MercoProject.MercoFolio01,
                altImg: "Mercedes Manes picture portfolio",
                rectangleportrait,
                fullheight,
            },
            {
                src: MercoProject.MercoFolio02,
                altImg: "Mercedes Manes picture portfolio",
                rectangleportrait,
                fullheight,
            },

        ]
    },
    {
        title: "Almaha Marrakech",
        skill: "Photo Retoucher",
        slug: "Almaha Marrakech hotel in Morocco",
        description: "Almaha Marrakech",
        thumbnailproject : AlmahaProject.AlmahaThumbnail,
        roles: [
            {
                titlerole: "Role",
                descriptionrole:"Post-production",
            },
            {
                titlerole: "Pictures",
                descriptionrole:"FredSablon",
            },
            {
                titlerole: "Client",
                descriptionrole:"www.almahamarrakech.fr",
            },
        ],
        headerImage: AlmahaProject.AlmahaDeco,
        images: [
            {
                src: AlmahaProject.AlmahaFolio02,
                altImg: "Almaha Marrakech Hotel picture portfolio",
                rectanglelandscape,
                fullheight,
            },
            {
                src: AlmahaProject.AlmahaFolio03,
                altImg: "Almaha Marrakech Hotel picture portfolio",
                rectanglelandscape,
                fullheight,
            },
            {
                src: AlmahaProject.AlmahaFolio04,
                altImg: "Almaha Marrakech Hotel picture portfolio",
                rectanglelandscape,
                fullheight,
            },
            {
                src: AlmahaProject.AlmahaFolio05,
                altImg: "Almaha Marrakech Hotel picture portfolio",
                rectanglelandscape,
                fullheight,
            },
            {
                src: AlmahaProject.AlmahaFolio06,
                altImg: "Almaha Marrakech Hotel picture portfolio",
                rectanglelandscape,
                fullheight,
            },
            {
                src: AlmahaProject.AlmahaFolio07,
                altImg: "Almaha Marrakech Hotel picture portfolio",
                rectanglelandscape,
                fullheight,
            },
            {
                src: AlmahaProject.AlmahaFolio08,
                altImg: "Almaha Marrakech Hotel picture portfolio",
                rectanglelandscape,
                fullheight,
            },
            {
                src: AlmahaProject.AlmahaFolio09,
                altImg: "Almaha Marrakech Hotel picture portfolio",
                rectanglelandscape,
                fullheight,
            },            {
                src: AlmahaProject.AlmahaFolio10,
                altImg: "Almaha Marrakech Hotel picture portfolio",
                rectanglelandscape,
                fullheight,
            },
            {
                src: AlmahaProject.AlmahaFolio01,
                altImg: "Almaha Marrakech Hotel picture portfolio",
                rectangleportrait,
                fullheight,
            },

        ]
    },
    {
        title: "What the fun",
        skill: "Photo Retoucher",
        slug: "whatthefun",
        description: "What the Fun, a Stand up comedy club",
        thumbnailproject : WTFPorject.WTFThumbnail,
        roles: [
            {
                titlerole: "Role",
                descriptionrole:"Photograph & Post-production",
            },
            {
                titlerole: "Pictures",
                descriptionrole:"Jacot Sylvain",
            },
            {
                titlerole: "Client",
                descriptionrole:"www.whatthefun.be",
            },
        ],
        headerImage: WTFPorject.WTFDeco,
        images: [
            {
                src: WTFPorject.WTFFolio01,
                altImg: "What the fun picture portfolio",
                bigPicture,
                rectangleportrait,
                fullheight,
            },
            {
                src: WTFPorject.WTFFolio02,
                altImg: "What the fun picture portfolio",
                bigPicture,
                carre,
                fullheight,
            },
            {
                src: WTFPorject.WTFFolio03,
                altImg: "What the fun picture portfolio",
                rectanglelandscape,
                fullheight,
            },
            {
                src: WTFPorject.WTFFolio04,
                altImg: "What the fun picture portfolio",
                rectanglelandscape,
                fullheight,
            },
            {
                src: WTFPorject.WTFFolio05,
                altImg: "What the fun picture portfolio",
                rectanglelandscape,
            },
            {
                src: WTFPorject.WTFFolio06,
                altImg: "What the fun picture portfolio",
                rectanglelandscape,
                fullheight,
            },
            {
                src: WTFPorject.WTFFolio07,
                altImg: "What the fun picture portfolio",
                rectanglelandscape,
                fullheight,
            },
            {
                src: WTFPorject.WTFFolio08,
                altImg: "What the fun picture portfolio",
                rectanglelandscape,
            },
            {
                src: WTFPorject.WTFFolio09,
                altImg: "What the fun picture portfolio",
                rectanglelandscape,
                fullheight,
            },
            {
                src: WTFPorject.WTFFolio10,
                altImg: "What the fun picture portfolio",
                rectanglelandscape,
                fullheight,
            },
            {
                src: WTFPorject.WTFFolio11,
                altImg: "What the fun picture portfolio",
                rectanglelandscape,
                fullheight,
            },
            {
                src: WTFPorject.WTFFolio12,
                altImg: "What the fun picture portfolio",
                rectanglelandscape,
                fullheight,
            },


        ]
    },
    {
        title: "The Hotel",
        skill: "Photo Retoucher",
        slug: "thehotel",
        description: "Hotel in the city center of Brussels",
        thumbnailproject : TheHotelProject.TheHotelThumbnail,
        roles: [
            {
                titlerole: "Role",
                descriptionrole:"Post-production",
            },
            {
                titlerole: "Pictures",
                descriptionrole:"FredSablon",
            },
            {
                titlerole: "Client",
                descriptionrole:"www.thehotel-brussels.be/",
            },
        ],
        headerImage: TheHotelProject.TheHotelDeco,
        images: [
            {
                src: TheHotelProject.TheHotelFolio01,
                altImg: "The Hotel picture portfolio",
                bigPicture,
                carre,
                fullheight,
            },
            {
                src: TheHotelProject.TheHotelFolio02,
                altImg: "The Hotel picture portfolio",
                videolandscape,
                fullheight,
            },
            {
                src: TheHotelProject.TheHotelFolio03,
                altImg: "The Hotel picture portfolio",
                videolandscape,
                fullheight,
            },
            {
                src: TheHotelProject.TheHotelFolio04,
                altImg: "The Hotel picture portfolio",
                videolandscape,
                fullheight,
            },
            {
                src: TheHotelProject.TheHotelFolio05,
                altImg: "The Hotel picture portfolio",
                videolandscape,
                fullheight,
            },
            {
                src: TheHotelProject.TheHotelFolio06,
                altImg: "The Hotel picture portfolio",
                videolandscape,
                fullheight,
            },
            {
                src: TheHotelProject.TheHotelFolio07,
                altImg: "The Hotel picture portfolio",
                videolandscape,
                fullheight,
            },
            {
                src: TheHotelProject.TheHotelFolio08,
                altImg: "The Hotel picture portfolio",
                videolandscape,
                fullheight,
            }

        ]
    },
  
]





