"use client"
import { useEffect, useState } from 'react';

interface Document {
    title: string;
    text: string;
}

const long_documents_json = [
    {
      "title": "100 words on Axolotl",
      "text": "The axolotl ( ; from Classical Nahuatl: \u0101x\u014dl\u014dtl [a\u02d0\u02c8\u0283o\u02d0lo\u02d0t\u026c] ) (Ambystoma mexicanum) is a paedomorphic salamander closely related to the tiger salamander. It is unusual among amphibians in that it reaches adulthood without undergoing metamorphosis. Instead of taking to the land, adults remain aquatic and gilled. The species was originally found in several lakes underlying what is now Mexico City, such as Lake Xochimilco and Lake Chalco. These lakes were drained by Spanish settlers after the conquest of the Aztec Empire, leading to the destruction of much of the axolotl's natural habitat. As of 2020, the axolotl was near extinction",
      "word_count": 100,
      "url": "https://en.wikipedia.org/wiki/Axolotl",
      "categories": [
        "All articles containing potentially dated statements",
        "All articles needing additional references",
        "All articles with unsourced statements",
        "All pages needing factual verification",
        "Amphibians described in the 18th century",
        "Animal models",
        "Animal testing on amphibians",
        "Animals bred for albinism on a large scale",
        "Articles containing Classical Nahuatl-language text",
        "Articles containing potentially dated statements from 2020",
        "Articles needing additional references from May 2023",
        "Articles with 'species' microformats",
        "Articles with short description",
        "Articles with unsourced statements from February 2011",
        "Articles with unsourced statements from January 2017",
        "Articles with unsourced statements from October 2021",
        "CS1 Spanish-language sources (es)",
        "Commons category link is on Wikidata",
        "Critically endangered biota of Mexico",
        "Critically endangered fauna of North America",
        "Endemic amphibians of Mexico",
        "IUCN Red List critically endangered species",
        "Mole salamanders",
        "Pages including recorded pronunciations",
        "Pages using the Kartographer extension",
        "Pages using the Phonos extension",
        "Pages with Nahuatl languages IPA",
        "Population genetics",
        "Regenerative biomedicine",
        "Short description matches Wikidata",
        "Species that are or were threatened by invasive species",
        "Species that are or were threatened by pollution",
        "Taxa named by Frederick Polydore Nodder",
        "Taxa named by George Shaw",
        "Valley of Mexico",
        "Webarchive template wayback links",
        "Wikipedia articles incorporating a citation from the 1911 Encyclopaedia Britannica with Wikisource reference",
        "Wikipedia articles needing factual verification from November 2021",
        "Wikipedia articles needing page number citations from April 2016",
        "Wikipedia indefinitely move-protected pages",
        "Wikipedia pages semi-protected against vandalism"
      ],
      "images": [
        "https://upload.wikimedia.org/wikipedia/commons/7/75/Ambystoma_mexicanum_1zz.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/2/2b/Ambystoma_mexicanum_at_Vancouver_Aquarium.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/6/6a/Axolot%27s_gills_%28Ambystoma_mexicanum%29.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/d/d7/Axolot%27s_head_%28Ambystoma_mexicanum%29.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/5/5c/Axolotl-2193331_1280.webp",
        "https://upload.wikimedia.org/wikipedia/commons/5/58/Axolotl.ogg",
        "https://upload.wikimedia.org/wikipedia/commons/f/f6/AxolotlBE.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/2/24/Axolotl_Wild_Type.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/0/00/Axolotl_ganz.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/d/d1/Axolotl_in_a_Pet_store_in_Melbourne.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/0/02/Axolotl_with_Grit_XRay.png",
        "https://upload.wikimedia.org/wikipedia/commons/6/6c/Buccal_pumping.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/d/d1/En-us-axolotl.oga",
        "https://upload.wikimedia.org/wikipedia/commons/2/2c/Lake_Xochimilco_in_Southern_Mexico.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/8/8a/OOjs_UI_icon_edit-ltr.svg",
        "https://upload.wikimedia.org/wikipedia/commons/4/4b/Status_iucn3.1_CR.svg",
        "https://upload.wikimedia.org/wikipedia/commons/b/bb/Sunrise_in_Xochimilco_%28Amanecer_en_Xochimilco%29_2.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/f/fb/Three_Colors_of_Axolotl.jpg",
        "https://upload.wikimedia.org/wikipedia/en/4/4a/Commons-logo.svg",
        "https://upload.wikimedia.org/wikipedia/en/8/8a/OOjs_UI_icon_edit-ltr-progressive.svg",
        "https://upload.wikimedia.org/wikipedia/en/1/1b/Semi-protection-shackle.svg"
      ],
      "autocomplete": { "input": ["Axolotl"] }
    },
    {
      "title": "200 words on Psychrolutidae",
      "text": "The fish family Psychrolutidae (commonly known as blobfishes, south america river teacher, flathead sculpins, or tadpole sculpins) contains over 35 recognized species in 8 genera. This family consists of bottom-dwelling marine sculpins shaped like tadpoles, with large heads and bodies that taper back into small, flat tails. The skin is loosely attached and movable, and the layer underneath it is gelatinous. The eyes are placed high on the head, focused forward closer to the tip of the snout. Members of the family generally have large, leaf-like pectoral fins and lack scales, although some species are covered with soft spines. This is important to the species as the depths in which they live are highly pressurized and they are ambush/opportunistic/foraging predators that do not expend energy unless they are forced to. The blobfish has a short, broad tongue and conical teeth that are slightly recurved and are arranged in bands in irregular rows along the premaxillaries; canines are completely absent. Teeth are nonexistent on the palatines and vomer; which make up the hard palate. The blobfish also has a set of specialized pharyngeal teeth that are well developed and paired evenly along the upper and lower portions of the pharyngeal arch.",
      "word_count": 200,
      "url": "https://en.wikipedia.org/wiki/Psychrolutidae",
      "categories": [
        "Articles with 'species' microformats",
        "Articles with short description",
        "Perciformes families",
        "Psychrolutidae",
        "Short description matches Wikidata"
      ],
      "images": [
        "https://upload.wikimedia.org/wikipedia/commons/8/8a/OOjs_UI_icon_edit-ltr.svg",
        "https://upload.wikimedia.org/wikipedia/commons/b/be/Psychrolutes_phrictus.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/9/97/Psychrolutes_phrictus_1.jpg",
        "https://upload.wikimedia.org/wikipedia/en/8/8a/OOjs_UI_icon_edit-ltr-progressive.svg"
      ],
      "autocomplete": { "input": ["Psychrolutidae"] }
    },
    {
      "title": "300 words on Fossa (animal)",
      "text": "The fossa (Cryptoprocta ferox; FOSS-\u0259 or FOO-s\u0259; Malagasy: [\u02c8fus\u0259\u0325]) is a slender, long-tailed, cat-like mammal that is endemic to Madagascar. It is a member of the carnivoran family Eupleridae. The fossa is the largest mammalian carnivore on Madagascar and has been compared to a small cougar, as it has convergently evolved many cat-like features. Adults have a head-body length of 70\u201380 cm (28\u201331 in) and weigh between 5.5 and 8.6 kg (12 and 19 lb), with the males larger than the females. It has semi-retractable claws (meaning it can extend but not retract its claws fully) and flexible ankles that allow it to climb up and down trees head-first, and also support jumping from tree to tree. A larger relative of the species, Cryptoprocta spelea, probably became extinct before 1400. The species is widespread, although population densities are usually low. It is found solely in forested habitat, and actively hunts both by day and night. Over 50% of its diet consists of lemurs, the endemic primates found on the island; tenrecs, rodents, lizards, birds, and other animals are also documented as prey. Mating usually occurs in trees on horizontal limbs and can last for several hours. Litters range from one to six pups, which are born altricial (blind and toothless). Infants wean after 4.5 months and are independent after a year. Sexual maturity occurs around three to four years of age, and life expectancy in captivity is 20 years. The fossa is listed as a vulnerable species on the IUCN Red List. It is generally feared by the Malagasy people and is often protected by their fady taboo. The greatest threat to the fossa is habitat destruction. Its taxonomic classification has been controversial because its physical traits resemble those of cats, yet other traits suggest a close relationship with viverrids.",
      "word_count": 300,
      "url": "https://en.wikipedia.org/wiki/Fossa_(animal)",
      "categories": [
        "Apex predators",
        "Articles with 'species' microformats",
        "Articles with short description",
        "CS1: long volume value",
        "CS1 French-language sources (fr)",
        "CS1 maint: DOI inactive as of November 2024",
        "Carnivorans of Africa",
        "Commons link is on Wikidata",
        "EDGE species",
        "Endemic fauna of Madagascar",
        "Euplerids",
        "Featured articles",
        "IUCN Red List vulnerable species",
        "Mammals described in 1833",
        "Mammals of Madagascar",
        "Pages with Malagasy IPA",
        "Short description is different from Wikidata",
        "Vulnerable animals",
        "Vulnerable biota of Africa",
        "Wikipedia articles incorporating a citation from the New International Encyclopedia"
      ],
      "images": [
        "https://upload.wikimedia.org/wikipedia/commons/a/a6/Cryptoprocta_Ferox.JPG",
        "https://upload.wikimedia.org/wikipedia/commons/f/fb/Cryptoprocta_ferox_range_map.svg",
        "https://upload.wikimedia.org/wikipedia/commons/6/6c/Diademed_ready_to_push_off.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/e/e1/Em_-_Cryptoprocta_ferox_-_2.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/e/ea/Fossa-drawing.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/8/8e/Fossa_%28mammal%29_skulls.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/c/c2/Fossa_on_branch.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/7/75/Man_of_the_woods.JPG",
        "https://upload.wikimedia.org/wikipedia/commons/e/ed/Microcebus_murinus_-Artis_Zoo%2C_Amsterdam%2C_Netherlands-8c.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/8/8a/OOjs_UI_icon_edit-ltr.svg",
        "https://upload.wikimedia.org/wikipedia/commons/1/18/Okapi2.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/9/97/Pleuroceras_ammonite_with_no_background.png",
        "https://upload.wikimedia.org/wikipedia/commons/6/63/Status_iucn3.1_VU.svg",
        "https://upload.wikimedia.org/wikipedia/commons/9/9c/The_Annals_and_magazine_of_natural_history%3B_zoology%2C_botany%2C_and_geology_%281916%29_%2814766334785%29.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/d/df/Wikispecies-logo.svg",
        "https://upload.wikimedia.org/wikipedia/en/4/4a/Commons-logo.svg",
        "https://upload.wikimedia.org/wikipedia/commons/3/31/Cryptoprocta_ferox.jpg",
        "https://upload.wikimedia.org/wikipedia/en/e/e7/Cscr-featured.svg",
        "https://upload.wikimedia.org/wikipedia/en/8/8a/OOjs_UI_icon_edit-ltr-progressive.svg"
      ],
      "autocomplete": { "input": ["Fossa (animal)"] }
    },
    {
      "title": "400 words on Jerboa",
      "text": "Jerboas ( ) are the members of the family Dipodidae. They are hopping desert rodents found throughout North Africa and Asia. They tend to live in hot deserts. When chased, jerboas can run at up to 24 km/h (15 mph). Some species are preyed on by little owls (Athene noctua) in central Asia. Most species of jerboas have excellent hearing that they use to avoid becoming the prey of nocturnal predators. The typical lifespan of a jerboa is around 2\u20133 years. == Taxonomy == Jerboas, as previously defined, were thought to be paraphyletic, with the jumping mice (Zapodidae) and birch mice (Sminthidae) also being classified in the family Dipodidae. However, phylogenetic analysis split all three as distinct families, leaving just the jerboas in Dipodidae and revealing them to be a monophyletic group. This animal has a body length (including the head) of between 4 and 26 cm (1.6 to 10 in.), with an additional 7 \u2013 30 cm (2.75 to 12 in.) of tail, which is always longer than the full body. Jerboa dental records reveal a slow increase in crown heights and that corresponds to a more open and dryer ecosystem. == Anatomy and body features == Jerboas look somewhat like miniature kangaroos, and have some external similarities. Both have long hind legs, short forelegs, and long tails. Jerboas move around in a similar manner to kangaroos, which is by hopping, or saltation. However, their anatomy is more attuned towards erratic hopping locomotion, making use of sharp turns and great vertical leaps to confuse and escape predators, rather than for sustained hopping over long periods of time. Researchers have found that, when jerboas execute their vertical leaps, the primary tendons in the hindlimbs only recovered and reused on average 4.4% of energy contributed to the jump; this is lower than many hopping animals. Jerboas have metatarsal bones that are fused into one long bone, called the cannon bone. Their cannon bone is more distinct and defined than in other rodents. This acts as leverage to allow them to reach higher heights while jumping, while also supporting the legs. Their back legs are often up to four times as long as the front legs. This further allows them to sling-shot themselves into the air. Jerboas that live in sandy desert environments develop hairs on the bottom of their feet that allow for better traction and grip so that they don't",
      "word_count": 400,
      "url": "https://en.wikipedia.org/wiki/Jerboa",
      "categories": [
        "Articles with 'species' microformats",
        "Articles with short description",
        "Dipodidae",
        "Dipodoid rodents",
        "Extant Miocene first appearances",
        "Pages including recorded pronunciations",
        "Pages using the Phonos extension",
        "Rodents of Asia",
        "Rodents of North Africa",
        "Short description is different from Wikidata",
        "Taxonbars desynced from Wikidata",
        "Taxonbars on possible non-taxon pages",
        "Use dmy dates from June 2024"
      ],
      "images": [
        "https://upload.wikimedia.org/wikipedia/commons/c/c5/Four-toes-jerboa.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/8/8e/JerboaSkelLyd3.png",
        "https://upload.wikimedia.org/wikipedia/commons/8/89/LL-Q1860_%28eng%29-Vealhurl-jerboa.wav",
        "https://upload.wikimedia.org/wikipedia/commons/8/8a/OOjs_UI_icon_edit-ltr.svg"
      ],
      "autocomplete": { "input": ["Jerboa"] }
    },
    {
      "title": "500 words on Grimpoteuthis",
      "text": "Grimpoteuthis is a genus of pelagic cirrate (finned) octopods known as the dumbo octopi. The name \"dumbo\" originates from their resemblance to the title character of Disney's 1941 film Dumbo, having two prominent ear-like fins which extend from the mantle above each eye. There are 17 species recognized in the genus. Prey include crustaceans, bivalves, worms and copepods. The average life span of various Grimpoteuthis species is 3 to 5 years. == Range and habitat == Species of Grimpoteuthis are assumed to have a worldwide distribution, living in the cold, abyssal depths ranging from 1,000\u20137,000 metres (3,300\u201323,000 ft). Specimens have been found off the coasts of Oregon, the Philippines, Martha's Vineyard, the Azores, New Zealand, Australia, California, Papua and New Guinea, and in the Gulf of Mexico. A fairly recent observation was on 21 June 2022 at 1,250 metres (4,100 ft) by the vessel Normand Ocean, which inspects drilling platforms with underwater drones; the vessel was examining chains and risers on the Aasta Hansteen platform outside Tr\u00f8ndelag, Norway. The most recent observation as of 2023 was on 24 May 2023 at 2108meters, this time in Guyana by the vessel Far Samson, which also uses underwater drones. Dumbo octopuses are the deepest living octopuses known, with some specimens captured or observed at hadal depths. One Grimpoteuthis specimen was captured 60 kilometres (37 mi) southeast of Grand Cayman at 7,279 metres (23,881 ft), but this depth is uncertain (as the specimen may have been captured while the net was descending to this depth). In 2020, Grimpoteuthis was spotted 6,957 metres (22,825 ft) deep in the Java Trench, confirming the hadal distribution of this genus. == Species and taxonomy == As noted below, many species collected on the Challenger expedition were initially classified in the genera Cirroteuthis and Stauroteuthis. Several species formerly classified as Grimpoteuthis were later moved to genera Cirroctopus and Opisthoteuthis. A new family, Grimpoteuthididae (alternatively spelled Grimpoteuthidae), has been proposed to accommodate Grimpoteuthis and those of genera Enigmatiteuthis, Cryptoteuthis, and Luteuthis. The persistent confusion and disparity about the taxonomy of these species has been attributed to the poor quality and limited number of specimens available for study. == Movement, characteristics, and food supply == Observations of animals in the Atlantic reveal that Grimpoteuthis often rest on the seafloor with the arms and web spread out and uses its arms to slowly crawl along the seafloor. When disturbed, the webbing and arms are contracted to propel the animal off the seafloor and using the mantle fins for rapid locomotion. The cushiony cartilage that can be found in the proximal position of the fin of Grimpoteuthis is responsible for acting as a support for the thick muscles that allow for rapid locomotion. Although it has been suggested that species of Grimpoteuthis are capable of jet-propulsion (while swimming using the fins), this has since been deemed unlikely. Feeding behavior has not been directly observed in Grimpoteuthis, but presumably is similar to Opisthoteuthis which can trap small prey items in the webbing (either by",
      "word_count": 500,
      "url": "https://en.wikipedia.org/wiki/Grimpoteuthis",
      "categories": [
        "All articles containing potentially dated statements",
        "All articles that may have off-topic sections",
        "All articles with dead external links",
        "All articles with unsourced statements",
        "Articles containing potentially dated statements from 2023",
        "Articles with 'species' microformats",
        "Articles with dead external links from November 2024",
        "Articles with short description",
        "Articles with unsourced statements from September 2024",
        "CS1 German-language sources (de)",
        "CS1 errors: periodical ignored",
        "CS1 maint: DOI inactive as of November 2024",
        "Cephalopods of Oceania",
        "Molluscs of the Atlantic Ocean",
        "Molluscs of the Pacific Ocean",
        "Octopuses",
        "Short description is different from Wikidata",
        "Use dmy dates from September 2024",
        "Wikipedia articles that may have off-topic sections from September 2024"
      ],
      "images": [
        "https://upload.wikimedia.org/wikipedia/commons/b/b0/Dumbo-hires_%28cropped%29.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/c/c1/Grimpoteuthis_2108m.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/8/8a/OOjs_UI_icon_edit-ltr.svg",
        "https://upload.wikimedia.org/wikipedia/commons/f/fa/Wikiquote-logo.svg"
      ],
      "autocomplete": { "input": ["Grimpoteuthis"] }
    },
    {
      "title": "750 words on Shoebill",
      "text": "The shoebill (Balaeniceps rex), also known as the whale-headed stork, and shoe-billed stork, is a large long-legged wading bird. It derives its name from its enormous shoe-shaped bill. It has a somewhat stork-like overall form and has previously been classified with the storks in the order Ciconiiformes based on this morphology. However, genetic evidence places it with pelicans and herons in the Pelecaniformes. The adult is mainly grey while the juveniles are more brown. It lives in tropical East Africa in large swamps from South Sudan to Zambia. == Taxonomy == The shoebill may have been known to Ancient Egyptians but was not classified until the 19th century, after skins and eventually live specimens were brought to Europe. John Gould very briefly described it in 1850 from the skin of a specimen collected on the upper White Nile by the English traveller Mansfield Parkyns. Gould provided a more detailed description in the following year. He placed the species in its own genus Balaeniceps and coined the binomial name Balaeniceps rex. The genus name comes from the Latin words balaena \"whale\", and caput \"head\", abbreviated to -ceps in compound words. Alternative common names are whalebill, shoe-billed stork and whale-headed stork. Traditionally considered as allied with the storks (Ciconiiformes), it was retained there in the Sibley-Ahlquist taxonomy which lumped a massive number of unrelated taxa into their \"Ciconiiformes\". Based on osteological evidence, the suggestion of a pelecaniform affinity was made in 1957 by Patricia Cottam. Microscopic analysis of eggshell structure by Konstantin Mikhailov in 1995 found that the eggshells of shoebills closely resembled those of other Pelecaniformes in having a covering of thick microglobular material over the crystalline shells. In 2003, the shoebill was again suggested as closer to the pelicans (based on anatomical comparisons) or the herons (based on biochemical evidence). A 2008 DNA study reinforces their membership among the Pelecaniformes. So far, two fossilized relatives of the shoebill have been described: Goliathia from the Early Oligocene of Egypt and Paludiavis from the Late Miocene of Pakistan and Tunisia. It has been suggested that the enigmatic African fossil bird Eremopezus have features resembling those of the shoebill and the secretary bird. == Description == The shoebill is a tall bird, with a typical height range of 110 to 140 cm (43 to 55 in) and some specimens reaching as much as 152 cm (60 in). Length from tail to beak can range from 100 to 140 cm (39 to 55 in) and wingspan is 230 to 260 cm (7 ft 7 in to 8 ft 6 in). Weight has reportedly ranged from 4 to 7 kg (8.8 to 15.4 lb). A male will weigh on average around 5.6 kg (12 lb) and is larger than a typical female of 4.9 kg (11 lb). The signature feature of the species is its huge, bulbous bill, which is straw-coloured with erratic greyish markings. The exposed culmen (or the measurement along the top of the upper mandible) is 18.8 to 24 cm (7.4 to 9.4 in), the third longest bill among extant birds after pelicans and large storks, and can outrival the pelicans in bill circumference, especially if the bill is considered as the hard, bony keratin portion. As in the pelicans, the upper mandible is strongly keeled, ending in a sharp nail. The dark coloured legs are fairly long, with a tarsus length of 21.7 to 25.5 cm (8.5 to 10.0 in). The shoebill's feet are exceptionally large, with the middle toe reaching 16.8 to 18.5 cm (6.6 to 7.3 in) in length, likely assisting the species in its ability to stand on aquatic vegetation while hunting. The neck is relatively shorter and thicker than other long-legged wading birds such as herons and cranes. The wings are broad, with a wing chord length of 58.8 to 78 cm (23.1 to 30.7 in), and well-adapted to soaring. The plumage of adult birds is blue-grey with darker slaty-grey flight feathers. The breast presents some elongated feathers, which have dark shafts. The juvenile has a similar plumage colour, but is a darker grey with a brown tinge. When they are first born, shoebills have a more modestly-sized bill, which is initially silvery-grey. The bill becomes more noticeably large when the chicks are 23 days old and becomes well developed by 43 days. === Voice === The shoebill is normally silent, but they perform bill-clattering displays at the nest. When engaging in these displays, adult birds have also been noted to utter a cow-like moo as well",
      "word_count": 750,
      "url": "https://en.wikipedia.org/wiki/Shoebill",
      "categories": [
        "Articles containing video clips",
        "Articles with 'species' microformats",
        "Articles with short description",
        "Birds described in 1850",
        "Birds of East Africa",
        "Birds of Sub-Saharan Africa",
        "CS1: long volume value",
        "CS1 Spanish-language sources (es)",
        "IUCN Red List vulnerable species",
        "Pelecaniformes",
        "Short description matches Wikidata",
        "Taxa named by John Gould",
        "Taxonbars with 20\u201324 taxon IDs",
        "Use dmy dates from May 2020"
      ],
      "images": [
        "https://upload.wikimedia.org/wikipedia/commons/c/c0/Balaeniceps_rex.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/3/34/Balaeniceps_rex_%28Schuhschnabel_-_Shoebill%29_-_Weltvogelpark_Walsrode_2010-10.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/2/24/Balaeniceps_rex_-Ueno_Zoo%2C_Tokyo%2C_Japan-8a.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/4/44/Balaeniceps_rex_distribution.svg",
        "https://upload.wikimedia.org/wikipedia/commons/e/ec/Balaeniceps_rex_in_Prague_Zoo_03.JPG",
        "https://upload.wikimedia.org/wikipedia/commons/0/0e/Cayley_Pelecanus_conspicillatus.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/7/74/Hammerkopf2.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/9/99/Naturalis_Biodiversity_Center_-_ZMA.AVES.26542_-_Balaeniceps_rex_Gould%2C_1850_-_Balaenicipitidae_-_skeleton_%28whole%29_specimen.jpeg",
        "https://upload.wikimedia.org/wikipedia/commons/8/8a/OOjs_UI_icon_edit-ltr.svg",
        "https://upload.wikimedia.org/wikipedia/commons/d/d6/Rhynchaeites_restoration.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/8/8e/Shoebill-uenozoo2008.ogv",
        "https://upload.wikimedia.org/wikipedia/commons/6/63/Status_iucn3.1_VU.svg",
        "https://upload.wikimedia.org/wikipedia/commons/4/4c/Wikisource-logo.svg",
        "https://upload.wikimedia.org/wikipedia/en/8/8a/OOjs_UI_icon_edit-ltr-progressive.svg"
      ],
      "autocomplete": { "input": ["Shoebill"] }
    },
    {
      "title": "1000 words on Capybara",
      "text": "The capybara or greater capybara (Hydrochoerus hydrochaeris) is the largest living rodent, native to South America. It is a member of the genus Hydrochoerus. The only other extant member is the lesser capybara (Hydrochoerus isthmius). Its close relatives include guinea pigs and rock cavies, and it is more distantly related to the agouti, the chinchilla, and the nutria. The capybara inhabits savannas and dense forests, and lives near bodies of water. It is a highly social species and can be found in groups as large as 100 individuals, but usually live in groups of 10\u201320 individuals. The capybara is hunted for its meat and hide and also for grease from its thick fatty skin. == Etymology == Its common name is derived from Tupi ka'api\u00fbara, a complex agglutination of ka\u00e1 (leaf) + p\u00edi (slender) + \u00fa (eat) + ara (a suffix for agent nouns), meaning \"one who eats slender leaves\", or \"grass-eater\". The genus name, hydrochoerus, comes from Greek \u1f55\u03b4\u03c9\u03c1 (hydor \"water\") and \u03c7\u03bf\u1fd6\u03c1\u03bf\u03c2 (choiros \"pig, hog\") and the species name, hydrochaeris, comes from Greek \u1f55\u03b4\u03c9\u03c1 (hydor \"water\") and \u03c7\u03b1\u03af\u03c1\u03c9 (chairo \"feel happy, enjoy\"). == Classification and phylogeny == The capybara and the lesser capybara both belong to the subfamily Hydrochoerinae along with the rock cavies. The living capybaras and their extinct relatives were previously classified in their own family Hydrochoeridae. Since 2002, molecular phylogenetic studies have recognized a close relationship between Hydrochoerus and Kerodon, the rock cavies, supporting placement of both genera in a subfamily of Caviidae. Paleontological classifications previously used Hydrochoeridae for all capybaras, while using Hydrochoerinae for the living genus and its closest fossil relatives, such as Neochoerus, but more recently have adopted the classification of Hydrochoerinae within Caviidae. The taxonomy of fossil hydrochoerines is also in a state of flux. In recent years, the diversity of fossil hydrochoerines has been substantially reduced. This is largely due to the recognition that capybara molar teeth show strong variation in shape over the life of an individual. In one instance, material once referred to four genera and seven species on the basis of differences in molar shape is now thought to represent differently aged individuals of a single species, Cardiatherium paranense. Among fossil species, the name \"capybara\" can refer to the many species of Hydrochoerinae that are more closely related to the modern Hydrochoerus than to the \"cardiomyine\" rodents like Cardiomys. The fossil genera Cardiatherium, Phugatherium, Hydrochoeropsis, and Neochoerus are all capybaras under that concept. == Description == The capybara has a heavy, barrel-shaped body and short head, with reddish-brown fur on the upper part of its body that turns yellowish-brown underneath. Its sweat glands can be found in the surface of the hairy portions of its skin, an unusual trait among rodents. The animal lacks down hair, and its guard hair differs little from over hair. Adult capybaras grow to 106 to 134 cm (3.48 to 4.40 ft) in length, stand 50 to 62 cm (20 to 24 in) tall at the withers, and typically weigh 35 to 66 kg (77 to 146 lb), with an average in the Venezuelan llanos of 48.9 kg (108 lb). Females are slightly heavier than males. The top recorded weights are 91 kg (201 lb) for a wild female from Brazil and 73.5 kg (162 lb) for a wild male from Uruguay. Also, an 81 kg individual was reported in S\u00e3o Paulo in 2001 or 2002. The dental formula is 1.0.1.31.0.1.3. Capybaras have slightly webbed feet and vestigial tails. Their hind legs are slightly longer than their forelegs; they have three toes on their rear feet and four toes on their front feet. Their muzzles are blunt, with nostrils, and the eyes and ears are near the top of their heads. Its karyotype has 2n = 66 and FN = 102, meaning it has 66 chromosomes with a total of 102 arms. == Ecology == Capybaras are semiaquatic mammals found throughout all countries of South America except Chile. They live in densely forested areas near bodies of water, such as lakes, rivers, swamps, ponds, and marshes, as well as flooded savannah and along rivers in the tropical rainforest. They are superb swimmers and can hold their breath underwater for up to five minutes at a time. Capybara have flourished in cattle ranches. They roam in home ranges averaging 10 hectares (25 acres) in high-density populations. Many escapees from captivity can also be found in similar watery habitats around the world. Sightings are fairly common in Florida, although a breeding population has not yet been confirmed. In 2011, one specimen was spotted on the Central Coast of California. These escaped populations occur in areas where prehistoric capybaras inhabited; late Pleistocene capybaras inhabited Florida and Hydrochoerus hesperotiganites in California and Hydrochoerus gaylordi in Grenada, and feral capybaras in North America may actually fill the ecological niche of the Pleistocene species. === Diet and predation === Capybaras are herbivores, grazing mainly on grasses and aquatic plants, as well as fruit and tree bark. They are very selective feeders and feed on the leaves of one species and disregard other species surrounding it. They eat a greater variety of plants during the dry season, as fewer plants are available. While they eat grass during the wet season, they have to switch to more abundant reeds during the dry season. Plants that capybaras eat during the summer lose their nutritional value in the winter, so they are not consumed at that time. The capybara's jaw hinge is not perpendicular, so they chew food by grinding back-and-forth rather than side-to-side. Capybaras are autocoprophagous, meaning they eat their own feces as a source of bacterial gut flora, to help digest the cellulose in the grass that forms their normal diet, and to extract the maximum protein and vitamins from their food. They also regurgitate food to masticate again, similar to cud-chewing by cattle. Like other rodents, a capybara's front teeth grow continually to compensate for the constant wear from eating grasses; their cheek teeth also grow continuously. Like its",
      "word_count": 1000,
      "url": "https://en.wikipedia.org/wiki/Capybara",
      "categories": [
        "2020s in Internet culture",
        "All articles lacking reliable references",
        "All articles with unsourced statements",
        "Articles containing Ancient Greek (to 1453)-language text",
        "Articles containing Tupinamb\u00e1-language text",
        "Articles containing video clips",
        "Articles lacking reliable references from September 2024",
        "Articles with 'species' microformats",
        "Articles with short description",
        "Articles with unsourced statements from September 2024",
        "CS1 Portuguese-language sources (pt)",
        "CS1 Spanish-language sources (es)",
        "Cavies",
        "Commons category link is on Wikidata",
        "Good articles",
        "Herbivorous mammals",
        "IUCN Red List least concern species",
        "Internet memes introduced in the 2020s",
        "Mammals described in 1766",
        "Mammals of Argentina",
        "Mammals of Bolivia",
        "Mammals of Colombia",
        "Mammals of Ecuador",
        "Mammals of French Guiana",
        "Mammals of Guyana",
        "Mammals of Paraguay",
        "Mammals of Peru",
        "Mammals of Uruguay",
        "Mammals of Venezuela",
        "Rodents of Brazil",
        "Semiaquatic mammals",
        "Short description is different from Wikidata",
        "Taxa named by Carl Linnaeus",
        "Taxonbars with 20\u201324 taxon IDs",
        "Taxonbars with automatically added original combinations",
        "Use dmy dates from July 2022",
        "Webarchive template wayback links",
        "Wikipedia pages semi-protected against vandalism"
      ],
      "images": [
        "https://upload.wikimedia.org/wikipedia/commons/3/32/Capybara_%28Hydrochoerus_hydrochaeris%29_alpha_male.JPG",
        "https://upload.wikimedia.org/wikipedia/commons/9/96/Capybara_Eating_Hay_11_11_2018.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/1/1d/Capybara_Ueno_Zoo_2009.ogv",
        "https://upload.wikimedia.org/wikipedia/commons/e/ee/Capybara_range.svg",
        "https://upload.wikimedia.org/wikipedia/commons/5/59/Capybara_skeleton.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/3/34/Hydrochoeris_hydrochaeris_in_Brazil_in_Petr%C3%B3polis%2C_Rio_de_Janeiro%2C_Brazil_09.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/8/8a/OOjs_UI_icon_edit-ltr.svg",
        "https://upload.wikimedia.org/wikipedia/commons/1/18/Okapi2.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/0/0f/South_America_%28orthographic_projection%29.svg",
        "https://upload.wikimedia.org/wikipedia/commons/5/5a/Status_iucn3.1_LC.svg",
        "https://upload.wikimedia.org/wikipedia/commons/6/64/Taxidermy_specimen_of_Capybara_%28Hydrochoerus_hydrochaeris%29.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/4/4c/Wikisource-logo.svg",
        "https://upload.wikimedia.org/wikipedia/commons/d/df/Wikispecies-logo.svg",
        "https://upload.wikimedia.org/wikipedia/commons/9/99/Wiktionary-logo-en-v2.svg",
        "https://upload.wikimedia.org/wikipedia/commons/c/c9/Young_capybaras.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/e/e1/Cattle_tyrant_%28Machetornis_rixosa%29_on_Capybara.jpg",
        "https://upload.wikimedia.org/wikipedia/en/4/4a/Commons-logo.svg",
        "https://upload.wikimedia.org/wikipedia/en/1/1b/Semi-protection-shackle.svg",
        "https://upload.wikimedia.org/wikipedia/en/9/94/Symbol_support_vote.svg"
      ],
      "autocomplete": { "input": ["Capybara"] }
    },
    {
      "title": "1500 words on Narwhal",
      "text": "The narwhal (Monodon monoceros) is a species of toothed whale native to the Arctic. It is the only member of the genus Monodon and one of two living representatives of the family Monodontidae. The narwhal is a stocky cetacean with a relatively blunt snout, a large melon, and a shallow ridge in place of a dorsal fin. Males of this species have a large (1.5\u20133.0 m (4 ft 11 in \u2013 9 ft 10 in)) long tusk, which is a protruding left canine thought to function as a weapon, a tool for feeding, in attracting mates or sensing water salinity. Specially adapted slow-twitch muscles, along with the jointed neck vertebrae and shallow dorsal ridge allow for easy movement through the Arctic environment, where the narwhal spends extended periods at great depths. The narwhal's geographic range overlaps with that of the similarly built and closely related beluga whale, and the animals are known to interbreed. Narwhals inhabits the Arctic waters of Canada, Greenland and Russia. Every year, they migrate to ice-free summering grounds, usually in shallow waters, and often return to the same sites in subsequent years. Their diet mainly consists of polar and Arctic cod, Greenland halibut, cuttlefish, shrimp, and armhook squid. Diving to depths of up to 2,370 m (7,780 ft), the narwhal is among the deepest-diving cetaceans. The animals typically travel in groups of three to eight, with aggregations of up to 1,000 occurring in the summer months. Narwhals mate among the offshore pack ice from March to May, and the young are born between July and August of the following year. When communicating amongst themselves, narwhals use a variety of clicks, whistles and knocks. There are an estimated 170,000 living narwhals, and the species is listed as being of least concern by the International Union for Conservation of Nature (IUCN). The population is threatened by the effects of climate change, such as reduction in ice cover and human activities such as pollution and hunting. Narwhals have been hunted for thousands of years by Inuit in northern Canada and Greenland for meat and ivory, and regulated subsistence hunting continues to this day. == Taxonomy == The narwhal was scientifically described by Carl Linnaeus in his 1758 publication Systema Naturae. The word \"narwhal\" comes from the Old Norse n\u00e1rhval, meaning 'corpse-whale', which possibly refers to the animal's grey, mottled skin and its habit of remaining motionless when at the water's surface, a behaviour known as \"logging\" that usually happens in the summer. The scientific name, Monodon monoceros, is derived from Ancient Greek, meaning 'single-tooth single-horn'. The narwhal is most closely related to the beluga whale (Delphinapterus leucas). Together, these two species comprise the only extant members of the family Monodontidae, sometimes referred to as the \"white whales\". Monodontids are distinguished by their pronounced melons (acoustic sensory organs), short snouts and the absence of a true dorsal fin. Although the narwhal and beluga are classified as separate genera, there is some evidence of interbreeding between the two. Most prominent are the remains of a whale, described by marine zoologists as unlike any known species, which were found in West Greenland around 1990. It had features midway between a narwhal and a beluga, indicating that the remains belonged to a hybrid between the two species (a 'narluga'); this was confirmed by a 2019 DNA analysis. Whether the hybrid itself could breed remains unknown. === Evolution === Results of a genetic study reveal that porpoises and monodontids are closely related, forming a separate clade which diverged from other dolphins about 11 million years ago (mya). A 2018 molecular analysis of monodontid fossils indicates that they separated from Phocoenidae (porpoises) around 10.82 to 20.12 mya, and they are considered to be sister taxa. A later phylogenetic study conducted in 2020 suggested that the narwhal split from the beluga whale around 4.98 mya, based on data from mitochondrial DNA. The fossil species Casatia thermophila of early Pliocene central Italy was described as a possible narwhal ancestor when it was discovered in 2019. Bohaskaia, Denebola and Haborodelphis are other extinct genera known from the Pliocene of the United States. Fossil evidence shows that prehistoric monodontids lived in tropical waters. They may have migrated to Arctic and subarctic waters in response to changes in the marine food chain. The following phylogenetic tree is based on a 2019 study of the family Monodontidae. == Description == The narwhal has a robust body with a short, blunt snout, small upcurved flippers, and convex to concave tail flukes. Adults measure 3.0 to 5.5 m (9.8 to 18.0 ft) in length and weigh 800 to 1,600 kg (1,800 to 3,500 lb). Male narwhals attain sexual maturity at 12 to 20 years of age, reaching a length of 3.5 to 4.0 m (11.5 to 13.1 ft). Females reach sexual maturity at a younger age, between 8 and 9 years old, when they are about 3.4 m (11 ft) long. On average, males are about 70 cm (28 in) longer and more than 75% heavier than females. The colouration of the narwhal consists of a mottled pattern, with blackish-brown markings over a white background. At birth, the skin is light grey, and when sexually mature, white patches grow on the navel and genital slit; such whitening occurs throughout life, resulting in aged narwhals being almost purely white. Unlike most whales, the narwhal has a shallow dorsal ridge, rather than a dorsal fin, possibly an evolutionary adaptation to make swimming under ice easier or to facilitate rolling. The neck vertebrae are also jointed, instead of being fused as in most whales, which allows for a greater range of neck flexibility. These characteristics are shared by the beluga whale. Furthermore, male and female narwhals have differently shaped tail flukes; the former are bent inward, while the latter are swept back on the front margins. This is thought to be an adaptation for reducing drag caused by the tusk. The skeletal muscles of narwhals are highly adapted for prolonged periods of deep-sea foraging. During such activities, oxygen is reserved in the muscles, which are typically slow-twitch, enabling greater endurance and manouverability. Narwhals also have a comparatively high amount of myoglobin in their body, which helps to facilitate deeper dives. It has a dense layer of blubber, around 50 to 100 mm (2.0 to 3.9 in) thick. This fat accounts for a third of the body mass and helps insulate from cold ocean temperatures. === Tusk and dentition === The most conspicuous trait of male narwhals is a long, spiralled tusk, which is a canine tooth that projects from the left side of the upper jaw. Both sexes have a pair of tusks embedded in the upper jaw, which in males erupt from the lip somewhere between two and three years of age. The tusk grows throughout the animal's life, reaching lengths of 1.5 to 3 m (4 ft 11 in to 9 ft 10 in). It is hollow and weighs up to 7.45 kg (16.4 lb). Some males may grow two tusks, occurring when the right canine also protrudes through the lip. Females rarely grow tusks: when they do, the tusks are typically smaller than those of males, with less noticeable spirals. Current scientific consensus indicates that narwhal tusks are secondary sexual characteristics which indicate social status. Further functions of the narwhal tusk are debated: while some biologists suggest that narwhals use their tusks in fights, others argue that they may be of use in feeding. The tusk is also a highly innervated sensory organ with millions of nerve endings, allowing the narwhal to sense temperature variability in its surroundings. These nerves may also be able to detect changes in particle concentration and water pressure. According to Dr. Martin Nweeia, male narwhals may rid themselves of encrustations on their tusks by rubbing them together, as opposed to posturing displays of aggressive male-to-male rivalry. Drone footage from August 2016 in Tremblay Sound, Nunavut, revealed that narwhals used their tusks to tap and stun small Arctic cod, making them easier to catch for feeding. Females, who usually do not have tusks, live longer than males, hence the tusk cannot be essential to the animal's survival. It is generally accepted that the primary function of the narwhal tusk is associated with sexual selection. Alongside its tusk, the narwhal has a single pair of small vestigial teeth that reside in open tooth sockets in the upper jaw. These teeth, which differ in form and composition, encircle the exposed tooth sockets laterally, posteriorly, and ventrally. Vestigial teeth in male narwhals are commonly shed in the palate. The varied morphology and anatomy of small teeth indicate a path of evolutionary obsolescence. == Distribution == The narwhal is found in the Atlantic and Russian areas of the Arctic Ocean. Individuals are commonly recorded in the Canadian Arctic Archipelago, such as in the northern part of Hudson Bay, in Hudson Strait, in Baffin Bay, off the east coast of Greenland and in a strip running east from the northern end of Greenland to",
      "word_count": 1500,
      "url": "https://en.wikipedia.org/wiki/Narwhal",
      "categories": [
        "All articles with unsourced statements",
        "Articles containing Inuktitut-language text",
        "Articles containing Old Norse-language text",
        "Articles containing video clips",
        "Articles with 'species' microformats",
        "Articles with short description",
        "Articles with unsourced statements from December 2024",
        "CS1 French-language sources (fr)",
        "CS1 Latin-language sources (la)",
        "Cetaceans of the Arctic Ocean",
        "Fauna of Northern Canada",
        "Fauna of the Holarctic realm",
        "Good articles",
        "IUCN Red List least concern species",
        "Mammals described in 1758",
        "Mammals of Canada",
        "Mammals of Greenland",
        "Mammals of Russia",
        "Monodontidae",
        "Short description is different from Wikidata",
        "Taxa named by Carl Linnaeus",
        "Taxonbars with 25\u201329 taxon IDs",
        "Unicorns",
        "Use British English from May 2024",
        "Use dmy dates from August 2024",
        "Wikipedia pages semi-protected against vandalism"
      ],
      "images": [
        "https://upload.wikimedia.org/wikipedia/commons/f/fb/A_polar_bear_%28Ursus_maritimus%29_scavenging_a_narwhal_whale_%28Monodon_monoceros%29_carcass_-_journal.pone.0060797.g001-A.png",
        "https://upload.wikimedia.org/wikipedia/commons/7/76/Belugas%2BNarwhals.png",
        "https://upload.wikimedia.org/wikipedia/commons/e/ea/Children_of_the_Arctic_%281903%29_%2814766096922%29.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/c/c2/Monodon_monoceros_NOAA.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/6/65/Monodon_monoceros_distribution_map.svg",
        "https://upload.wikimedia.org/wikipedia/commons/2/2b/Narwhal_Goblet_%2830061080057%29.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/a/ac/Narwhal_size.svg",
        "https://upload.wikimedia.org/wikipedia/commons/b/be/Narwhal_tail_above_surface.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/3/3c/Narwhal_tusk%2C_1701-1930_Wellcome_L0059030.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/8/8a/OOjs_UI_icon_edit-ltr.svg",
        "https://upload.wikimedia.org/wikipedia/commons/1/18/Okapi2.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/7/76/Sperm_whale_fluke.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/5/5a/Status_iucn3.1_LC.svg",
        "https://upload.wikimedia.org/wikipedia/commons/a/a0/Yellow.tang.arp.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/b/bc/%D0%9D%D0%B0%D1%80%D0%B2%D0%B0%D0%BB_%D0%B2_%D1%80%D0%BE%D1%81%D1%81%D0%B8%D0%B9%D1%81%D0%BA%D0%BE%D0%B9_%D0%90%D1%80%D0%BA%D1%82%D0%B8%D0%BA%D0%B5.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/6/62/%D0%9D%D0%B0%D1%80%D0%B2%D0%B0%D0%BB%D1%8B_%D0%B2_%D1%8E%D0%B6%D0%BD%D0%BE%D0%B9_%D1%87%D0%B0%D1%81%D1%82%D0%B8_%D0%B0%D1%80%D1%85%D0%B8%D0%BF%D0%B5%D0%BB%D0%B0%D0%B3%D0%B0_%D0%97%D0%B5%D0%BC%D0%BB%D1%8F_%D0%A4%D1%80%D0%B0%D0%BD%D1%86%D0%B0-%D0%98%D0%BE%D1%81%D0%B8%D1%84%D0%B0.tif",
        "https://upload.wikimedia.org/wikipedia/commons/a/a2/%D0%9E%D1%81%D0%BE%D0%B1%D0%B8_%D0%BD%D0%B0%D1%80%D0%B2%D0%B0%D0%BB%D0%B0_%D0%B2_%D0%90%D1%80%D0%BA%D1%82%D0%B8%D0%BA%D0%B5.jpg",
        "https://upload.wikimedia.org/wikipedia/en/8/8a/OOjs_UI_icon_edit-ltr-progressive.svg",
        "https://upload.wikimedia.org/wikipedia/en/1/1b/Semi-protection-shackle.svg",
        "https://upload.wikimedia.org/wikipedia/en/9/94/Symbol_support_vote.svg"
      ],
      "autocomplete": { "input": ["Narwhal"] }
    },
    {
      "title": "2000 words on Sea otter",
      "text": "The sea otter (Enhydra lutris) is a marine mammal native to the coasts of the northern and eastern North Pacific Ocean. Adult sea otters typically weigh between 14 and 45 kg (30 and 100 lb), making them the heaviest members of the weasel family, but among the smallest marine mammals. Unlike most marine mammals, the sea otter's primary form of insulation is an exceptionally thick coat of fur, the densest in the animal kingdom. Although it can walk on land, the sea otter is capable of living exclusively in the ocean. The sea otter inhabits nearshore environments, where it dives to the sea floor to forage. It preys mostly on marine invertebrates such as sea urchins, various mollusks and crustaceans, and some species of fish. Its foraging and eating habits are noteworthy in several respects. Its use of rocks to dislodge prey and to open shells makes it one of the few mammal species to use tools. In most of its range, it is a keystone species, controlling sea urchin populations which would otherwise inflict extensive damage to kelp forest ecosystems. Its diet includes prey species that are also valued by humans as food, leading to conflicts between sea otters and fisheries. Sea otters, whose numbers were once estimated at 150,000\u2013300,000, were hunted extensively for their fur between 1741 and 1911, and the world population fell to 1,000\u20132,000 individuals living in a fraction of their historic range. A subsequent international ban on hunting, sea otter conservation efforts, and reintroduction programs into previously populated areas have contributed to numbers rebounding, and the species occupies about two-thirds of its former range. The recovery of the sea otter is considered an important success in marine conservation, although populations in the Aleutian Islands and California have recently declined or have plateaued at depressed levels. For these reasons, the sea otter remains classified as an endangered species. == Evolution == The sea otter is the heaviest (the giant otter is longer, but significantly slimmer) member of the family Mustelidae, a diverse group that includes the 13 otter species and terrestrial animals such as weasels, badgers, and minks. It is unique among the mustelids in not making dens or burrows, in having no functional anal scent glands, and in being able to live its entire life without leaving the water. The only living member of the genus Enhydra, the sea otter is so different from other mustelid species that, as recently as 1982, some scientists believed it was more closely related to the earless seals. Genetic analysis indicates the sea otter and its closest extant relatives, which include the African speckle-throated otter, Eurasian otter, African clawless otter and Asian small-clawed otter, shared an ancestor approximately 5 million years ago. Fossil evidence indicates the Enhydra lineage became isolated in the North Pacific approximately 2 million years ago, giving rise to the now-extinct Enhydra macrodonta and the modern sea otter, Enhydra lutris. One related species has been described, Enhydra reevei, from the Pleistocene of East Anglia. The modern sea otter evolved initially in northern Hokkaid\u014d and Russia, and then spread east to the Aleutian Islands, mainland Alaska, and down the North American coast. In comparison to cetaceans, sirenians, and pinnipeds, which entered the water approximately 50, 40, and 20 million years ago, respectively, the sea otter is a relative newcomer to a marine existence. In some respects, though, the sea otter is more fully adapted to water than pinnipeds, which must haul out on land or ice to give birth. The full genome of the northern sea otter (Enhydra lutris kenyoni) was sequenced in 2017 and may allow for examination of the sea otter's evolutionary divergence from terrestrial mustelids. Following their divergence from their most common ancestor five million years ago, sea otters have developed traits dependent on polygenic selection, or the evolution of numerous traits to create hallmark features like thick and oily fur and large bones, compared to their freshwater sister species. Sea otters require these traits to survive the cold waters of the northern Pacific Ocean, in which they spend their entire lives despite occasionally coming out of the water as pups. Sea otters have the thickest fur of any animal (~1,000,000 hairs per square inch), as they do not have a blubber layer, while their oil glands help matt down their fur and keep it from holding air. Thick bones also prove crucial in increasing buoyancy, as sea otters spend long hours floating atop the ocean. In a study, southern and northern Sea Otter populations were compared against the African clawless otter, and it was determined that aquatic traits like loss of smell and hair thickness independently evolved, evidencing a complex genome of polygenic traits resulting in complex systems. This study was only able to take place after sequencing of Sea Otter nuclear genomes and through phylogeny to find a close ancestor with which to compare genomes. Previously, it was suspected that sea otters came from the same evolutionary branch as earless seals, such as harbor and monk seals. Sea Otters have experienced numerous population bottlenecks throughout their history, with significant numbers being wiped out 9,000-10,000 generations ago and 300\u2013700 generations ago, long before the fur trade. These previous genetic bottlenecks are responsible for already low genetic diversity amongst species members, making the secondary bottleneck caused by the fur trade more significant. These primary bottlenecks were most likely caused by disease, a common cause for genetic bottlenecks. Estimates place these bottlenecks at leaving around ten to forty animals for about eight to forty-four years. This led to genetic drift, as the populations of northern and southern sea otters were cut off from one another by thousands of miles, leading to significant genomic differences. However, the modern population bottleneck caused by the fur trade of the eighteenth and early twentieth centuries presents the most significant concern to scientists and conservationists attempting to recover population numbers and genetic diversity. Each bottleneck has lowered genomic diversity and thus increased the chance of deleterious genetic drift. === Taxonomy === The first scientific description of the sea otter is contained in the field notes of Georg Steller from 1751, and the species was described by Carl Linnaeus in his landmark 1758 10th edition of Systema Naturae. Originally named Lutra marina, it underwent numerous name changes before being accepted as Enhydra lutris in 1922. The generic name Enhydra, derives from the Ancient Greek en/\u03b5\u03bd \"in\" and hydra/\u03cd\u03b4\u03c1\u03b1 \"water\", meaning \"in the water\", and the Latin word lutris, meaning \"otter\". It was formerly sometimes referred to as the \"sea beaver\". === Subspecies === Three subspecies of the sea otter are recognized with distinct geographical distributions. Enhydra lutris lutris (nominate), the Asian sea otter, ranges across Russia's Kuril Islands northeast of Japan, and the Commander Islands in the northwestern Pacific Ocean. In the eastern Pacific Ocean, E. l. kenyoni, the northern sea otter, is found from Alaska's Aleutian Islands to Oregon and E. l. nereis, the southern sea otter, is native to central and southern California. The Asian sea otter is the largest subspecies and has a slightly wider skull and shorter nasal bones than both other subspecies. Northern sea otters possess longer mandibles (lower jaws) while southern sea otters have longer rostrums and smaller teeth. == Description == The sea otter is one of the smallest marine mammal species, but it is the heaviest mustelid. Male sea otters usually weigh 22 to 45 kg (49 to 99 lb) and are 1.2 to 1.5 m (3 ft 11 in to 4 ft 11 in) in length, though specimens up to 54 kg (119 lb) have been recorded. Females are smaller, weighing 14 to 33 kg (31 to 73 lb) and measuring 1.0 to 1.4 m (3 ft 3 in to 4 ft 7 in) in length. The average weight for adult sea otters that are in more densely populated areas, at 28.3 kg (62 lb) in males and 21.1 kg (47 lb) in females, was considerably lighter than the average weight of otters in more sparse populations, at 39.3 kg (87 lb) in males and 25.2 kg (56 lb) in females Presumably less populous otters are more able to monopolize food sources, For its size, the male otter's baculum is very large, massive and bent upwards, measuring 150 mm (5+7\u20448 in) in length and 15 mm (9\u204416 in) at the base. Unlike most other marine mammals, the sea otter has no blubber and relies on its exceptionally thick fur to keep warm. With up to 150,000 strands of hair per square centimetre (970,000/in2), its fur is the densest of any animal. The fur consists of long, waterproof guard hairs and short underfur; the guard hairs keep the dense underfur layer dry. There is an air compartment between the thick fur and the skin where air is trapped and heated by the body. Cold water is kept completely away from the skin and heat loss is limited. However, a potential disadvantage of this form of insulation is compression of the air layer as the otter dives, thereby reducing the insulating quality of fur at depth when the animal forages. The fur is thick year-round, as it is shed and replaced gradually rather than in a distinct molting season. As the ability of the guard hairs to repel water depends on utmost cleanliness, the sea otter has the ability to reach and groom the fur on any part of its body, taking advantage of its loose skin and an unusually supple skeleton. The coloration of the pelage is usually deep brown with silver-gray speckles, but it can range from yellowish or grayish brown to almost black. In adults, the head, throat, and chest are lighter in color than the rest of the body. The sea otter displays numerous adaptations to its marine environment. The nostrils and small ears can close. The hind feet, which provide most of its propulsion in swimming, are long, broadly flattened, and fully webbed. The fifth digit on each hind foot is longest, facilitating swimming while on its back, but making walking difficult. The tail is fairly short, thick, slightly flattened, and muscular. The front paws are short with retractable claws, with tough pads on the palms that enable gripping slippery prey. The bones show osteosclerosis, increasing their density to reduce buoyancy. The sea otter presents an insight into the evolutionary process of the mammalian invasion of the aquatic environment, which has occurred numerous times over the course of mammalian evolution. Having only returned to the sea about 3 million years ago, sea otters represent a snapshot at the earliest point of the transition from fur to blubber. In sea otters, fur is still advantageous, given their small nature and division of lifetime between the aquatic and terrestrial environments. However, as sea otters evolve and adapt to spending more and more of their lifetimes in the sea, the convergent evolution of blubber suggests that the reliance on fur for insulation would be replaced by a dependency on blubber. This is particularly true due to the diving nature of the sea otter; as dives become lengthier and deeper, the air layer's ability to retain heat or buoyancy decreases, while blubber remains efficient at both of those functions. Blubber can also additionally serve as an energy source for deep dives, which would most likely prove advantageous over fur in the evolutionary future of sea otters. The sea otter propels itself underwater by moving the rear end of its body, including its tail and hind feet, up and down, and is capable of speeds of up to 9 kilometres per hour (5.6 mph). When underwater, its body is long and streamlined, with the short forelimbs pressed closely against the chest. When at the surface, it usually floats on its back and moves by sculling its feet and tail from side to side. At rest, all four limbs can be folded onto the torso to conserve heat, whereas on particularly hot days, the hind feet may be held underwater for cooling. The sea otter's",
      "word_count": 2000,
      "url": "https://en.wikipedia.org/wiki/Sea_otter",
      "categories": [
        "All accuracy disputes",
        "All articles containing potentially dated statements",
        "Apex predators",
        "Articles containing potentially dated statements from July 2022",
        "Articles containing video clips",
        "Articles with 'species' microformats",
        "Articles with disputed statements from March 2021",
        "Articles with short description",
        "Biota of the Temperate Northern Pacific",
        "CS1 errors: periodical ignored",
        "CS1 maint: multiple names: authors list",
        "Carnivorans of Asia",
        "Carnivorans of North America",
        "Commons category link is on Wikidata",
        "Endangered biota of Asia",
        "Endangered fauna of California",
        "Endangered fauna of North America",
        "Endangered fauna of the United States",
        "Extant Pleistocene first appearances",
        "Fauna of California",
        "Fauna of the Aleutian Islands",
        "Fauna of the Holarctic realm",
        "Fauna of the Kuril Islands",
        "Fauna of the Pacific Ocean",
        "Featured articles",
        "Fur trade",
        "IUCN Red List endangered species",
        "Mammals described in 1758",
        "Mammals of Canada",
        "Mammals of Japan",
        "Mammals of Mexico",
        "Mammals of Russia",
        "Mammals of the United States",
        "Marine mammals",
        "Otters",
        "Pleistocene animals of North America",
        "Pleistocene carnivorans",
        "Quaternary mammals of Asia",
        "Quaternary mammals of North America",
        "Semiaquatic mammals",
        "Short description is different from Wikidata",
        "Taxa named by Carl Linnaeus",
        "Taxonbars with 20\u201324 taxon IDs",
        "Taxonbars with automatically added original combinations",
        "Tool-using mammals",
        "Use dmy dates from August 2022",
        "Webarchive template wayback links",
        "Western North American coastal fauna",
        "Wikipedia articles needing factual verification from February 2024",
        "Wikipedia indefinitely move-protected pages"
      ],
      "images": [
        "https://upload.wikimedia.org/wikipedia/commons/e/e0/AleutKalan1.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/4/47/AleutKalan2.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/3/3e/CalifCentralCoast.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/4/44/Wapiti_from_Wagon_Trails.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/9/96/Enhydra_lutris_skull_-_MUSE.JPG",
        "https://upload.wikimedia.org/wikipedia/commons/2/2d/Issoria_lathonia.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/8/8e/Kelp-forest-Monterey.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/5/58/London_Sea_Otter_pelt_sales_1871-1910.svg",
        "https://upload.wikimedia.org/wikipedia/commons/8/8a/OOjs_UI_icon_edit-ltr.svg",
        "https://upload.wikimedia.org/wikipedia/commons/8/82/OilSheenFromValdezSpill.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/1/18/Okapi2.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/6/65/Otter_playing_-_2015_11_08.ogv",
        "https://upload.wikimedia.org/wikipedia/commons/a/aa/Otter_with_mussels_%26_barnacles.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/0/02/Sea_Otter_%28Enhydra_lutris%29_%2825169790524%29_crop.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/1/18/Sea_otter_cleaning.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/a/a1/Sea_otter_distribution.svg",
        "https://upload.wikimedia.org/wikipedia/commons/f/f4/Sea_otter_hunters_1896.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/7/79/Sea_otter_kelp_forest_Chumash_Heritage_National_Marine_Sanctuary.PNG",
        "https://upload.wikimedia.org/wikipedia/commons/d/d4/Sea_otter_pair2.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/2/29/Sea_otter_with_injured_nose.JPG",
        "https://upload.wikimedia.org/wikipedia/commons/2/25/Sea_otter_with_sea_urchin.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/5/50/Sea_otters_holding_hands%2C_cropped.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/f/f8/Sea_otters_playing.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/8/8d/Seaotterrocks.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/7/70/Status_iucn3.1_EN.svg",
        "https://upload.wikimedia.org/wikipedia/commons/d/df/Wikispecies-logo.svg",
        "https://upload.wikimedia.org/wikipedia/commons/a/a0/Yellow.tang.arp.jpg",
        "https://upload.wikimedia.org/wikipedia/en/4/4a/Commons-logo.svg",
        "https://upload.wikimedia.org/wikipedia/en/e/e7/Cscr-featured.svg",
        "https://upload.wikimedia.org/wikipedia/en/8/8a/OOjs_UI_icon_edit-ltr-progressive.svg",
        "https://upload.wikimedia.org/wikipedia/commons/3/3c/Sea_otter_nursing02.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/4/44/Wapiti_from_Wagon_Trails.jpg"
      ],
      "autocomplete": { "input": ["Sea otter"] }
    },
    {
      "title": "2500 words on Dog",
      "text": "The dog (Canis familiaris or Canis lupus familiaris) is a domesticated descendant of the gray wolf. Also called the domestic dog, it was selectively bred from an extinct population of wolves during the Late Pleistocene by hunter-gatherers. The dog was the first species to be domesticated by humans, over 14,000 years ago and before the development of agriculture. Experts estimate that due to their long association with humans, dogs have gained the ability to thrive on a starch-rich diet that would be inadequate for other canids. Dogs have been bred for desired behaviors, sensory capabilities, and physical attributes. Dog breeds vary widely in shape, size, and color. They have the same number of bones (with the exception of the tail), powerful jaws that house around 42 teeth, and well-developed senses of smell, hearing, and sight. Compared to humans, dogs have an inferior visual acuity, a superior sense of smell, and a relatively large olfactory cortex. They perform many roles for humans, such as hunting, herding, pulling loads, protection, companionship, therapy, aiding disabled people, and assisting police and the military. Communication in dogs includes eye gaze, facial expression, vocalization, body posture (including movements of bodies and limbs), and gustatory communication (scents, pheromones, and taste). They mark their territories by urinating on them, which is more likely when entering a new environment. Over the millennia, dogs became uniquely adapted to human behavior; this adaptation includes being able to understand and communicate with humans. As such, the human\u2013canine bond has been a topic of frequent study, and dogs' influence on human society has given them the sobriquet of \"man's best friend\". The global dog population is estimated at 700 million to 1 billion, distributed around the world. The dog is the most popular pet in the United States, present in 34\u201340% of households. Developed countries make up approximately 20% of the global dog population, while around 75% of dogs are estimated to be from developing countries, mainly in the form of feral and community dogs. == Taxonomy == Dogs are domesticated members of the family Canidae. They are classified as a subspecies of Canis lupus, along with wolves and dingoes. Dogs were domesticated from wolves over 14,000 years ago by hunter-gatherers, before the development of agriculture. The remains of the Bonn\u2013Oberkassel dog, buried alongside humans between 14,000 and 15,000 years ago, are the earliest to be conclusively identified as a domesticated dog. Genetic studies show that dogs likely diverged from wolves between 27,000 and 40,000 years ago. The dingo and the related New Guinea singing dog resulted from the geographic isolation and feralization of dogs in Oceania over 8,000 years ago. Dogs, wolves, and dingoes have sometimes been classified as separate species. In 1758, the Swedish botanist and zoologist Carl Linnaeus assigned the genus name Canis (which is the Latin word for \"dog\") to the domestic dog, the wolf, and the golden jackal in his book, Systema Naturae. He classified the domestic dog as Canis familiaris and, on the next page, classified the grey wolf as Canis lupus. Linnaeus considered the dog to be a separate species from the wolf because of its upturning tail (cauda recurvata in Latin term), which is not found in any other canid. In the 2005 edition of Mammal Species of the World, mammalogist W. Christopher Wozencraft listed the wolf as a wild subspecies of Canis lupus and proposed two additional subspecies: familiaris, as named by Linnaeus in 1758, and dingo, named by Meyer in 1793. Wozencraft included hallstromi (the New Guinea singing dog) as another name (junior synonym) for the dingo. This classification was informed by a 1999 mitochondrial DNA study. The classification of dingoes is disputed and a political issue in Australia. Classifying dingoes as wild dogs simplifies reducing or controlling dingo populations that threaten livestock. Treating dingoes as a separate species allows conservation programs to protect the dingo population. Dingo classification affects wildlife management policies, legislation, and societal attitudes. In 2019, a workshop hosted by the IUCN/Species Survival Commission's Canid Specialist Group considered the dingo and the New Guinea singing dog to be feral Canis familiaris. Therefore, it did not assess them for the IUCN Red List of threatened species. === Domestication === The earliest remains generally accepted to be those of a domesticated dog were discovered in Bonn-Oberkassel, Germany. Contextual, isotopic, genetic, and morphological evidence shows that this dog was not a local wolf. The dog was dated to 14,223 years ago and was found buried along with a man and a woman, all three having been sprayed with red hematite powder and buried under large, thick basalt blocks. The dog had died of canine distemper. This timing indicates that the dog was the first species to be domesticated in the time of hunter-gatherers, which predates agriculture. Earlier remains dating back to 30,000 years ago have been described as Paleolithic dogs, but their status as dogs or wolves remains debated because considerable morphological diversity existed among wolves during the Late Pleistocene. DNA sequences show that all ancient and modern dogs share a common ancestry and descended from an ancient, extinct wolf population that was distinct from any modern wolf lineage. Some studies have posited that all living wolves are more closely related to each other than to dogs, while others have suggested that dogs are more closely related to modern Eurasian wolves than to American wolves. The dog is a domestic animal that likely travelled a commensal pathway into domestication (i.e. humans initially neither benefitted nor were harmed by wild dogs eating refuse from their camps). The questions of when and where dogs were first domesticated remains uncertain. Genetic studies suggest a domestication process commencing over 25,000 years ago, in one or several wolf populations in either Europe, the high Arctic, or eastern Asia. In 2021, a literature review of the current evidence infers that the dog was domesticated in Siberia 23,000 years ago by ancient North Siberians, then later dispersed eastward into the Americas and westward across Eurasia, with dogs likely accompanying the first humans to inhabit the Americas. Some studies have suggested that the extinct Japanese wolf is closely related to the ancestor of domestic dogs. In 2018, a study identified 429 genes that differed between modern dogs and modern wolves. As the differences in these genes could also be found in ancient dog fossils, these were regarded as being the result of the initial domestication and not from recent breed formation. These genes are linked to neural crest and central nervous system development. These genes affect embryogenesis and can confer tameness, smaller jaws, floppy ears, and diminished craniofacial development, which distinguish domesticated dogs from wolves and are considered to reflect domestication syndrome. The study concluded that during early dog domestication, the initial selection was for behavior. This trait is influenced by those genes which act in the neural crest, which led to the phenotypes observed in modern dogs. === Breeds === There are around 450 official dog breeds, the most of any mammal. Dogs began diversifying in the Victorian era, when humans took control of their natural selection. Most breeds were derived from small numbers of founders within the last 200 years. Since then, dogs have undergone rapid phenotypic change and have been subjected to artificial selection by humans. The skull, body, and limb proportions between breeds display more phenotypic diversity than can be found within the entire order of carnivores. These breeds possess distinct traits related to morphology, which include body size, skull shape, tail phenotype, fur type, and colour. As such, humans have long used dogs for their desirable traits to complete or fulfill a certain work or role. Their behavioural traits include guarding, herding, hunting, retrieving, and scent detection. Their personality traits include hypersocial behavior, boldness, and aggression. Present-day dogs are dispersed around the world. An example of this dispersal is the numerous modern breeds of European lineage during the Victorian era. == Anatomy and physiology == === Size and skeleton === Dogs are extremely variable in size, ranging from one of the largest breeds, the Great Dane, at 50 to 79 kg (110 to 174 lb) and 71 to 81 cm (28 to 32 in), to one of the smallest, the Chihuahua, at 0.5 to 3 kg (1.1 to 6.6 lb) and 13 to 20 cm (5.1 to 7.9 in). All healthy dogs, regardless of their size and type, have the same amount of bones (with the exception of the tail), although there is significant skeletal variation between dogs of different types. The dog's skeleton is well adapted for running; the vertebrae on the neck and back have extensions for back muscles, consisting of epaxial muscles and hypaxial muscles, to connect to; the long ribs provide room for the heart and lungs; and the shoulders are unattached to the skeleton, allowing for flexibility. Compared to the dog's wolf-like ancestors, selective breeding since domestication has seen the dog's skeleton increase in size for larger types such as mastiffs and miniaturised for smaller types such as terriers; dwarfism has been selectively bred for some types where short legs are preferred, such as dachshunds and corgis. Most dogs naturally have 26 vertebrae in their tails, but some with naturally short tails have as few as three. The dog's skull has identical components regardless of breed type, but there is significant divergence in terms of skull shape between types. The three basic skull shapes are the elongated dolichocephalic type as seen in sighthounds, the intermediate mesocephalic or mesaticephalic type, and the very short and broad brachycephalic type exemplified by mastiff type skulls. The jaw contains around 42 teeth, and it has evolved for the consumption of flesh. Dogs use their carnassial teeth to cut food into bite-sized chunks, more especially meat. === Senses === Dogs' senses include vision, hearing, smell, taste, touch, and magnetoreception. One study suggests that dogs can feel small variations in Earth's magnetic field. Dogs prefer to defecate with their spines aligned in a north\u2013south position in calm magnetic field conditions. Dogs' vision is dichromatic; their visual world consists of yellows, blues, and grays. They have difficulty differentiating between red and green, and much like other mammals, the dog's eye is composed of two types of cone cells compared to the human's three. The divergence of the eye axis of dogs ranges from 12 to 25\u00b0, depending on the breed, which can have different retina configurations. The fovea centralis area of the eye is attached to a nerve fiber, and is the most sensitive to photons. Additionally, a study found that dogs' visual acuity was up to eight times less effective than a human, and their ability to discriminate levels of brightness was about two times worse than a human. While the human brain is dominated by a large visual cortex, the dog brain is dominated by a large olfactory cortex. Dogs have roughly forty times more smell-sensitive receptors than humans, ranging from about 125 million to nearly 300 million in some dog breeds, such as bloodhounds. This sense of smell is the most prominent sense of the species; it detects chemical changes in the environment, allowing dogs to pinpoint the location of mating partners, potential stressors, resources, etc. Dogs also have an acute sense of hearing up to four times greater than that of humans. They can pick up the slightest sounds from about 400 m (1,300 ft) compared to 90 m (300 ft) for humans. Dogs have stiff, deeply embedded hairs known as whiskers that sense atmospheric changes, vibrations, and objects not visible in low light conditions. The lower most part of whiskers hold more receptor cells than other hair types, which help in alerting dogs of objects that could collide with the nose, ears, and jaw. Whiskers likely also facilitate the movement of food towards the mouth. === Coat === The coats of domestic dogs are of two varieties: \"double\" being common in dogs (as well as wolves) originating from colder climates, made up of a coarse guard hair and a soft down hair, or \"single\", with the topcoat only. Breeds may have an occasional \"blaze\", stripe, or \"star\" of white fur on their chest or underside. Premature graying can occur in dogs as early as one year of age; this is associated with impulsive behaviors, anxiety behaviors, and fear of unfamiliar noise, people, or animals. Some dog breeds are hairless, while others have a very thick corded coat. The coats of certain breeds are often groomed to a characteristic style, for example, the Yorkshire Terrier's \"show cut\". === Dewclaw === A dog's dewclaw is the fifth digit in its forelimb and hind legs. Dewclaws on the forelimbs are attached by bone and ligament, while the dewclaws on the hind legs are attached only by skin. Most dogs aren't born with dewclaws in their hind legs, and some are without them in their forelimbs. Dogs' dewclaws consist of the proximal phalanges and distal phalanges. Some publications theorize that dewclaws in wolves, who usually do not have dewclaws, were a sign of hybridization with dogs. === Tail === A dog's tail is the terminal appendage of the vertebral column, which is made up of a string of 5 to 23 vertebrae enclosed in muscles and skin that support the dog's back extensor muscles. One of the primary functions of a dog's tail is to communicate their emotional state. The tail also helps the dog maintain balance by putting its weight on the opposite side of the dog's tilt, and it can also help the dog spread its anal gland's scent through the tail's position and movement. Dogs can have a violet gland (or supracaudal gland) characterized by sebaceous glands on the dorsal surface of their tails; in some breeds, it may be vestigial or absent. The enlargement of the violet gland in the tail, which can create a bald spot from hair loss, can be caused by Cushing's disease or an excess of sebum from androgens in the sebaceous glands. A study suggests that dogs show asymmetric tail-wagging responses to different emotive stimuli. \"Stimuli that could be expected to elicit approach tendencies seem to be associated with [a] higher amplitude of tail-wagging movements to the right side\". Dogs can injure themselves by wagging their tails forcefully; this condition is called kennel tail, happy tail, bleeding tail, or splitting tail. In some hunting dogs, the tail is traditionally docked to avoid injuries. Some dogs can be born without tails because of a DNA variant in the T gene, which can also result in a congenitally short (bobtail) tail. Tail docking is opposed by many veterinary and animal welfare organisations such as the American Veterinary Medical Association and the British Veterinary Association. Evidence from veterinary practices and questionnaires showed that around 500 dogs would need to have their tail docked to prevent one injury. == Health == Numerous disorders have been known to affect dogs. Some are congenital and others are acquired. Dogs can acquire upper respiratory tract diseases including diseases that affect the nasal cavity, the larynx,",
      "word_count": 2500,
      "url": "https://en.wikipedia.org/wiki/Dog",
      "categories": [
        "Animal models",
        "Articles with 'species' microformats",
        "Articles with hAudio microformats",
        "Articles with short description",
        "CS1: long volume value",
        "CS1 German-language sources (de)",
        "CS1 Latin-language sources (la)",
        "CS1 Spanish-language sources (es)",
        "CS1 maint: DOI inactive as of November 2024",
        "CS1 maint: overridden setting",
        "Cosmopolitan mammals",
        "Dogs",
        "Domesticated animals",
        "English words",
        "Extant Late Pleistocene first appearances",
        "Good articles",
        "Mammals described in 1758",
        "Pages using multiple image with auto scaled images",
        "Scavengers",
        "Short description is different from Wikidata",
        "Taxa named by Carl Linnaeus",
        "Taxonbars desynced from Wikidata",
        "Taxonbars on possible non-taxon pages",
        "Taxonbars with multiple manual Wikidata items",
        "Use dmy dates from October 2024",
        "Webarchive template wayback links",
        "Wikipedia indefinitely move-protected pages",
        "Wikipedia indefinitely semi-protected pages",
        "Wolves"
      ],
      "images": [
        "https://upload.wikimedia.org/wikipedia/commons/e/e6/2022-07-20_LJUBLJANA_%C5%A0PICA_CARNIVORA_Canis_lupus_familiaris_DOMA%C4%8CI_PES.webm",
        "https://upload.wikimedia.org/wikipedia/commons/e/e2/A_dog_making_noises_and_barking.flac",
        "https://upload.wikimedia.org/wikipedia/commons/c/c8/Black_Labrador_Retriever_-_Male_IMG_3323.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/3/3b/BlkStdSchnauzer2.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/3/33/Blue_merle_koolie_short_coat_heading_sheep.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/4/44/Wapiti_from_Wagon_Trails.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/9/9b/Chin_posing.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/2/2f/Comparison_of_a_wolf_and_a_pug.png",
        "https://upload.wikimedia.org/wikipedia/commons/2/2d/Dog_-_%E0%B4%A8%E0%B4%BE%E0%B4%AF-6.JPG",
        "https://upload.wikimedia.org/wikipedia/commons/a/a6/Dog_anatomy_lateral_skeleton_view.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/e/ea/Dog_coat_variation.png",
        "https://upload.wikimedia.org/wikipedia/commons/6/69/Dog_morphological_variation.png",
        "https://upload.wikimedia.org/wikipedia/commons/c/ce/Dogs%2C_jackals%2C_wolves%2C_and_foxes_%28Plate_I%29.png",
        "https://upload.wikimedia.org/wikipedia/commons/9/9d/Dogs%2C_jackals%2C_wolves%2C_and_foxes_%28Plate_IX%29.png",
        "https://upload.wikimedia.org/wikipedia/commons/d/d6/Dogs%2C_jackals%2C_wolves%2C_and_foxes_%28Plate_VI%29.png",
        "https://upload.wikimedia.org/wikipedia/commons/7/7a/Dogs%2C_jackals%2C_wolves%2C_and_foxes_%28Plate_X%29.png",
        "https://upload.wikimedia.org/wikipedia/commons/b/be/Dogs%2C_jackals%2C_wolves%2C_and_foxes_%28Plate_XI%29.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/c/ca/Dogs%2C_jackals%2C_wolves%2C_and_foxes_%28Plate_XII%29.png",
        "https://upload.wikimedia.org/wikipedia/commons/a/a8/Dogs%2C_jackals%2C_wolves%2C_and_foxes_%28Plate_XIII%29.png",
        "https://upload.wikimedia.org/wikipedia/commons/c/c8/Dogs%2C_jackals%2C_wolves%2C_and_foxes_%28Plate_XLI%29.png",
        "https://upload.wikimedia.org/wikipedia/commons/a/a5/Dogs%2C_jackals%2C_wolves%2C_and_foxes_%28Plate_XLIV%29.png",
        "https://upload.wikimedia.org/wikipedia/commons/5/57/Dogs_mating_2.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/8/87/Gnome-mime-sound-openclipart.svg",
        "https://upload.wikimedia.org/wikipedia/commons/a/af/Golden_retriever_eating_pigs_foot.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/7/7a/Huskiesatrest.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/8/8a/OOjs_UI_icon_edit-ltr.svg",
        "https://upload.wikimedia.org/wikipedia/commons/1/18/Okapi2.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/d/d5/Retriever_in_water.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/8/8e/Selected_skulls.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/9/9c/Siberian_Husky_pho.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/f/f1/S%C3%A4ugende_H%C3%BCndin.JPG",
        "https://upload.wikimedia.org/wikipedia/commons/f/ff/Vision_comparison_with_dogs.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/2/24/Walking_the_dog_%281945527533%29.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/f/fa/Wikibooks-logo.svg",
        "https://upload.wikimedia.org/wikipedia/commons/2/24/Wikinews-logo.svg",
        "https://upload.wikimedia.org/wikipedia/commons/f/fa/Wikiquote-logo.svg",
        "https://upload.wikimedia.org/wikipedia/commons/4/4c/Wikisource-logo.svg",
        "https://upload.wikimedia.org/wikipedia/commons/d/df/Wikispecies-logo.svg",
        "https://upload.wikimedia.org/wikipedia/commons/d/dd/Wikivoyage-Logo-v3-icon.svg",
        "https://upload.wikimedia.org/wikipedia/commons/a/ae/Wilde_huendin_am_stillen.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/9/99/Brooks_Chase_Ranger_of_Jolly_Dogs_Jack_Russell.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/2/25/Cerberus-Blake.jpeg",
        "https://upload.wikimedia.org/wikipedia/en/4/4a/Commons-logo.svg",
        "https://upload.wikimedia.org/wikipedia/en/8/8a/OOjs_UI_icon_edit-ltr-progressive.svg",
        "https://upload.wikimedia.org/wikipedia/en/1/1b/Semi-protection-shackle.svg",
        "https://upload.wikimedia.org/wikipedia/en/9/96/Symbol_category_class.svg",
        "https://upload.wikimedia.org/wikipedia/en/e/e2/Symbol_portal_class.svg",
        "https://upload.wikimedia.org/wikipedia/en/9/94/Symbol_support_vote.svg",
        "https://upload.wikimedia.org/wikipedia/commons/4/44/Wapiti_from_Wagon_Trails.jpg",
        "https://upload.wikimedia.org/wikipedia/en/0/06/Wiktionary-logo-v2.svg"
      ],
      "autocomplete": { "input": ["Dog"] }
    },
    {
      "title": "3000 words on Giraffe",
      "text": "The giraffe is a large African hoofed mammal belonging to the genus Giraffa. It is the tallest living terrestrial animal and the largest ruminant on Earth. Traditionally, giraffes have been thought of as one species, Giraffa camelopardalis, with nine subspecies. Most recently, researchers proposed dividing them into four extant species due to new research into their mitochondrial and nuclear DNA, and individual species can be distinguished by their fur coat patterns. Seven other extinct species of Giraffa are known from the fossil record. The giraffe's distinguishing characteristics are its extremely long neck and legs, horn-like ossicones, and spotted coat patterns. It is classified under the family Giraffidae, along with its closest extant relative, the okapi. Its scattered range extends from Chad in the north to South Africa in the south and from Niger in the west to Somalia in the east. Giraffes usually inhabit savannahs and woodlands. Their food source is leaves, fruits, and flowers of woody plants, primarily acacia species, which they browse at heights most other ground-based herbivores cannot reach. Lions, leopards, spotted hyenas, and African wild dogs may prey upon giraffes. Giraffes live in herds of related females and their offspring or bachelor herds of unrelated adult males but are gregarious and may gather in large groups. Males establish social hierarchies through \"necking\", combat bouts where the neck is used as a weapon. Dominant males gain mating access to females, which bear sole responsibility for rearing the young. The giraffe has intrigued various ancient and modern cultures for its peculiar appearance and has often been featured in paintings, books, and cartoons. It is classified by the International Union for Conservation of Nature (IUCN) as vulnerable to extinction. It has been extirpated from many parts of its former range. Giraffes are still found in many national parks and game reserves, but estimates as of 2016 indicate there are approximately 97,500 members of Giraffa in the wild. More than 1,600 were kept in zoos in 2010. == Etymology == The name \"giraffe\" has its earliest known origins in the Arabic word zir\u0101fah (\u0632\u0650\u0631\u064e\u0627\u0641\u064e\u0629\u0652), of an ultimately unclear Sub-Saharan African language origin. The Middle English and early Modern English spellings, jarraf and ziraph, derive from the Arabic form-based Spanish and Portuguese girafa. The modern English form developed around 1600 from the French girafe. \"Camelopard\" () is an archaic English name for the giraffe; it derives from the Ancient Greek \u03ba\u03b1\u03bc\u03b7\u03bb\u03bf\u03c0\u03ac\u03c1\u03b4\u03b1\u03bb\u03b9\u03c2 (kam\u0113lop\u00e1rdalis), from \u03ba\u03ac\u03bc\u03b7\u03bb\u03bf\u03c2 (k\u00e1m\u0113los), \"camel\", and \u03c0\u03ac\u03c1\u03b4\u03b1\u03bb\u03b9\u03c2 (p\u00e1rdalis), \"leopard\", referring to its camel-like shape and leopard-like colouration. == Taxonomy == === Evolution === The giraffe is one of only two living genera of the family Giraffidae in the order Artiodactyla, the other being the okapi. They are ruminants of the clade Pecora, along with Antilocapridae (pronghorns), Cervidae (deer), Bovidae (cattle, antelope, goats and sheep) and Moschidae (musk deer). A 2019 genome study (cladogram below) finds that Giraffidae are a sister taxon to Antilocapridae, with an estimated split of over 20 million years ago. The family Giraffidae was once much more extensive, with over 10 fossil genera described. The elongation of the neck appears to have started early in the giraffe lineage. Comparisons between giraffes and their ancient relatives suggest vertebrae close to the skull lengthened earlier, followed by lengthening of vertebrae further down. One early giraffid ancestor was Canthumeryx, which has been dated variously to have lived 25 to 20 million years ago, 17\u201315 mya or 18\u201314.3 mya and whose deposits have been found in Libya. This animal resembled an antelope and had a medium-sized, lightly built body. Giraffokeryx appeared 15\u201312 mya on the Indian subcontinent and resembled an okapi or a small giraffe, and had a longer neck and similar ossicones. Giraffokeryx may have shared a clade with more massively built giraffids like Sivatherium and Bramatherium. Giraffids like Palaeotragus, Shansitherium and Samotherium appeared 14 mya and lived throughout Africa and Eurasia. These animals had broader skulls with reduced frontal cavities. Paleotragus resembled the okapi and may have been its ancestor. Others find that the okapi lineage diverged earlier, before Giraffokeryx. Samotherium was a particularly important transitional fossil in the giraffe lineage, as the length and structure of its cervical vertebrae were between those of a modern giraffe and an okapi, and its neck posture was likely similar to the former's. Bohlinia, which first appeared in southeastern Europe and lived 9\u20137 mya, was likely a direct ancestor of the giraffe. Bohlinia closely resembled modern giraffes, having a long neck and legs and similar ossicones and dentition. Bohlinia colonised China and northern India and produced the Giraffa, which, around 7 million years ago, reached Africa. Climate changes led to the extinction of the Asian giraffes, while the African giraffes survived and radiated into new species. Living giraffes appear to have arisen around 1 million years ago in eastern Africa during the Pleistocene. Some biologists suggest the modern giraffes descended from G. jumae; others find G. gracilis a more likely candidate. G. jumae was larger and more robust, while G. gracilis was smaller and more slender. The changes from extensive forests to more open habitats, which began 8 mya, are believed to be the main driver for the evolution of giraffes. During this time, tropical plants disappeared and were replaced by arid C4 plants, and a dry savannah emerged across eastern and northern Africa and western India. Some researchers have hypothesised that this new habitat, coupled with a different diet, including acacia species, may have exposed giraffe ancestors to toxins that caused higher mutation rates and a higher rate of evolution. The coat patterns of modern giraffes may also have coincided with these habitat changes. Asian giraffes are hypothesised to have had more okapi-like colourations. The giraffe genome is around 2.9 billion base pairs in length, compared to the 3.3 billion base pairs of the okapi. Of the proteins in giraffe and okapi genes, 19.4% are identical. The divergence of giraffe and okapi lineages dates to around 11.5 mya. A small group of regulatory genes in the giraffe appears responsible for the animal's height and associated circulatory adaptations. === Species and subspecies === The International Union for Conservation of Nature (IUCN) currently recognises only one species of giraffe with nine subspecies. Carl Linnaeus originally classified living giraffes as one species in 1758. He gave it the binomial name Cervus camelopardalis. Mathurin Jacques Brisson coined the generic name Giraffa in 1762. During the 1900s, various taxonomies with two or three species were proposed. A 2007 study on the genetics of giraffes using mitochondrial DNA suggested at least six lineages could be recognised as species. A 2011 study using detailed analyses of the morphology of giraffes, and application of the phylogenetic species concept, described eight species of living giraffes. A 2016 study also concluded that living giraffes consist of multiple species. The researchers suggested the existence of four species, which have not exchanged genetic information between each other for 1 to 2 million years. A 2020 study showed that depending on the method chosen, different taxonomic hypotheses recognizing from two to six species can be considered for the genus Giraffa. That study also found that multi-species coalescent methods can lead to taxonomic over-splitting, as those methods delimit geographic structures rather than species. The three-species hypothesis, which recognises G. camelopardalis, G. giraffa, and G. tippelskirchi, is highly supported by phylogenetic analyses and also corroborated by most population genetic and multi-species coalescent analyses. A 2021 whole genome sequencing study suggests the existence of four distinct species and seven subspecies, which was supported by a 2024 study of cranial morphology. A 2024 study found a higher amount of ancient gene flow than expected between populations. The cladogram below shows the phylogenetic relationship between the four proposed species and seven subspecies based on a 2021 genome analysis. The eight lineages correspond to eight traditional subspecies in the one-species hypothesis. The Rothschild giraffe is subsumed into G. camelopardalis camelopardalis. The following table compares the different hypotheses for giraffe species. The description column shows the traditional nine subspecies in the one-species hypothesis. The first extinct species to be described was Giraffa sivalensis Falconer and Cautley 1843, a reevaluation of a vertebra that was initially described as a fossil of the living giraffe. While taxonomic opinion may be lacking on some names, the extinct species that have been published include: Giraffa gracilis Giraffa jumae Giraffa pomeli Giraffa priscilla Giraffa punjabiensis Giraffa pygmaea Giraffa sivalensis Giraffa stillei == Anatomy == Fully grown giraffes stand 4.3\u20135.7 m (14\u201319 ft) tall, with males taller than females. The average weight is 1,192 kg (2,628 lb) for an adult male and 828 kg (1,825 lb) for an adult female. Despite its long neck and legs, its body is relatively short.: 66 The skin is mostly gray or tan, and can reach a thickness of 20 mm (0.79 in).: 87 The 80\u2013100 cm (31\u201339 in) long tail ends in a long, dark tuft of hair and is used as a defense against insects.: 94 The coat has dark blotches or patches, which can be orange, chestnut, brown, or nearly black, surrounded by light hair, usually white or cream coloured. Male giraffes become darker as they grow old. The coat pattern has been claimed to serve as camouflage in the light and shade patterns of savannah woodlands. When standing among trees and bushes, they are hard to see at even a few metres distance. However, adult giraffes move about to gain the best view of an approaching predator, relying on their size and ability to defend themselves rather than on camouflage, which may be more important for calves. Each giraffe has a unique coat pattern. Calves inherit some coat pattern traits from their mothers, and variation in some spot traits is correlated with calf survival. The skin under the blotches may regulate the animal's body temperature, being sites for complex blood vessel systems and large sweat glands. Spotless or solid-color giraffes are very rare, but have been observed. The fur may give the animal chemical defense, as its parasite repellents give it a characteristic scent. At least 11 main aromatic chemicals are in the fur, although indole and 3-methylindole are responsible for most of the smell. Because males have a stronger odour than females, it may also have a sexual function. === Head === Both sexes have prominent horn-like structures called ossicones, which can reach 13.5 cm (5.3 in). They are formed from ossified cartilage, covered in skin, and fused to the skull at the parietal bones.: 95\u201397 Being vascularised, the ossicones may have a role in thermoregulation, and are used in combat between males. Appearance is a reliable guide to the sex or age of a giraffe: the ossicones of females and young are thin and display tufts of hair on top, whereas those of adult males tend to be bald and knobbed on top. A lump, which is more prominent in males, emerges in the middle of the skull. Males develop calcium deposits that form bumps on their skulls as they age. Multiple sinuses lighten a giraffe's skull.: 103 However, as males age, their skulls become heavier and more club-like, helping them become more dominant in combat. The occipital condyles at the bottom of the skull allow the animal to tip its head over 90 degrees and grab food on the branches directly above them with the tongue.: 103, 110 With eyes located on the sides of the head, the giraffe has a broad visual field from its great height.: 85, 102 Compared to other ungulates, giraffe vision is more binocular and the eyes are larger with a greater retinal surface area. Giraffes may see in colour,: 85 and their senses of hearing and smell are sharp. The ears are movable.: 95 The nostrils are slit-shaped, possibly to withstand blowing sand. The giraffe's tongue is about 45 cm (18 in) long. It is black, perhaps to protect against sunburn, and can grasp foliage and delicately pick off leaves.: 109\u2013110 The upper lip is flexible and hairy to protect against sharp prickles. The upper jaw has a hard palate instead of front teeth. The molars and premolars are wide with low crowns on the surface.: 106 === Neck === The giraffe has an extremely elongated neck, which can be up to 2.4 m (7 ft 10 in) in length. Along the neck is a mane made of short, erect hairs. The neck typically rests at an angle of 50\u201360 degrees, though juveniles are closer to 70 degrees.: 72\u201373 The long neck results from a disproportionate lengthening of the cervical vertebrae, not from the addition of more vertebrae. Each cervical vertebra is over 28 cm (11 in) long.: 71 They comprise 52\u201354 per cent of the length of the giraffe's vertebral column, compared with the 27\u201333 percent typical of similar large ungulates, including the giraffe's closest living relative, the okapi. This elongation largely takes place after birth, perhaps because giraffe mothers would have a difficult time giving birth to young with the same neck proportions as adults. The giraffe's head and neck are held up by large muscles and a nuchal ligament, which are anchored by long thoracic vertebrae spines, giving them a hump. The giraffe's neck vertebrae have ball and socket joints.: 71 The point of articulation between the cervical and thoracic vertebrae of giraffes is shifted to lie between the first and second thoracic vertebrae (T1 and T2), unlike in most other ruminants, where the articulation is between the seventh cervical vertebra (C7) and T1. This allows C7 to contribute directly to increased neck length and has given rise to the suggestion that T1 is actually C8, and that giraffes have added an extra cervical vertebra. However, this proposition is not generally accepted, as T1 has other morphological features, such as an articulating rib, deemed diagnostic of thoracic vertebrae, and because exceptions to the mammalian limit of seven cervical vertebrae are generally characterised by increased neurological anomalies and maladies. There are several hypotheses regarding the evolutionary origin and maintenance of elongation in giraffe necks. Charles Darwin originally suggested the \"competing browsers hypothesis\", which has been challenged only recently. It suggests that competitive pressure from smaller browsers, like kudu, steenbok and impala, encouraged the elongation of the neck, as it enabled giraffes to reach food that competitors could not. This advantage is real, as giraffes can and do feed up to 4.5 m (15 ft) high, while even quite large competitors, such as kudu, can feed up to only about 2 m (6 ft 7 in) high. There is also research suggesting that browsing competition is intense at lower levels, and giraffes feed more efficiently (gaining more leaf biomass with each mouthful) high in the canopy. However, scientists disagree about just how much time giraffes spend feeding at levels beyond the reach of other browsers, and a 2010 study found that adult giraffes with longer necks actually suffered higher mortality rates under drought conditions than their shorter-necked counterparts. This study suggests that maintaining a longer neck requires more nutrients, which puts longer-necked giraffes at risk during a food shortage. Another theory, the sexual selection hypothesis, proposes that long necks evolved as a secondary sexual characteristic, giving males an advantage in \"necking\" contests (see below) to establish dominance and obtain access to sexually receptive females. In support of this theory, some studies have stated that necks are longer and heavier for males than females of the same age, and that males do not employ other forms of combat. However, a 2024 study found that, while males have thicker necks, females actually have proportionally longer ones, which is likely because of their greater need to find more food to sustain themselves and their dependent young. It has also been proposed that the neck serves to give the animal greater vigilance. === Legs, locomotion and posture === The front legs tend to be longer than the hind legs,: 109 and males have proportionally longer front legs than females, which gives them better support when swinging their necks during fights. The leg bones lack first, second and fifth metapodials.: 109 It appears that a suspensory ligament allows the lanky legs to support the animal's great weight. The hooves of large male giraffes reach 31 cm \u00d7 23 cm (12.2 in \u00d7 9.1 in) in diameter.: 98 The fetlock of the leg is low to the ground, allowing the hoof to better support the animal's weight. Giraffes lack dewclaws and interdigital glands. While the pelvis is relatively short, the ilium has stretched-out crests. A giraffe has only two gaits: walking and galloping. Walking is done by moving the legs on one side of the body, then doing the same on the other side. When galloping, the hind legs move around the front legs before the latter move forward, and the tail will curl up. The movements of the head and neck provide balance and control momentum while galloping.: 327\u201329 The giraffe can reach a sprint speed of up to 60 km/h (37 mph), and can sustain 50 km/h (31 mph) for several kilometres. Giraffes would probably not be competent swimmers as their long legs would be highly cumbersome in the water, although they might be able to float. When swimming, the thorax would be weighed down by the front legs, making it difficult for the animal to move its neck and legs in harmony or keep its head above the water's surface. A giraffe rests by lying with its body on top of its folded legs.: 329 To lie down, the animal kneels on its front legs and then lowers the rest of its body. To get back up, it first gets on its front knees and positions its backside on top of its hindlegs. It then pulls the backside upwards, and the front legs stand straight up again. At each stage, the animal swings its head for balance.: 67 If the giraffe wants to reach down to drink, it either spreads its front legs or bends its knees. Studies in captivity found the giraffe sleeps intermittently around 4.6 hours per day,",
      "word_count": 3000,
      "url": "https://en.wikipedia.org/wiki/Giraffe",
      "categories": [
        "All articles containing potentially dated statements",
        "Articles containing Ancient Greek (to 1453)-language text",
        "Articles containing Arabic-language text",
        "Articles containing French-language text",
        "Articles containing Middle English (1100-1500)-language text",
        "Articles containing potentially dated statements from 2010",
        "Articles containing video clips",
        "Articles with 'species' microformats",
        "Articles with hAudio microformats",
        "Articles with short description",
        "CS1: long volume value",
        "Cite IUCN without doi",
        "Commons link is locally defined",
        "Fauna of Sub-Saharan Africa",
        "Featured articles",
        "Giraffes",
        "Herbivorous mammals",
        "IUCN Red List vulnerable species",
        "Mammal genera",
        "Mammals of Africa",
        "National symbols of Tanzania",
        "Official website not in Wikidata",
        "Short description is different from Wikidata",
        "Use dmy dates from December 2023",
        "Vulnerable animals",
        "Vulnerable biota of Africa",
        "Wikipedia indefinitely semi-protected pages"
      ],
      "images": [
        "https://upload.wikimedia.org/wikipedia/commons/7/76/Angolan_giraffe_%28Giraffa_camelopardalis_angolensis%29_female_with_young_2_months.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/d/d3/Antilocapra_white_background.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/b/bd/Birds_and_nature_%281901%29_%2814562088237%29_white_background.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/f/f4/Flickr_-_Rainbirder_-_High-rise_living.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/a/ac/Flickr_-_Rainbirder_-_Reticulated_Giraffe_drinking.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/1/1c/Genetic_subdivision_in_the_giraffe_based_on_mitochondrial_DNA_sequences.png",
        "https://upload.wikimedia.org/wikipedia/commons/4/4e/GiraffaCamelopardalisTippelskirchi-Masaai-Mara.JPG",
        "https://upload.wikimedia.org/wikipedia/commons/7/7e/GiraffaRecurrEn.svg",
        "https://upload.wikimedia.org/wikipedia/commons/1/1d/Giraffa_camelopardalis_Brockhaus_white_background.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/a/aa/Giraffa_camelopardalis_angolensis%2C_flip.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/c/c2/Giraffa_camelopardalis_angolensis_%28mating%29.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/9/93/Giraffa_camelopardalis_camelopardalis_%28Al_Ain_Zoo%2C_UAE%29%2C_crop_%26_flip.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/4/44/Giraffa_camelopardalis_reticulata_01%2C_flip.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/2/23/Giraffa_camelopardis_distribution_2018.png",
        "https://upload.wikimedia.org/wikipedia/commons/6/60/Giraffe-solo_Koure-NIGER.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/d/d7/Giraffe_%28Giraffa_camelopardalis%29_females.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/a/a8/Giraffe_Hum.oga",
        "https://upload.wikimedia.org/wikipedia/commons/0/02/Giraffe_Ithala_KZN_South_Africa_Luca_Galuzzi_2004.JPG",
        "https://upload.wikimedia.org/wikipedia/commons/6/63/Giraffe_Oxpeckers_Lupande_Zambia_Jul23_A7R_06194.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/2/2f/Giraffe_Walking_Square%2C_flip.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/9/9d/Giraffe_bursts.oga",
        "https://upload.wikimedia.org/wikipedia/commons/6/61/Giraffe_cave_art.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/3/3b/Giraffe_grunt.oga",
        "https://upload.wikimedia.org/wikipedia/commons/9/91/Giraffe_in_Malawi_-_2018_Aug.webm",
        "https://upload.wikimedia.org/wikipedia/commons/c/cf/Giraffe_koure_niger_2006.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/1/1f/Giraffe_skeleton.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/1/10/Giraffe_snort.oga",
        "https://upload.wikimedia.org/wikipedia/commons/e/e4/Giraffidcomparison.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/8/87/Gnome-mime-sound-openclipart.svg",
        "https://upload.wikimedia.org/wikipedia/commons/8/89/Juvenile_Giraffe_-_walking_-_Malawi_-_2018_Aug.webm",
        "https://upload.wikimedia.org/wikipedia/commons/e/ed/Lioness_with_giraffe_kill%2C_jackal_lurking%2C_kenya%2C_august_9th_2012.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/f/fc/Masai_Giraffe_right-rear_foot.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/0/0c/Moschus_chrysogaster_white_background.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/8/8a/OOjs_UI_icon_edit-ltr.svg",
        "https://upload.wikimedia.org/wikipedia/commons/c/c7/Rothschild%27s_Giraffe_%28Giraffa_camelopardalis_rothschildi%29_male_%287068054987%29%2C_crop_%26_edit.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/6/63/Status_iucn3.1_VU.svg",
        "https://upload.wikimedia.org/wikipedia/commons/1/1e/The_deer_of_all_lands_%281898%29_Hangul_white_background.png",
        "https://upload.wikimedia.org/wikipedia/commons/0/08/Tragulus_napu_-_1818-1842_-_Print_-_Iconographia_Zoologica_-_Special_Collections_University_of_Amsterdam_-_%28white_background%29.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/5/50/Tribute_Giraffe_with_Attendant.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/b/bc/Zoo_de_Vincennes%2C_Paris%2C_France_April_2014_%287%29%2C_crop.jpg",
        "https://upload.wikimedia.org/wikipedia/en/4/4a/Commons-logo.svg",
        "https://upload.wikimedia.org/wikipedia/en/e/e7/Cscr-featured.svg",
        "https://upload.wikimedia.org/wikipedia/commons/3/33/Giraffa_camelopardalis_head_%28Profil%29.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/9/9e/Giraffe_Mikumi_National_Park.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/d/d2/Giraffe_feeding%2C_Tanzania.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/9/9f/Giraffe_standing.jpg",
        "https://upload.wikimedia.org/wikipedia/en/8/8a/OOjs_UI_icon_edit-ltr-progressive.svg",
        "https://upload.wikimedia.org/wikipedia/en/1/1b/Semi-protection-shackle.svg"
      ],
      "autocomplete": { "input": ["Giraffe"] }
    }
  ]
  

