# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.delete_all
Follow.delete_all
Like.delete_all
Story.delete_all

User.create(username: "coolcat", password: "coolcat")
User.create(username: "hitmonlee", password: "hitmonlee")
User.create(username: "foghat", password: "foghat")
User.create(username: "jomie", password: "jomiejomie")
User.create(username: "Johnny Styles", password: "Johnny Styles")
User.create(username: "lyfe46", password: "lyfe46")
User.create(username: "prophetroyel", password: "prophetroyal")
User.create(username: "prophetkanye", password: "prophetkanye")
User.create(username: "willgivecashforgold", password: "willgivecashforgold")
User.create(username: "catslacks", password: "catslacks")
User.create(username: "notanotherjohnnystyles", password: "notanotherjohnnystyles")
User.create(username: "lostmyhat", password: "lostmyhat")
User.create(username: "windmillseagull", password: "windmillseagull")
User.create(username: "kesha", password: "kesha")
User.create(username: "dimemime", password: "dimemime")
User.create(username: "old4lyfe", password: "old4lyfe")
User.create(username: "studieslyfe", password: "studieslyfe")
User.create(username: "toocoolforfools", password: "toocoolforfools")
User.create(username: "caughtfish", password: "caughtfish")
User.create(username: "codfish", password: "codfish")
User.create(username: "guest", password: "123456")

