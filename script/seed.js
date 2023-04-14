const {db, models: {About, Experience, Publication, Service, Insurance} } = require('../server/db')

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }) // clears db and matches models to tables
  console.log('db synced!')

  const Abouts = await Promise.all([
    About.create({
      paragraph: 
        'I believe that all people have dignity, worth and the right to live life in a way that brings them joy. Our ability to live joyfully however can be limited due to imbalances of power in our world that deeply impact us on an individual psychological level. Racism, sexism, and homophobia are but just a few examples of the manifestations of these power imbalances by which we are all in some way afflicted. Because of this we suffer with worries and anxiety, panic, sadness and despair as we transition through life. Suffering left unaddressed can lead to deeply held limiting beliefs and behaviors. These behaviors are usually adopted as a matter of necessity to survive, yet they can keep us from being the most actualized version of ourselves. Psychotherapy and the therapeutic relationship heals and transforms the  lives of the participants through affirmation, validation and sustained attention on ones thoughts and behaviors.'
    }),
    About.create({
      paragraph: 
      'My approach is relational-psychodynamic, trauma-informed, and uses mindfulness and critical thought. In short, this means we will create a relationship together focused on exploring and affirming your experience. You will share your vision of what happiness most looks like to you, and we will partner with one another to make that vision a reality by addressing barriers and practicing tools to work towards the embodiment of that vision.'
    }),
    About.create({
      paragraph: 
      'I have been a consultant to many. I have worked with children and young people using play therapy, students of every age, immigrant families and people of varied faiths and spiritualities. I have helped individuals as well as couples through hardship growth and transitions of life. I strive to be an ally to people of all body sizes and abilities in my practice, and affirm queer people and relationships. I welcome the opportunity to work with you.'
    })
  ])

  const Experiences = await Promise.all([
    Experience.create({
      paragraph: 'I began my work as a helping professional in the HIV Services at a community medical and mental health agency in San Diego, CA. I completed a masters in social work and PhD in social work at the University of Southern California in Los Angeles, CA where I conducted extensive research on the needs of LGBTQIA+ people. I have since worked in Chicago, IL.'
    })
  ])

  const Publications = await Promise.all([
    Publication.create({
      url: "www.google.com",
      title: "helping others",
      publisher: "helping other LLC",
      year: "2019"
    })
  ])

  const Services = await Promise.all([
    Service.create({
      list: ['children and adults', 'love', 'lgbt affirming services']
    })
  ])

  const Insurances = await Promise.all([
    Insurance.create({
      provider: ['BlueCross', 'BlueShield', 'Atnea']
    })
  ])

  console.log(`seeded successfully`)
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
