const data = [
  {
    key: Math.random(),
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    publishedDate: "July 11, 1960",
    isbn: "978-0446310789",
    publisher: "J. B. Lippincott & Co.",
    pages: 281,
    format: "Paperback",
    src: require("../assets/book1.jpg"),
    desc: "To Kill a Mockingbird by Harper Lee is a Pulitzer Prize-winning novel that explores themes of racial inequality, prejudice, and the loss of innocence through the eyes of a young girl in the 1930s American South. Set in the fictional town of Maycomb, Alabama, the novel follows Scout Finch as she learns about the world around her and witnesses the injustices faced by her black neighbors. Through the character of her father, the respected lawyer Atticus Finch, Lee challenges the racism and prejudice that were prevalent at the time, highlighting the importance of empathy and compassion in the face of adversity.",
  },
  {
    key: Math.random(),
    title: "1984",
    author: "George Orwell",
    publishedDate: "June 8, 1949",
    isbn: "978-0451524935",
    publisher: "Signet Classics",
    pages: 328,
    format: "Paperback",
    src: require("../assets/book2.jpg"),
    desc: "George Orwell is a British author best known for his works Animal Farm and 1984. His writing often critiques totalitarianism and explores the impact of political ideologies on individuals and society. In Animal Farm, Orwell uses a group of farm animals to satirize the events leading up to the Russian Revolution and the early years of the Soviet Union. 1984, on the other hand, imagines a dystopian future where the government has complete control over people's lives, and explores the themes of surveillance, propaganda, and the nature of truth.",
  },
  {
    key: Math.random(),
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    publishedDate: "April 10, 1925",
    isbn: "978-0743273565",
    publisher: "Scribner",
    pages: 180,
    format: "Hardcover",
    src: require("../assets/book3.jpeg"),
    desc: "The Great Gatsby by F. Scott Fitzgerald is a classic American novel that portrays the decadence and excess of the 1920s Jazz Age. Set in the fictional town of West Egg on Long Island, the novel follows the mysterious and enigmatic Jay Gatsby as he tries to win back his lost love, Daisy Buchanan. Through Gatsby's lavish parties and extravagant lifestyle, Fitzgerald explores the themes of wealth, social class, and the corruption of the American Dream. The novel is known for its lyrical prose and vivid depictions of the era, as well as its commentary on the disillusionment and moral decay of the time.",
  },
  {
    key: Math.random(),
    title: "The Hitchhiker's Guide to the Galaxy",
    author: "Douglas Adams",
    publishedDate: "October 12, 1979",
    isbn: "978-0345391803",
    publisher: "Del Rey Books",
    pages: 224,
    format: "Paperback",
    src: require("../assets/book4.png"),
    desc: "The Hitchhiker's Guide to the Galaxy by Douglas Adams is a comedic science fiction series that follows the misadventures of an unwitting human named Arthur Dent and his alien friend Ford Prefect as they travel through space and time. The series is known for its irreverent humor, quirky characters, and satirical take on science fiction tropes. Adams uses the series to explore philosophical questions and poke fun at the absurdities of life, all while entertaining readers with his offbeat humor and zany plotlines.",
  },
  {
    key: Math.random(),
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    publishedDate: "July 29, 1954",
    isbn: "978-0544003415",
    publisher: "Mariner Books",
    pages: 1178,
    format: "Paperback",
    src: require("../assets/book5.jpg"),
    desc: "The Lord of the Rings is a beloved and epic high-fantasy novel written by J.R.R. Tolkien. It tells the story of a hobbit named Frodo Baggins, who embarks on a perilous journey to destroy the One Ring, a powerful artifact that holds the fate of Middle-earth in its grasp. Alongside his loyal friends and allies, Frodo faces numerous challenges and battles against ferocious enemies such as orcs, trolls, and dark wizards, while navigating through treacherous terrains, including mines and marshes.",
  },
  {
    key: Math.random(),
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    publishedDate: "July 11, 1960",
    isbn: "978-0446310789",
    publisher: "J. B. Lippincott & Co.",
    pages: 281,
    format: "Paperback",
    src: require("../assets/book1.jpg"),
    desc: "To Kill a Mockingbird by Harper Lee is a Pulitzer Prize-winning novel that explores themes of racial inequality, prejudice, and the loss of innocence through the eyes of a young girl in the 1930s American South. Set in the fictional town of Maycomb, Alabama, the novel follows Scout Finch as she learns about the world around her and witnesses the injustices faced by her black neighbors. Through the character of her father, the respected lawyer Atticus Finch, Lee challenges the racism and prejudice that were prevalent at the time, highlighting the importance of empathy and compassion in the face of adversity.",
  },
  {
    key: Math.random(),
    title: "1984",
    author: "George Orwell",
    publishedDate: "June 8, 1949",
    isbn: "978-0451524935",
    publisher: "Signet Classics",
    pages: 328,
    format: "Paperback",
    src: require("../assets/book2.jpg"),
    desc: "George Orwell is a British author best known for his works Animal Farm and 1984. His writing often critiques totalitarianism and explores the impact of political ideologies on individuals and society. In Animal Farm, Orwell uses a group of farm animals to satirize the events leading up to the Russian Revolution and the early years of the Soviet Union. 1984, on the other hand, imagines a dystopian future where the government has complete control over people's lives, and explores the themes of surveillance, propaganda, and the nature of truth.",
  },
  {
    key: Math.random(),
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    publishedDate: "April 10, 1925",
    isbn: "978-0743273565",
    publisher: "Scribner",
    pages: 180,
    format: "Hardcover",
    src: require("../assets/book3.jpeg"),
    desc: "The Great Gatsby by F. Scott Fitzgerald is a classic American novel that portrays the decadence and excess of the 1920s Jazz Age. Set in the fictional town of West Egg on Long Island, the novel follows the mysterious and enigmatic Jay Gatsby as he tries to win back his lost love, Daisy Buchanan. Through Gatsby's lavish parties and extravagant lifestyle, Fitzgerald explores the themes of wealth, social class, and the corruption of the American Dream. The novel is known for its lyrical prose and vivid depictions of the era, as well as its commentary on the disillusionment and moral decay of the time.",
  },
  {
    key: Math.random(),
    title: "The Hitchhiker's Guide to the Galaxy",
    author: "Douglas Adams",
    publishedDate: "October 12, 1979",
    isbn: "978-0345391803",
    publisher: "Del Rey Books",
    pages: 224,
    format: "Paperback",
    src: require("../assets/book4.png"),
    desc: "The Hitchhiker's Guide to the Galaxy by Douglas Adams is a comedic science fiction series that follows the misadventures of an unwitting human named Arthur Dent and his alien friend Ford Prefect as they travel through space and time. The series is known for its irreverent humor, quirky characters, and satirical take on science fiction tropes. Adams uses the series to explore philosophical questions and poke fun at the absurdities of life, all while entertaining readers with his offbeat humor and zany plotlines.",
  },
  {
    key: Math.random(),
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    publishedDate: "July 29, 1954",
    isbn: "978-0544003415",
    publisher: "Mariner Books",
    pages: 1178,
    format: "Paperback",
    src: require("../assets/book5.jpg"),
    desc: "The Lord of the Rings is a beloved and epic high-fantasy novel written by J.R.R. Tolkien. It tells the story of a hobbit named Frodo Baggins, who embarks on a perilous journey to destroy the One Ring, a powerful artifact that holds the fate of Middle-earth in its grasp. Alongside his loyal friends and allies, Frodo faces numerous challenges and battles against ferocious enemies such as orcs, trolls, and dark wizards, while navigating through treacherous terrains, including mines and marshes.",
  },
];

