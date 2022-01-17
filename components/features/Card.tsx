import SlideToggle from 'react-slide-toggle';

import React from 'react';

import { ChevronDownIcon } from '@heroicons/react/solid';

export default function Card ( props ) {
    const { title, expanded = false, adClass='' } = props;

    function preventUrl ( e ) {
        e.preventDefault();
    }

    return (
        <SlideToggle collapsed={ expanded ? false : true } >
            { ( { onToggle, setCollapsibleElement, toggleState } ) => (
                <div className="card">
                    <div className={ `card-header ${ toggleState.toLowerCase() } ${adClass}` } onClick={ onToggle } >
                        <a href="#" className={ `toggle-button ${ toggleState.toLowerCase() }` } onClick={ ( e ) => preventUrl( e ) }>
                            { title ?
                                title : ""
                            }
                        </a>
                        
                        <ChevronDownIcon className={`h-6 w-6 inline-block transform duration-700 ease ${toggleState.toLowerCase() === 'collapsed' || toggleState.toLowerCase() === 'collapsing' ? 'rotate-180' : ''}`} />
                    </div>

                    <div ref={ setCollapsibleElement }>
                        <div className="card-body py-2">
                            { props.children }
                        </div>
                    </div>
                </div>
            ) }
        </SlideToggle >
    )
}