users = User.all
story_content = [
  "maybe that’s what art is, the working out of things,
  internal and external, that accrue at a rapid pace
the more (self)aware you become, the faster the movement
separate yourself, become intent, and with pen or pencil
you draw it out, frame it, touch it later to remember
BUT WHEN YOU SIT IN THAT ROOM REMEMBER
THAT THE EARTH MOVES AT THE GREATEST SPEED AROUND THE SUN
AND SOME PEOPLE’S HEARTS REVOLVE EVEN FASTER THAN THAT
REMEMBER HOW IT FELT AS A CHILD TO CUDDLE WITH YOUR MOTHER
REMEMBER HOW IT FELT WHEN YOU SKINNED YOUR KNEE
OH HOW OFTEN
REMEMBER WHEN YOUR HEART FLEW HIGH AS A RED KITE
REMEMBER
AND NEVER FORGET
…we are infinite beings,
moving from 0 to 1
definite, yes
but infinitely incandecimal",
  "'Having no hope of improving their lives in any of the ways that
  matter, people have convinced themselves that what matters is psychic
  self-improvement: getting in touch with their feelings, eating health food,
  taking lessons in ballet or belly dancing, immersing themselves in the
  wisdom of the East, jogging, learning how to 'relate,' overcoming the 'fear of pleasure.'
— 	Christopher Lasch ",
  "My purpose … [is] to point out that professional careers are no more
  liberating for women than for men if those careers are governed by the
  requirements of the corporate economy. As long as the workplace is
  dominated by the need to sustain economic growth by producing goods
  and services no one really needs, it will be unable to satisfy the
  desire to become not just self-supporting but useful and self-respecting. - Lasch",
  "I’m currently sitting in the basement of a hostel in Paris..
  Amazingly, this is the first time in the last few weeks that I’ve
  felt I could give you the time you deserve to respond. My delay is
  inexcusable, but I assure you, these are extraordinary circumstances!

My name is Jesse Daniel Smith, I am an uneducated 24 year old musician
who somehow fell into being a photographer. Straight out of high school
(and after a failed relationship with a musical school) I went to Toronto
in an effort to ‘make it’ in the traditional rockstar sense. Although it
didn’t pan out the way I thought it would, I learned to value my home town
and the new direction the music industry was headed.

As for filmmaking, I learned fairly quickly that you have to feed your
stomach and feed your soul. They are very rarely one in the same! I had
already been doing my own media in an effort to reduce costs of hiring
professionals, so I kind of just fell into it when helping friends with
projects snowballed into being hired to weddings, corporate work and travel documenting.

I have a younger brother and an older sister. I love reading Stephen King
 (guilty pleasure) and eating italian food. And dancing. I love to dance
 despite the questionable outcome(s). ",
  "'To beat the elite four, you must be tough, like a prize-fighter
  with a tattoo down your leg with a sword in your hand and the
  commitment to make someone bleed. That is the guy who can defeat
  the Elite Four. I don’t train with trainers like the hippie,
  diaper, halo Ash, because I don’t waste time with a guy I can beat up.'",
  "Kanye West

ambition

language

dreams

vision

art

history

eternity

my place

people as objects

people as destroyers

people as blinking lights

somehow realizing art

vain ambition

set apart

intelligent

dreamer

procrastinator

confused and apathetic

Akira

overwhelming energy

potential...",
  "me: are they still gonna let me graduate if i spray paint an essay on the presidents house
josh: depends on if you get caught...
cite freedom of speech as your argument, take it to the supreme court
you'll probably lose, but you'll have so much press that you can go on a speaking tour
in which you tell young disgruntled and angsty teenagers general pieces of wisdom
such as 'screw the system'
after this speaking tour you will write a book about your time, which will be come an NY best seller
having become a speaker and a published author, you will make the rounds of news channels such as NBC and CNN and pontificate with the best of them
in your spare time rumors are you are writing a novel about 1920s jazz culture
rumors fly when you take your summer vacation to jamaica
you are photographed at a wild drunken party in Los Angeles
which damages your reputation but only slightly
if anyting, it gives you more street credit to start a new fashion line focused primarily on skate shoes
soon you are featured in the most up-and-coming magazines, such as CCS
pacsun begs you to carry your shoes, which you accept after negotiating a $15 million dollar up-front deal
at this point you decide to invest your money in the arts
you move to Soho and set up an art studio, currating a group of the most influential 21st century artists
this new art house becomes the center for american 'neo-art', the first post-postmodern movement
among those included is a young man named Joshua Logsdon, who has also by this time made millions selling a collection of short poems
it all ends horribly when one night in a drunken brawl fire is set to the studio
half of the art pieces are burned, and the other half severely damaged
newspapers mourn the loss of such a great trove of culture, comparing it to the great alexandrian fire of the middle ages
devastated, you decide that solipsism is the only way to live in the world, and retreat to the mountains of quebec
there, you hone the art of hunting and gathering among wild thornbushes and wild elk
shooting what you can get for protein and foraging the rest
it is at this time that you discovered what you think is the secret to life
reinvigorated with your new understanding, you head back into the elite social circles of intellect, spreading your idea for a new spiritual school you are planning to found in India
you have chosen India because it is the fastest growing nation in the world with an already situated spiritual base
you hope that through teaching only a few disciples, you can begin to change the world one moment at a time
the school is purchased for you by a mysterious spiritual firm 'NSAA'
which has supported your art house in the past
it is on top of a mountain, overlooking the Ganghes river
here, you practice the art of meditation with a few disciples, training yourself in the disciplines of asceticism and spiritual enlightenment
you continue in this way for many years
20 years later, one of your key disciples has a sharp disagreement with you
breaking from your order, he goes to found his own school of thought
your main disagreement is the extent to which ascetisism is appropriate in a material world and the measures to which spiritual enlightemenent can be reached through meditation
these two school continue on (by the way) past your life time and into the next century
as the world becomes increasingly saturated with technology, many find a spiritual yearning within themselves
turning to your and your disciple's Grahtmah's spiritual disciplines, a new wave of world religion sweepes across east asia, traveling across the pacific to california
from california, it makes its way southward to Mexico, then through texas to the east coast
what once started as a single person's search for spiritual truth has turned into a world-wide phenomena of religion, with thousands of fanatical followers, and hundreds of sects
what started as a single, daringly written school essay has turned into a world-redefining world religion
somewhere along the way, you knew you were accomplishing something great...but never would you have known just how great your effect on the world was going to be
me: that was beautiful",
  "Next week we will switch gears and begin to discuss the social work problems of change over time and whether one thing causes another.  This is something that you probably take for granted in much of your life, but really understanding why, for instance, one person suffers from anxiety and another does not is very tricky territory and very tough to research.  We’ll spend a lot of time looking at how social scientists think about causality, and also a lot of time breaking ourselves of our habits of assuming we already know what we really don’t know.",
  "breaking ourselves of the habit we acquire to say 'i understand, know, and can explain' is crucial if we are to develop any sensitivity to the world and a comprehension of how large it is. i feel like the only thing i learned in college was how to do this. part of the problem, though, is that once you begin your deconstruction of reality, it’s hard to put on the breaks. academia doesn’t do a very good job of helping you accomplish any reconstructing, at least in my experience. yet we go on living, writing, talking, living, and loving. in the face of the abyss, how do we pull ourselves away from it’s edge, understanding that it is vital to turn our gaze away if we are to last the next 60+ years here on this earth? the abyss gazes still at me today, although i’ve turned my back on it. what will it take for that first step away toward The greater, illuminating light?

just some thoughts :)",
  "dear A,

we are just visitors here—
when the sun rises in the morning,
it is caught by the air
in a way we can’t explain.

but life is not a painting,
it is the painter who breathes in
oil-based dyes and speaks in
fractional hues, like fifths of blue—

when you evaporated off of my skin
you left my hairs raised, tiny teeth marks
impressed like tattoos on my arms,

and i pretend to be distant, like
'i don’t care, right?'
marked with knives on a bathroom stall,
the INDUSTRIAL ANTHEM. my head,
it pulses and it buzzes, trapped,
like fluorescent lights, spinning
twice as fast as this planet turns,
creating a home, sweet, home
not in cracking cardboard chessboards and
warm lemonade but in a foggy vertigo,
nomadic, directionless and homeless,
disappear, man, disappear, old man…

i won’t pretend i haven’t thought of it,
i’ve fucking dreamt of it—life moving like
sand underneath the stomach of a snake—
its horned eyes are mirrors and, god,
i can see myself in them, and i see
a man with palms cut like fruit,
inexplicable issues of abandonment,
a weak stomach, from his father,
eyes like tired paintings, from mom.

