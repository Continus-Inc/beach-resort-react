import {createClient} from 'contentful'

// import contentful from 'contentful-management'
// const client = contentful.createClient({
//   // This is the access token for this space. Normally you get the token in the Contentful web app
//   accessToken: 'hvo6QOA5SnDv8pw9QUso1jEA01wEFt8RCjupd64paqY',
// })
export default createClient({
space:"q0d7qjjxkub7",

accessToken:"cLg2YTauKTXWlECQA2ApWK5aA5NH6fQwzEBmwWSLN2M"

})

// const contentful = require('contentful-management')
// const client = contentful.createClient({
//   // This is the access token for this space. Normally you get the token in the Contentful web app
//   accessToken: 'hvo6QOA5SnDv8pw9QUso1jEA01wEFt8RCjupd64paqY',
// })

// // This API call will request a space with the specified ID
// client.getSpace('yrh1hglm7lfy').then((space) => {
//   // This API call will request an environment with the specified ID
//   space.getEnvironment('master').then((environment) => {
//     // Now that we have an environment, we can get entries from that space
//     environment.getEntries().then((entries) => {
//       console.log(entries.items)
//     })

//     // let's get a content type
//     environment.getContentType('beachResortRoom').then((contentType) => {
//       // and now let's update its name
//       contentType.name = 'beachResortRoom'
//       contentType.update().then((updatedContentType) => {
//         console.log('Update was successful')
//       })
//     })
//   })
// })
