import  React  from  'react';

const  GetCitation = ({ selectCitation }) => {
    return (
        <div>
        <button  onClick={selectCitation}>Get Citation</button>
        </div>
    );
};

export  default  GetCitation;