he grows weak from thinking,

i wish i could go home,
where i know the sun destroys the atmosphere
because it loves the way it feels on its arms
when it thrusts its mighty limbs into the sky
and touches the ocean with its fingernails.

i hate the sun, baby.

i just want to sleep like everyone else.",
  "If you intend to write as truthfully as you can, your days as a member of polite society are numbered.
— 	Stephen King",
  "I want that love that moved the mountains.
I want that love that split the ocean.
I want that love that made the winds tremble.
I want that love that roared like thunder.
I want that love that will raise the dead.
I want that love that lifts us to ecstasy.
I want that love that is the silence of eternity.
— 	Rumi",
  "there are those people you meet or just see in passing. those people that you just want to know the deepest parts of. you want to know their desires and fears and their passions and how they love

i’ve found myself coming into contact with so many of those people recently

i just want to know your mind. in all of its supremely unique beauty  ",
  "a four man anti poaching team is tasked with guarding the ol pejeta conservancy’s four remaining northern white rhinos. with only eight left, it is the world’s most endangered species. located in the laikipia district of kenya, ol pejeta conservancy is also the largest sanctuary for the black rhino. fewer than four thousand are estimated to remain.

the rise in asia’s middle class has meant that demand for rhino horn has soared, with prices on the black market exceeding that of gold and cocaine. with an increase in poaching in ol pejeta, the anti poaching team now provides twenty four hour armed protection for the rhinos, and has developed a close relationship with the animals.

poachers will track rhinos from helicopters, darting them from above and then hacking off the horn and part of the face with a chainsaw. the animals are often left to suffer and die. the rhinos seen here were found wandering in unimaginable pain, but with timely veterinary supervision remarkably survived. the rhino in the left of the fourth picture, however, had a four week old calf who, without his mother, subsequently died of dehydration.

to protect the rhinos and deter poachers, veterinarians will remove much of the animal’s horn. the rhino are anesthetized, and suffer no trauma. the horn is not like an elephant’s tusk, and will grow back in a few years.

2013 is on track to be the deadliest year yet for rhinos. two rhino are slaughtered for their tusks every day on average. photos by and text adapted from brent stirton’s 'rhino wars'",
  "Sometimes I forget to listen. I forget to let a friend be. To tell their whole story and paint their full heart into the air. I’m too eager to respond with a fix, a solution, a plan. I interrupt the art. I look for a pause to jump in and offer all sorts of articulate banter, when this isn’t what they want. They just want to speak until they’re out of breath, and then meet eyes and feel like they’re okay and understood and not alone. It’s a beautiful thing, and I want to let it happen. I want to let them finish painting in their own words. And then maybe I will understand.
— 	J.S. ",
  "When the Mexican painter Frida Kahlo died in 1954, her husband muralist Diego Rivera locked her clothes and jewelry- all personal possessions- into a bathroom. Diego instructed that the room to be unlocked fifteen years after his own death. Forgotten, they stayed there for fifty years.

No one knew what was behind that locked door. Staring back from a life more notorious than most, were 300 items of Frida’s. Her jewelry, clothing, hair accessories, a  prosthetic leg, leather corsets, painted plaster casts and body molds.

All the physical and emotional pain, joy and vitality is told through stories carried in Frida’s clothing and accessories. This treasure trove is organized into an exhibition titled Appearances Can Be Deceiving: The Dresses of Frida Kahlo,featuring eleven of Kahlo’s ensembles rotating every three months, showing forty outfits over the course of a year.

Conservators and curators said while excavating the hidden room, it was as if Frida was alongside them in the room. Her colorful clothing emitted a sense of happiness, while her hospital items, the casts and even medicine, were powerful to witness and held onto her sadness.

Vogue Mexico is producing a room for the exhibition that will feature commissioned work from contemporary designers who have been influenced by Kahlo. A rep for the magazine declined to reveal the specific designers working on the project, but said that 'they are international designers and one Mexican designer — all of them are very recognized in the fashion industry.'

The fashion curator Circe Henestrosa dug through the time capsule and organized the exhibition. Henestrosa says,'Garments are very powerful tools for social and cultural interpretation. These objects and garments tell you so much about the wearer and yes, the items do have a smell….how to describe the smell….it’s her. It’s a unique, beautiful smell, of her skin.'

Focusing on the issues of 'disability' and 'ethnicity,' the exhibition will be displayed in Frida Kahlo’s former home in Coyoacan, a suburb of Mexico City, the Frida Kahlo Museum (Casa Azul) through November 2013. ",
  "Though, I dreamed
last night

again

i dreamed one of

those annoying dreams

waking and falling asleep

committing to memory the images

emotions so real that

they couldn’t possibly be real

by this i know i’m too far gone

too far away from you

too separate

i prayed for curiosity

but instead–

no, indeed

it was I

who became Curious

tossing the ideas and fantasies

just as my body did in sleep

in my head

too far

i’ve come–

no, gone

too far away from you

and how do i have you understand

that maybe this dream

is irreversible

these dreams are manifestations

of the things i want

for myself