export const topReadings = [
  {
    key: "47",
    title: "Count of Monte Cristo",
    description:
      "The Count of Monte Cristo (French: Le Comte de Monte-Cristo) is an adventure novel by Alexandre Dumas, père. It is often considered, along with The Three Musketeers, as Dumas's most popular work. The writing of the work was completed in 1844. Like many of his novels, it is expanded from the plot outlines suggested by his collaborating ghostwriter Auguste Maquet.The story takes place in France, Italy, islands in the Mediterranean and the Levant during the historical events of 1815–1838 (from just before the Hundred Days through the reign of Louis-Philippe of France). The historical setting is a fundamental element of the book. It is primarily concerned with themes of justice, vengeance, mercy, and forgiveness, and is told in the style of an adventure story. (Summary from Wikipedia)\nThis book contains alternate versions of a number of chapters – indicated by an alt after the file number. The Zip files contain both versions of these chapters.There are 2 versions of the M4Bs made , one containing the original files for these chapters (4 parts), the other containing the alternate files for the chapters (5 parts).",
    url_text_source: "https://www.gutenberg.org/etext/1184",
    language: "English",
    copyright_year: "1844",
    downloadLink:
      "https://www.archive.org/download/count_monte_cristo_0711_librivox/count_monte_cristo_0711_librivox_64kb_mp3.zip",
    imgSrc: require("../assets/books/Louis_Français-Dantès_sur_son_rocher.jpg"),
    totalTime: "49:43:15",
    totaltimesecs: 178995,
    authors: [
      {
        id: "431",
        first_name: "Alexandre",
        last_name: "Dumas",
        dob: "1802",
        dod: "1870",
      },
    ],
  },
  {
    key: "52",
    title: "Letters of Two Brides",
    description:
      "Letters of Two Brides is an epistolary novel. The two brides are Louise de Chaulieu (Madame Gaston) and Renée de Maucombe (Madame l'Estorade). The women became friends during their education at a convent and upon leaving began a life-long correspondence. For a 17 year period, they exchange letters describing their lives.Michelle Crandall reads Renee’s letters, and Kara Shallenberg reads Louise’s. Letters from the men in their lives are read by Peter Yearsley, David Barnes, Denny Sayers, and Sean McKinley",
    url_text_source: "https://www.gutenberg.org/etext/1941",
    language: "English",
    copyright_year: "1902",
    downloadLink:
      "https://www.archive.org/download/letters_brides_0709_librivox/letters_brides_0709_librivox_64kb_mp3.zip",
    imgSrc: require("../assets/books/Letters_Two_Brides_1110.jpg"),
    totalTime: "9:09:20",
    totaltimesecs: 32960,
    authors: [
      {
        id: "86",
        first_name: "Honoré de",
        last_name: "Balzac",
        dob: "1799",
        dod: "1850",
      },
    ],
  },
  {
    key: "53",
    title: "Bleak House",
    description:
      "Bleak House is the ninth novel by Charles Dickens, published in 20 monthly parts between March 1852 and September 1853. It is widely held to be one of Dickens' finest and most complete novels, containing one of the most vast, complex and engaging arrays of minor characters and sub-plots in his entire canon. Dickens tells all of these both through the narrative of the novel's heroine, Esther Summerson, and as an omniscient narrator. Memorable characters include the menacing lawyer Tulkinghorn, the friendly but depressive John Jarndyce and the childish Harold Skimpole. The plot concerns a long-running legal dispute (Jarndyce and Jarndyce) which has far-reaching consequences for all involved. (Summary from Wikipedia)",
    url_text_source: "https://www.gutenberg.org/etext/1023",
    language: "English",
    copyright_year: "1853",
    downloadLink:
      "https://www.archive.org/download/bleak_house_cl_librivox/bleak_house_cl_librivox_64kb_mp3.zip",
    imgSrc: require("../assets/books/img1.png"),
    totalTime: "43:30:19",
    totaltimesecs: 156619,
    authors: [
      {
        id: "91",
        first_name: "Charles",
        last_name: "Dickens",
        dob: "1812",
        dod: "1870",
      },
    ],
  },
  {
    key: "54",
    title: "Penguin Island",
    description:
      "The novel (original French title -- L'Île des Pingouins) is a satire on human nature. The first publication was in 1908. These penguins are mistaken for humans by the 97-year-old priest, Father Mael, because of his bad eyesight. He baptizes them, and once baptized, they have no choice but to become human. They take on human traits (build civilizations, go to war, etc.). The book is very funny and powerful. (Summary by Michael)",
    url_text_source: "https://www.gutenberg.org/etext/1930",
    language: "English",
    copyright_year: "1908",
    downloadLink:
      "https://www.archive.org/download/penguin_island_ms_librivox/penguin_island_ms_librivox_64kb_mp3.zip",
    imgSrc: require("../assets/books/Penguin_Island_(novel).jpg"),
    totalTime: "9:04:31",
    totaltimesecs: 32671,
    authors: [
      {
        id: "890",
        first_name: "Anatole",
        last_name: "France",
        dob: "1844",
        dod: "1924",
      },
    ],
  },
  {
    key: "55",
    title: "This Side of Paradise",
    description:
      "This Side of Paradise is the debut novel of F. Scott Fitzgerald. Published in 1920, and taking its title from a line of the Rupert Brooke poem Tiare Tahiti, the book examines the lives and morality of post-World War I youth. Its protagonist, Amory Blaine, is a wealthy and attractive Princeton University student who dabbles in literature and has a series of romances that eventually lead to his disillusionment. In his later novels, Fitzgerald would further develop the book's theme of love warped by greed and status-seeking. (Summary from Wikipedia)",
    url_text_source: "https://www.gutenberg.org/etext/805",
    language: "English",
    copyright_year: "1920",
    downloadLink:
      "https://www.archive.org/download/this_side_paradise_librivox/this_side_paradise_librivox_64kb_mp3.zip",
    imgSrc: require("../assets/books/This_Side_of_Paradise_Cover_1920_Retouched.jpg"),
    totalTime: "8:56:24",
    totaltimesecs: 32184,
    authors: [
      {
        id: "148",
        first_name: "F. Scott",
        last_name: "Fitzgerald",
        dob: "1896",
        dod: "1940",
      },
    ],
  },
  {
    key: "56",
    title: "Secret Garden",
    description:
      "Mary Lennox is a spoiled, middle-class, self-centered child who has been recently orphaned. She is accepted into the quiet and remote country house of an uncle, who has almost completely withdrawn into himself after the death of his wife. Mary gradually becomes drawn into the hidden side of the house: why does she hear the crying of a unseen child? Why is there an overgrown, walled garden, its door long locked? (Summary by Peter)",
    url_text_source: "https://www.gutenberg.org/etext/113",
    language: "English",
    copyright_year: "1909",
    downloadLink:
      "https://www.archive.org/download/secret_garden_librivox/secret_garden_librivox_64kb_mp3.zip",
    imgSrc: require("../assets/books/img2.jpg"),
    totalTime: "9:08:25",
    totaltimesecs: 32905,
    authors: [
      {
        id: "150",
        first_name: "Frances Hodgson",
        last_name: "Burnett",
        dob: "1849",
        dod: "1924",
      },
    ],
  },
  {
    key: "57",
    title: "Twenty Years After",
    description:
      "Let's continue the D'Artagnan Romances that we've already started with The Three Musketeers.",
    url_text_source: "https://www.gutenberg.org/etext/1259",
    language: "English",
    copyright_year: "1856",
    downloadLink:
      "https://www.archive.org/download/twentyyearsafter_0904_librivox/twentyyearsafter_0904_librivox_64kb_mp3.zip",
    imgSrc: require("../assets/books/Myladys_son_1925_David_Ljungdahl_021.jpg"),
    totalTime: "25:43:08",
    totaltimesecs: 92588,
    authors: [
      {
        id: "431",
        first_name: "Alexandre",
        last_name: "Dumas",
        dob: "1802",
        dod: "1870",
      },
    ],
  },
  {
    key: "59",
    title: "Adventures of Huckleberry Finn",
    description:
      '<em>Adventures of Huckleberry Finn</em> (1884) by Mark Twain is one of the truly great American novels, beloved by children, adults, and literary critics alike.  The book tells the story of “Huck” Finn (first introduced as Tom Sawyer’s sidekick in <em>The Adventures of Tom Sawyer</em>), his friend Jim, and their journey down the Mississippi River on a raft.  Both are on the run, Huck from his drunk and abusive father, and Jim as a runaway slave.As Huck and Jim drift down the river, they meet many colorful characters and have many great adventures.  The true heart of the story, however, is the friendship between Huck and Jim.  A constant theme throughout the book is Huck’s internal struggle between what he has been taught, that helping a runaway slave is a sin, and what he truly believes, that Jim is a good man and it couldn’t possibly be wrong to help him.<em>Adventures of Huckleberry Finn</em> was unique at the time of its publication (1884) because it is narrated by Huck himself and is written in the numerous dialects common in the area and time in which the book is set.  Although the book was originally intended as a sequel to the children’s book <em>The Adventures of Tom Sawyer</em>, as Twain wrote <em>Adventures of Huckleberry Finn</em> it progressed into a more serious work.  Twain’s views on slavery and other social issues of the time become clear through the words, thoughts, and actions of Huck Finn.  The book has always been the subject of great controversy, and according to <a href="http://www.ala.org/bbooks/100-most-frequently-challenged-books-1990–1999" target="_blank">The American Library Association</a> it was fifth on the list of most frequently challenged books in the 1990s.(Summary by Annie Coleman)',
    url_text_source: "https://www.gutenberg.org/etext/76",
    language: "English",
    copyright_year: "1884",
    downloadLink:
      "https://www.archive.org/download/huck_finn_librivox/huck_finn_librivox_64kb_mp3.zip",
    imgSrc: require("../assets/books/220px-Huckleberry_Finn_book.jpeg"),
    totalTime: "10:42:07",
    totaltimesecs: 38527,
    authors: [
      {
        id: "9",
        first_name: "Mark",
        last_name: "Twain",
        dob: "1835",
        dod: "1910",
      },
    ],
  },
  {
    key: "64",
    title: "Heart of Darkness",
    description:
      "Set in a time of oppressive colonisation, when large areas of the world were still unknown to Europe, and Africa was literally on maps and minds as a mysterious shadow, Heart of Darkness famously explores the rituals of civilisation and barbarism, and the frighteningly fine line between them.\n    We get the tale through a classic unreliable narrator, relating as Marlow, a ship’s captain, tells how he was sent by the Company to retrieve the wayward Kurtz, and was shaken to discover the true depths of darkness in that creature’s, and in his own, soul. Conrad based the work closely on his own terrible experience in the Congo.\n\n    This work has been reinterpreted and adapted into many modern forms, the most well known being the film Apocalypse Now.\n    (Summary written by Marlo Dianne)",
    url_text_source: "https://www.gutenberg.org/etext/219",
    language: "English",
    copyright_year: "1902",
    downloadLink:
      "https://www.archive.org/download/heart_of_darkness/heart_of_darkness_64kb_mp3.zip",
    imgSrc: require("../assets/books/Blackwood's_Magazine_-_1899_cover.jpg"),
    totalTime: "4:10:12",
    totaltimesecs: 15012,
    authors: [
      {
        id: "95",
        first_name: "Joseph",
        last_name: "Conrad",
        dob: "1857",
        dod: "1924",
      },
    ],
  },
  {
    key: "65",
    title: "Odyssey",
    description:
      "The Odyssey is one of the two major ancient Greek epic poems (the other being the Iliad), attributed to the poet Homer. The poem is commonly dated to between 800 and 600 BC. The poem is, in part, a sequel to the Iliad, and concerns the events that befall the Greek hero Odysseus in his long journey back to his native land Ithaca after the fall of Troy.<br><br>It takes Odysseus ten years to return to his native land of Ithaca after ten years of war; during his 20-year absence, his son Telemachus and his wife Penelope must deal with a group of unruly suitors who have moved into Odysseus' home to compete for Penelope's hand in marriage, since most have assumed that Odysseus has died.<br><br>The poem is a fundamental text in the Western canon and continues to be read in both Homeric Greek and translations around the world. (Summary from Wikipedia)",
    url_text_source: "https://www.gutenberg.org/etext/1727",
    language: "English",
    copyright_year: "1900",
    downloadLink:
      "https://www.archive.org/download/odyssey_butler_librivox/odyssey_butler_librivox_64kb_mp3.zip",
    imgSrc: require("../assets/books/220px-Odyssey-crop.jpg"),
    totalTime: "11:18:25",
    totaltimesecs: 40705,
    authors: [
      {
        id: "765",
        first_name: "",
        last_name: "Homer",
        dob: "c. 8th cen",
        dod: "c. 8th cen",
      },
    ],
  },
];

