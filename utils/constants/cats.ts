type Cat = {
  slug: string;
  name: string;
  description: string;
  characteristics: {
    temperament: string;
    size: string;
    lifeExpectancy: string;
  };
  image: string;
  shortcutIcon: string;
  appleIcon: string;
};

export const CATS: Cat[] = [
  {
    slug: "ragdoll",
    name: "Ragdoll",
    description:
      "Known for their striking blue eyes and color point coats, Ragdolls are large, laid-back cats that love to follow their humans around. They're called Ragdolls because they tend to go limp when held, like a ragdoll. They're excellent family pets known for their gentle and affectionate nature.",
    characteristics: {
      temperament: "Gentle, relaxed, affectionate",
      size: "Large",
      lifeExpectancy: "12-17 years",
    },
    image: "https://allecan.github.io/cats/ragdoll.jpg",
    shortcutIcon: "https://allecan.github.io/cats/ragdoll-96x96.jpg",
    appleIcon: "https://allecan.github.io/cats/ragdoll-180x180.jpg",
  },
  {
    slug: "maine-coon",
    name: "Maine Coon",
    description:
      "The gentle giants of the cat world, Maine Coons are one of the largest domestic cat breeds. They're known for their luxurious long fur, distinctive ruff around their neck, and their sociable, dog-like personality. Despite their size, they're known as 'gentle giants' due to their sweet nature.",
    characteristics: {
      temperament: "Friendly, intelligent, gentle",
      size: "Very large",
      lifeExpectancy: "12-15 years",
    },
    image: "https://allecan.github.io/cats/maine-coon.jpg",
    appleIcon: "https://allecan.github.io/cats/maine-coon-180x180.jpg",
    shortcutIcon: "https://allecan.github.io/cats/maine-coon-96x96.jpg",
  },
  {
    slug: "persian",
    name: "Persian",
    description:
      "Recognizable by their long, luxurious coat and flat face, Persians are one of the most prestigious cat breeds. They're known for their sweet, gentle nature and calm demeanor. While they enjoy attention, they're not overly demanding and prefer a quiet, stable environment.",
    characteristics: {
      temperament: "Sweet, quiet, dignified",
      size: "Medium to large",
      lifeExpectancy: "10-15 years",
    },
    image: "https://allecan.github.io/cats/persian.jpg",
    appleIcon: "https://allecan.github.io/cats/persian-180x180.jpg",
    shortcutIcon: "https://allecan.github.io/cats/persian-96x96.jpg",
  },
  {
    slug: "siamese",
    name: "Siamese",
    description:
      "Siamese cats are one of the most distinctive breeds, known for their striking blue eyes, color-point coats, and vocal nature. They're highly intelligent, social cats that form strong bonds with their humans. They're famous for their loud, distinctive voices and demanding personalities.",
    characteristics: {
      temperament: "Vocal, intelligent, social",
      size: "Medium",
      lifeExpectancy: "15-20 years",
    },
    image: "https://allecan.github.io/cats/siamese.jpg",
    shortcutIcon: "https://allecan.github.io/cats/siamese-96x96.jpg",
    appleIcon: "https://allecan.github.io/cats/siamese-180x180.jpg",
  },
  {
    slug: "british-shorthair",
    name: "British Shorthair",
    description:
      "Famous for their dense, plush coat and round faces, British Shorthairs are known for their easygoing nature. They're patient, calm, and adaptable cats that make excellent family pets. The blue variety is particularly popular, though they come in many colors.",
    characteristics: {
      temperament: "Calm, patient, easygoing",
      size: "Medium to large",
      lifeExpectancy: "12-17 years",
    },
    image: "https://allecan.github.io/cats/british-shorthair.jpg",
    shortcutIcon: "https://allecan.github.io/cats/british-shorthair-96x96.jpg",
    appleIcon: "https://allecan.github.io/cats/british-shorthair-180x180.jpg",
  },
  {
    slug: "scottish-fold",
    name: "Scottish Fold",
    description:
      "Distinguished by their unique folded ears, Scottish Folds are known for their sweet expressions and rounded appearance. They're adaptable, affectionate cats that enjoy being around people but aren't overly demanding. They're known for sitting in a 'Buddha position' with their paws folded.",
    characteristics: {
      temperament: "Affectionate, intelligent, adaptable",
      size: "Medium",
      lifeExpectancy: "11-14 years",
    },
    image: "https://allecan.github.io/cats/scottish-fold.jpg",
    shortcutIcon: "https://allecan.github.io/cats/scottish-fold-96x96.jpg",
    appleIcon: "https://allecan.github.io/cats/scottish-fold-180x180.jpg",
  },
  {
    slug: "bengal",
    name: "Bengal",
    description:
      "With their wild appearance but domestic nature, Bengals are known for their distinctive spotted or marbled coat patterns. They're highly active, intelligent cats that love to play and climb. They often enjoy water and need plenty of environmental enrichment to stay happy.",
    characteristics: {
      temperament: "Active, intelligent, playful",
      size: "Medium to large",
      lifeExpectancy: "12-16 years",
    },
    image: "https://allecan.github.io/cats/bengal.jpg",
    shortcutIcon: "https://allecan.github.io/cats/bengal-96x96.jpg",
    appleIcon: "https://allecan.github.io/cats/bengal-180x180.jpg",
  },
  {
    slug: "sphynx",
    name: "Sphynx",
    description:
      "The Sphynx is famous for being hairless, though they may have a fine down on their skin. They're extremely affectionate and heat-seeking cats that love to cuddle with their humans. Despite their somewhat exotic appearance, they're known for their friendly, playful personalities.",
    characteristics: {
      temperament: "Affectionate, energetic, friendly",
      size: "Medium",
      lifeExpectancy: "12-14 years",
    },
    image: "https://allecan.github.io/cats/sphynx.jpg",
    shortcutIcon: "https://allecan.github.io/cats/sphynx-96x96.jpg",
    appleIcon: "https://allecan.github.io/cats/sphynx-180x180.jpg",
  },
  {
    slug: "russian-blue",
    name: "Russian Blue",
    description:
      "Known for their plush, silvery-blue coat and green eyes, Russian Blues are elegant and graceful cats. They're generally quiet, reserved with strangers but very affectionate with their families. They're also known for being good with children and other pets.",
    characteristics: {
      temperament: "Gentle, quiet, reserved",
      size: "Medium",
      lifeExpectancy: "15-20 years",
    },
    image: "https://allecan.github.io/cats/russian-blue.jpg",
    shortcutIcon: "https://allecan.github.io/cats/russian-blue-96x96.jpg",
    appleIcon: "https://allecan.github.io/cats/russian-blue-180x180.jpg",
  },
  {
    slug: "abyssinian",
    name: "Abyssinian",
    description:
      "Known for their distinctive ticked tabby coat and slender, athletic build, Abyssinians are one of the oldest known cat breeds. They're highly active, curious, and intelligent cats that love to explore and play. Often called the 'clowns of the cat world', they maintain a kitten-like playfulness well into adulthood.",
    characteristics: {
      temperament: "Active, playful, highly intelligent",
      size: "Medium",
      lifeExpectancy: "12-16 years",
    },
    image: "https://allecan.github.io/cats/abyssinian.jpg",
    shortcutIcon: "https://allecan.github.io/cats/abyssinian-96x96.jpg",
    appleIcon: "https://allecan.github.io/cats/abyssinian-180x180.jpg",
  },
] as const;
