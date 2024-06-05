const { graphql } = require("gatsby");
const path = require('path')


exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  createPage({
    path: `/review-text`,
    component: path.resolve(`./src/templates/text-template.jsx`),
  });

  // Halaman Image 
  const imageSlugs = ['img-480p', 'img-720p', 'img-1080p', 'img-2k', 'img-4k']
  imageSlugs.forEach((slug) => {
    createPage({
      path: `/image/${slug}`,
      component: path.resolve(`./src/templates/image-template.jsx`),
      context: {
        slug: slug
      },
    });
  });

  // Halaman Video
  const videoSlugs = ['vid-480p', 'vid-720p', 'vid-1080p', 'vid-2k', 'vid-4k']
  videoSlugs.forEach((slug) => {
    createPage({
      path: `/video/${slug}`,
      component: path.resolve(`./src/templates/video-template.jsx`),
      context: {
        slug: slug
      },
    });
  });

  const allSlugsCombination = ['480p', '720p', '1080p', '2k', '4k']
  // Halaman Kombinasi gambar
  allSlugsCombination.forEach((slug) => {
    createPage({
      path: `/review-combination/image/${slug}`,
      component: path.resolve('./src/templates/image-combination-template.jsx'),
      context: {
        slug: slug
      }
    })
  })
  allSlugsCombination.forEach((slug) => {
    createPage({
      path: `/review-combination/video/${slug}`,
      component: path.resolve('./src/templates/video-combination-template.jsx'),
      context: {
        slug: slug
      }
    })
  })
}