export const children = [
  {
    key: "74",
    title: "Mother Goose in Prose",
    description:
      "Whether Mother Goose was a real person or a myth, the songs that are attributed to her name are what we remember from our childhood. Some of these nursery rhymes are complete tales in themselves.  There are others which are mere suggestions, leaving the imagination to weave in the details of the story. Many of the rhymes’ origins even at the time of this books writing, could be traced back decades or centuries. L Frank Baum in 1897, while living in Chicago, collected the rhymes and created short stories around them which add context and understanding for children who are drawn to the familiar melodies. (Summary by Westwinds12)",
    url_text_source: "https://www.gutenberg.org/etext/5312",
    language: "English",
    copyright_year: "1897",
    downloadLink:
      "https://www.archive.org/download/mother_goose_prose_librivox/mother_goose_prose_librivox_64kb_mp3.zip",
    imgSrc: require("../assets/books/MotherGooseInProse.jpg"),
    totalTime: "4:46:24",
    totaltimesecs: 17184,
    authors: [
      {
        id: "406",
        first_name: "L. Frank",
        last_name: "Baum",
        dob: "1856",
        dod: "1919",
      },
    ],
  },
  {
    key: "79",
    title: "Ranald Bannerman's Boyhood",
    description:
      "George MacDonald is mainly known for his fantasy works and fairy tales such as At the Back of the North Wind and the Princess and the Goblin. However, during his life he was more famous for many more realistic novels. . . among them the somewhat autobiographical Ranald Bannerman's Boyhood.\n<p>This story of a young motherless boy growing up with his brothers in a Scottish manse is full of delightful characters. There is Kirsty, an enchanting Highland storyteller, Turkey, the intrepid cowherd, the evil Kelpie, and the lovely Elsie Duff. Throughout the twists and turns of his escapades and adventures Ranald learns from his father the important lessons of courage and integrity.</p><p>When Ranald Bannerman's Boyhood came out in 1871 the New York Independent praised it as \"full of sweetness, full of boy-life and true goodness\". Perhaps, but it is also a good story, from the master of storytellers. (Summary by Bookworm)",
    url_text_source: "https://www.gutenberg.org/etext/9301",
    language: "English",
    copyright_year: "1871",
    downloadLink:
      "https://www.archive.org/download/ranald_bannermans_boyhood_librivox/ranald_bannermans_boyhood_librivox_64kb_mp3.zip",
    imgSrc: require("../assets/books/220px-RoundKirsty'sFire.jpg"),
    totalTime: "7:04:48",
    totaltimesecs: 25488,
    authors: [
      {
        id: "631",
        first_name: "George",
        last_name: "MacDonald",
        dob: "1824",
        dod: "1905",
      },
    ],
  },
  {
    key: "96",
    title: "Junior Classics Volume 1: Fairy and Wonder Tales",
    description:
      "The purpose of The Junior Classics is to provide, in ten volumes containing about five thousand pages, a classified collection of tales, stories, and poems, both ancient and modern, suitable for boys and girls of from six to sixteen years of age. (summary from book introduction)This collection consists of Volume 1 of The Junior Classics, and it contains many well known stories in their original forms. Among stories from other authors, you'll find Hans Christian Anderson, Aesop, and the Grimm brothers.",
    url_text_source: "https://www.gutenberg.org/ebooks/3152",
    language: "English",
    copyright_year: "1912",
    downloadLink:
      "https://www.archive.org/download/junior_classics_vol1_librivox/junior_classics_vol1_librivox_64kb_mp3.zip",
    imgSrc: require("../assets/books/Junior_Classics_Vol_1_1108.jpg"),
    totalTime: "14:17:52",
    totaltimesecs: 51472,
    authors: [
      {
        id: "6279",
        first_name: "William Allan",
        last_name: "Neilson",
        dob: "1869",
        dod: "1946",
      },
      {
        id: "4106",
        first_name: "William",
        last_name: "Patten",
        dob: "1868",
        dod: "1936",
      },
    ],
  },
  {
    key: "104",
    title: "Merry Adventures of Robin Hood",
    description:
      'Robin Hood is the archetypal English folk hero; a courteous, pious and swashbuckling outlaw of the mediæval era who, in modern versions of the legend, is famous for robbing the rich to feed the poor and fighting against injustice and tyranny. He operates with his "seven score" (140 strong) group of fellow outlawed yeomen – named the Merry Men. He and his band are usually associated with Sherwood Forest, Nottinghamshire.<br><br>The Victorian era generated its own distinct versions of Robin Hood. The traditional tales were often adapted for children, most notably in Howard Pyle\'s Merry Adventures of Robin Hood. These versions firmly stamp Robin as a staunch philanthropist, a man who takes from the rich to give to the poor.(Summary from Wikipedia)\n\n\n\n\n\n\n\n\n\n\n\n',
    url_text_source: "https://www.gutenberg.org/etext/964",
    language: "English",
    copyright_year: "1883",
    downloadLink:
      "https://www.archive.org/download/merry_adventures_robin_hood_librivox/merry_adventures_robin_hood_librivox_64kb_mp3.zip",
    imgSrc: require("../assets/books/1883_decorative_title_page.jpg"),
    totalTime: "11:00:49",
    totaltimesecs: 39649,
    authors: [
      {
        id: "303",
        first_name: "Howard",
        last_name: "Pyle",
        dob: "1853",
        dod: "1911",
      },
    ],
  },
  {
    key: "142",
    title: "American Indian Fairy Tales",
    description:
      "With no written language, Native Americans living in the Lake Superior region passed their cultural identity down through the generations by way of stories. Far more than mere tales to amuse children, they passed along the collective wisdom of the tribes. In the 1830s, government Indian Agent and ethnologist Henry R Schoolcraft learned the language of these people and went out to collect and preserve their stories before the tribes disappeared under the westward rush of American civilization. Though these stories were recast as children’s fairy tales in the 1920s, they contain much of the old wisdom of a culture which has largely disappeared. (Summary by Chip)",
    url_text_source: "",
    language: "English",
    copyright_year: "1921",
    downloadLink:
      "https://www.archive.org/download/american_indian_tales_librivox/american_indian_tales_librivox_64kb_mp3.zip",
    imgSrc: require("../assets/books/American_Indian_Fairy_Tales.jpg"),
    totalTime: "2:49:08",
    totaltimesecs: 10148,
    authors: [
      {
        id: "4118",
        first_name: " William Trowbridge",
        last_name: "Larned",
        dob: "c. 1867",
        dod: "1928",
      },
      {
        id: "6211",
        first_name: "Henry R.",
        last_name: "Schoolcraft",
        dob: "1793",
        dod: "1864",
      },
    ],
  },
  {
    key: "145",
    title: "Anne of Avonlea",
    description:
      "Following Anne of Green Gables, the book covers the second chapter in the life of Anne Shirley. Anne of Avonlea follows Anne from the age of 16 to 18, during the two years that she teaches at Avonlea school. It includes many of the characters from Anne of Green Gables, as well new ones like Mr Harrison, Miss Lavendar Lewis, Paul Irving, and the twins Dora and Davy. (Summary from Wikipedia.org)",
    url_text_source: "https://www.gutenberg.org/etext/47",
    language: "English",
    copyright_year: "1909",
    downloadLink:
      "https://www.archive.org/download/anne_avonlea/anne_avonlea_64kb_mp3.zip",
    imgSrc: require("../assets/books/220px-Anne_of_Avonlea--cover_page.jpg"),
    totalTime: "8:48:39",
    totaltimesecs: 31719,
    authors: [
      {
        id: "75",
        first_name: "Lucy Maud",
        last_name: "Montgomery",
        dob: "1874",
        dod: "1942",
      },
    ],
  },
  {
    key: "146",
    title: "Anne of Green Gables",
    description:
      "Lucy Maud Montgomery’s classic children’s novel, Anne of Green Gables tells the story of a red headed orphan girl with a personality you can’t help but love. Despite her “tragical” past, Anne’s optimism and imagination have helped her to always see the best in things. Anne’s life changes considerably when she is accidentally adopted by the Cuthberts, a brother and sister who thought they were getting a boy to help out on the farm. The Cuthberts decide Anne will have to be sent back to the orphange but before they know it, she has begun to work her way into their hearts. (Summary by Annie Coleman)",
    url_text_source: "https://www.gutenberg.org/etext/45",
    language: "English",
    copyright_year: "1908",
    downloadLink:
      "https://www.archive.org/download/anne_of_green_gables_librivox/anne_of_green_gables_librivox_64kb_mp3.zip",
    imgSrc: require("../assets/books/Montgomery_Anne_of_Green_Gables.jpg"),
    totalTime: "10:30:11",
    totaltimesecs: 37811,
    authors: [
      {
        id: "75",
        first_name: "Lucy Maud",
        last_name: "Montgomery",
        dob: "1874",
        dod: "1942",
      },
    ],
  },
  {
    key: "154",
    title: "Bildergeschichten",
    description:
      "Wilhelm Busch war einer der bedeutendsten humoristischen Zeichner und Dichter Deutschlands. Er gilt wegen seiner satirischen Bildergeschichten (u.a. Max und Moritz) in Versen als einer der Urväter des Comics. Die Bilder zu diesem Buch sind im Online Text enthalten. (Zusammenfassung von Wikipedia)",
    url_text_source:
      "https://www.projekt-gutenberg.org/autoren/namen/busch.html",
    language: "German",
    copyright_year: "1904",
    downloadLink:
      "https://www.archive.org/download/bildergeschichten_librivox/bildergeschichten_librivox_64kb_mp3.zip",
    imgSrc: require("../assets/books/Bildergeschichten_1105.jpg"),
    totalTime: "3:53:10",
    totaltimesecs: 13990,
    authors: [
      {
        id: "1145",
        first_name: "Wilhelm",
        last_name: "Busch",
        dob: "1832",
        dod: "1908",
      },
    ],
  },
  {
    key: "172",
    title: "Kleine Häwelmann",
    description:
      "Das berühmte Märchen von Theodor Storm erzählt von einem kleinen Jungen, der Häwelmann hieß. Häwelmann schlief in einem Bett mit Rollen, “wenn er aber nicht müde war, so musste seine Mutter ihn darin in der Stube umherfahren”. - In der Nacht von der diese Geschichte handelt, schlief die Mutter aber so tief ein, daß sie sein Rufen nach “Mehr, mehr!” nicht mehr hören konnte. Und so baute sich Häwelmann aus seinem Nachthemd ein Segel und fuhr allein durch das Zimmer, die Stadt, den Wald und bis in den Himmel hinein, mit lehrreichen Konsequenzen.\r\n(Zusammenfassung von Franziska)",
    url_text_source:
      "https://www.projekt-gutenberg.org/storm/haewelma/haewelma.html",
    language: "German",
    copyright_year: "0",
    downloadLink:
      "https://archive.org/download/haewelmann_librivox/haewelmann_librivox_64kb_mp3.zip",
    imgSrc: require("../assets/books/220px-Der_kleine_Häwelmann.jpg"),
    totalTime: "00:08:18",
    totaltimesecs: 498,
    authors: [
      {
        id: "68",
        first_name: "Theodor",
        last_name: "Storm",
        dob: "1817",
        dod: "1888",
      },
    ],
  },
  {
    key: "175",
    title: "Little Princess",
    description:
      "The novel tells of the troubles of a wealthy young girl, Sara Crewe, who is sent to an oppressive London boarding school during her father’s campaign in India. Thanks to Capt. Crewe’s money, Sara is treated as a little princess until, one day, word comes of her father’s tragic death. Miss Minchin, the school’s greedy headmistress, wastes no time in putting the now-penniless Sara to work for her room and board. It is only through the friendship of two other girls, her own resolute nature, and some astonishing luck that Sara eventually finds her way back to happiness. (Summary from wikipedia.org)",
    url_text_source: "https://www.gutenberg.org/etext/146",
    language: "English",
    copyright_year: "1905",
    downloadLink:
      "https://www.archive.org/download/littleprincess_librivox/littleprincess_librivox_64kb_mp3.zip",
    imgSrc: require("../assets/books/220px-A_Little_Princess_cover.jpg"),
    totalTime: "7:35:57",
    totaltimesecs: 27357,
    authors: [
      {
        id: "150",
        first_name: "Frances Hodgson",
        last_name: "Burnett",
        dob: "1849",
        dod: "1924",
      },
    ],
  },
];

