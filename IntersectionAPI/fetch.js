let count=0;
let posts=[];
document.addEventListener("DOMContentLoaded",()=>{

    const postSection = document.querySelector('#posts');
    const postTemplate = document.querySelector('#post-template');
    const loader=document.querySelector("#loader");




    const fetchPosts=async()=>{
        
        try{
    const postsData=await fetch("https://jsonplaceholder.typicode.com/posts");
    posts=await postsData.json();
        }
        catch(err){
            alert(err);
        }
    
    }
    const displayPostData=async(data)=>{
        
        let current_data=data==undefined?[]:data.slice(count,count+20);
        if(current_data.length<20){
            posts=[]
            fetchPosts().then(()=>{
                count=0;
                var curr_data=posts.slice(count,count+20);
                setDom(curr_data)
            }).catch((err)=>alert(err))
         
        }
        else
        {
            setDom(current_data);

        }   
 
    
    }
    const getCurrentData=()=>{
        
        count+=20;
    displayPostData(posts);
   
    }


    let options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.25
      };
    
      function handleIntersect(entries, observer) {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
           
            getCurrentData()
            
          }
          observer.unobserve(entry.target);
          
        });
      }

    fetchPosts().then(()=>{
        displayPostData(posts)
        let observer = new IntersectionObserver(handleIntersect, 
         options);
        observer.observe(loader);
    })
    
    const setDom=(current_data)=>{
        current_data.forEach(post=>{
            const title=post.title;
            const body=post.body;
            const newPost = document.importNode(postTemplate.content, true);
            const postTitle = newPost.querySelector('.post__title');
            const postBody = newPost.querySelector('.post__body');
            const postImg = newPost.querySelector('.post__img');
    
          
          
            postTitle.innerText = title;
            postBody.innerText = body;
            postSection.appendChild(newPost);
        
            })
    }


})
