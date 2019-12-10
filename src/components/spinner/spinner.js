import React from 'react';
import {SpinnerPulse,
        PulseElement,
        NthChild1,
        NthChild2,
        NthChild3
} from "../styled-components/spinner-styles";

const Spinner = () => {

   return (
       <div className="spinner-container">
           <SpinnerPulse>
               <PulseElement>
                <div className="spinner-pulse">
                    <div className="spinner-elements">
                            <NthChild1>
                                <div />
                            </NthChild1>
                            <NthChild2>
                                <div />
                            </NthChild2>
                            <NthChild3>
                                <div />
                            </NthChild3>
                        </div>
                </div>
               </PulseElement>
           </SpinnerPulse>
       </div>
   );
};

export default Spinner;