export const newReleases = [
  {
    key: "67",
    title: "Divine Comedy",
    description:
      'The Divine Comedy (Italian: Commedia, later christened "Divina" by Giovanni Boccaccio), written by Dante Alighieri between 1308 and his death in 1321, is widely considered the central epic poem of Italian literature, the last great work of literature of the Middle Ages and the first great work of the Renaissance. A culmination of the medieval world-view of the afterlife, it establishes the Tuscan dialect in which it is written as the Italian standard, and is seen as one of the greatest works of world literature. - The Divine Comedy is composed of three canticas (or "cantiche") — Inferno (Hell), Purgatorio (Purgatory), and Paradiso (Paradise) — composed each of 33 cantos (or "canti"). The very first canto serves as an introduction to the poem and is generally not considered to be part of the first cantica, bringing the total number of cantos to 100. - The poet tells in the first person his travel through the three realms of the dead, lasting during the Easter Triduum in the spring of 1300. (Summary from Wikipedia)',
    url_text_source: "https://www.gutenberg.org/etext/1004",
    language: "English",
    copyright_year: "1321",
    downloadLink:
      "https://www.archive.org/download/divine_comedy_librivox/divine_comedy_librivox_64kb_mp3.zip",
    imgSrc: require("../assets/books/323px-Dante_Domenico_di_Michelino_Duomo_Florence.jpg"),
    totalTime: "12:23:25",
    totaltimesecs: 44605,
    authors: [
      {
        id: "1189",
        first_name: "Dante",
        last_name: "Alighieri",
        dob: "1265",
        dod: "1321",
      },
    ],
  },
  {
    key: "68",
    title: "Unbeaten Tracks in Japan",
    description:
      "Isabella Lucy Bird was a 19th century English traveller, writer, and natural historian. She was a sickly child, however, while she was travelling she was almost always healthy. Her first trip, in 1854, took her to America, visiting relatives. Her first book, The Englishwoman in America was published anonymously two years later.<br><br>\nUnbeaten Tracks in Japan is compiled of the letters she sent to her sister during her 7 months sojourn in Japan in 1878. Her travels there took her from Edo (now called Tokyo) through the interior - where she was often the first foreigner the locals had met - to Niigata, and from there to Aomori. There she crossed over to Yezo (Hokkaido), and her account on the life of the Ainu, an indigenous people of Japan, provides an interesting glimpse of days long past. (Summary by Availle)",
    url_text_source: "https://www.gutenberg.org/etext/2184",
    language: "English",
    copyright_year: "1878",
    downloadLink:
      "https://www.archive.org/download/unbeaten_tracks_japan_ava_librivox/unbeaten_tracks_japan_ava_librivox_64kb_mp3.zip",
    imgSrc: require("../assets/books/Unbeaten_Tracks_in_Japan_first_edition_title_page.jpg"),
    totalTime: "12:56:25",
    totaltimesecs: 46585,
    authors: [
      {
        id: "1059",
        first_name: "Isabella L.",
        last_name: "Bird",
        dob: "1831",
        dod: "1904",
      },
    ],
  },
  {
    key: "71",
    title: "Canterville Ghost",
    description:
      "The American Minister and his family have bought the English stately home Canterville Chase, complete with the ghost of Sir Simon de Canterville - blood-stains, clanking chains and all. But these modern Americans will have no truck with ghostly goings-on, and set out to beat the spectre at his own game. (Summary by David Barnes)",
    url_text_source: "https://www.gutenberg.org/etext/14522",
    language: "English",
    copyright_year: "1906",
    downloadLink:
      "https://www.archive.org/download/canterville_ghost_librivox/canterville_ghost_librivox_64kb_mp3.zip",
    imgSrc: require("../assets/books/Wallace_Goldsmith_-_Oscar_Wilde_-_Canterville_Ghost_-_He_met_with_a_severe_fall.jpg"),
    totalTime: "1:23:08",
    totaltimesecs: 4988,
    authors: [
      {
        id: "114",
        first_name: "Oscar",
        last_name: "Wilde",
        dob: "1854",
        dod: "1900",
      },
    ],
  },
  {
    key: "74",
    title: "Mother Goose in Prose",
    description:
      "Whether Mother Goose was a real person or a myth, the songs that are attributed to her name are what we remember from our childhood. Some of these nursery rhymes are complete tales in themselves.  There are others which are mere suggestions, leaving the imagination to weave in the details of the story. Many of the rhymes’ origins even at the time of this books writing, could be traced back decades or centuries. L Frank Baum in 1897, while living in Chicago, collected the rhymes and created short stories around them which add context and understanding for children who are drawn to the familiar melodies. (Summary by Westwinds12)",
    url_text_source: "https://www.gutenberg.org/etext/5312",
    language: "English",
    copyright_year: "1897",
    downloadLink:
      "https://www.archive.org/download/mother_goose_prose_librivox/mother_goose_prose_librivox_64kb_mp3.zip",
    imgSrc: require("../assets/books/MotherGooseInProse (1).jpg"),
    totalTime: "4:46:24",
    totaltimesecs: 17184,
    authors: [
      {
        id: "406",
        first_name: "L. Frank",
        last_name: "Baum",
        dob: "1856",
        dod: "1919",
      },
    ],
  },
  {
    key: "75",
    title: "Uncle Tom's Cabin",
    description:
      "Among the most “banned” books in the United States, Uncle Tom’s Cabin; or, Life Among the Lowly is a novel by American author Harriet Beecher Stowe which treats slavery as a central theme. Stowe was a Connecticut-born teacher at the Hartford Female Academy and an active abolitionist. The novel is believed to have had a profound effect on the North’s view of slavery. In fact, when he met Harriet Beecher Stowe, President Lincoln is said to have commented, “So you’re the little lady whose book started the Civil War.” First published on March 20, 1852, the story focuses on the tale of Uncle Tom, a long-suffering black slave, the central character around whose life the other characters—both fellow slaves and slave owners—revolve. The novel depicts the harsh reality of slavery while also showing that Christian love and faith can overcome even something as evil as enslavement of fellow human beings. (summary by Wikipedia and John Greenman)\n<b>Note From the Reader: </b>\nThe listener is about to enter a world rich with diverse characters. In order to differentiate between the characters, the reader has given each, his/her own voice. As an adult male reader, however, the reader's representation of women and children will, necessarily be less than adequate. He asks for your indulgence.",
    url_text_source: "https://www.gutenberg.org/etext/203",
    language: "English",
    copyright_year: "1852",
    downloadLink:
      "https://www.archive.org/download/uncle_toms_cabin_librivox/uncle_toms_cabin_librivox_64kb_mp3.zip",
    imgSrc: require("../assets/books/220px-UncleTomsCabinCover.jpg"),
    totalTime: "18:06:33",
    totaltimesecs: 65193,
    authors: [
      {
        id: "260",
        first_name: "Harriet Beecher",
        last_name: "Stowe",
        dob: "1811",
        dod: "1896",
      },
    ],
  },
  {
    key: "76",
    title: "Truth About Jesus. Is He a Myth?",
    description:
      "The following work offers in book form the series of studies on the question of the historicity of Jesus, presented from time to time before the Independent Religious Society in Orchestra Hall, Chicago, 1909. No effort has been made to change the manner of the spoken, into the more regular form of the written, word. (Summary by M.M. Mangasarian (1859-1943) and Joanne Pauwels)",
    url_text_source: "https://www.gutenberg.org/etext/6107",
    language: "English",
    copyright_year: "1909",
    downloadLink:
      "https://www.archive.org/download/truth_about_jesus_librivox/truth_about_jesus_librivox_64kb_mp3.zip",
    imgSrc: require("../assets/books/Truth_Jesus_Myth_1108.jpg"),
    totalTime: "5:40:15",
    totaltimesecs: 20415,
    authors: [
      {
        id: "4100",
        first_name: " M. M.",
        last_name: "Mangasarian",
        dob: "1859",
        dod: "1943",
      },
    ],
  },
  {
    key: "78",
    title: "Foolish Dictionary",
    description:
      '"The Foolish Dictionary" was written by "Gideon Wurdz" (the pen name for Charles Wayland Towne) and was published in 1904. According to the beginning of the book, it is "An exhausting work of reference to un-certain English words, their origin, meaning, legitimate and illegitimate use..." This a a short but amusing dictionary which "redefines" words in some interesting ways. Funny and sometimes bizarre observations are sprinkled throughout. In keeping with LibriVox policy to read, rather than attempt to rewrite, books - even those with offensive content - nothing has been omitted. While many of the definitions may just seem confusing or "corny" to modern readers, there are a couple that also might be considered "objectionable," particularly in section 10, which contains offensive content of a racial nature. \n\nSummary by Maddie',
    url_text_source: "https://www.gutenberg.org/etext/1989",
    language: "English",
    copyright_year: "1904",
    downloadLink:
      "https://www.archive.org/download/foolish_dictionary_librivox/foolish_dictionary_librivox_64kb_mp3.zip",
    imgSrc: require("../assets/books/Foolish_Dictionary_1107.jpg"),
    totalTime: "1:45:27",
    totaltimesecs: 6327,
    authors: [
      {
        id: "4101",
        first_name: "Charles Wayland",
        last_name: "Towne",
        dob: "1875",
        dod: "1965",
      },
    ],
  },
  {
    key: "79",
    title: "Ranald Bannerman's Boyhood",
    description:
      "George MacDonald is mainly known for his fantasy works and fairy tales such as At the Back of the North Wind and the Princess and the Goblin. However, during his life he was more famous for many more realistic novels. . . among them the somewhat autobiographical Ranald Bannerman's Boyhood.\n<p>This story of a young motherless boy growing up with his brothers in a Scottish manse is full of delightful characters. There is Kirsty, an enchanting Highland storyteller, Turkey, the intrepid cowherd, the evil Kelpie, and the lovely Elsie Duff. Throughout the twists and turns of his escapades and adventures Ranald learns from his father the important lessons of courage and integrity.</p><p>When Ranald Bannerman's Boyhood came out in 1871 the New York Independent praised it as \"full of sweetness, full of boy-life and true goodness\". Perhaps, but it is also a good story, from the master of storytellers. (Summary by Bookworm)",
    url_text_source: "https://www.gutenberg.org/etext/9301",
    language: "English",
    copyright_year: "1871",
    downloadLink:
      "https://www.archive.org/download/ranald_bannermans_boyhood_librivox/ranald_bannermans_boyhood_librivox_64kb_mp3.zip",
    imgSrc: require("../assets/books/220px-RoundKirsty'sFire (1).jpg"),
    totalTime: "7:04:48",
    totaltimesecs: 25488,
    authors: [
      {
        id: "631",
        first_name: "George",
        last_name: "MacDonald",
        dob: "1824",
        dod: "1905",
      },
    ],
  },
  {
    key: "81",
    title: "Dream Psychology",
    description:
      "Not a few serious-minded students, [...], have been discouraged from attempting a study of Freud's dream psychology. The book in which he originally offered to the world his interpretation of dreams was as circumstantial as a legal record to be pondered over by scientists at their leisure, not to be assimilated in a few hours by the average alert reader. In those days, Freud could not leave out any detail likely to make his extremely novel thesis evidentially acceptable to those willing to sift data. - Freud himself, however, realized the magnitude of the task which the reading of his magnum opus imposed upon those who have not been prepared for it by long psychological and scientific training and he abstracted from that gigantic work the parts which constitute the essential of his discoveries.The publishers of the present book deserve credit for presenting to the reading public the gist of Freud's psychology in the master's own words, and in a form which shall neither discourage beginners, nor appear too elementary to those who are more advanced in psychoanalytic study. - Dream psychology is the key to Freud's works and to all modern psychology. With a simple, compact manual such as Dream Psychology there shall be no longer any excuse for ignorance of the most revolutionary psychological system of modern times. (From the book introduction, by Andre Tridon)",
    url_text_source: "https://www.gutenberg.org/etext/15489",
    language: "English",
    copyright_year: "1920",
    downloadLink:
      "https://www.archive.org/download/dream_psychology_librivox/dream_psychology_librivox_64kb_mp3.zip",
    imgSrc: require("../assets/books/dream_psychology_1101.jpg"),
    totalTime: "6:04:02",
    totaltimesecs: 21842,
    authors: [
      {
        id: "312",
        first_name: "Sigmund",
        last_name: "Freud",
        dob: "1856",
        dod: "1939",
      },
    ],
  },
  {
    key: "83",
    title: "Vindication of the Rights of Woman",
    description:
      "Wollstonecraft (1759-1797) is best known for A Vindication of the Rights of Woman, in which she argued that women are not naturally inferior to men, but only appeared to be because they lacked education. She suggested that both men and women should be treated as rational beings and imagined a social order founded on reason. - Today, Wollstonecraft is considered a foundational thinker in feminist philosophy. Her early advocacy of women's equality and her attacks on conventional femininity and the degradation of women presaged the later emergence of the feminist political movement. Feminist scholars and activists have cited both her philosophical ideas and personal struggles as important influences in their work. <br><br>\n<em>This is one of the 12 Books That Changed the World by Melvyn Bragg.</em> (Summary from Wikipedia and Alex Foster)",
    url_text_source: "https://www.gutenberg.org/ebooks/3420",
    language: "English",
    copyright_year: "1792",
    downloadLink:
      "https://www.archive.org/download/vindication_woman_librivox/vindication_woman_librivox_64kb_mp3.zip",
    imgSrc: require("../assets/books/220px-Vindication1b.jpg"),
    totalTime: "9:46:16",
    totaltimesecs: 35176,
    authors: [
      {
        id: "1349",
        first_name: "Mary",
        last_name: "Wollstonecraft",
        dob: "1759",
        dod: "1797",
      },
    ],
  },
];

