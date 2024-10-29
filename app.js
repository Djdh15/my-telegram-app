const stories = [
    { title: "The Brave Knight", content: "Once upon a time, a brave knight fought a dragon to save his kingdom..." },
    { title: "The Lost Treasure", content: "In a distant land, an explorer discovered a map leading to an ancient treasure..." },
    { title: "The Magic Potion", content: "A young wizard found a magic potion that granted him incredible powers..." },
    { title: "The Haunted House", content: "A group of friends entered a haunted house on a dare and discovered its secrets..." },
    { title: "The Enchanted Forest", content: "Deep in the forest, magical creatures and hidden wonders awaited the brave adventurer..." }
];

function generateStory() {
    const randomStory = stories[Math.floor(Math.random() * stories.length)];
    document.getElementById('story-title').innerText = randomStory.title;
    document.getElementById('story-content').innerText = randomStory.content;
}
