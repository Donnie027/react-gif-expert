import { useState } from "react";
import { AddCategory, GifGrid } from "./components/";


export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState([ 'One Punch']);

    const onAddCategory = ( newCategory ) => {
        // setCategories([ ...categories, 'Fullmetal Alchemist' ]);
        // setCategories( cat => [ ...categories, 'Fullmetal Alchemist' ] );
        // setCategories([ newCategory, ...categories ]);
        if ( categories.includes(newCategory) ) return;
        setCategories([ newCategory, ...categories ]);
    }

    return (

        <>
            <h1>GifExpertApp</h1>
    
            <AddCategory 
                onNewCategory={ (value) => onAddCategory(value) }
            />
            
            { 
                categories.map( ( category ) => (
                    <GifGrid 
                        key={ category } 
                        category={ category } />
                ))
            }

        </>
    );
}