export const bestSellers = [
  {
    key: "84",
    title: "Getting of Wisdom",
    description:
      "The Getting of Wisdom tells the story of Laura Rambotham, a 12-year-old girl who is just starting at her boarding school. This is based on Henry Handel Richardson's experiences of her own school, the Presbyterian Ladies College in central Melbourne. The story goes through her friends and enemies and all the life of a boarding school in early 20th century Australia, and all the subjects and learning too. Laura learns a lot but her education does not satisfy her, and her social life is thrown upon her as very different from her peers. (Summary by Bronwyn Kate)",
    url_text_source: "https://www.gutenberg.org/ebooks/3728",
    language: "English",
    copyright_year: "1910",
    downloadLink:
      "https://www.archive.org/download/getting_wisdom_librivox/getting_wisdom_librivox_64kb_mp3.zip",
    imgSrc: require("../assets/books/The_Getting_of_Wisdom.jpg"),
    totalTime: "7:47:37",
    totaltimesecs: 28057,
    authors: [
      {
        id: "4103",
        first_name: " Henry Handel",
        last_name: "Richardson",
        dob: "1870",
        dod: "1946",
      },
    ],
  },
  {
    key: "85",
    title: "Consolation of Philosophy",
    description:
      "Consolation of Philosophy (Latin: Consolatio Philosophiae) is a philosophical work by Boethius written in about the year 524 AD. It has been described as the single most important and influential work in the West in medieval and early Renaissance Christianity, and is also the last great work that can be called Classical. <br><br> Consolation of Philosophy was written during Boethius' one year imprisonment while awaiting trial, and eventual horrific execution, for the crime of treason by Ostrogothic King Theodoric the Great. Boethius was at the very heights of power in Rome and was brought down by treachery. It was from this experience he was inspired to write a philosophical book from prison reflecting on how a lord's favor could change so quickly and why friends would turn against him. It has been described as “by far the most interesting example of prison literature the world has ever seen.” <br><br> The Consolation of Philosophy stands, by its note of fatalism and its affinities with the Christian doctrine of humility, midway between the heathen philosophy of Seneca the Younger and the later Christian philosophy of consolation represented by Thomas Aquinas. <br><br>The book is heavily influenced by Plato and his dialogues (as was Boethius himself). (Summary from Wikipedia)",
    url_text_source: "https://www.gutenberg.org/etext/14328",
    language: "English",
    copyright_year: "1900",
    downloadLink:
      "https://www.archive.org/download/the_consolation_of_philosophy_librivox/the_consolation_of_philosophy_librivox_64kb_mp3.zip",
    imgSrc: require("../assets/books/img3.jpg"),
    totalTime: "5:13:04",
    totaltimesecs: 18784,
    authors: [
      {
        id: "4104",
        first_name: " Anicius Manlius Severinus",
        last_name: "Boethius",
        dob: "c. 480",
        dod: "525",
      },
    ],
  },
  {
    key: "86",
    title: "Emma",
    description:
      "Sherry reads Jane Austen’s sparkling comedy of manners with wit and vivacity, and brings the characters to life. Mr. Woodhouse worries and frets, Miss Bates chatters on, and Emma blithely manipulates and misunderstands her friends and family until she finally learns her lesson! (Summary by Kara)",
    url_text_source: "https://www.gutenberg.org/etext/158",
    language: "English",
    copyright_year: "1815",
    downloadLink:
      "https://www.archive.org/download/emma_solo_librivox/emma_solo_librivox_64kb_mp3.zip",
    imgSrc: require("../assets/books/220px-EmmaTitlePage.jpg"),
    totalTime: "18:02:30",
    totaltimesecs: 64950,
    authors: [
      {
        id: "155",
        first_name: "Jane",
        last_name: "Austen",
        dob: "1775",
        dod: "1817",
      },
    ],
  },
  {
    key: "88",
    title: "Mrs. Caudle's Curtain Lectures",
    description:
      "Douglas William Jerrold (1803-1857) was the son of an actor manager. After some time in the Navy and as an apprentice printer he became a playwright and later a journalist. He was a contemporary and friend of Charles Dickens. As a journalist he worked for Punch magazine in which Mrs Caudle's Curtain Lectures were serialised, to be published in book form in 1846.Job Caudle, the 'hero' of the book is a Victorian shopkeeper whose wife finds she can only talk to him without interruption in bed. Caudle, who outlives his wife, finds he can no longer sleep easily because of his memory of these 'lectures' and resolves to exorcise his wife's memory by recording the lectures, it seems with a view to future publication for the edification of others. Jerrold's humour shines through this insight into Victorian middle class culture. (Summary by Martin Clifton)",
    url_text_source: "https://www.gutenberg.org/etext/6054",
    language: "English",
    copyright_year: "1846",
    downloadLink:
      "https://www.archive.org/download/mrs_caudles_curtain_lectures_librivox/mrs_caudles_curtain_lectures_librivox_64kb_mp3.zip",
    imgSrc: require("../assets/books/Mrs_Caudles_Curtain_Lectures_1105.jpg"),
    totalTime: "4:21:46",
    totaltimesecs: 15706,
    authors: [
      {
        id: "4105",
        first_name: " Douglas William",
        last_name: "Jerrold",
        dob: "1803",
        dod: "1857",
      },
    ],
  },
  {
    key: "90",
    title: "Importance of Being Earnest",
    description:
      'The Importance of Being Earnest is a classic comedy of manners in which two flippant young men, in order to impress their respected beloveds, pretend that their names are “Ernest,” which both young ladies believe confers magical qualities on the possessor. It was first performed for the public on February 14, 1895 at the St. James’ Theatre in London, and is regarded by many critics and scholars as being the wittiest play in the English language. (Summary from Wikipedia.org)<b>Characters:</b><em>John Worthing, J.P.</em> - Read by <a href="http://www.johngon.com" rel="nofollow">John Gonzalez</a><em>Algernon Moncrieff</em> - Read by <a href="http://www.gordmackenzie.com/" rel="nofollow">Gord Mackenzie</a><em>Rev. Canon Chasuble, D.D.</em> - Read by <a href="http://tis.goringe.net/" rel="nofollow">Chris Goringe</a><em>Merriman, Butler</em> - Read by Peter Yearsley<em>Lane, Manservant</em> - Read by <a href="http://dosemagazine.blogsome.com/" rel="nofollow">Hugh McGuire</a><em>Lady Bracknell</em> - Read by <a href="http://www.mediatinker.com/" rel="nofollow">Kristen McQuillin</a><em>Hon. Gwendolen Fairfax</em> - Read by Deana<em>Cecily Cardew</em> - Read by <a href="http://kayray.org/" rel="nofollow">Kara Shallenberg</a><em>Miss Prism, Governess</em> - Read by Sureka<em>Narrator</em> - Read by <a href="http://betsie.info" rel="nofollow">Betsie Bush</a><em>Project Editor</em> - <a href="http://www.writingshow.com/" rel="nofollow">Paula Berinstein</a>',
    url_text_source: "https://www.gutenberg.org/etext/844",
    language: "English",
    copyright_year: "1899",
    downloadLink:
      "https://www.archive.org/download/being_earnest_librivox/being_earnest_librivox_64kb_mp3.zip",
    imgSrc: require("../assets/books/Algy-and-Jack-1895.jpg"),
    totalTime: "2:18:00",
    totaltimesecs: 8280,
    authors: [
      {
        id: "114",
        first_name: "Oscar",
        last_name: "Wilde",
        dob: "1854",
        dod: "1900",
      },
    ],
  },
  {
    key: "93",
    title: "Story of a Stuffed Elephant",
    description:
      "The Story of a Stuffed Elephant is... well, the story of a Stuffed Elephant and the little boy who owns him, and his sister, and all their adventures. A delightful children's book by the author of The Bobbsey Twins series. (Summary by Vlooi and Kara)",
    url_text_source: "https://www.gutenberg.org/etext/19425",
    language: "English",
    copyright_year: "1922",
    downloadLink:
      "https://www.archive.org/download/stuffed_elephant_solo_librivox/stuffed_elephant_solo_librivox_64kb_mp3.zip",
    imgSrc: require("../assets/books/story_of_a_stuffed_elephant_1012.jpg"),
    totalTime: "2:09:50",
    totaltimesecs: 7790,
    authors: [
      {
        id: "806",
        first_name: "Laura Lee",
        last_name: "Hope",
        dob: "",
        dod: "",
      },
    ],
  },
  {
    key: "94",
    title: "Wind in the Willows",
    description:
      "This much-loved story follows a group of animal friends in the English countryside as they pursue adventure … and as adventure pursues them! The chief characters - Mole, Rat, and Toad - generally lead upbeat and happy lives, but their tales are leavened with moments of terror, homesickness, awe, madcap antics, and derring-do.\nAlthough classed as children’s literature, The Wind in the Willows holds a gentle fascination for adults too. The vocabulary is decidedly not “Dick and Jane”, and a reader with a love of words will find new ones to treasure, even if well-equipped for the journey. Parents will appreciate the themes of loyalty, manners, self-restraint, and comradeship which are evident throughout the book. When the characters err, they are prompt to acknowledge it, and so a reading of this book can model good behavior to children, who will otherwise be enchanted with the many ways in which the lives of these bucolic characters differ from modern life.\nThis book was so successful that it enabled the author to retire from banking and take up a country life somewhat like that of his creations. It has been adapted for screen, stage, and even a ride at the original Disneyland.\n(Summary by Mark F. Smith)",
    url_text_source: "https://www.gutenberg.org/etext/289",
    language: "English",
    copyright_year: "1908",
    downloadLink:
      "https://www.archive.org/download/wind_in_the_willows_collab_librivox/wind_in_the_willows_collab_librivox_64kb_mp3.zip",
    imgSrc: require("../assets/books/The_Wind_in_the_Willows_cover.jpg"),
    totalTime: "6:30:07",
    totaltimesecs: 23407,
    authors: [
      {
        id: "1222",
        first_name: "Kenneth",
        last_name: "Grahame",
        dob: "1859",
        dod: "1932",
      },
    ],
  },
  {
    key: "96",
    title: "Junior Classics Volume 1: Fairy and Wonder Tales",
    description:
      "The purpose of The Junior Classics is to provide, in ten volumes containing about five thousand pages, a classified collection of tales, stories, and poems, both ancient and modern, suitable for boys and girls of from six to sixteen years of age. (summary from book introduction)This collection consists of Volume 1 of The Junior Classics, and it contains many well known stories in their original forms. Among stories from other authors, you'll find Hans Christian Anderson, Aesop, and the Grimm brothers.",
    url_text_source: "https://www.gutenberg.org/ebooks/3152",
    language: "English",
    copyright_year: "1912",
    downloadLink:
      "https://www.archive.org/download/junior_classics_vol1_librivox/junior_classics_vol1_librivox_64kb_mp3.zip",
    imgSrc: require("../assets/books/Junior_Classics_Vol_1_1108 (1).jpg"),
    totalTime: "14:17:52",
    totaltimesecs: 51472,
    authors: [
      {
        id: "6279",
        first_name: "William Allan",
        last_name: "Neilson",
        dob: "1869",
        dod: "1946",
      },
      {
        id: "4106",
        first_name: "William",
        last_name: "Patten",
        dob: "1868",
        dod: "1936",
      },
    ],
  },
  {
    key: "97",
    title: "Lord Jim",
    description:
      'A classic of early literary modernism, Lord Jim tells the story of a young "simple and sensitive character" who loses his honor in a display of cowardice at sea -- and of his expiation of that sin against his own "shadowy ideal of conduct" on the remote island of Patusan. The novel, written by Conrad for magazine serialization during an intense and chaotic ten months in 1899 and 1900, has, in the words of Thomas C. Moser, "the rare distinction of being a masterpiece in two separate genres. It is at once an exotic adventure story of the Eastern seas in the popular tradition of Kipling and Stevenson and a complexly wrought \'art novel\' in the tradition of Flaubert and James. (summary by Stewart Wills)',
    url_text_source: "https://www.gutenberg.org/etext/5658",
    language: "English",
    copyright_year: "1900",
    downloadLink:
      "https://www.archive.org/download/lord_jim_librivox/lord_jim_librivox_64kb_mp3.zip",
    imgSrc: require("../assets/books/LordJimCover.jpg"),
    totalTime: "14:25:17",
    totaltimesecs: 51917,
    authors: [
      {
        id: "95",
        first_name: "Joseph",
        last_name: "Conrad",
        dob: "1857",
        dod: "1924",
      },
    ],
  },
  {
    key: "99",
    title: "Villette",
    description:
      "After a tragedy in her family, Lucy Snow leaves her home to become a teacher at a French boarding school. Lucy soon begins to fight against an overwhelming sense of desolation. Meeting a charming doctor and a strict, peculiar schoolmaster changes her life forever-- and threatens to break her spirit. (summary by heatherausten)",
    url_text_source: "https://www.gutenberg.org/ebooks/9182",
    language: "English",
    copyright_year: "1853",
    downloadLink:
      "https://www.archive.org/download/villette_librivox/villette_librivox_64kb_mp3.zip",
    imgSrc: require("../assets/books/220px-Villette-Page_n8.jpg"),
    totalTime: "20:25:58",
    totaltimesecs: 73558,
    authors: [
      {
        id: "931",
        first_name: "Charlotte",
        last_name: "Brontë",
        dob: "1816",
        dod: "1855",
      },
    ],
  },
];

