// This file empties the Books collection and inserts the books below

const db = require("../db/models");
const mongoose = require('mongoose')
require('dotenv').config({path:'./config/.env'})

const connection = mongoose.connect(process.env.MLAB_DB_URI || 'mongodb://localhost:27017/test', {useNewUrlParser: true });
const gistSeed = [
  {
    _id: mongoose.Types.ObjectId('0efe86210123edd9099b025c'),
    title: "Javascript",
    body:
      "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
    author: mongoose.Types.ObjectId('dfa2e0e0c2961ecdc692a06e'),
    category: "tech"
  },
  {
    _id: mongoose.Types.ObjectId('923c06cd0123edd9099b025d'),
    title: "Painting",
    body:
      "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
    author: mongoose.Types.ObjectId('dfa2e0e0c2961ecdc692a06e'),
    category: "art"
  },
  {
    _id: mongoose.Types.ObjectId('923c06cd0123edd9099b025e'),
    title: "CSS",
    body:
      "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
    author: mongoose.Types.ObjectId('c41f7728abe63539b818e64a'),
    category: "tech"
  },
  {
    _id: mongoose.Types.ObjectId('0efe86210123edd9099b025f'),
    title: "World War II",
    body:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    author: mongoose.Types.ObjectId('c41f7728abe63539b818e64a'),
    category: "history"
  },
  {
    _id: mongoose.Types.ObjectId('db6be4010123edd9099b0260'),
    title: "How to Play the Guitar",
    body:
      "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
    author: mongoose.Types.ObjectId('c41f7728abe63539b818e64a'),
    category: "art"
  },
  {
    _id: mongoose.Types.ObjectId('db6be4010123edd9099b0261'),
    title: "Singing",
    body:
      "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
    author: mongoose.Types.ObjectId('c41f7728abe63539b818e64a'),
    category: "art"
  },
  {
    _id: mongoose.Types.ObjectId('923c06cd0123edd9099b0262'),
    title: "How to Manage a Business",
    body:
      "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
    author: mongoose.Types.ObjectId('c41f7728abe63539b818e64a'),
    category: "business"
  },
  {
    _id: mongoose.Types.ObjectId('db6bd8490123edd9099b0263'),
    title: "Javascript",
    body:
      "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    author: mongoose.Types.ObjectId('c41f7728abe63539b818e64a'),
    category: "tech"
  },
  {
    _id: mongoose.Types.ObjectId('db6be4010123edd9099b0264'),
    title: "CSS",
    body:
      "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    author: mongoose.Types.ObjectId('c41f7728abe63539b818e64a'),
    category: "tech"
  },
  {
    _id: mongoose.Types.ObjectId('923c06cd0123edd9099b0265'),
    title: "Photography",
    body:
      "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    author: mongoose.Types.ObjectId('e45b76c5c775c263f01ddde4'),
    category: "art"
  },
  {
    _id: mongoose.Types.ObjectId('db6bd8490123edd9099b0266'),
    title: "React",
    body:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    author: mongoose.Types.ObjectId('e45b76c5c775c263f01ddde4'),
    category: "tech"
  },
  {
    _id: mongoose.Types.ObjectId('db6be4010123edd9099b0267'),
    title: "Photography",
    body:
      "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
    author: mongoose.Types.ObjectId('e45b76c5c775c263f01ddde4'),
    category: "art"
  },
  {
    _id: mongoose.Types.ObjectId('923c06cd0123edd9099b0268'),
    title: "How to Become a Politician",
    body:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
    author: mongoose.Types.ObjectId('e45b76c5c775c263f01ddde4'),
    category: "politics"
  },
  {
    _id: mongoose.Types.ObjectId('db6be4010123edd9099b0269'),
    title: "React",
    body:
      "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    author: mongoose.Types.ObjectId('e45b76c5c775c263f01ddde4'),
    category: "tech"
  },
  {
    _id: mongoose.Types.ObjectId('db6bd8490123edd9099b026a'),
    title: "Painting",
    body:
      "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
    author: mongoose.Types.ObjectId('e45b76c5c775c263f01ddde4'),
    category: "art"
  },
  {
    _id: mongoose.Types.ObjectId('db6be4010123edd9099b026b'),
    title: "Pottery",
    body:
      "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
    author: mongoose.Types.ObjectId('a929728a5394e821e79dc220'),
    category: "art"
  },
  {
    _id: mongoose.Types.ObjectId('db6be4010123edd9099b026c'),
    title: "How to understand Physics",
    body:
      "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
    author: mongoose.Types.ObjectId('a929728a5394e821e79dc220'),
    category: "science"
  },
  {
    _id: mongoose.Types.ObjectId('db6bd8490123edd9099b026d'),
    title: "Understanding Biology",
    body:
      "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
    author: mongoose.Types.ObjectId('a929728a5394e821e79dc220'),
    category: "science"
  },
  {
    _id: mongoose.Types.ObjectId('db6bd8490123edd9099b026e'),
    title: "Havin a diverse Culure",
    body:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
    author: mongoose.Types.ObjectId('a929728a5394e821e79dc220'),
    category: "culture"
  },
  {
    _id: mongoose.Types.ObjectId('b698283c709c6463252f12a7'),
    title: "How to respect all cultures",
    body:
      "Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
    author: mongoose.Types.ObjectId('a929728a5394e821e79dc220'),
    category: "culture"
  },
  {
    _id: mongoose.Types.ObjectId('95f1a5cd0123edd9099b0270'),
    title: "Movies",
    body:
      "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    author: mongoose.Types.ObjectId('59a4d24202f62ef3b2d3dafc'),
    category: "popular"
  },
  {
    _id: mongoose.Types.ObjectId('95f1a5cd0123edd9099b0271'),
    title: "Music",
    body:
      "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
    author: mongoose.Types.ObjectId('59a4d24202f62ef3b2d3dafc'),
    category: "popular"
  },
  {
    _id: mongoose.Types.ObjectId('db6bd8490123edd9099b0272'),
    title: "How Weather Works",
    body:
      "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
    author: mongoose.Types.ObjectId('1226fb9f5d60517e93f585cf'),
    category: "science"
  },
  {
    _id: mongoose.Types.ObjectId('95f1a5cd0123edd9099b0273'),
    title: "Past Presidents",
    body:
      "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
    author: mongoose.Types.ObjectId('1226fb9f5d60517e93f585cf'),
    category: "politics"
  },
  {
    _id: mongoose.Types.ObjectId('d8be7b290123edd9099b0274'),
    title: "How to write a Resume",
    body:
      "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
    author: mongoose.Types.ObjectId('1226fb9f5d60517e93f585cf'),
    category: "business"
  }
];

