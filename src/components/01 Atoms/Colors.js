export const colors = {
    Yellow : "#F9CA1C",
    Red : "#FA2A62",
    Purple : "#5B2AFA",

    Black : "#000000",
    DarkGrey : "#222222",
    DarkGrey2 : "#7D7D7D",
    LightGrey : "#C5C5C5",
    LightGrey2 : "#e8e8e8",
    White : "#F8F8F8",
    PureWhite : "#FFFFFF",


    OrangeSketch : "#EC6C00",
    PinkSass : "#D1629A",
    React : "#5ED3F3",

}

export const colorsRoles = {
    Brand01 : colors.Yellow,
    Brand02 : colors.Red,
    Brand03 : colors.Purple,
    White : colors.White,
    DarkGrey: colors.DarkGrey,
    DarkGrey2: colors.DarkGrey2,
    LightGrey : colors.LightGrey,
    LightGrey2: colors.LightGrey2,
    Black: colors.Black,

    Sketch: colors.OrangeSketch,
    Sass: colors.PinkSass,
    React: colors.React
}

export const projectColors = {
    Evergreen: "#6CCDAC",
    Samsung: "#1327a0",
    Kia : "#BB152B",
    Telenet : "#FFBA00",
    Clavie : "#205aa4",
    SoSmart : "#e31742",
    Parentreprise : "#6c3d8e",
}

export const methodoColors = {
    Sketch: colors.OrangeSketch,
    Sass: colors.PinkSass,
}

export const gradient = {
    Brand0130 : `
    background-image: linear-gradient(0deg, ${colorsRoles.Brand01} 0%, rgba(250,209,42,0.00) 100%); opacity: 30%;
    -webkit-background-image: linear-gradient(0deg, ${colorsRoles.Brand01} 0%, rgba(250,209,42,0.00) 100%); opacity: 30%;
    -moz-background-image: linear-gradient(0deg, ${colorsRoles.Brand01} 0%, rgba(250,209,42,0.00) 100%); opacity: 30%;
    -o-background-image: linear-gradient(0deg, ${colorsRoles.Brand01} 0%, rgba(250,209,42,0.00) 100%); opacity: 30%;
    `,
    Brand0230 : `
    background-image: linear-gradient(0deg, ${colorsRoles.Brand02} 0%, rgba(250,209,42,0.00) 100%); opacity: 30%;
    -webkit-background-image: linear-gradient(0deg, ${colorsRoles.Brand02} 0%, rgba(250,209,42,0.00) 100%); opacity: 30%;
    -moz-background-image: linear-gradient(0deg, ${colorsRoles.Brand02} 0%, rgba(250,209,42,0.00) 100%); opacity: 30%;
    -o-background-image: linear-gradient(0deg, ${colorsRoles.Brand02} 0%, rgba(250,209,42,0.00) 100%); opacity: 30%;
    `,
    Brand0330 : `
    background-image: linear-gradient(0deg, ${colorsRoles.Brand03} 0%, rgba(250,209,42,0.00) 100%); opacity: 30%;
    -webkit-background-image: linear-gradient(0deg, ${colorsRoles.Brand03} 0%, rgba(250,209,42,0.00) 100%); opacity: 30%;
    -moz-background-image: linear-gradient(0deg, ${colorsRoles.Brand03} 0%, rgba(250,209,42,0.00) 100%); opacity: 30%;
    -o-background-image: linear-gradient(0deg, ${colorsRoles.Brand03} 0%, rgba(250,209,42,0.00) 100%); opacity: 30%;
    `,
    DarkGrey: `
    background-image: linear-gradient(-45deg, ${colorsRoles.DarkGrey} 0%, ${colorsRoles.DarkGrey2} 100%); opacity: 50%;
    -webkit-background-image: linear-gradient(-45deg, ${colorsRoles.DarkGrey} 0%, ${colorsRoles.DarkGrey2} 100%); opacity: 50%;
    -moz-background-image: linear-gradient(-45deg, ${colorsRoles.DarkGrey} 0%, ${colorsRoles.DarkGrey2} 100%); opacity: 50%;
    -o-background-image: linear-gradient(-45deg, ${colorsRoles.DarkGrey} 0%, ${colorsRoles.DarkGrey2} 100%); opacity: 50%;
    `,
}

export  const backgrounds = {
    RadialBg01 : `
    background-image: radial-gradient(closest-side, ${colors.PureWhite} 0%, rgba(255,255,255,0.00) 100%); opacity 30%;
    -webkit-background-image: radial-gradient(closest-side, ${colors.PureWhite} 0%, rgba(255,255,255,0.00) 100%); opacity 30%;
    -moz-background-image: radial-gradient(closest-side, ${colors.PureWhite} 0%, rgba(255,255,255,0.00) 100%); opacity 30%;
    -o-background-image: radial-gradient(closest-side, ${colors.PureWhite} 0%, rgba(255,255,255,0.00) 100%); opacity 30%;
    `,
    RadialBg02 : `
    background-image: radial-gradient(closest-side, ${colors.Black} 0%, rgba(45,57,43,0.00) 100%); opacity 100%;
    -webkit-background-image: radial-gradient(closest-side, ${colors.Black} 0%, rgba(45,57,43,0.00) 100%); opacity 100%;
    -moz-background-image: radial-gradient(closest-side, ${colors.Black} 0%, rgba(45,57,43,0.00) 100%); opacity 100%
    -o-background-image: radial-gradient(closest-side, ${colors.Black} 0%, rgba(45,57,43,0.00) 100%); opacity 100%;
    `,
    RadialBg02Transparent : `
    background-image: radial-gradient(closest-side, ${colors.Black} 0%, rgba(45,57,43,0.00) 100%); opacity 0%;
    -webkit-background-image: radial-gradient(closest-side, ${colors.Black} 0%, rgba(45,57,43,0.00) 100%); opacity 0%;
    -moz-background-image: radial-gradient(closest-side, ${colors.Black} 0%, rgba(45,57,43,0.00) 100%); opacity 0%;
    -o-background-image: radial-gradient(closest-side, ${colors.Black} 0%, rgba(45,57,43,0.00) 100%); opacity 0%;
    `,
}