export const recentlyAdded = [
  {
    key: "100",
    title: "Narrative of Arthur Gordon Pym of Nantucket",
    description:
      "The Narrative of Arthur Gordon Pym of Nantucket is Edgar Allan Poe’s only complete novel, published in 1838.<br><br>The work relates the tale of the young Arthur Gordon Pym who stows away aboard a whaling ship called Grampus. Various adventures and mis-adventures befall Pym including shipwreck, mutiny and cannibalism. The story starts out as a fairly conventional adventure at sea, but it becomes increasingly strange and hard to classify in later chapters, involving religious symbolism and the Hollow Earth. (Summary from Wikipedia)",
    url_text_source: "https://www.gutenberg.org/ebooks/2149",
    language: "English",
    copyright_year: "1838",
    downloadLink:
      "https://www.archive.org/download/narrative_gordon_pym_librivox/narrative_gordon_pym_librivox_64kb_mp3.zip",
    imgSrc: require("../assets/books/Pym_1938_book_cover.jpg"),
    totalTime: "6:22:12",
    totaltimesecs: 22932,
    authors: [
      {
        id: "21",
        first_name: "Edgar Allan",
        last_name: "Poe",
        dob: "1809",
        dod: "1849",
      },
    ],
  },
  {
    key: "104",
    title: "Merry Adventures of Robin Hood",
    description:
      'Robin Hood is the archetypal English folk hero; a courteous, pious and swashbuckling outlaw of the mediæval era who, in modern versions of the legend, is famous for robbing the rich to feed the poor and fighting against injustice and tyranny. He operates with his "seven score" (140 strong) group of fellow outlawed yeomen – named the Merry Men. He and his band are usually associated with Sherwood Forest, Nottinghamshire.<br><br>The Victorian era generated its own distinct versions of Robin Hood. The traditional tales were often adapted for children, most notably in Howard Pyle\'s Merry Adventures of Robin Hood. These versions firmly stamp Robin as a staunch philanthropist, a man who takes from the rich to give to the poor.(Summary from Wikipedia)\n\n\n\n\n\n\n\n\n\n\n\n',
    url_text_source: "https://www.gutenberg.org/etext/964",
    language: "English",
    copyright_year: "1883",
    downloadLink:
      "https://www.archive.org/download/merry_adventures_robin_hood_librivox/merry_adventures_robin_hood_librivox_64kb_mp3.zip",
    imgSrc: require("../assets/books/1883_decorative_title_page (1).jpg"),
    totalTime: "11:00:49",
    totaltimesecs: 39649,
    authors: [
      {
        id: "303",
        first_name: "Howard",
        last_name: "Pyle",
        dob: "1853",
        dod: "1911",
      },
    ],
  },
  {
    key: "105",
    title: "Wives and Daughters",
    description:
      "If you like Jane Austen, you will probably like this book!Mrs. Gaskell, as she was often referred to, is considered one of the greatest British novelists of the Victorian era. She was one of the earliest novelists ever to use dialect in her works, finding often that no word but the vernacular would suffice to convey the meaning she wanted to achieve. She was the author of The Life of Charlotte Brontë, a much-acclaimed and sometimes-reviled biography of her friend and peer.Wives and Daughters revolves around Molly Gibson, only daughter of a widowed doctor living in a provincial English town in the 1830s. The novel was first published in the Cornhill Magazine as a serial from August 1864 to January 1866. When Mrs Gaskell died suddenly in 1865, it was not quite complete, and the last section was written by Frederick Greenwood. (Summary from Wikipedia)",
    url_text_source: "https://www.gutenberg.org/etext/4274",
    language: "English",
    copyright_year: "1866",
    downloadLink:
      "https://www.archive.org/download/wives_daughters_0710_librivox/wives_daughters_0710_librivox_64kb_mp3.zip",
    imgSrc: require("../assets/books/220px-Wives_and_Daughters_1866.jpg"),
    totalTime: "27:15:55",
    totaltimesecs: 98155,
    authors: [
      {
        id: "4108",
        first_name: " Elizabeth Cleghorn",
        last_name: "Gaskell",
        dob: "1810",
        dod: "1865",
      },
    ],
  },
  {
    key: "106",
    title: "Poems Every Child Should Know",
    description:
      "This anthology of poetry, published in 1904, contains such favorites as The Raven, My Shadow, and The Village Blacksmith, as well as many lovely poems that may be unfamiliar. Most of the poems in this collection are short enough for children to memorize.",
    url_text_source: "https://www.gutenberg.org/etext/16436",
    language: "English",
    copyright_year: "1904",
    downloadLink:
      "https://www.archive.org/download/poems_every_child_should_know_librivox/poems_every_child_should_know_librivox_64kb_mp3.zip",
    imgSrc: require("../assets/books/poems_every_child_should_know_1012.jpg"),
    totalTime: "8:07:47",
    totaltimesecs: 29267,
    authors: [
      {
        id: "4109",
        first_name: " Mary E.",
        last_name: "Burt",
        dob: "1850",
        dod: "1918",
      },
      {
        id: "18",
        first_name: "",
        last_name: "Various",
        dob: "",
        dod: "",
      },
    ],
  },
  {
    key: "119",
    title: "Art of War",
    description:
      '"The Art of War is a Chinese military treatise written during the 6th century BC by Sun Tzu. Composed of 13 chapters, each of which is devoted to one aspect of warfare, it has long been praised as the definitive work on military strategies and tactics of its time. The Art of War is one of the oldest and most famous studies of strategy and has had a huge influence on both military planning and beyond. The Art of War has also been applied, with much success, to business and managerial strategies." (summary from Wikipedia)',
    url_text_source: "https://www.gutenberg.org/etext/17405",
    language: "English",
    copyright_year: "1910",
    downloadLink:
      "https://www.archive.org/download/art_of_war_librivox/art_of_war_librivox_64kb_mp3.zip",
    imgSrc: require("../assets/books/Art_War_1107.jpg"),
    totalTime: "1:12:14",
    totaltimesecs: 4334,
    authors: [
      {
        id: "3534",
        first_name: "",
        last_name: "Sun Tzu 孙武",
        dob: "554 BCE",
        dod: "496 BCE",
      },
    ],
  },
  {
    key: "120",
    title: "Three Musketeers",
    description:
      "The Three Musketeers (Les Trois Mousquetaires) is a novel by Alexandre Dumas, père. It recounts the adventures of a young man named d'Artagnan after he leaves home to become a musketeer. D'Artagnan is not one of the musketeers of the title; those are his friends Athos, Porthos, and Aramis -- inseparable friends who live by the motto, \"One for all, and all for one\".<br><br>\nThe Three Musketeers was first published in serial form in the magazine Le Siècle between March and July 1844. Dumas claimed it was based on manuscripts he had discovered in the Bibliothèque Nationale. It was later proven that Dumas had based his work on the book Mémoires de Monsieur D'Artagnan, capitaine lieutenant de la première compagnie des Mousquetaires du Roi (Memoirs of Mister D'Artagnan, Lieutenant Captain of the first company of the King's Musketeers) by Gatien de Courtilz de Sandras (Cologne, 1700). <br><br>\nDumas' version of the story covers the adventures of D'Artagnan and his friends from 1625 to 1628, as they are involved in intrigues involving the weak King Louis XIII of France, his powerful and cunning advisor Cardinal Richelieu, the beautiful Queen Anne of Austria, her English lover, George Villiers, 1st Duke of Buckingham, and the Siege of La Rochelle. Adding to the intrigue are the mysterious Milady de Winter, and Richelieu's right-hand man, the Comte de Rochefort. (summary from wikipedia)\nGet <a href=\"http://librivox.org/twenty-years-after-by-alexandre-dumas/\"> Twenty Years After</a> here.\nGet <a href=\"http://librivox.org/the-man-in-the-iron-mask-by-alexandre-dumas/\"> The Man in the Iron Mask</a> here.",
    url_text_source: "https://www.gutenberg.org/etext/1257",
    language: "English",
    copyright_year: "1846",
    downloadLink:
      "https://www.archive.org/download/three_musketeers_0712_librivox/three_musketeers_0712_librivox_64kb_mp3.zip",
    imgSrc: require("../assets/books/Dartagnan-musketeers.jpg"),
    totalTime: "24:49:46",
    totaltimesecs: 89386,
    authors: [
      {
        id: "431",
        first_name: "Alexandre",
        last_name: "Dumas",
        dob: "1802",
        dod: "1870",
      },
    ],
  },
  {
    key: "123",
    title: "Amateur Cracksman",
    description:
      '"I\'d tasted blood, and it was all over with me. Why should I work when I could steal? Why settle down to some humdrum uncongenial billet, when excitement, romance, danger and a decent living were all going begging together?"- A. J. Raffles, The Ides of March.The Amateur Cracksman is the first collection of stories about A. J. Raffles, gentleman, cricketer, and thief. After stopping his old school friend, Bunny Manders, from a desperate attempt at suicide, Raffles introduces the unsuspecting Bunny to a new way of earning a living, burglary. Though frequently horrified by Raffles\'s actions, the conscience-stricken Bunny stands by him through all their adventures, firm to his promise, "When you want me, I\'m your man!" (Summary by Kristin Hughes)',
    url_text_source: "https://www.gutenberg.org/etext/706",
    language: "English",
    copyright_year: "1899",
    downloadLink:
      "https://www.archive.org/download/amateur_cracksman_librivox/amateur_cracksman_librivox_64kb_mp3.zip",
    imgSrc: require("../assets/books/220px-The_Ides_of_March_03.jpg"),
    totalTime: "5:25:24",
    totaltimesecs: 19524,
    authors: [
      {
        id: "1096",
        first_name: "E. W.",
        last_name: "Hornung",
        dob: "1866",
        dod: "1921",
      },
    ],
  },
  {
    key: "124",
    title: "Girl of the Limberlost",
    description:
      "A Girl of the Limberlost, a novel written by the American writer and naturalist Gene Stratton-Porter, was first published in August, 1909. The story takes place in Indiana, in and around the Limberlost Swamp, during the early 20th century. (Summary from Wikipedia)",
    url_text_source: "https://www.gutenberg.org/etext/125",
    language: "English",
    copyright_year: "1909",
    downloadLink:
      "https://www.archive.org/download/girl_limberlost_librivox/girl_limberlost_librivox_64kb_mp3.zip",
    imgSrc: require("../assets/books/220px-Girl_of_the_Limberlost_Title_page.png"),
    totalTime: "11:25:09",
    totaltimesecs: 41109,
    authors: [
      {
        id: "801",
        first_name: "Gene",
        last_name: "Stratton-Porter",
        dob: "1863",
        dod: "1924",
      },
    ],
  },
  {
    key: "126",
    title: "Rosary",
    description:
      "\"The Rosary\" is a beautiful love story. Gareth Dalmain falls in love with the Honorable Jane Champion. She loves him back, but does not trust his love, as is known to be a great lover of beauty, and she - alas - is very plain. Just as she decides to trust him, she receives news that he has been blinded in a hunting accident. She wants to go visit him, but he will not receive her, as he wants only her love - not her pity. With the help of their mutual friend and doctor, she gets the position as his nurse under a presumed name, and thereby gets to know the 'new' Gareth. (Summary by Maria Elmvang)",
    url_text_source: "https://www.gutenberg.org/etext/3659",
    language: "English",
    copyright_year: "1909",
    downloadLink:
      "https://www.archive.org/download/rosary_librivox/rosary_librivox_64kb_mp3.zip",
    imgSrc: require("../assets/books/FlorenceLBarclay_TheRosary.jpg"),
    totalTime: "10:50:43",
    totaltimesecs: 39043,
    authors: [
      {
        id: "1405",
        first_name: "Florence Louisa",
        last_name: "Barclay",
        dob: "1862",
        dod: "1921",
      },
    ],
  },
  {
    key: "127",
    title: "Golden mean to 5000 digits",
    description:
      "The golden section is a line segment sectioned into two according to the golden ratio. The total length a+b is to the longer segment a as a is to the shorter segment b. In mathematics and the arts, two quantities are in the golden ratio if the ratio between the sum of those quantities and the larger one is the same as the ratio between the larger one and the smaller. The golden ratio is a mathematical constant, approximately 1.6180339887.... At least since the Renaissance, many artists and architects have proportioned their works to approximate the golden ratio—especially in the form of the golden rectangle, in which the ratio of the longer side to the shorter is the golden ratio—believing this proportion to be aesthetically pleasing. Mathematicians have studied the golden ratio because of its unique and interesting properties. (From Wikipedia)",
    url_text_source: "https://www.gutenberg.org/etext/744",
    language: "English",
    copyright_year: "0",
    downloadLink:
      "https://www.archive.org/download/golden_mean_to_5000_digits_0810_librivox/golden_mean_to_5000_digits_0810_librivox_64kb_mp3.zip",
    imgSrc: require("../assets/books/Golden_mean_5000_digits_1201.jpg"),
    totalTime: "0:54:13",
    totaltimesecs: 3253,
    authors: [
      {
        id: "4112",
        first_name: " Jerry",
        last_name: "Bonnell",
        dob: "",
        dod: "",
      },
      {
        id: "6210",
        first_name: " Robert",
        last_name: "Nemiroff",
        dob: "",
        dod: "",
      },
    ],
  },
];

