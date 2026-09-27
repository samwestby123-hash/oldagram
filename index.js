const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const nameText = document.getElementById("name")
const usernameText = document.getElementById("username")
const locationText = document.getElementById("location")
const avatarText = document.getElementById("avatar")
const postText = document.getElementById("post")
const commentText = document.getElementById("comment")
const likesText = document.getElementById("likes")
const nextPostBtn = document.getElementById("next-post-btn")

let nextPost = 0

nextPostBtn.addEventListener("click", function(){
    renderNextPost()
})

function renderNextPost() {
    nameText.innerHTML= posts[nextPost].name
    usernameText.innerHTML = posts[nextPost].username
    locationText.innerHTML = posts[nextPost].location
    
    avatarText.src = posts[nextPost].avatar
    
    postText.src = posts[nextPost].post
    commentText.innerHTML = posts[nextPost].comment
    likesText.innerHTML = `${posts[nextPost].likes} likes`
    nextPost += 1
    if (nextPost > posts.length - 1) {
        nextPost = 0
    }
}

renderNextPost()