and despite hating

living

for myself

i continue to do just so

could i change for you

for me?

for God?

for ANYONE

are dreams the Catalysts

for impending Change

i cannot say

'yes' or 'no'

i cannot say

i 'do' or 'do not'

perhaps i cannot

Love

in the way that was intended

i can,

though,

dream",
  "whispered somewhere before
'I had a very strange childhood,'
and after
'I think that’s a nice color on you,'
(though knowing me,
I’m quite sure it was the other way round)
I grasped at the right words with freezing fingers
wrapped around a steaming cup you handed me.

frost on the windowglass in the morning
a garden of little shards that couldn’t touch your warmth",
  "Punctuation Alert: the 1993 Johnny Depp movie What’s Eating Gilbert Grape has no question mark. This is news to me. As a declarative statement, the title has something of an 'understood' subject (i.e. [This Is] What’s Eating Gilbert Grape…), which suggests a colon (or an ellipsis), followed by an explanation: a convenient list by which to catalog the various omnivorous thing(s) participating in the veritable buffet of Gilbert Grape. (Spoiler alert: it’s a praying mantis.) I never saw this movie because, at the time, I was ideologically opposed to films w/ oppressive Interrogation Points (?) in their titles. I Found Them Very Stressful. Like pop quizzes. And breathalyzer tests. Only twenty years later do I realize Gilbert Grape is not a QUESTION but an ANSWER. Huzzah! The world is abundant.",
  "Jay-Z releases 'Magna Carta Holy Grail,' the essence of the kind of rap designed to sell and be sold, self-worth through self-promotion via fame, women, and material possessions. by this metric, it is the perfect rap album. it oozes wealth. it went platinum before a single CD was shipped or iTunes song downloaded.

contrast this with another artist:

Kanye West releases 'My Beautiful Dark Twisted Fantasy' (and the follow-up 'Yeezus') a different kind of rap, dealing with the dark side of fame, women, and material possessions. in these tortured lyrics you hear the pain, the suffering, the anguish. he is divorced, he is depressed, he is a megalomaniac, he is God. this is the anti-rap album. it is harsh, hard to listen to, lonely, and bleak.

but there is life in one of these two albums. both describe men lost in the world, questioning meaning when fame, women, and material possessions are unlimited (and thus devoid of worth). yet one has lost touch with the spiritual experience of being human in order to quench the unquenchable lust for collecting physical matter. the other has instead become acutely aware of the spiritual. But only as a record of suffering, living, eating, and bathing in Hell, wondering and doubting if Heaven ever had anything to offer.",
  "You’re not doing well and finally I don’t have to
pretend to be so interested in your on going tragedy,
but
I’ll rob the bank that gave you the impression that
money is more fruitful than words, and
I’ll cut holes in the ozone if it means you have one less day of rain.
I’ll walk you to the hospital,
I’ll wait in a white room that reeks of hand sanitizer and latex for the results from the MRI scan that tries to
locate the malady that keeps your mind guessing, and
I want to write you a poem every day until my hand breaks
and assure you that you’ll find your place,
it’s just
the world has a funny way of
hiding spots fertile enough for
bodies like yours to grow roots.
and
I miss you like a dart hits the iris of a bullseye,
or a train ticket screams 4:30 at 4:47, I
wanted to tell you that it’s my birthday on Thursday
and I would have wanted you to
give me the gift of your guts on the floor, one last time,
to see if you still had it in you.
I hope our ghosts aren’t eating you alive.
If I’m to speak for myself, I’ll tell you that
the universe is twice as big as we think it is
and you’re the only one that made that idea
less devastating.",
  "The world doesn’t need more ‘successful people.’ The world desperately needs more peacemakers, healers, restorers, storytellers and lovers of all kinds. It needs people to live well in their places. People with moral courage, willing to join the struggle to make the world more habitable and more humane. These qualities have little to do with ‘success’ as our culture defines it.
— 	Dalai Lama",
  "to the girl

putting her tears carefully back under the shelf of her eye

they are heavy book tears ready to shout loud anecdotes

about her lover (my brother) she isn’t quite over

we try to get through it together over expensive yogurt

to quote her 'look, those fish are actually big'

and we notice, the both of us

large numbers of fish swimming- migrating together en masse

in only a foot of water, almost half a foot long

until they make a perfect figure eight

a menhaden knot, a maiden shape

infinity symbol for the harbor herself

and though there is no warm light to bathe over us

i know we came close to the sun ",
  "In the marginalia … we talk only to ourselves; we therefore talk freshly — boldly — originally — with abandonment — without conceit.
— 	Edgar Allan Poe",
  "What are the top three candidates for life outside earth in our own solar system? Great Question What are the Top Three candidates? How about five or ten? In our own Solar System, There are 5 top candidates that I’m sure no one would disagree with.

Although, I urge a lot of people to have an open mind about what constitutes a habitable planet. What we consider habitable for life as we know it, could be uninhabitable to other life forms. Carl Sagan called it Earth Chauvinism. I will make that a separate post. I will end with this quote: 'There are discussions, even by famous scientists, that give the impression that an environment that is uncomfortable for my grandmother is impossible for life.' - Carl Sagan