export const popularFiction = [
  {
    key: "128",
    title: "Queen Lucia",
    description:
      "E. F. Benson was born at Wellington College in Berkshire, where his father, who later went on to become the Archbishop of Canterbury, was the first Headmaster. He wrote 105 books in all.Queen Lucia (first published in 1920) was the first of Benson’s ‘Mapp and Lucia’ novels of which there were six. This first book is a comedy of manners based in the provincial village of Riseholme, where Emmeline Lucas (the Queen Lucia of the title) presides over the social and artistic universe of the gullible residents. Her aide-de-camp in these matters is the somewhat effete Georgie Pillson and the chief competitor for her ‘crown’ is Daisy Quantock. The scandal of the Guru, the psychical goings on with Princess Popoffski and the arrival into the sleepy village of a famous Prima Donna all conspire to threaten her supremacy… </br>(summary by Martin Clifton)",
    url_text_source: "https://www.gutenberg.org/etext/6840",
    language: "English",
    copyright_year: "1920",
    downloadLink:
      "https://www.archive.org/download/queen_lucia_librivox/queen_lucia_librivox_64kb_mp3.zip",
    imgSrc: require("../assets/books/Queen_Lucia_1107.jpg"),
    totalTime: "8:45:06",
    totaltimesecs: 31506,
    authors: [
      {
        id: "1776",
        first_name: "E. F.",
        last_name: "Benson",
        dob: "1867",
        dod: "1940",
      },
    ],
  },
  {
    key: "132",
    title: "Last of the Mohicans - A Narrative of 1757 (version 2)",
    description:
      "This story is set in the British province of New York during the French and Indian War, and concerns a Huron massacre (with passive French acquiescence) of from 500 to 1,500 unarmed Anglo-American troops, who had honorably surrendered at Fort William Henry, plus some women and servants; the kidnapping of two sisters, daughters of the British commander; and their rescue by Hawkeye, the last two Mohicans, and others. Parts of the story may have been derived from the capture and death of Jane McCrea in July 1777 near Fort Edward, New York, by members of an Algonquian tribe. (Summary from Wikipedia)",
    url_text_source: "https://www.gutenberg.org/etext/940",
    language: "English",
    copyright_year: "1826",
    downloadLink:
      "https://www.archive.org/download/lastofthemohicans_0809_librivox/lastofthemohicans_0809_librivox_64kb_mp3.zip",
    imgSrc: require("../assets/books/img4.jpg"),
    totalTime: "15:24:17",
    totaltimesecs: 55457,
    authors: [
      {
        id: "1286",
        first_name: "James Fenimore",
        last_name: "Cooper",
        dob: "1789",
        dod: "1851",
      },
    ],
  },
  {
    key: "133",
    title: "Jane Eyre",
    description:
      "Jane Eyre is not your typical romance. It is a story of a woman who struggles with a world in which she doesn't quite fit. Once finished with her schooling, and with no family that really cares of her she strikes out on her own as a governess. Jane Eyre searches for love, someone to care for her, and someone to care for, and finds it in unexpected places. (summary by Kri)",
    url_text_source: "https://www.gutenberg.org/etext/1260",
    language: "English",
    copyright_year: "1847",
    downloadLink:
      "https://www.archive.org/download/jane_eyre_librivox/jane_eyre_librivox_64kb_mp3.zip",
    imgSrc: require("../assets/books/Jane_Eyre_title_page.jpg"),
    totalTime: "20:36:36",
    totaltimesecs: 74196,
    authors: [
      {
        id: "931",
        first_name: "Charlotte",
        last_name: "Brontë",
        dob: "1816",
        dod: "1855",
      },
    ],
  },
  {
    key: "134",
    title: "Eclogues",
    description:
      'This book of poems, written between 42 en 39 BC, was a bestseller in ancient Rome, and still holds a fascination today. Held to be divinely inspired not only by the Romans themselves, but by the Medieval Catholic church, The Eclogues is one of the most beloved collections of Latin short poetry. (Summary by Caeristhiona)<BR> The translator of this version is unknown. This recording is done in the form of a dramatic reading: in each eclogue, every character is read by a different Librivox volunteer.<BR><BR>\nReaders of the eclogues that were done by multiple readers:<BR><BR>\nEclogue 1<BR>\nMeliboeus: <a href="http://librivox.org/reader/26">Denny Sayers</a><br>Tityrus: <a href="http://kayray.org/">Kara Shallenberg</a><br>\nEclogue 3<BR>\nMenalcas: <a href="http://librivox.org/reader/2961">Leni Ribeiro</a><br>Damoetas: <a href="http://librivox.org/reader/87">Rosalind Wills</a><br>Palaemon: <a href="http://kayray.org/">Kara Shallenberg</a><br>\nEclogue 5<BR>\nMenalcas: <a href="http://librivox.org/reader/2961">Leni Ribeiro</a><br>Mopsus: <a href="http://librivox.org/reader/1724">Anna Simon</a><br>\nEclogue 7<BR>\nMeliboeus: <a href="http://librivox.org/reader/26">Denny Sayers</a><br>\nCorydon: <a href="http://librivox.org/reader/2961">Leni Ribeiro</a><br>\nTityrus: <a href="http://librivox.org/reader/1724">Anna Simon</a><br>\nEclogue 8<BR>\nPollio: <a href="http://librivox.org/reader/1724">Anna Simon</a><br>\nDamon: <a href="http://librivox.org/reader/2607">Ruthie Golding</a><br>\nAlphesiboeus: <a href="http://frisco-squid.blogspot.com/">Squid Varilekova</a><br>\nEclogue 9<BR>\nLycidas: <a href="www.gregelmensdorp.com">Greg Elmensdorp</a><br>\nMoeris: <a href="http://librivox.org/reader/2961">Leni Ribeiro</a><br><BR>\nAlso available: <a href="http://librivox.org/eclogae-by-publius-vergilius-maro/">a Librivox recording of The Eclogues in their original Latin.</a>',
    url_text_source: "https://www.gutenberg.org/etext/230",
    language: "English",
    copyright_year: "0",
    downloadLink:
      "https://www.archive.org/download/eclogues_0810_librivox/eclogues_0810_librivox_64kb_mp3.zip",
    imgSrc: require("../assets/books/330px-RomanVirgilFolio001rEclogues.jpg"),
    totalTime: "1:08:21",
    totaltimesecs: 4101,
    authors: [
      {
        id: "6359",
        first_name: "",
        last_name: "Virgil",
        dob: "70 BCE",
        dod: "19 BCE",
      },
    ],
  },
  {
    key: "136",
    title: "Around the World in Seventy-Two Days",
    description:
      "This is a true account by American woman journalist who, in 1889, set out to see whether she could beat the fictional journey in Jules Verne’s 1873 novel, <em>Around the World in Eighty Days</em>. Wearing one dress and carrying one handbag, Elizabeth Cochrane Seaman (pen name “Nellie Bly”), reported her travels back to avid readers in America. (Summary by Mary Reagan)",
    url_text_source:
      "https://digital.library.upenn.edu/women/bly/world/world.html",
    language: "English",
    copyright_year: "1890",
    downloadLink:
      "https://www.archive.org/download/seventy_two_days_librivox/seventy_two_days_librivox_64kb_mp3.zip",
    imgSrc: require("../assets/books/Around_the_World_in_Seventy-Two_Days.jpg"),
    totalTime: "6:05:31",
    totaltimesecs: 21931,
    authors: [
      {
        id: "4117",
        first_name: " Nellie",
        last_name: "Bly",
        dob: "1864",
        dod: "1922",
      },
    ],
  },
  {
    key: "137",
    title: "My Man Jeeves",
    description:
      "Bertram Wooster is an English gentleman living in New York, who seems to get himself into all sorts of jams. It’s up to his manservant Jeeves to come up with the plan to save the day from unpleasant houseguests, stingy uncles, broken hearts, and hard-partying aunts. (Summary by Mark Nelson)",
    url_text_source: "https://www.gutenberg.org/etext/8164",
    language: "English",
    copyright_year: "1919",
    downloadLink:
      "https://www.archive.org/download/my_man_jeeves_librivox/my_man_jeeves_librivox_64kb_mp3.zip",
    imgSrc: require("../assets/books/MyManJeeves.jpg"),
    totalTime: "5:12:51",
    totaltimesecs: 18771,
    authors: [
      {
        id: "420",
        first_name: "P. G.",
        last_name: "Wodehouse",
        dob: "1881",
        dod: "1975",
      },
    ],
  },
  {
    key: "138",
    title: "Ballad of John Silver",
    description:
      "LibriVox volunteers bring you nine different recordings of\n<em>A Ballad of John Silver</em>, by John Masefield, to celebrate <a href='http://en.wikipedia.org/wiki/Talk_like_a_pirate_day'>\nInternational Talk Like a Pirate Day</a>. This was the weekly poetry project for the week of September 17th, 2006.",
    url_text_source: "https://www.archive.org/details/SaltWaterBallads",
    language: "English",
    copyright_year: "1902",
    downloadLink:
      "https://www.archive.org/download/ballad_john_silver_librivox/ballad_john_silver_librivox_64kb_mp3.zip",
    imgSrc: require("../assets/books/Ballad_John_Silver_1109.jpg"),
    totalTime: "00:19:42",
    totaltimesecs: 1182,
    authors: [
      {
        id: "722",
        first_name: "John",
        last_name: "Masefield",
        dob: "1878",
        dod: "1967",
      },
    ],
  },
  {
    key: "139",
    title: "Calendar of Sonnets",
    description:
      "Helen Hunt Jackson is probably most famous for her work on behalf of Native Americans’ rights. However, this short volume presents a sonnet for each month of the year, devoted simply and beautifully to the shifting wonder of nature through the seasons.\n(Summary by Laura Fox)",
    url_text_source: "https://www.gutenberg.org/etext/9825",
    language: "English",
    copyright_year: "1886",
    downloadLink:
      "https://www.archive.org/download/calendar_of_sonnets_librivox/calendar_of_sonnets_librivox_64kb_mp3.zip",
    imgSrc: require("../assets/books/Calendar_Sonnets_1104.jpg"),
    totalTime: "00:15:21",
    totaltimesecs: 921,
    authors: [
      {
        id: "72",
        first_name: "Helen Hunt",
        last_name: "Jackson",
        dob: "1830",
        dod: "1885",
      },
    ],
  },
  {
    key: "140",
    title: "Christmas Carol",
    description:
      "A classic tale of what comes to those whose hearts are hard. In a series of ghostly visits, Scrooge visits his happy past, sees the difficulties of the present, views a bleak future, and in the end amends his mean ways. (Summary written by Kristen McQuillin)",
    url_text_source: "https://www.gutenberg.org/etext/46",
    language: "English",
    copyright_year: "1843",
    downloadLink:
      "https://www.archive.org/download/A_Christmas_Carol/A_Christmas_Carol_64kb_mp3.zip",
    imgSrc: require("../assets/books/Charles_Dickens-A_Christmas_Carol-Cloth-First_Edition_1843.jpg"),
    totalTime: "3:14:29",
    totaltimesecs: 11669,
    authors: [
      {
        id: "91",
        first_name: "Charles",
        last_name: "Dickens",
        dob: "1812",
        dod: "1870",
      },
    ],
  },
  {
    key: "141",
    title: "Connecticut Yankee in King Arthur's Court",
    description:
      "Come and hear the strange tale of The Boss Hank Morgan, a modern day (at the time of publication) Connecticut Yankee who inexplicably finds himself transported to the court of the legendary King Arthur (as the title of the book implies). Hank, or simply, The Boss, as he comes to be most frequently known, quickly uses his modern day knowledge and education to pass himself off as a great magician, to get himself out of all sorts of surprising, (and frequently amusing) situations, as well as to advance the technological and cultural status of the nation in which he finds himself.In the rather un-subtle sub-text of the story, Twain uses The Boss to express a surprisingly pragmatic and frequently contradictory philosophy. The Boss explores the relative merits of Democracy, and Monarchy, he expresses his views on the “Nature v. Nurture” debate, he frequently speaks forcefully against an established Church, but just as strongly advocates for religion and a variety of churches (just not a compulsory one) and he devotes at least one afternoon to introducing his companions to the concept of inflation. In a far more subtle, yet no less forceful manner, the Boss shares with the reader some views about taxation, slavery (both literal and wage slavery), trade unions, the origins of the German language, the nature of marriage, and probably most powerfully, death.It is a tall order for a relatively brief text, but Twain manages it all with surprising clarity. No one will agree fully with the Boss on all of these matters, and I would be surprised if Twain himself would. In fact the Boss’s views are so pragmatic, and often contradictory, the reader is left to wonder if Twain himself is alternately speaking through the Boss, and setting him up as a straw man. Either way it is a delightful story and a great piece of American Literature, to say nothing of an excellent argument for education.\n\n(Review written by Steve Andersen)",
    url_text_source: "https://www.gutenberg.org/etext/86",
    language: "English",
    copyright_year: "1889",
    downloadLink:
      "https://www.archive.org/download/connecticutyankee_librivox/connecticutyankee_librivox_64kb_mp3.zip",
    imgSrc: require("../assets/books/220px-Connecticut_Yankee4_new.jpg"),
    totalTime: "13:42:35",
    totaltimesecs: 49355,
    authors: [
      {
        id: "9",
        first_name: "Mark",
        last_name: "Twain",
        dob: "1835",
        dod: "1910",
      },
    ],
  },
];

