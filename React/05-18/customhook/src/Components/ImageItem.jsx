import React from 'react'

export default function ImageItem({ img }) {
    // console.log(img)
    return (
        <img alt='' src={img.download_url} style={{ width: 300, height: 250 }} />
    )
}
