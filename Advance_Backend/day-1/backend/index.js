import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
const app = express()
const port = process.env.PORT

/*
   in js there are tow way to assemble file sand folder ,
   1.Common js -> this is the synchonous way tot assemble all the file and folder
   2. Module js this is the aysnchronous way , to do same , this sithe moder way

   to do the module js way we haev to 
   define type:"module" in the package.json file
*/

const jokes =
    [
        {
            "id": "2eac2186-b14c-4792-ab4d-a0aae0293343",
            "name": "ashes",
            "joke": "When the window fell into the incinerator, it was a pane in the ash to retrieve."
        },
        {
            "id": "c526955f-9ef3-4fa1-b60f-3d378580d2e1",
            "name": "pirate's favorite letter",
            "joke": "What's a pirate's favorite letter? It be the Sea"
        },
        {
            "id": "4fd6156b-7c92-4923-bec1-81e81fb15a81",
            "name": "counting cows",
            "joke": "How do you count cows? A 'Cow'culator"
        },
        {
            "id": "651bc854-d416-4c28-9216-07784eaf9390",
            "name": "He's Alright",
            "joke": "Did you hear about the guy whose whole left side was cut off? He's all right now."
        },
        {
            "id": "22dea85e-3954-45dd-9425-d149089515ab",
            "name": "Bakery Fire",
            "joke": "My friend's bakery burned down last night. Now his business is toast."
        },
        {
            "id": "74bddcfd-b053-4f24-b989-883b7e83c03b",
            "name": "Nut Assault",
            "joke": "Two peanuts were walking down the street. One was a salted."
        },
        {
            "id": "0e649c7e-452f-4040-84c1-08831871b948",
            "name": "Wonderwall",
            "joke": "My son asked me to stop singing Oasis songs in public. I said maybe."
        },
        {
            "id": "fd34db50-820c-4388-b45f-7f97de782355",
            "name": "Banking",
            "joke": "I used to be a banker but I lost interest"
        },
        {
            "id": "0009b5e4-adbf-48ef-b124-16a863bac35d",
            "name": "Golfer Pants",
            "joke": "Why did the golfer bring two pairs of pants? In case he got a hole-in-one."
        },
        {
            "id": "90482c63-daee-407b-86fd-c0451d3c711b",
            "name": "Lieutenant Dan",
            "joke": "To the man in the wheelchair that stole my camouflage jacket; You can hide, but you can't run."
        },
        {
            "id": "81a2d43c-0492-4faf-a98d-f5036cc9c2b5",
            "name": "Flamingo",
            "joke": "When my wife told me to stop impersonating a flamingo, I had to put my foot down."
        },
        {
            "id": "3a6276ef-e86f-46e0-ba11-2ef8666833ad",
            "name": "My Day",
            "joke": "The rotation of earth really makes my day."
        },
        {
            "id": "fa4617bb-1570-4ad8-8610-20b87df2ab56",
            "name": "Chickens can't drive",
            "joke": "Why do chicken coops only have two doors? Because if they had four, they would be chicken sedans."
        },
        {
            "id": "fa5eeda3-a605-4f97-9ee1-f464329f588a",
            "name": "Bel Air",
            "joke": "How do you find Will Smith in the snow? You look for the fresh prints."
        },
        {
            "id": "bc3d7a48-0ecc-4a70-a4b4-f34f83465245",
            "name": "No Charge",
            "joke": "A proton, an electron, & a neutron walk into a bar. The proton orders a shot, drinks it, pulls out his wallet, and pays the bartender. The electron orders a shot, drinks it, pulls out his wallet, and pays the bartender. The neutron orders a shot, drinks it, then pulls out his wallet. The bartender stops him and says, \"for you, no charge...\""
        },
        {
            "id": "ab0be3ec-303e-4064-8146-8b2d102e40dd",
            "name": "I'm Positive",
            "joke": "Two atoms are walking down the street. One says, \"Oh no! I lost an electron!\", The other asks him, \"Are you sure?\", The first one says, \"Yeah, I'm positive\""
        },
        {
            "id": "64e2fc14-5c1c-461e-bec9-5b98ce1906ec",
            "name": "Sandwich",
            "joke": "A ham sandwich walks into a bar and orders a beer. The bartender looks at him and says, \"Sorry we don't serve food here.\""
        },
        {
            "id": "18c42b79-4ce7-4252-862f-0fda1fc8441b",
            "name": "I Can't Hear This Joke",
            "joke": "What is Beethoven's favorite fruit? A ba-na-na-na."
        },
        {
            "id": "4fca91c6-4036-4515-8a94-884a4b97490c",
            "name": "Exhaust",
            "joke": "I had a dream that I was a muffler last night. I woke up exhausted."
        },
        {
            "id": "db4c6a4a-e4fc-4591-8e2b-babff8d7abc0",
            "name": "Watch Your Head",
            "joke": "Two guys walk into a bar, the third one ducks."
        },
        {
            "id": "03ac5ebb-d2eb-41c1-a00f-9af5729ffc54",
            "name": "Every 6 Months",
            "joke": "What time did the man go to the dentist? Tooth hurt-y."
        },
        {
            "id": "b6dc0870-a4fa-437b-a24b-33193ebed321",
            "name": "Color Blind",
            "joke": "Found out I was colour blind the other day... That one came right out the purple."
        },
        {
            "id": "ab84a709-326f-4770-bd18-9ff8f5025de2",
            "name": "Thing Factory",
            "joke": "Where are average things built? In the satisfactory."
        },
        {
            "id": "051227b9-c981-4722-99e3-3a153c22a3fe",
            "name": "Thoughtful Clown",
            "joke": "Yesterday a clown held a door open for me. I thought it was a nice jester."
        },
        {
            "id": "3e1789f5-7b0d-4a37-acd3-eecadb98a72d",
            "name": "Frog Facts",
            "joke": "Just read a few facts about frogs. They were ribbiting."
        },
        {
            "id": "395448f6-6626-41ba-8cb3-2eab89d3850b",
            "name": "Trampoline Bed",
            "joke": "I just swapped our bed for a trampoline. My wife hit the roof."
        },
        {
            "id": "7468097f-556b-49aa-a24e-8ce04a395759",
            "name": "24 Hours",
            "joke": "Astronomers got tired of watching the moon go round the earth for 24 hours, so they decided to call it a day."
        },
        {
            "id": "47cf657b-8d0a-43f8-a47a-2981efa93db8",
            "name": "Checkout Girl",
            "joke": "I asked the checkout girl for a date. She said \"They're in the fruit aisle next to the bananas.\""
        },
        {
            "id": "1552cf30-012b-4bf7-8678-b5df56212973",
            "name": "Well Dressed Bicycle",
            "joke": "What's the difference between a well dressed man on a a bicycle and a poorly dressed man on a tricycle? Attire!"
        },
        {
            "id": "12d42b25-23db-48be-a24f-4237ba406553",
            "name": "Pirate Birthday",
            "joke": "What did the pirate say on his 80th birthday? Aye matey"
        },
        {
            "id": "f694783c-4b67-40a5-a451-b56c57b7c580",
            "name": "Italians",
            "joke": "What do you call a sketchy Italian neighbourhood? The Spaghetto."
        },
        {
            "id": "0299eb9b-b4d2-4cfa-8292-0ccd8292bb07",
            "name": "Kleptomania",
            "joke": "I have kleptomania, but when it gets bad, I take something for it."
        },
        {
            "id": "8820ebd8-21ab-43de-aa1c-442d488ef065",
            "name": "Doorbells",
            "joke": "Doorbells, don't knock 'em."
        },
        {
            "id": "11494f48-d75e-49df-8964-1022193d0e96",
            "name": "Tropical Diet",
            "joke": "My wife is on a tropical food diet, the house is full of the stuff. It's enough to make a mango crazy."
        },
        {
            "id": "8cf94093-4194-4abb-851a-3190f5876d41",
            "name": "Whiteboards",
            "joke": "Whiteboards are remarkable."
        },
        {
            "id": "5763188a-96de-471f-b188-708e57decff4",
            "name": "I Wish I Had Laser Hair",
            "joke": "Why do so many people with laser hair want to get it removed?"
        },
        {
            "id": "8ca7aba6-ab58-4f2b-b868-62f23f19a395",
            "name": "Terror Of The Skies",
            "joke": "What has twenty legs and flies? Ten pairs of pants."
        },
        {
            "id": "cce5cbac-9b48-41d0-bf44-7848c333d354",
            "name": "The Incredible Mr. Dead",
            "joke": "What has twenty legs and flies? Five dead Horses."
        },
        {
            "id": "4c395572-e542-4cc2-9dd6-4cd5edc2ec7a",
            "name": "Eye Love This Joke",
            "joke": "What do you call a fish with no eyes? Fsh."
        },
        {
            "id": "27d5bf38-1df2-4725-852d-08b118e928b7",
            "name": "I'll Never Let Go Of This Joke",
            "joke": "What do you get if you cross the Atlantic with the Titanic? About halfway."
        },
        {
            "id": "faa7e701-86cf-4764-a4fe-b7a8bffc5ac2",
            "name": "Why Don't They Just Open A Bankery",
            "joke": "Why do bakers work so hard? They knead the dough."
        },
        {
            "id": "76942e59-9194-45d2-aede-0767a2f43d0e",
            "name": "Meling",
            "joke": "What do you call a man with a rug on his head? Matt."
        },
        {
            "id": "c9aaad4d-098f-4dc4-9bf8-ab61176efbb7",
            "name": "The Royal Flush Of The Jungle",
            "joke": "Why shouldn't you play cards in the jungle? Too many cheetahs."
        },
        {
            "id": "0fc88703-abdd-4606-9167-20a55971b9f0",
            "name": "Obviously",
            "joke": "What's big, red, and eats rocks? A big, red, rock-eater."
        },
        {
            "id": "7bae6c84-2c88-41f0-a6a6-60758e8ba4b5",
            "name": "A Toast To Monkey Jokes",
            "joke": "How do you make toast in the jungle? Pop your bread under a g'rilla."
        },
        {
            "id": "06bac40c-ee53-4122-856a-dee04a99ad80",
            "name": "These Jokes Have Sunk So Low",
            "joke": "What lies on the ocean floor and shivers? A nervous wreck."
        },
        {
            "id": "0efbad3c-5b35-433a-a984-52de7edafa07",
            "name": "Wanted For Eight Armed Robbery",
            "joke": "Who is the quickest draw in the ocean? Billy the Squid."
        },
        {
            "id": "3775c7e2-d5c2-47d6-8329-2d34f01d03f6",
            "name": "Prison Jewelry",
            "joke": "What's the difference between a jeweller and a prison warden? One sells watches, and the other watches cells."
        },
        {
            "id": "e779f305-dcdc-42f2-87ce-011a591fcf5d",
            "name": "My Nephew",
            "joke": "What's brown and sticky? A stick."
        }
    ]

// app.get('/', (req, res) => {
//     res.send('Hello World');
// })

app.get('/api/jokes', (req, res) => {
    res.json(jokes)
})

app.listen(port, () => {
    console.log(`Server at http://localhost:${port}`)
});

