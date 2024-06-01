import React from 'react'
import Layout from '../../../components/Layout'
import LayoutMedia from '../../../components/LayoutMedia'
import getSettingMediaResolution from '../../../utils/mediaUtils'

export async function getServerData({ params }) {
  const { slug } = params
  try {
    const response = await fetch(`${process.env.GATSBY_BASE_URL}/reviews/review-image/${slug}`)
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
  const mediaInfo = getSettingMediaResolution(slug)
  return (
    <Layout type={"Navbar"} title={"Gambar"}>
      <LayoutMedia type="Gambar" resolution={mediaInfo.resolution} >
        <div className="mt-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-3 gap-y-5 mt-5">
            {
              data.map((item, i) => (
                <img src={`${process.env.GATSBY_BASE_MEDIA_URL}/images/${item.path_image}`} alt="" width={mediaInfo.widthMedia} height={mediaInfo.heightMedia} key={i} />
              ))
            }
          </div>
        </div>
      </LayoutMedia>
    </Layout>
  )
}
