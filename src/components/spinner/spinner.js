import React from 'react';
import {
        SpinnerPulse,
        PulseElement,
        NthChild1,
        NthChild2,
        NthChild3
        } from "../styled-components/spinner-styles";

const Spinner = () => {

   return (
           <SpinnerPulse>
               <PulseElement>
                   <NthChild1 />
                   <NthChild2 />
                   <NthChild3 />
               </PulseElement>
           </SpinnerPulse>
   );
};

export default Spinner;


