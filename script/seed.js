const {db, models: {About, Admin, Experience, Publication, Service, Insurance, Interest} } = require('../server/db')

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }) // clears db and matches models to tables
  console.log('db synced!')

  const Admins = await Promise.all([
    Admin.create({
      name: 'cary',
      password: 'cary123'
    })
  ])


  const Abouts = await Promise.all([
    About.create({
      paragraph: 
        'I believe that all people have dignity, worth, and the right to live life in a way that brings them joy. Our ability to live joyfully can be limited due to imbalances of power in our world (racism, sexism, homophobia). Because of this we often suffer, and suffering left unaddressed can lead to limiting beliefs and behaviors. These behaviors are usually adopted as a matter of necessity to survive, yet they can keep us from being the most authentic and happy version of ourselves. The therapeutic relationship can heal and transform our lives through affirmation, validation and sustained attention on our thoughts, beliefs and behaviors. '
    }),
    About.create({
      paragraph: 
      'My approach is relational-psychodynamic, trauma-informed, uses mindfulness and is anti-oppressive. This means we will create space for us to explore and affirm your experiences. You will share your vision of what your happiness looks like, and we will partner to make that vision a reality by addressing barriers and practicing tools to manifest that vision. My practice is rooted in modalities with extensive research supporting their efficacy.'
    }),
    About.create({
      paragraph: 
      'I have been a helper to many of all ages. I have worked with children using play therapy, students of every age, immigrant families and military families. I have helped individuals and couples. I strive to be an ally to people of all body sizes and abilities, and affirm queer people and relationships. I welcome the opportunity to work with you.'
    })
  ])

  const Experiences = await Promise.all([
    Experience.create({
      paragraph: 'I completed a Masters in Social Work (2016) and a PhD in Social Work (2020) at the University of Southern California in Los Angeles, CA. Presently, I am an ongoing Fellow at the Chicago Center for Psychoanalysis and Psychotherapy (CCP) in Chicago, IL.'
    }),
    Experience.create({
      paragraph: 'I began my work as a helping professional over a decade ago in a community mental health services setting in San Diego, CA. Since, I have conducted extensive research on the needs of LGBTQIA+ people across the lifespan and have worked in a variety of settings including medical (e.g., oncology and HIV services), the military, acute in-patient psychiatric and out-patient mental health. I have worked in settings that prioritize services to people of diverse cultural, ethnic, linguistic and racial backgrounds.'
    }),
    Experience.create({
      paragraph: 'I have received training in cognitive therapies (i.e., CBT, DBT and ACT), mindfulness and trauma-informed modalities, substance use counseling and harm reduction. My primary speciality is as a relational psychoanalytic psychotherapist. This modality employs an open-ended stance of curiosity about the lived experience of the client and encourages free association, emotional engagement, and inquiry to increase self-understanding and capacity to hold all of ones self.'
    })
  ])

  const Publications = await Promise.all([
    Publication.create({
      url: "https://www.google.com/",
      title: "Deep Ecology and Ecofeminism: Social Work to Address Global Environmental Crisis",
      publisher: "Affilia",
      year: "2019"
    }),
    Publication.create({
      url: "https://www.google.com/",
      title: "Differential Sexual Behavior Experiences of LGBQ and Transgender/ Nonbinary Young People in Colorado",
      publisher: "Youth & Society",
      year: "2019"
    }),
    Publication.create({
      url: "https://www.google.com/",
      title: "Missing from the Conversation: Sexual Risk Factors Across Young People by Gender Identity and Sexual Orientation",
      publisher: "International Journal of Sexual Health",
      year: "2019"
    })
  ])

  const Services = await Promise.all([
    Service.create({
      paragraph: 'I provide individual, family and couples psychotherapy to people across the lifespan. We will meet 1-2 times for initial consultation and then decide the format (e.g., modality and meeting frequency) that is most suited to your goals and objective in treatment.'
    }),
    Service.create({
      paragraph: 'I provide psychodynamic clinical supervision and consultation for experienced clinicians as well as those in training seeking independent licensure.'
    })
  ])

  const Insurances = await Promise.all([
    Insurance.create({
      paragraph: 'My out of pocket rate for the initial two consultations sessions are $200 and ongoing psychotherapy sessions are $175. Sessions are roughly 50 minutes in length.'
    }),
    Insurance.create({
      paragraph: 'I accept Blue Cross and Blue Shield PPO plans, as well as Blue Choice and Unitedhealthcare. If you hold another insurance we can work on an out-of-network basis and services will apply towards your plan’s out-of-network benefits.  Generally a percentage of my full fee is reimbursed by insurance plans that have out-of-network coverage. I will submit out of network claims for you as a convenience.'
    })
  ])

  const Interests = await Promise.all([
    Interest.create({
      item: 'Psychoanalytic Psychotherapy'
    }),
    Interest.create({
      item: 'Traumatic Stress'
    }),
    Interest.create({
      item: 'Anxiety & Depression'
    }),
    Interest.create({
      item: 'ADHD'
    }),
    Interest.create({
      item: 'Grief, Loss and Mourning'
    }),
    Interest.create({
      item: 'Life transitions'
    }),
    Interest.create({
      item: 'Sex & Relationships'
    }),
    Interest.create({
      item: 'Immigration & Children of Immigrants'
    }),
    Interest.create({
      item: 'Biculturality & Multiculturality'
    }),
    Interest.create({
      item: 'Sexuality and Gender Identity'
    }),
    Interest.create({
      item: 'Family Conflict & Estrangement'
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
