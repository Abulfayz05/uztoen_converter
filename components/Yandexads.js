import React from 'react'
import Script from 'next/script'

export default function Yandexads() {
  return (
    <div className='ads'> 
    <Script
      id="R-A-1979111-1"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
        window.yaContextCb.push(()=>{
          Ya.Context.AdvManager.render({
            "blockId": "R-A-1979111-1",
            "renderTo": "yandex_rtb_R-A-1979111-1"
          })
        })
        `,
      }}
    /></div>
  )
}