export default  function Page() {
    const [long_documents, setLongDocuments] = useState<Document[]>(long_documents_json);
    const [filteredDocuments, setFilteredDocuments] = useState<Document[]>(long_documents_json);
    const [selectedDocument, setSelectedDocument] = useState<Document | null>(null);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [resultText, setResultText] = useState<string>('No document selected');

    useEffect(() => {
        // const fetchDocuments = async () => {
        //     const response = await fetch('/long_documents.json');
        //     const data = await response.json();
        //     setLongDocuments(data);
        //     setFilteredDocuments(data);
        // };

        // fetchDocuments();
    }, []);

    const handleSearch = () => {
        if (searchTerm === '') {
            setResultText('No search term entered');
            return;
        }

        if(filteredDocuments.length === 0) {
            setResultText(`Found ${filteredDocuments.length} results. -> Start semantic search using '${searchTerm}  and return the results here.`);
        }
        else {
            setResultText(`Found ${filteredDocuments.length} results but none selected. -> Start semantic search using '${searchTerm}' and return the results here.`);
        }
        
    };

    const filterSearch = (eTargetValue: string) => {
        setSearchTerm(eTargetValue);
        const filtered = long_documents.filter(doc => doc.text.includes(searchTerm));
        setFilteredDocuments(filtered);
    }

    return (
        <div className="flex h-screen">
            <div className="w-1/3 border-r border-gray-300 p-4">
                <div className="mb-4 flex items-center">
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => filterSearch(e.target.value)}
                        placeholder="Type eg 'salamander'"
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                        <button
                            onClick={() => {
                                setSearchTerm('');
                                setFilteredDocuments(long_documents);
                                setSelectedDocument(null);
                                setResultText('No document selected');
                            }}
                            className="ml-2 p-2 bg-red-500 text-white rounded"
                        >
                            X
                        </button>
                    <button onClick={handleSearch} className="ml-2 p-2 bg-blue-500 text-white rounded">
                        Search
                    </button>
                </div>
                <ul className="space-y-2">
                    {filteredDocuments.map((doc: Document, index: number) => (
                        <li
                            key={index}
                            onClick={() => setSelectedDocument(doc)}
                            className="cursor-pointer p-2 hover:bg-gray-100 rounded"
                        >
                            {doc.title}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="w-2/3 p-4">
                {selectedDocument ? (
                    <div>
                        <h2 className="text-2xl font-bold mb-4">{selectedDocument.title}</h2>
                        <p>{selectedDocument.text}</p>
                    </div>
                ) : (
                    <p>{resultText}</p>
                )}
            </div>
        </div>
    );
};

