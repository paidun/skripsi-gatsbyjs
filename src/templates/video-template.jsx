import React from 'react'
import Layout from '../components/Layout'
import LayoutMedia from '../components/LayoutMedia'
import getSettingMediaResolution from '../utils/mediaUtils'


export async function getServerData({ pageContext }) {
  const { slug } = pageContext
  try {
    const response = await fetch(`${process.env.GATSBY_BASE_URL}/reviews/review-video/${slug}`)
    const res = await response.json()
    return {
      status: 200,
      props: res,
      slug
    }
  } catch (error) {
    console.log(error)
    return {
      status: 500,
      props: {},
    }
  }
}

export default function IndexPage({ serverData, pageContext }) {
  const { slug } = pageContext
  const { data } = serverData
  const mediaInfo = getSettingMediaResolution(slug)
  const posterVideo = `poster-${mediaInfo.resolution}.png`;
  return (
    <Layout type={"Navbar"} title={"Video"}>
      <LayoutMedia type="Video" resolution={mediaInfo.resolution} >
        <div className="mt-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-3 gap-y-5 mt-5">
            {
              data.map((item, i) => (
                <video className="rounded-sm aspect-video object-fill" width={mediaInfo.widthMedia} height={mediaInfo.heightMedia} controls muted key={i + 1} preload="none"
                  poster={`${process.env.GATSBY_BASE_MEDIA_URL}/videos/${posterVideo}`}>
                  <source src={`${process.env.GATSBY_BASE_URL}/videos/${item.path_video}`} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ))
            }
          </div>
        </div>
      </LayoutMedia>
    </Layout>
  )
}