const userSeed = [
  {
    _id: mongoose.Types.ObjectId('dfa2e0e0c2961ecdc692a06e'),
    name: "Kevin Godwin",
    email: "kgodwin@gmail.com",
    gists: [mongoose.Types.ObjectId('923c06cd0123edd9099b025d'), mongoose.Types.ObjectId('0efe86210123edd9099b025c')],
    knowledge: [],
    interested: [],
    imageUrl: ""
  },
  {
    _id: mongoose.Types.ObjectId('c41f7728abe63539b818e64a'),
    name: "Nataliia Frank",
    email: "test1@email.com",
    gists: [
      mongoose.Types.ObjectId("923c06cd0123edd9099b025e"),
      mongoose.Types.ObjectId('0efe86210123edd9099b025f'),
      mongoose.Types.ObjectId('db6be4010123edd9099b0260'),
      mongoose.Types.ObjectId('db6be4010123edd9099b0261'),
      mongoose.Types.ObjectId('923c06cd0123edd9099b0262'),
      mongoose.Types.ObjectId('db6bd8490123edd9099b0263'),
      mongoose.Types.ObjectId('db6be4010123edd9099b0264')
    ],
    knowledge: [],
    interested: [],
    imageUrl: ""
  },
  {
    _id: mongoose.Types.ObjectId('e45b76c5c775c263f01ddde4'),
    name: "Caleb Sears",
    email: "test2@email.com",
    gists: [
      mongoose.Types.ObjectId('923c06cd0123edd9099b0265'),
      mongoose.Types.ObjectId('db6bd8490123edd9099b0266'),
      mongoose.Types.ObjectId('db6be4010123edd9099b0267'),
      mongoose.Types.ObjectId('923c06cd0123edd9099b0268'),
      mongoose.Types.ObjectId('db6be4010123edd9099b0269'),
      mongoose.Types.ObjectId('db6bd8490123edd9099b026a')
    ],
    knowledge: [],
    interested: [],
    imageUrl: ""
  },
  {
    _id: mongoose.Types.ObjectId('a929728a5394e821e79dc220'),
    name: "Lydia Velasquez",
    email: "test3@email.com",
    gists: [
      mongoose.Types.ObjectId('db6be4010123edd9099b026b'),
      mongoose.Types.ObjectId('db6be4010123edd9099b026c'),
      mongoose.Types.ObjectId('db6bd8490123edd9099b026d'),
      mongoose.Types.ObjectId('db6bd8490123edd9099b026e'),
      mongoose.Types.ObjectId('b698283c709c6463252f12a7')
    ],
    knowledge: [],
    interested: [],
    imageUrl: ""
  },
  {
    _id: mongoose.Types.ObjectId('59a4d24202f62ef3b2d3dafc'),
    name: "Brandon Johnson",
    email: "test4@email.com",
    gists: [
      mongoose.Types.ObjectId('95f1a5cd0123edd9099b0270'),
      mongoose.Types.ObjectId('95f1a5cd0123edd9099b0271')
    ],
    knowledge: [],
    interested: [],
    imageUrl: ""
  },
  {
    _id: mongoose.Types.ObjectId('1226fb9f5d60517e93f585cf'),
    name: "Jessica Green",
    email: "test5@email.com",
    gists: [
      mongoose.Types.ObjectId('db6bd8490123edd9099b0272'),
      mongoose.Types.ObjectId('95f1a5cd0123edd9099b0273'),
      mongoose.Types.ObjectId('d8be7b290123edd9099b0274')
    ],
    knowledge: [],
    interested: [],
    imageUrl: ""
  }
];

const seedUsers = db.User.remove()
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.log(err);
    process.exit(1)
  })

const seedGists = db.Gist.remove()
  .then(() => db.Gist.collection.insertMany(gistSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  })

  // close database connection when complete
Promise.all([seedUsers,seedGists]).then(() => {
  connection.close()
})
