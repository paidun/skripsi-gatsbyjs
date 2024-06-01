// exports.createPages = function ({ actions }) {
//   const { createRedirect } = actions

//   // createRedirect({ fromPath: "/hello", toPath: "/" })
//   createRedirect({ fromPath: "/", toPath: "https://coba-gatsby.supercode.my.id/" })
//   // createRedirect({ fromPath: "/review-text", toPath: "https://coba-gatsby.supercode.my.id/review-text" })
//   // createRedirect({ fromPath: "/image/:slug", toPath: "https://coba-gatsby.supercode.my.id/image/:slug" })
//   // createRedirect({ fromPath: "/video/:slug", toPath: "https://coba-gatsby.supercode.my.id/video/:slug" })
//   // createRedirect({ fromPath: "/review-combination/image/:slug", toPath: "https://coba-gatsby.supercode.my.id/review-combination/image/:slug" })
//   // createRedirect({ fromPath: "/review-combination/video/:slug", toPath: "https://coba-gatsby.supercode.my.id/review-combination/video/:slug" })
// }

// exports.onCreatePages = ({ page, actions }) => {
//   const { createPage } = actions
//   if (page.path === `/`) {
//     page.matchPath = `/*`
//     createPage(page)
//   }
// }