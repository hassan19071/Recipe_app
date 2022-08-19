import React from 'react';
import "../css/loading.scss";

const Loading = () => {
    return ( 
        <div className="loading">
            <div className="spinner-border m-auto" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
        </div>
     );
}
 
export default Loading;