class PostView{
    constructor(){
        this.controller=null
    }
    registerWith(controller){
        this.controller=controller;
        this.controller.addView(this);
    }
    getPost(){
        this.controller.printPost();
    }
    printPost(posts){
        const postSection = document.querySelector('#posts');
        const postTemplate = document.querySelector('#post-template');
        posts.forEach(post=>{
            const title=post.title;
            const body=post.body;
            const newPost = document.importNode(postTemplate.content, true);
            const postTitle = newPost.querySelector('.post__title');
            const postBody = newPost.querySelector('.post__body');
            //const postImg = newPost.querySelector('.post__img');
    
            // throw 'Image Fetch Error';
    
          
            postTitle.innerText = title;
            postBody.innerText = body;
            postSection.appendChild(newPost);
        
            }) 
    }
}