import React from "react";
import '../PreLoadingPage/loadingStyle.scss';

function PreLoadingPage() {
    return (
        <div className='loding-block'><div className="lds-circle"><div></div></div><div>Loading</div></div>
    )
}

export default PreLoadingPage;