Europa: One of Jupiter’s Moons and one of my favorites. With a frozen surface, a possibility of an ocean of liquid water buried underneath, and volcanic activity. Which could provide life supporting heat, as well as important chemicals needed by living organisms. Life could possibly survive by hydrothermal vents, like it does on Earth, and in the film Europa Report. :)

Enceladus: The sixth largest moon of Saturn. This world has been called the most promising canidate for life due to its comfortable temperature and the likely presence of water and simple organic molecules. The surface is thought to be 99% water ice, with a possibility of water underneath. Cassini flew by the moon in 2005. The spacecrafts observations showed the presence of carbon, hydrogen, nitrogen, and oxygen, all organic molecules presumed to be necessary to develop life.

Io: Another moon of Jupiter, it is one of the most volcanically active worlds in the Solar System and one of the few that support an atmosphere. Io’s atmosphere contains many complex chemicals that are promising for life.  With its surface covered in molten hotspots and constantly being bombarded with lethal radiation, it doesn’t sound so pleasant, but it’s still considered a candidate.

Titan: Saturn’s largest moon has an atmosphere rich in compounds that often mark the presence of living organisms. Titan’s air is rich in methane, which is usually destroyed by sunlight. On Earth there is life that constantly replenishes methane, so it might be similarly responsible for the methane on Titan. The moon was even a place of destination for Ethan Hawke’s character, Vincent Freeman, in Gattaca.

Mars: I don’t need to tell you about Mars, our next door neighbor. Most evidence shows that Mars may have been habitable in the past. There exists large amounts of water ice on Mar’s poles and a reasonable possibility of water underneath the surface. Geological features suggest water once flowed across the surface and volcanic activity, now long dead, thrived, recycling chemicals and minerals.  Mars is the most Earth-like of all the Solar System planets. Its size and temperature (it’s freezing) is comparatively similar to our own.

That’s our Solar System, our neighborhood. What about the thousands of extrasolar planets being discovered? I’ll list a few. The rest you can find here.

Top Extrasolar Candidate:

KOI-1686.01 - An exoplanet with an ESI (Earth Similarity Index) of 0.89, making it the most habitable object of interest to date. The planet orbits a star within the habitable 'goldilocks zone' where liquid water could exist.

Gliese 667Cc - Said to be 85% similar to Earth. Gliese 667Cc orbits a star that belongs to a triple star system. The sunsets must look spectacular as envisioned by the artist rendering above. Gliese 667Cc is located in the constellation of Scorpius, 22.7 light years away. It isn’t the only planet in this system. This triple star system hosts at least seven planets and at least three of those are rocky planets like Gliese 667Cc. ",
  "Free snake poems
  about snakes

  let's do this

  meet me back here

  in half an hour",
  "I AM SO FREAKING EXCITED TO BE BREATHING RIGHT NOW what happened i must be broken",
  "A moth drawn to flame
Would sooner escape unscathed
For I am blinded
Your light shames the summer sun
And burns with twice the fervor

Morning dew gathers
While the blooming Lotus yawns
Weary at sunrise
Parched, it’s petals reach skyward
Drinking all that daylight brings

I felt your love wane
Just as the moon turns from us
Slow and deliberate
I’ll be brought low with the tide
And pray you raise me again",
  "'Note also that none of the song titles on this album are long-winded: there are no spiels like 'A Conjunction of Drones Simulating the Way In Which Sufjan Stevens Has an Existential Crisis In the Great Godfrey Maze' (2005's Illinois) or 'The Vivian Girls Are Visited In the Night By Saint Dargarius and His Squadron of Benevolent Butterflies' (2006’sThe Avalanche). These titles were Sufjan’s delusions of grandeur, his priority of style over substance, of superficial satisfaction; and they too represented his unfettered ambition at the time, best defined by his grandiose quest to chronicle all fifty states.'

–an article reviewing Sufjan Stevens’ 'The Age of Adz'",
  "Lolita is not about love, because love is always mutual; Lolita is about obsession, which is never, ever love, and Nabokov himself was so disappointed that people did not understand this and take away the right message… For how could anyone call this feeding frenzy of selfishness, devouring, and destruction 'love'?
— 	 In her preface to LOLITA, Mary Gaitskill reflects on a review by Vanity Fair’s Gregor von Rezzori in which he calls the novel: 'The only convincing love story of the century' ",
  "does the law of diminishing returns apply to all of one’s life experience?

i think the answer depends on how to define 'life'",
  "our media,

our food,

our jobs,

our comfort

keep us captive, separated from the vastness of the world",
  "I remember looking through the piles and piles of paper in my grandmother’s closet,

papers and files and scraps and old patches and metal items

so many, too many to read (it would take a year)

just sitting and waiting, probably never to be read again.

I cherish each moment of existence.

I think that’s why depression was so hard,

losing what it means to cherish each moment.

And i know i’m sentimental,

hell down-right nostalgic.

