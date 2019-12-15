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
                                <div className="spinner-element-1" />
                            </NthChild1>
                            <NthChild2>
                                <div className="spinner-element-2" />
                            </NthChild2>
                            <NthChild3>
                                <div className="spinner-element-3" />
                            </NthChild3>
                        </div>
                </div>
               </PulseElement>
           </SpinnerPulse>
       </div>
   );
};

export default Spinner;


