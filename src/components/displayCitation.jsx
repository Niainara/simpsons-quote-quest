import  React  from  'react';

const  DisplayCitation = ({ citation }) => {
    return (
        <div  className="displayCitation">
            <img  src={citation.image}  alt="picture"  />
            <ul>
                <li>
                    Character : {citation.character}
                </li>
                <li>
                    Citation : {citation.quote}
                </li>
                <li>
                    Direction : {citation.characterDirection}
                </li>
            </ul>
        </div>
    );
};


export  default  DisplayCitation;