import React from 'react'
import Layout from '../../../../components/Layout'
import LayoutMedia from '../../../../components/LayoutMedia'
import getSettingMediaResolution from '../../../../utils/mediaUtils'
import CardImage from '../../../../components/CardImage'

export async function getServerData({ params }) {
  const { slug } = params
  try {
    const response = await fetch(`${process.env.GATSBY_BASE_URL}/reviews/review-combination-image/img-${slug}`)
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
  const mediaInfo = getSettingMediaResolution(`img-${slug}`)
  return (
    <Layout type={"Combination"} title={"Kombinasi Gambar"}>
      <LayoutMedia type="Kombinasi Gambar" resolution={mediaInfo.resolution}>
        <div className="my-6">
          <CardImage data={data} widthImage={mediaInfo.widthMedia} heightImage={mediaInfo.heightMedia} />
        </div>
      </LayoutMedia>
    </Layout>
  )
}
