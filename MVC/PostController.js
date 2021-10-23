class PostController{
    constructor(){
        this.model=null;
        this.view=null;
        this.post=[];
    }
    addView(view) {
        this.view = view;
    }
    printPost=async()=>{
    debugger
        const postsData=await fetch("https://jsonplaceholder.typicode.com/posts");
        posts=await postsData.json();
        posts.forEach(element => {
            debugger
            let model=new PostModel(element.id,element.title,element.body);
            this.view.printPost(posts)
        });
        

    }
}