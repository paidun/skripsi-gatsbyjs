import React from 'react'
import Layout from '../../../../components/Layout'
import LayoutMedia from '../../../../components/LayoutMedia'
import getSettingMediaResolution from '../../../../utils/mediaUtils'
import CardVideo from '../../../../components/CardVideo'

export async function getServerData({ params }) {
  const { slug } = params
  try {
    const response = await fetch(`${process.env.GATSBY_BASE_URL}/reviews/review-combination-video/vid-${slug}`)
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

export default function IndexPage({ serverData, slug }) {
  const { data } = serverData
  const mediaInfo = getSettingMediaResolution(`vid-${slug}`)
  const posterVideo = `poster-${mediaInfo.resolution}.png`;
  return (
    <Layout type={"Combination"} title={"Kombinasi Video"}>
      <LayoutMedia type="Kombinasi Video" resolution={mediaInfo.resolution}>
        <div className="my-6">
          <CardVideo data={data} widthImage={mediaInfo.widthMedia} heightImage={mediaInfo.heightMedia} posterVideo={posterVideo} />
        </div>
      </LayoutMedia>
    </Layout>
  )
}
