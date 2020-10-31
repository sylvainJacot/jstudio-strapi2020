import {keyframes} from "styled-components";

export const transitions = {
    basic1 : "0.3s all;",
    basic2 : " 0.6s all;",
    easeOut: "all 0.5s cubic-bezier(.17,.67,.83,.67)"
};

export const UpDown = keyframes`
  0% {
  transform: translate(-50%,-50%);
  }
  50% {
  transform: translate(-50%,-48%); 
  }
  100% {
  transform: translate(-50%,-50%);
  }
`;

export const Breathe = keyframes`
  0% {width: 60%; opacity: 70%; -moz-opacity: 70%;}
  50% {width: 80%; opacity: 100%; -moz-opacity: 100%;}
  100% {width: 60%; opacity: 70%; -moz-opacity: 70%;}
`;

export const blinking = keyframes`
  0% {
  opacity: 1;
  }
  5% {
  opacity: 0;
  }
  10% {
  opacity: 1;
  }
  20% {
  opacity: .3;
  }
  23% {
  opacity: 1;
  }
  28% {
  opacity: .2;
  }
  32% {
  opacity: 1;
  }
  35% {
  opacity: 0;
  }
 38% {
  opacity: 1;
  }
  38% {
  opacity: .8;
  }
  43% {
  opacity: 1;
  }
  70% {
  opacity: 1;
  }
  71% {
  opacity: .5;
  }
  78% {
  opacity: 1;
  }
  100% {
  opacity: 1;
  }
`;

