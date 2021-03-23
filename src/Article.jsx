import React, {useState} from 'react';
import LikeButton from './LikeButton'

const Article =(props) =>{
    const [isPublished, toggulePublished] = useState(false);

    return(
        <div>
            <h2>{props.title}</h2>
            <label htmlFor="check">公開状態</label>
            <input type="checkbox" 
            checked ={isPublished} 
            id="check" 
            onClick={()=>toggulePublished(!isPublished)}
            />
            <LikeButton 
            count ={props.count}
            />
        </div>
    )
};

export default Article;