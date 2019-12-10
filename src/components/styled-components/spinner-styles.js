import styled, {keyframes} from "styled-components";

export const SpinnerPulse  = styled.div `
                width: 200px;
                height: 200px;
                display: inline-block;
                overflow: hidden;
                background: #ffffff;
                margin-left: 26em;
        `;
const SpinnerElements1 = keyframes`
    0% { top: 39.199999999999996px; height: 121.60000000000001px }
    50% { top: 62px; height: 76px }
    100% { top: 62px; height: 76px }
`;
const SpinnerElements2 = keyframes`
    0% { top: 44.89999999999999px; height: 110.20000000000002px }
    50% { top: 62px; height: 76px }
    100% { top: 62px; height: 76px }
`;
const SpinnerElements3 = keyframes`
    0% { top: 50.6px; height: 98.8px }
    50% { top: 62px; height: 76px }
    100% { top: 62px; height: 76px }
`;
export const PulseElement = styled.div`
        width: 100%;
        height: 100%;
        position: relative;
        transform: translateZ(0) scale(1);
        backface-visibility: hidden;
        transform-origin: 0 0;
    `;
export const NthChild1 = styled.div `
         position: absolute; 
         width: 28px;
         box-sizing: content-box;
         left: 36px;
         background: #353535;
         animation: ${SpinnerElements1} 1s cubic-bezier(0,0.5,0.5,1) infinite;
         animation-delay: -0.2s
    `;
export const NthChild2 = styled.div `
          position: absolute; 
          width: 28px;
          box-sizing: content-box;
          left: 86px;
          background: #666666;
          animation: ${SpinnerElements2} 1s cubic-bezier(0,0.5,0.5,1) infinite;
          animation-delay: -0.1s
    `;
export const NthChild3 = styled.div `
           position: absolute; 
           width: 28px;
           box-sizing: content-box;
           left: 136px;
           background: #9b9b9b;
           animation: ${SpinnerElements3} 1s cubic-bezier(0,0.5,0.5,1) infinite;
           animation-delay: initial;
    `;