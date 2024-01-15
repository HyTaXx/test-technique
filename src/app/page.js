'use client';
import { useEffect, useState } from 'react';
import { builder } from '@builder.io/sdk';

export default function Home ()
{
    const [ articles, setArticles ] = useState( [] );

    useEffect( () =>
    {
        builder.init( '6e139f4f71454a88b3f01ee85b1a35b5' );
        builder.get( 'articles' ).promise()
            .then( ( response ) =>
            {
                setArticles( response.data.articles );
                console.log( response.data.articles );
            } )
            .catch( ( error ) =>
            {
                console.error( error );
            } );
    }, [] );
    if ( !Array.isArray( articles ) )
    {
        return null; // or return a loading spinner, etc.
    }

    return (
        <main className="min-h-[100vh] bg-white">
            <h1>Home</h1>
            <div className='flex flex-wrap justify-center align-middle gap-[20px]'>
                { articles.map( ( articleItem, index ) => (
                    <div key={ articleItem.article.title } className='w-[500px] border border-black rounded-lg p-8 flex flex-col gap-2'>
                        <h1 className='font-bold'>{ articleItem.article.title }</h1>
                        <p>{ articleItem.article.description }</p>
                    </div>
                ) ) }
            </div>
        </main>
    );
}