I want every good moment to stay, to continue on into eternity,

a single beam of light moving slightly up and wider as it goes on.

That’s what childhood felt like.

And the beach in July.

As an adult, it is somewhat distressing to see

the piles and piles of paper in my grandmother’s closet.

Piles and piles of memories that meant so much,

yet now dimmed and forgotten.

Why did i save these again?

Yet i cannot throw them away.

It’s a scary thing to think that we must move on to new things,

that the memory of old things cannot sustain and give life

to the present moment, sweet as they are.

I’m afraid of running out of new things.

But then again, i’m not.

Depends on what day you talk to me.

I can’t keep these papers, knick-knacks, letters, items

forever.

It’s summertime, but maybe i’ll do a little spring cleaning.",
  "and we are mostly the same

and when i line up to you

like a rider, galloping beside a reflection

i am startled by my lack of grace



blaming the mirror is easier
instead help me reach out my shaky hand

gloved together riding side by side",
  "'ATTN EVERYONE,


I ACCIDENTALLY HIT REPLY ALL,

BUT AS I AM CURRENTLY TRYING TO 'LIVE WITHOUT REGRET,'

I WILL NOT CHANGE IT.



I WILL BE IN Jomi’S CAR WHICH DEPARTS THE 11TH.

JOSH OUT.'
",
  "More than putting another man on the moon,
more than a New Year’s resolution of yogurt and yoga,
we need the opportunity to dance
with really exquisite strangers. A slow dance
between the couch and dinning room table, at the end
of the party, while the person we love has gone
to bring the car around
because it’s begun to rain and would break their heart
if any part of us got wet. A slow dance
to bring the evening home, to knock it out of the park. Two people
rocking back and forth like a buoy. Nothing extravagant.
A little music. An empty bottle of whiskey.
It’s a little like cheating. Your head resting
on his shoulder, your breath moving up his neck.
Your hands along her spine. Her hips
unfolding like a cotton napkin
and you begin to think about how all the stars in the sky
are dead. The my body
is talking to your body slow dance. The Unchained Melody,
Stairway to Heaven, power-cord slow dance. All my life
I’ve made mistakes. Small
and cruel. I made my plans.
I never arrived. I ate my food. I drank my wine.
The slow dance doesn’t care. It’s all kindness like children
before they turn four. Like being held in the arms
of my brother. The slow dance of siblings.
Two men in the middle of the room. When I dance with him,
one of my great loves, he is absolutely human,
and when he turns to dip me
or I step on his foot because we are both leading,
I know that one of us will die first and the other will suffer.
The slow dance of what’s to come
and the slow dance of insomnia
pouring across the floor like bath water.
When the woman I’m sleeping with
stands naked in the bathroom,
brushing her teeth, the slow dance of ritual is being spit
into the sink. There is no one to save us
because there is no need to be saved.
I’ve hurt you. I’ve loved you. I’ve mowed
the front yard. When the stranger wearing a shear white dress
covered in a million beads
comes toward me like an over-sexed chandelier suddenly come to life,
I take her hand in mine. I spin her out
and bring her in. This is the almond grove
in the dark slow dance.
It is what we should be doing right now. Scrapping
for joy. The haiku and honey. The orange and orangutang slow dance.
— 	Slow Dance by Matthew Dickman",
  "In the intermittent light of handheld fireworks i stood, watching as five of my friends fired at a point together in the sky. With smoke rolling slowly away from the hilltop, flashes of green, red, and blue lit up the surrounding suburban neighborhood, the flash and bang of high school youth against the darker night. And i remembered all of the dreams i had once, in a time ago, before summer jobs, endless essays, and dear friends with depression. Dreams fired without care into the sky, back in a time when the sky also seemed brighter, and my vision clearer. Dreams of what could be, how this so insignificant thing, would become the greatest thing, a thing of pure color and sound and rushing wind. A thing to build your life around, in bliss, to sit and think and move your hand softly, pure creation channeled through thin fingertips. In some ways my dreams are bigger now, bigger like concrete, and metal archways, and rusted dumpsters. Big, heavy dreams, dreams worth carrying for a lifetime. I’ve learned that things matter? Or at least i’ve learned to care about it. That this suburban neighborhood is more than a playground, it’s a jungle of drunken fathers, prideful sons, suffering mothers, lost and wandering daughters. And that it’s good to pick up the discarded bottle-rocket tubes and toss them away when you’re done. But can i take these burnt out bottle-rocket tubes and toss them in the gutter of vain ambition? Should i consider it trash worth only for recycling in better days? The memory of blazing youth is strong, days spent in idle glory, when i was younger and my brothers were too. How do i index the inexplicable joy of life alongside the pain of this last year. O Father, help me navigate the corridors of my mind.",
  "What’s that look on your face?

Looking like a schoolgirl who’s lost all her courage
Goldilocks gone and spilled the damn porridge
They say I’m electric due to flowing through water and thundering down rhymes
Super Bowl Sunday
Beyonce at half time
My words are a maelstrom
And you’re working the mail room
Message for the people
They call me the courier
Korean by blood explains why my rice is currier
What takes me a week takes you a year
You’re scrambling to pre plan while I play it by ear
The sheer volume of my words is drowning you out
And now you’re a mess cause you’re used to the drought
Your words are awfully weak and it makes me wanna SHOUT",
  "Someone please save us, us college kids.
