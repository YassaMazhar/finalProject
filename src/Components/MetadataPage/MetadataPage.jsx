import React from 'react'

export default function MetadataPage({title = "Default Title" , description = "Default description"}) {
  return <>
    <title>{title}</title>
    <meta name="description" content={description} />
    
  </>
}