export const category = [
  {
    key: Math.random(),
    label: "Fiction",
    src: require("../assets/book1.jpg"),
  },
  {
    key: Math.random(),
    label: "Non-Fiction",
    src: require("../assets/book2.jpg"),
  },
  {
    key: Math.random(),
    label: "Biographies",
    src: require("../assets/book3.jpeg"),
  },
  {
    key: Math.random(),
    label: "History",
    src: require("../assets/book4.png"),
  },
  {
    key: Math.random(),
    label: "Science",
    src: require("../assets/book5.jpg"),
  },
  {
    key: Math.random(),
    label: "Philosophy",
    src: require("../assets/book1.jpg"),
  },
  {
    key: Math.random(),
    label: "Literature",
    src: require("../assets/book2.jpg"),
  },
  {
    key: Math.random(),
    label: "Adventure",
    src: require("../assets/book3.jpeg"),
  },
  {
    key: Math.random(),
    label: "Personal Growth",
    src: require("../assets/book4.png"),
  },
  {
    key: Math.random(),
    label: "Business",
    src: require("../assets/book5.jpg"),
  },
];

export const archivesData = [
  {
    key: Math.random(),
    title: "1984",
    author: "George Orwell",
    publishedDate: "June 8, 1949",
    isbn: "978-0451524935",
    publisher: "Signet Classics",
    pages: 328,
    format: "Paperback",
    src: require("../assets/book2.jpg"),
    desc: "George Orwell is a British author best known for his works Animal Farm and 1984. His writing often critiques totalitarianism and explores the impact of political ideologies on individuals and society. In Animal Farm, Orwell uses a group of farm animals to satirize the events leading up to the Russian Revolution and the early years of the Soviet Union. 1984, on the other hand, imagines a dystopian future where the government has complete control over people's lives, and explores the themes of surveillance, propaganda, and the nature of truth.",
  },
  {
    key: Math.random(),
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    publishedDate: "April 10, 1925",
    isbn: "978-0743273565",
    publisher: "Scribner",
    pages: 180,
    format: "Hardcover",
    src: require("../assets/book3.jpeg"),
    desc: "The Great Gatsby by F. Scott Fitzgerald is a classic American novel that portrays the decadence and excess of the 1920s Jazz Age. Set in the fictional town of West Egg on Long Island, the novel follows the mysterious and enigmatic Jay Gatsby as he tries to win back his lost love, Daisy Buchanan. Through Gatsby's lavish parties and extravagant lifestyle, Fitzgerald explores the themes of wealth, social class, and the corruption of the American Dream. The novel is known for its lyrical prose and vivid depictions of the era, as well as its commentary on the disillusionment and moral decay of the time.",
  },
  {
    key: Math.random(),
    title: "The Hitchhiker's Guide to the Galaxy",
    author: "Douglas Adams",
    publishedDate: "October 12, 1979",
    isbn: "978-0345391803",
    publisher: "Del Rey Books",
    pages: 224,
    format: "Paperback",
    src: require("../assets/book4.png"),
    desc: "The Hitchhiker's Guide to the Galaxy by Douglas Adams is a comedic science fiction series that follows the misadventures of an unwitting human named Arthur Dent and his alien friend Ford Prefect as they travel through space and time. The series is known for its irreverent humor, quirky characters, and satirical take on science fiction tropes. Adams uses the series to explore philosophical questions and poke fun at the absurdities of life, all while entertaining readers with his offbeat humor and zany plotlines.",
  },
  {
    key: Math.random(),
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    publishedDate: "July 29, 1954",
    isbn: "978-0544003415",
    publisher: "Mariner Books",
    pages: 1178,
    format: "Paperback",
    src: require("../assets/book5.jpg"),
    desc: "The Lord of the Rings is a beloved and epic high-fantasy novel written by J.R.R. Tolkien. It tells the story of a hobbit named Frodo Baggins, who embarks on a perilous journey to destroy the One Ring, a powerful artifact that holds the fate of Middle-earth in its grasp. Alongside his loyal friends and allies, Frodo faces numerous challenges and battles against ferocious enemies such as orcs, trolls, and dark wizards, while navigating through treacherous terrains, including mines and marshes.",
  },
];

export const savedData = [
  {
    key: Math.random(),
    title: "The Hitchhiker's Guide to the Galaxy",
    author: "Douglas Adams",
    publishedDate: "October 12, 1979",
    isbn: "978-0345391803",
    publisher: "Del Rey Books",
    pages: 224,
    format: "Paperback",
    src: require("../assets/book4.png"),
    desc: "The Hitchhiker's Guide to the Galaxy by Douglas Adams is a comedic science fiction series that follows the misadventures of an unwitting human named Arthur Dent and his alien friend Ford Prefect as they travel through space and time. The series is known for its irreverent humor, quirky characters, and satirical take on science fiction tropes. Adams uses the series to explore philosophical questions and poke fun at the absurdities of life, all while entertaining readers with his offbeat humor and zany plotlines.",
  },
  {
    key: Math.random(),
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    publishedDate: "July 29, 1954",
    isbn: "978-0544003415",
    publisher: "Mariner Books",
    pages: 1178,
    format: "Paperback",
    src: require("../assets/book5.jpg"),
    desc: "The Lord of the Rings is a beloved and epic high-fantasy novel written by J.R.R. Tolkien. It tells the story of a hobbit named Frodo Baggins, who embarks on a perilous journey to destroy the One Ring, a powerful artifact that holds the fate of Middle-earth in its grasp. Alongside his loyal friends and allies, Frodo faces numerous challenges and battles against ferocious enemies such as orcs, trolls, and dark wizards, while navigating through treacherous terrains, including mines and marshes.",
  },
  {
    key: Math.random(),
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    publishedDate: "July 11, 1960",
    isbn: "978-0446310789",
    publisher: "J. B. Lippincott & Co.",
    pages: 281,
    format: "Paperback",
    src: require("../assets/book1.jpg"),
    desc: "To Kill a Mockingbird by Harper Lee is a Pulitzer Prize-winning novel that explores themes of racial inequality, prejudice, and the loss of innocence through the eyes of a young girl in the 1930s American South. Set in the fictional town of Maycomb, Alabama, the novel follows Scout Finch as she learns about the world around her and witnesses the injustices faced by her black neighbors. Through the character of her father, the respected lawyer Atticus Finch, Lee challenges the racism and prejudice that were prevalent at the time, highlighting the importance of empathy and compassion in the face of adversity.",
  },
];

export const likedData = [
  {
    key: Math.random(),
    title: "1984",
    author: "George Orwell",
    publishedDate: "June 8, 1949",
    isbn: "978-0451524935",
    publisher: "Signet Classics",
    pages: 328,
    format: "Paperback",
    src: require("../assets/book2.jpg"),
    desc: "George Orwell is a British author best known for his works Animal Farm and 1984. His writing often critiques totalitarianism and explores the impact of political ideologies on individuals and society. In Animal Farm, Orwell uses a group of farm animals to satirize the events leading up to the Russian Revolution and the early years of the Soviet Union. 1984, on the other hand, imagines a dystopian future where the government has complete control over people's lives, and explores the themes of surveillance, propaganda, and the nature of truth.",
  },
  {
    key: Math.random(),
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    publishedDate: "April 10, 1925",
    isbn: "978-0743273565",
    publisher: "Scribner",
    pages: 180,
    format: "Hardcover",
    src: require("../assets/book3.jpeg"),
    desc: "The Great Gatsby by F. Scott Fitzgerald is a classic American novel that portrays the decadence and excess of the 1920s Jazz Age. Set in the fictional town of West Egg on Long Island, the novel follows the mysterious and enigmatic Jay Gatsby as he tries to win back his lost love, Daisy Buchanan. Through Gatsby's lavish parties and extravagant lifestyle, Fitzgerald explores the themes of wealth, social class, and the corruption of the American Dream. The novel is known for its lyrical prose and vivid depictions of the era, as well as its commentary on the disillusionment and moral decay of the time.",
  },
  {
    key: Math.random(),
    title: "The Hitchhiker's Guide to the Galaxy",
    author: "Douglas Adams",
    publishedDate: "October 12, 1979",
    isbn: "978-0345391803",
    publisher: "Del Rey Books",
    pages: 224,
    format: "Paperback",
    src: require("../assets/book4.png"),
    desc: "The Hitchhiker's Guide to the Galaxy by Douglas Adams is a comedic science fiction series that follows the misadventures of an unwitting human named Arthur Dent and his alien friend Ford Prefect as they travel through space and time. The series is known for its irreverent humor, quirky characters, and satirical take on science fiction tropes. Adams uses the series to explore philosophical questions and poke fun at the absurdities of life, all while entertaining readers with his offbeat humor and zany plotlines.",
  },
  {
    key: Math.random(),
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    publishedDate: "July 29, 1954",
    isbn: "978-0544003415",
    publisher: "Mariner Books",
    pages: 1178,
    format: "Paperback",
    src: require("../assets/book5.jpg"),
    desc: "The Lord of the Rings is a beloved and epic high-fantasy novel written by J.R.R. Tolkien. It tells the story of a hobbit named Frodo Baggins, who embarks on a perilous journey to destroy the One Ring, a powerful artifact that holds the fate of Middle-earth in its grasp. Alongside his loyal friends and allies, Frodo faces numerous challenges and battles against ferocious enemies such as orcs, trolls, and dark wizards, while navigating through treacherous terrains, including mines and marshes.",
  },
];

export default data;