What my parents told me, is what I did.
They said go to school and be a college kid.
But in the end, I question why I did.",
  "…and flick this cigarette, softer end",
  "'Pick the day. Enjoy it - to the hilt. The day as it comes. People as they come... The past, I think, has helped me appreciate the present, and I don't want to spoil any of it by fretting about the future.'
― Audrey Hepburn",
  "it’s Friday and i’m so tired, so tired…

……got a fresh breath of air today, reading the thoughts and feelings from friends back at home

…feeling a firmer spine between my shoulders

although more brittle.

i guess this is a poem.",
  "why are some so concerned about the permanent-ness of tattoos?

we make permanent decisions every day,

and if we had the power to look back and see how the everyday met the eternal,

i think tattoos would be the last thing on our mind",
  "bein weird with my buds u knoe how we do son",
  "Have patience with everything unresolved in your heart and to try to
  love the questions themselves as if they were locked rooms or books
  written in a very foreign language. Don’t search for the answers,
  which could not be given to you now, because you would not be able
  to live them. And the point is to live everything.
  Live the questions now. Perhaps then, someday far in the future,
  you will gradually, without even noticing it, live your way into the answer.
—
Rainer Maria Rilke, 1903, Letters to a Young Poet ",
  "'A religion without mystics is a philosophy.
— 	Pope Francis'",
  "'i have no desire to shield myself from nightmares

descending from a loftier hell than most might imagine

pencil diving into the hearts of children

a black savage cloud or a bat

is welcome at night

where not a moth might strike the lonlieness

