import React from 'react'
import Layout from '../../components/Layout'
import LayoutMedia from '../../components/LayoutMedia'

export async function getServerData() {
  try {
    // const response = await fetch(`/${process.env.BASE_URL}/reviews/review-text`)
    const response = await fetch(`${process.env.GATSBY_BASE_URL}/reviews/review-text`)
    const res = await response.json()
    return {
      status: 200,
      props: res,
    }
  } catch (error) {
    console.log(error)
    return {
      status: 500,
      props: {},
    }
  }
}

export default function IndexPage({ serverData }) {
  const { data } = serverData
  return (
    <Layout type={"Header"} title={"Review Text"}>
      <LayoutMedia type="Text">
        <div className="my-6">
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
              <thead className="text-xs text-gray-700 uppercase border-b text-center">
                <tr>
                  <th scope="col" className="px-6 py-3 bg-gray-50">
                    No
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3 bg-gray-50">
                    Area
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Date
                  </th>
                  <th scope="col" className="px-6 py-3 bg-gray-50">
                    Rating
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Review
                  </th>
                </tr>
              </thead>
              <tbody>
                {
                  data.map((item, i) => (
                    <tr className="border-gray-200 " key={i}>
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 text-center">
                        {i + 1}
                      </th>
                      <td className="px-6 py-4 text-center capitalize">
                        {item.name}
                      </td>
                      <td className="px-6 py-4 text-center bg-gray-50 capitalize">
                        {item.area}
                      </td>
                      <td className="px-6 py-4 text-center capitalize">
                        {item.review_date}
                      </td>
                      <td className="px-6 py-4 text-center bg-gray-50 capitalize">
                        {item.rating}
                      </td>
                      <td className="px-6 py-4 normal-case">
                        {item.review_text}
                      </td>
                    </tr>
                  ))
                }

              </tbody>
            </table>
          </div>

        </div>
      </LayoutMedia>
    </Layout>
  )
}