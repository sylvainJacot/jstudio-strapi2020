import React from "react";
import styled from "styled-components";
import { colorsRoles } from "../../01 Atoms/Colors";


const CodeSandBoxProject = (props) => {


    return <>
<Container>
<iframe src="https://codesandbox.io/embed/jolly-jackson-5efob?fontsize=14&hidenavigation=1&theme=light&view=preview"
     Style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="Scroll Animation Gsap ScrollTrigger"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
</Container>
    </>

};

export default CodeSandBoxProject;

export const Container = styled.div`
padding: 80px 0;
background-color: ${colorsRoles.White};
`;