of an empty room. '"
]
comment_content = [
  "Please see me, but see me in my finiteness.",
  "i have a coworker who puts inspirational quotes from teen celebrities in my mailbox every week",
  "there are lots of things i don’t understand but please don’t hate me because i don’t understand, just educate me because im never afraid of learning",
  "leave it all behind, all behind",
  "Our social life is deeply anti-social, based on a repudiation of the religious and cultural traditions that teach man to see his brothers as his principal support against the insecurities of life. ..The idea of the public reminds us that community life has a moral and educative dimension and cannot be understood merely as a means of satisfying private wants.
—
Lasch",
  "I'm not sure about this",
  "This is really cool!",
  "Let's keep talking",
  "How do you know so much about this?",
  "I wanted to let you know that this is super cool",
  "Woww",
  "Thanks for sharing",
  "This is awesome",
  "I wonder how you stumbled upon this",
  "Everything about this is true",
  "I've been thinking about this for a while. Let's talk soon about it.",
  "Wait, what?",
  "I've heard of this before...",
  "...",
  "I don't know what you're talking about",
  "wat",
  "but my question is... why?",
  "Your post reminds me that while I am keeping up well with language in some communities, I am woefully behind in others. Thank you for clearly and gently pointing out the better terms to use. It’s not your job to educate others, but it is very appreciated!",
  "I don’t mind spreading the word! You’ll never know until you know! Thanks!",
  "Thanks! Have a good day",
  "Good thoughts.",
  "Really interesting",
  "Soooo goood",
  "This makes me want coffee",
  "Dog says hi",
  "I feel like there's more to say here",
  "This piece is absolutely perfect.",
  "So true, so true.",
  "Really beautiful",
  "Truly a good post",
  "What made you start thinking about this stuff?",
  "I don't think I'm ready for this",
  "Ha! pretty good",
  "This is nice I guess",
  "I see I see",
  "this almost brought me to tears",
  "So good",
  "I like some of this, but I disagree with the rest",
  "What were you thinking?",
  "This reminds me of someone",
  "okay yeah I get it now",
  "whatever whatever",
  "This is really good",
  "Where have you been, this is old news!",
  "Good thoughts good thoughts.",
  "I don't know...",
  "Did you go to school for this or...",
  "Don't think you're an expert",
  "What?",
  "you've been talking about this for a while, I'm glad you finally posted it!",
  "hey hey this is cool",
  "Greetings from kentucky. I've been following you for a while. Just wanted to say that I love your posts!",
  "This is almost art!",
  "I'm dying laughing",
  "You thought about this alot",
  "Every time every time",
  "Always good always good",
  "again again again",
  "We want more",
  "Make your posts longer. It's good, but we want more.",
  "Flesh this out a little.",
  "Follow me",
  "Come over to twitter, it's better",
  "gotcha gotcha",
  "keep it up friend",
  "Are you following me. I like followers.",
  "I followed you. Follow me back?",
  "Go to my website if you want to find out more of this.",
  "We should meet up, this is so good!",
  "Expensive words over here",
  "I see I see I see",
  "Keep posting for all our sakes",
  "Even if this was a joke, it's still pretty good",
  "So funny!",
  "Thanks for posting. Keep it up!",
  "Post until you drop",
  "Yeah yeah, that's a good trick.",
  "I got you",
  "Yeah, thanks for posting, I've thought about this too.",
  "I totally agree",
  "Every. Word. Right.",
  "I'm not so sure I agree",
  "Okay, yeah, I'm starting to get it.",
  "ok ok ok ok ok ok",
  "Cool cool keep talking",
  "Let's talk about this in person",
  "When did you think of this?",
  "Trolling",
  "I hear you",
  "But...",
  "I want to think more on this",
  "Okay okay yeah I'll keep thinking about this",
  "Why even post this?",
  "So boring",
  "Why are you always talking about this?",
  "Have you heard of facebook?",
  "How long have you been on found? ",
  "Is this your first post?",
  "yeah yeah",
  "Thanks a lot for this. I'm going to save this!",
  "cool, thanks for sharing",
  "This is really interesting",
  "I have some questions about this actually",
  "GIANT CAT SNAKE",
  "But have you thought about THIS!?",
  "I see what your saying. Could you flesh it out some more?",
  "I want to listen to this every night before I sleep",
  "I read this everyday",
  "yeah, yeah, yeah, that's a good trick!",
  "did you figure this out yet?",
  "good stuff, keep it up",
  "So gooddd",
  "Where did you learn this?",
  "What do you do for a living?",
  "How can I tell this is what you really think?",
  "Stories from the gods!",
  "You should do this for a job",
  "Only the greats make stories like this",
  "I'm skeptical...",
  "always good, keep posting",
  "good good good all good",
  "Yes yes yes",
  "Great!",
  "I don't understand",
  "Tell me in plain english, please.",
  "Okay, but what do you really mean?",
  "This is missing something...",
  "What is this leading up to?",
  "You sound like you're leaving something else",
  "What are you really trying to say here?",
  "yeah yeah, ok",
  "Love this stuff!",
  "Everything you post is so good.",
  "Thanks a lot for posting",
  "Cool cool cool",
  "Wise fox, this one",
  "Thanks for all the posts, keep keep keep going",
  "Ugh, I don't know about this.",
  "So good",
  "I love thisssss",
  "What?",
  "How do you find this stuff?",
  "Where do you get this stuff?",
  "I hear you, I hear you",
  "How did you think of this?",
  "I got it now!",
  "Great!",
  "Cool!",
  "okay, well, I'm starting to see what you mean.",
  "Don't write such long stories",
  "Post this on twitter because I like them better",
  "I've never heard of this",
  "Thanks for explaining.",
  "Right, right, I get it now.",
  "Okay well, what about the robots?",
  "Have you thought about the alternative?",
  "SO GOOD",
  "My whole family thanks you.",
  "I hear every word. Thanks.",
  "What do you mean?",
  "I've never heard something like this before",
  "Gotcha... what?",
  "Thanks for sharing",
  "What are your influences?",
  "What are your influences?",
  "What are your influences",
  "This makes me think of something, but I'm not sure what",
  "Isn't there a movie about this?",
  "Thanks for sharing",
  "Ok ok ok, but why?",
  "Have you thought more about this since your recent experiences?",
  "Thanks for sharing",
  "Keep posting",
  "Life is full of suprises",
  "You're so weird but it's a good thing",
  "This is so funny, how did you think of this?",
  "My cats love this, I read it to them every night",
  "I'm going to steal some of these ideas for a project at work",
  "Is this what you do for work.",
  "This is so good. You're a wordsmith",
  "When did you think of this?",
  "what what, I love this",
  "Ok, ok, I think I finally get what you're saying.",
  "I'm listening, I'm trying to listen",
  "I followed you! Follow me back!",
  "When did you sign up for found? This is so good!",
  "You should get published?",
  "I see what you mean here. have you considered the alternative?",
  "I see what you mean here. have you considered the alternative?",
  "ok ok ok",
  "Life goes on",
  "We should keep talking about this",
  "I was thinking about this alot actually.",
  "A lot of people are going to be talking about this",
  "What are you talking about?",
  "Life will go on",
  "Post another!",
  "Life is good, keep posting",
  "keep calm and carry on",
  "keep calm and carry on",
  "Keep it up, keep on",
  "I love this!",
  "Whattttt! This is so good",
  "Lal so cool",
  "Nice nice nice",
  "Cool story, bro",
  "Everytime you post I want to follow",
  "Thanks for sharing",
  "This is really cool"
]
47.times do
  Story.create(content: story_content.shuffle.pop, author_id: users.sample.id)
end

stories = Story.all

214.times do
  Story.create(content: comment_content.shuffle.pop, author_id: users.sample.id, parent_id: stories.sample.id)
end

users.each do |user|
  15.times do
    Follow.create(followee_id: user.id, follower_id: users.sample.id)
  end
end
all_stories = Story.all
users.each do |user|
  200.times do
    Like.create(liker_id: user.id, story_id: all_stories.sample.id)
  end
end

guest = User.find_by_username("guest")
users.each do |user|
  Follow.create(follower_id: guest.id, followee_id: user.id)
end
